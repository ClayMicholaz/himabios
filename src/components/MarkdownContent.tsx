"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import "@/styles/highlight.css";
import Image from "next/image";
import { Tabs, TabItem } from "@/components/Tabs";
import { Components } from "react-markdown";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const proseClasses = [
  "prose prose-lg prose-bios max-w-none",
  "prose-headings:font-display prose-headings:tracking-tight",
  "prose-a:underline-offset-4",
  "prose-pre:rounded prose-pre:border prose-pre:border-navy-700 prose-pre:text-sm",
  "prose-code:before:content-none prose-code:after:content-none",
  "[&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-raised [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-normal",
].join(" ");

export default function MarkdownContent({
  content,
  className = "",
}: MarkdownContentProps) {
  return (
    <div className={`${proseClasses} ${className}`}>
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
                  className="mx-auto my-4 h-auto w-auto max-w-full rounded-md"
                  unoptimized={true}
                />
              );
            },

            // Wide tables scroll inside their own box on small screens
            table: ({ children }: { children: React.ReactNode }) => (
              <div className="overflow-x-auto">
                <table>{children}</table>
              </div>
            ),

            // <div class="toc-container"> blocks written in the markdown files
            div: ({
              className: divClass,
              children,
            }: {
              className?: string;
              children: React.ReactNode;
            }) =>
              divClass?.includes("toc-container") ? (
                <nav
                  aria-label="Daftar isi"
                  className="my-8 rounded border border-line bg-surface px-6 py-1 prose-a:text-fg prose-a:no-underline [&_a:hover]:text-accent"
                >
                  {children}
                </nav>
              ) : (
                <div className={divClass}>{children}</div>
              ),

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
