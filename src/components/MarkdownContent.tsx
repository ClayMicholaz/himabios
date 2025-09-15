"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({
  content,
  className = "",
}: MarkdownContentProps) {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeKatex]}
        components={{
          // Custom components to match Docusaurus styling
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {children}
            </p>
          ),
          code: ({ className, children, ...props }: any) => {
            const isInline = !className?.includes("language-");
            if (isInline) {
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-900/20 p-4 my-4 rounded-r-lg">
              <div className="text-primary-800 dark:text-primary-200">
                {children}
              </div>
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 pl-6 space-y-2 list-disc text-gray-700 dark:text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 pl-6 space-y-2 list-decimal text-gray-700 dark:text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              {children}
            </td>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 underline decoration-primary-600/30 hover:decoration-primary-600/60 transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => {
            // Transform relative paths from markdown to work with Next.js public folder
            let imageSrc = typeof src === "string" ? src : "";

            // Handle paths that start with ../../static/img/ (from Docusaurus)
            if (imageSrc.includes("static/img/")) {
              const fileName = imageSrc.split("/").pop();
              imageSrc = `/${fileName}`;
            }
            // Handle other relative paths
            else if (imageSrc.startsWith("../") || imageSrc.startsWith("./")) {
              // Convert relative paths to absolute paths from public folder
              const fileName = imageSrc.split("/").pop();
              imageSrc = `/${fileName}`;
            }
            // If path already starts with /, keep it as is

            return (
              <img
                src={imageSrc}
                alt={alt}
                className="max-w-full h-auto rounded-lg shadow-md mx-auto my-4"
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
