"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

interface SidebarItem {
  type: "file" | "directory";
  path?: string;
  children?: { [key: string]: SidebarItem };
}

interface LearnLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
  title?: string;
  navigationStructure?: Record<string, unknown>;
}

export default function LearnLayout({
  children,
  currentPath,
  title,
  navigationStructure = {},
}: LearnLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const breadcrumbs = currentPath
    ? generateBreadcrumbs(currentPath, title)
    : [];

  // Ensure we always show sidebar even if structure is empty/loading
  const hasStructure = Object.keys(navigationStructure).length > 0;

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex bg-docusaurus dark:bg-docusaurus-bg-dark overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 
        w-80 bg-docusaurus-bg dark:bg-docusaurus-bg-dark 
        border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-200 ease-in-out
        flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Mobile sidebar header */}
        <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Navigasi
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          {hasStructure ? (
            <Sidebar
              structure={navigationStructure as { [key: string]: SidebarItem }}
              currentPath={currentPath}
            />
          ) : (
            <div className="p-6">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 flex flex-col h-full overflow-hidden">
        {/* Mobile header with hamburger */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {title || "BIOS Learn"}
          </h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {currentPath && breadcrumbs.length > 1 && (
              <Breadcrumb items={breadcrumbs} />
            )}
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
