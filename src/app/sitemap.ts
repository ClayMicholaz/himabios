import { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import path from "path";

function getAllMarkdownFiles(
  dir: string,
  baseUrl: string = ""
): Array<{ url: string; lastModified: Date }> {
  const files: Array<{ url: string; lastModified: Date }> = [];
  const fullPath = path.join(process.cwd(), "public", dir);

  try {
    const items = readdirSync(fullPath);

    for (const item of items) {
      const itemPath = path.join(fullPath, item);
      const stat = statSync(itemPath);

      if (stat.isDirectory()) {
        // Rekursif untuk subdirektori
        const subFiles = getAllMarkdownFiles(
          path.join(dir, item),
          `${baseUrl}/${item}`
        );
        files.push(...subFiles);
      } else if (item.endsWith(".md") || item.endsWith(".mdx")) {
        // File markdown
        const fileName = path.basename(item, path.extname(item));
        if (fileName !== "index") {
          files.push({
            url: `https://next-himabios.vercel.app/learn${baseUrl}/${fileName}`,
            lastModified: stat.mtime,
          });
        } else {
          // Index file
          files.push({
            url: `https://next-himabios.vercel.app/learn${baseUrl}`,
            lastModified: stat.mtime,
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return files;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://next-himabios.vercel.app";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic pages dari markdown files
  const learningPages = getAllMarkdownFiles("Learn");

  const dynamicPages = learningPages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}
