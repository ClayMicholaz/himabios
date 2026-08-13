import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "public/learn");

export interface MarkdownData {
  slug: string;
  title: string;
  content: string;
  frontmatter: {
    sidebar_position?: number;
    description?: string;
    [key: string]: unknown;
  };
}

export function getMarkdownBySlug(slug: string[]): MarkdownData | null {
  try {
    const fullPath = path.join(docsDirectory, ...slug);

    const possiblePaths = [
      `${fullPath}.md`,
      `${fullPath}.mdx`,
      path.join(fullPath, "intro.md"),
      path.join(fullPath, "intro.mdx"),
      path.join(fullPath, `intro-to-${slug[slug.length - 1]}.md`),
      path.join(fullPath, `intro-to-${slug[slug.length - 1]}.mdx`),
      
      path.join(fullPath, "index.md"),
      path.join(fullPath, "index.mdx"),
    ];

    let filePath = "";
    for (const p of possiblePaths) {
      if (existsSync(/*turbopackIgnore: true*/ p)) {
        filePath = p;
        break;
      }
    }

    if (!filePath) {
      return null;
    }

    const fileContents = readFileSync(/*turbopackIgnore: true*/ filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract title from frontmatter or first heading
    let title = data.title || "";
    if (!title) {
      const titleMatch = content.match(/^#\s+(.+)$/m);
      title = titleMatch ? titleMatch[1] : slug[slug.length - 1];
    }

    // Don't modify the slug for intro/index files - keep it clean
    const finalSlug = slug.join("/");

    return {
      slug: finalSlug,
      title,
      content,
      frontmatter: data,
    };
  } catch (error) {
    console.error("Error reading markdown file:", error);
    return null;
  }
}

export function getAllMarkdownFiles(dirPath: string = ""): string[] {
  const fullPath = path.join(docsDirectory, dirPath);

  if (!existsSync(fullPath)) {
    return [];
  }

  const files: string[] = [];
  const items = readdirSync(fullPath);

  for (const item of items) {
    const itemPath = path.join(fullPath, item);
    const stat = statSync(itemPath);

    if (stat.isDirectory()) {
      // Skip _category files and other non-content directories
      if (item.startsWith("_")) {
        continue;
      }
      // Recursively get files from subdirectories
      const subFiles = getAllMarkdownFiles(path.join(dirPath, item));
      files.push(...subFiles);
    } else if (item.endsWith(".md") || item.endsWith(".mdx")) {
      // Skip _category.json and other non-markdown files
      if (item.startsWith("_")) {
        continue;
      }
      const filePath = dirPath ? `${dirPath}/${item}` : item;
      files.push(filePath.replace(/\\/g, "/"));
    }
  }

  return files;
}

// Use a more flexible type for navigation structure
type NavigationStructure = Record<string, unknown>;

export function getNavigationStructure(): NavigationStructure {
  const structure: NavigationStructure = {};
  const files = getAllMarkdownFiles();

  for (const file of files) {
    // Normalize path separators to forward slashes
    const normalizedFile = file.replace(/\\/g, "/");
    const parts = normalizedFile.replace(/\.(md|mdx)$/, "").split("/");

    // Skip standalone intro files (but keep intro-to-programming)
    if (parts.length === 1 && parts[0] === "intro") {
      continue;
    }

    let current = structure;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        // This is a file - get markdown data to include sidebar_position
        const markdownData = getMarkdownBySlug(parts);
        current[part] = {
          type: "file",
          path: parts.join("/"),
          sidebar_position: markdownData?.frontmatter?.sidebar_position || 999,
        };
      } else {
        // This is a directory
        if (!current[part]) {
          current[part] = {
            type: "directory",
            children: {},
          };
        }
        current =
          ((current[part] as Record<string, unknown>)
            ?.children as NavigationStructure) || {};
      }
    }
  }

  return structure;
}

export interface NavigationItem {
  title: string;
  path: string;
}

export interface PrevNextNavigation {
  prev?: NavigationItem;
  next?: NavigationItem;
}

// Get flat list of all markdown files in order, grouped by category
function getFlatFileList(): NavigationItem[] {
  const files = getAllMarkdownFiles();
  const flatList: NavigationItem[] = [];

  // Define custom order for sections
  const sectionOrder = [
    "intro-to-programming",
    "python",
    "algorithm",
    "flutter",
    "Glosarium",
  ];

  // Group files by their main category (first part of path)
  const filesByCategory: Record<string, string[]> = {};

  for (const file of files) {
    const normalizedFile = file.replace(/\\/g, "/");
    const parts = normalizedFile.replace(/\.(md|mdx)$/, "").split("/");

    // Skip standalone intro files (but keep intro-to-programming)
    if (parts.length === 1 && parts[0] === "intro") {
      continue;
    }

    const category = parts[0];
    if (!filesByCategory[category]) {
      filesByCategory[category] = [];
    }
    filesByCategory[category].push(file);
  }

  // Sort categories by section order
  const sortedCategories = Object.keys(filesByCategory).sort((a, b) => {
    const aIndex = sectionOrder.indexOf(a);
    const bIndex = sectionOrder.indexOf(b);

    const aPos = aIndex === -1 ? 999 : aIndex;
    const bPos = bIndex === -1 ? 999 : bIndex;

    if (aPos !== bPos) {
      return aPos - bPos;
    }

    return a.localeCompare(b);
  });

  // Sort files within each category
  for (const category of sortedCategories) {
    const categoryFiles = filesByCategory[category].sort((a, b) => {
      const aPath = a.replace(/\.(md|mdx)$/, "");
      const bPath = b.replace(/\.(md|mdx)$/, "");
      const aParts = aPath.split("/");
      const bParts = bPath.split("/");

      // Try to get sidebar_position for sorting within category
      try {
        const aMarkdown = getMarkdownBySlug(aParts);
        const bMarkdown = getMarkdownBySlug(bParts);

        const aPos = aMarkdown?.frontmatter?.sidebar_position || 999;
        const bPos = bMarkdown?.frontmatter?.sidebar_position || 999;

        if (aPos !== bPos) {
          return (aPos as number) - (bPos as number);
        }
      } catch {
        // Continue with alphabetical sort if can't read files
      }

      // Fallback to alphabetical within category
      return aPath.localeCompare(bPath);
    });

    // Add files from this category to flat list
    for (const file of categoryFiles) {
      const slug = file.replace(/\.(md|mdx)$/, "").split("/");
      const markdownData = getMarkdownBySlug(slug);

      if (markdownData) {
        flatList.push({
          title: markdownData.title,
          path: `/learn/${slug.join("/")}`,
        });
      }
    }
  }

  return flatList;
}

export function getPrevNextNavigation(currentPath: string): PrevNextNavigation {
  const flatList = getFlatFileList();
  const currentIndex = flatList.findIndex((item) => item.path === currentPath);

  if (currentIndex === -1) {
    return {};
  }

  // Get current category from path
  const currentCategory = currentPath.split("/")[2]; // /learn/[category]/...

  const result: PrevNextNavigation = {};

  // Find previous item in same category
  for (let i = currentIndex - 1; i >= 0; i--) {
    const prevCategory = flatList[i].path.split("/")[2];
    if (prevCategory === currentCategory) {
      result.prev = flatList[i];
      break;
    }
  }

  // Find next item in same category
  for (let i = currentIndex + 1; i < flatList.length; i++) {
    const nextCategory = flatList[i].path.split("/")[2];
    if (nextCategory === currentCategory) {
      result.next = flatList[i];
      break;
    }
  }

  return result;
}