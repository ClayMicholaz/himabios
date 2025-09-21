"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
    new Set() // Start with all items collapsed
  );

  // Auto-expand the section that contains the current page
  useEffect(() => {
    if (currentPath) {
      // Extract all segments from current path to build expansion chain
      const pathSegments = currentPath.replace(basePath + "/", "").split("/");
      const sectionsToExpand = new Set<string>();

      // Build the full path hierarchy that needs to be expanded
      let currentPathBuilder = "";
      for (const segment of pathSegments) {
        if (currentPathBuilder) {
          currentPathBuilder += "/" + segment;
        } else {
          currentPathBuilder = segment;
        }

        // Only add directories to expansion, not files
        if (pathSegments.indexOf(segment) < pathSegments.length - 1) {
          sectionsToExpand.add(segment);
        } else {
          // For the last segment, check if it's a directory in the structure
          const isDirectory = checkIfDirectory(currentPathBuilder);
          if (isDirectory) {
            sectionsToExpand.add(segment);
          }
        }
      }

      // Always expand the root section
      if (pathSegments[0]) {
        sectionsToExpand.add(pathSegments[0]);
      }

      setExpandedItems(sectionsToExpand);
    }
  }, [currentPath, basePath]); // Removed expandedItems from dependencies

  // Helper function to check if a path represents a directory
  const checkIfDirectory = (path: string): boolean => {
    // This is a simplified check - you might want to enhance this based on your structure
    const segments = path.split("/");
    let current = structure;

    for (const segment of segments) {
      if (current[segment] && current[segment].type === "directory") {
        current = current[segment].children || {};
      } else {
        return false;
      }
    }
    return true;
  };

  const toggleExpanded = (key: string, level: number = 0) => {
    setExpandedItems((prevExpanded) => {
      const newExpanded = new Set(prevExpanded);

      if (!prevExpanded.has(key)) {
        // Expanding an item
        if (level === 0) {
          // This is a top-level section - close all other top-level sections
          const topLevelSections = Object.keys(structure);
          topLevelSections.forEach((section) => {
            if (section !== key) {
              newExpanded.delete(section);
              // Also close all nested items under other sections
              deleteNestedItems(newExpanded, section);
            }
          });
        }
        // Add the current item to expanded
        newExpanded.add(key);
      } else {
        // Collapsing an item
        newExpanded.delete(key);
        // Also close all nested items under this item
        deleteNestedItems(newExpanded, key);
      }

      return newExpanded;
    });
  };

  // Helper function to delete nested items under a parent
  const deleteNestedItems = (expandedSet: Set<string>, parentKey: string) => {
    // This is a simplified version - in a real implementation, you'd traverse the structure
    // For now, we'll remove common nested items
    const commonNestedItems = ["sorting", "best-practices", "advanced-topics"];
    commonNestedItems.forEach((item) => expandedSet.delete(item));
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
            onClick={() => toggleExpanded(key, level)}
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
              // Always put Glosarium at the end
              if (a === "Glosarium") return 1;
              if (b === "Glosarium") return -1;

              // Try to get position from _category_.json files
              const getCategoryPosition = (categoryName: string): number => {
                // Default positions for known categories
                const defaultPositions: { [key: string]: number } = {
                  "intro-to-programming": 2,
                  algorithm: 3,
                  python: 9,
                  Python: 9,
                  flutter: 10,
                  Flutter: 10,
                  Glosarium: 999,
                };

                return defaultPositions[categoryName] || 500; // New categories get middle priority
              };

              const aPos = getCategoryPosition(a);
              const bPos = getCategoryPosition(b);

              if (aPos !== bPos) {
                return aPos - bPos;
              }

              // If same position, sort alphabetically
              return a.localeCompare(b);
            })
            .map(([key, item]) => renderItem(key, item))}
        </nav>
      </div>
    </div>
  );
}
