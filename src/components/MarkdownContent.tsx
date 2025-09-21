"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import "@/styles/highlight-dracula.css";
import Image from "next/image";
import { Tabs, TabItem } from "@/components/Tabs";
import { Components } from "react-markdown";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({
  content,
  className = "",
}: MarkdownContentProps) {
  return (
    <div
      className={`prose prose-lg max-w-8xl dark:prose-invert markdown-content ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
        components={
          {
            // Handle images with proper path conversion
            img: ({ src, alt }: { src?: string; alt?: string }) => {
              if (!src) return null;

              let imageSrc = src;

              // Convert various Docusaurus static paths to Next.js public paths
              if (src.includes("/static/img/")) {
                const fileName = src.split("/").pop();
                imageSrc = `/${fileName}`;
              }
              // Handle relative paths that don't start with http or /
              else if (!src.startsWith("http") && !src.startsWith("/")) {
                const fileName = src.split("/").pop();
                imageSrc = `/${fileName}`;
              }
              // If path already starts with /, keep it as is

              return (
                <Image
                  src={imageSrc}
                  alt={alt || ""}
                  width={800}
                  height={600}
                  className="max-w-full h-auto rounded-lg shadow-md mx-auto my-4"
                  style={{ width: "auto", height: "auto" }}
                  unoptimized={true}
                />
              );
            },

            // Custom Docusaurus components
            tabs: ({ children }: { children: React.ReactNode }) => {
              return <Tabs>{children}</Tabs>;
            },
            tabitem: ({
              children,
              value = "",
              label,
            }: {
              children: React.ReactNode;
              value?: string;
              label?: string;
            }) => {
              return (
                <TabItem value={value} label={label}>
                  {children}
                </TabItem>
              );
            },
          } as Components
        }
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
