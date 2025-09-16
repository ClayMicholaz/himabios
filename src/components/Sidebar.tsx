"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface SidebarItem {
  type: "file" | "directory";
  path?: string;
  sidebar_position?: number;
  children?: { [key: string]: SidebarItem };
}

interface SidebarProps {
  structure: { [key: string]: SidebarItem };
  currentPath?: string;
  basePath?: string;
}

export default function Sidebar({
  structure,
  currentPath,
  basePath = "/learn",
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["intro-to-programming", "algorithm"])
  );

  const toggleExpanded = (key: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  const renderItem = (key: string, item: SidebarItem, level: number = 0) => {
    const isExpanded = expandedItems.has(key);
    const fullPath = item.path ? `${basePath}/${item.path}` : "";
    const isActive = currentPath === fullPath;

    // Format display name
    const displayName = key
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace(/\bIo\b/g, "I/O")
      .replace(/\bApi\b/g, "API");

    if (item.type === "directory") {
      return (
        <div key={key} className="mb-1">
          <button
            onClick={() => toggleExpanded(key)}
            className={`flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${
              level > 0 ? "ml-2" : ""
            }`}
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {displayName}
            </span>
            {isExpanded ? (
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
          {isExpanded && item.children && (
            <div className={level > 0 ? "ml-2" : ""}>
              {Object.entries(item.children)
                .sort(([aKey, a], [bKey, b]) => {
                  // Sort by sidebar_position for any section that has markdown files
                  if (a.type === "file" && b.type === "file") {
                    const aPos = a.sidebar_position || 999;
                    const bPos = b.sidebar_position || 999;

                    if (aPos !== bPos) {
                      return aPos - bPos;
                    }

                    // If same position or no position, fall back to alphabetical
                    return aKey.localeCompare(bKey);
                  }

                  // Alphabetical order for Glosarium
                  if (key === "Glosarium") {
                    return aKey.localeCompare(bKey);
                  }

                  // Default sorting: intro first, then directories, then files
                  if (aKey === "intro") return -1;
                  if (bKey === "intro") return 1;
                  if (a.type !== b.type) {
                    return a.type === "directory" ? -1 : 1;
                  }
                  return aKey.localeCompare(bKey);
                })
                .map(([childKey, childItem]) =>
                  renderItem(childKey, childItem, level + 1)
                )}
            </div>
          )}
        </div>
      );
    } else {
      // File item
      return (
        <Link
          key={key}
          href={fullPath}
          className={`block px-3 py-2 rounded-md transition-colors ${
            level > 0 ? "ml-2" : ""
          } ${
            isActive
              ? "bg-gray-100 dark:bg-gray-800 text-emerald-500 dark:text-emerald-500 font-medium"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 dark:hover:text-green-400"
          }`}
        >
          {displayName}
        </Link>
      );
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        <Link href="/learn" className="block mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            📚 Materi Pembelajaran
          </h2>
        </Link>
        <nav className="space-y-1">
          {Object.entries(structure)
            .sort(([a], [b]) => {
              // Define custom order: intro-to-programming, algorithm, Glosarium
              const order = ["intro-to-programming", "algorithm", "Glosarium"];
              const aIndex = order.indexOf(a);
              const bIndex = order.indexOf(b);

              if (aIndex !== -1 && bIndex !== -1) {
                return aIndex - bIndex;
              }
              if (aIndex !== -1) return -1;
              if (bIndex !== -1) return 1;

              return a.localeCompare(b);
            })
            .map(([key, item]) => renderItem(key, item))}
        </nav>
      </div>
    </div>
  );
}
