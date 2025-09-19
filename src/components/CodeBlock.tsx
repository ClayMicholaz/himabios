import { useState } from "react";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

// Dracula theme colors
const draculaTheme = {
  background: "#282a36",
  currentLine: "#44475a",
  foreground: "#f8f8f2",
  comment: "#6272a4",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  purple: "#bd93f9",
  red: "#ff5555",
  yellow: "#f1fa8c",
};

// Python syntax highlighting patterns
const highlightPython = (code: string): string => {
  return (
    code
      // Keywords
      .replace(
        /\b(def|class|import|from|if|else|elif|for|while|return|try|except|with|as|in|not|and|or|is|lambda|yield|async|await|break|continue|pass|None|True|False)\b/g,
        `<span style="color: ${draculaTheme.pink}">$1</span>`
      )
      // Strings
      .replace(
        /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        `<span style="color: ${draculaTheme.yellow}">$1$2$1</span>`
      )
      // Comments
      .replace(
        /(#.*$)/gm,
        `<span style="color: ${draculaTheme.comment}">$1</span>`
      )
      // Numbers
      .replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        `<span style="color: ${draculaTheme.purple}">$1</span>`
      )
      // Functions/methods
      .replace(
        /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g,
        `<span style="color: ${draculaTheme.green}">$1</span>`
      )
      // Built-in functions
      .replace(
        /\b(print|len|range|str|int|float|list|dict|set|tuple|input|open|read|write|close)\b/g,
        `<span style="color: ${draculaTheme.cyan}">$1</span>`
      )
  );
};

export default function CodeBlock({
  children,
  language = "python",
  title,
  showLineNumbers = true,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const lines = children.split("\n");

  const getLanguageIcon = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "python":
        return "🐍";
      case "javascript":
        return "⚡";
      case "css":
        return "🎨";
      case "html":
        return "🌐";
      case "json":
        return "📋";
      default:
        return "💻";
    }
  };

  return (
    <div
      className="relative group my-6 rounded-lg overflow-hidden shadow-2xl"
      style={{
        fontFamily:
          'JetBrains Mono, Consolas, Monaco, "Courier New", monospace',
      }}
    >
      {/* VS Code Header Bar - Dracula Style */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{
          backgroundColor: "#21222C",
          borderColor: "#44475a",
        }}
      >
        <div className="flex items-center space-x-3">
          {/* VS Code Traffic Lights */}
          <div className="flex space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#FF5F56" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#FFBD2E" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#27CA3F" }}
            ></div>
          </div>

          {/* Language badge */}
          <div className="flex items-center space-x-2">
            <span className="text-lg">{getLanguageIcon(language)}</span>
            <span
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: draculaTheme.foreground }}
            >
              {language}
            </span>
          </div>

          {/* Title if provided */}
          {title && (
            <span
              className="text-sm ml-2"
              style={{ color: draculaTheme.comment }}
            >
              {title}
            </span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="px-3 py-1.5 text-xs rounded-md transition-all duration-200 opacity-75 hover:opacity-100 font-medium"
          style={{
            backgroundColor: draculaTheme.currentLine,
            color: draculaTheme.foreground,
            border: `1px solid ${draculaTheme.comment}`,
          }}
          title="Copy code"
        >
          {copied ? (
            <span className="flex items-center space-x-1">
              <span style={{ color: draculaTheme.green }}>✓</span>
              <span>Copied!</span>
            </span>
          ) : (
            <span className="flex items-center space-x-1">
              <span>📋</span>
              <span>Copy</span>
            </span>
          )}
        </button>
      </div>

      {/* Code content with Dracula background */}
      <div
        className="overflow-hidden"
        style={{ backgroundColor: draculaTheme.background }}
      >
        <div className="relative">
          <pre className="overflow-x-auto m-0">
            <code className="block p-0 font-mono text-sm leading-relaxed">
              {showLineNumbers ? (
                <table className="w-full border-collapse">
                  <tbody>
                    {lines.map((line, index) => {
                      const lineNumber = index + 1;
                      const isHighlighted = highlightLines.includes(lineNumber);
                      const highlightedLine =
                        language === "python" ? highlightPython(line) : line;

                      return (
                        <tr
                          key={lineNumber}
                          className="hover:bg-opacity-50"
                          style={{
                            backgroundColor: isHighlighted
                              ? draculaTheme.currentLine
                              : "transparent",
                          }}
                        >
                          {/* Line number */}
                          <td
                            className="text-right pr-4 py-1 select-none border-r w-12 min-w-12"
                            style={{
                              color: draculaTheme.comment,
                              backgroundColor: "#21222C",
                              borderColor: draculaTheme.currentLine,
                            }}
                          >
                            <span className="font-mono text-xs">
                              {String(lineNumber).padStart(2, " ")}
                            </span>
                          </td>

                          {/* Code line */}
                          <td
                            className="pl-4 py-1 w-full"
                            style={{ color: draculaTheme.foreground }}
                          >
                            <span
                              className="font-mono whitespace-pre"
                              dangerouslySetInnerHTML={{
                                __html: highlightedLine || "\u00A0",
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="p-4">
                  <span
                    style={{ color: draculaTheme.foreground }}
                    dangerouslySetInnerHTML={{
                      __html:
                        language === "python"
                          ? highlightPython(children)
                          : children,
                    }}
                  />
                </div>
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
