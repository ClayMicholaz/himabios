import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "public/docs");

export interface MarkdownData {
  slug: string;
  title: string;
  content: string;
  frontmatter: {
    sidebar_position?: number;
    [key: string]: any;
  };
}

export function getMarkdownBySlug(slug: string[]): MarkdownData | null {
  try {
    const fullPath = path.join(docsDirectory, ...slug);

    // Try different possible file paths
    const possiblePaths = [
      `${fullPath}.md`,
      `${fullPath}.mdx`,
      path.join(fullPath, "index.md"),
      path.join(fullPath, "index.mdx"),
    ];

    let filePath = "";
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        filePath = p;
        break;
      }
    }

    if (!filePath) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract title from frontmatter or first heading
    let title = data.title || "";
    if (!title) {
      const titleMatch = content.match(/^#\s+(.+)$/m);
      title = titleMatch ? titleMatch[1] : slug[slug.length - 1];
    }

    return {
      slug: slug.join("/"),
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

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files: string[] = [];
  const items = fs.readdirSync(fullPath);

  for (const item of items) {
    const itemPath = path.join(fullPath, item);
    const stat = fs.statSync(itemPath);

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

export function getNavigationStructure() {
  const structure: any = {};
  const files = getAllMarkdownFiles();

  for (const file of files) {
    // Normalize path separators to forward slashes
    const normalizedFile = file.replace(/\\/g, "/");
    const parts = normalizedFile.replace(/\.(md|mdx)$/, "").split("/");
    let current = structure;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        // This is a file
        current[part] = {
          type: "file",
          path: parts.join("/"),
        };
      } else {
        // This is a directory
        if (!current[part]) {
          current[part] = {
            type: "directory",
            children: {},
          };
        }
        current = current[part].children;
      }
    }
  }

  return structure;
}
