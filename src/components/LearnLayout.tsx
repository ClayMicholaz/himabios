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
    <div className="flex h-[calc(100dvh-4.5rem)] overflow-hidden bg-bg">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 
        w-80 border-r border-line bg-bg
        transform transition-transform duration-200 ease-in-out
        flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Mobile sidebar header */}
        <div className="flex items-center justify-between border-b border-line p-4 lg:hidden">
          <h2 className="font-display text-lg font-bold text-heading">
            Navigasi
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Tutup navigasi materi"
            className="flex size-11 items-center justify-center rounded border border-line text-fg hover:text-accent"
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
                <div className="mb-4 h-6 rounded bg-raised"></div>
                <div className="space-y-2">
                  <div className="h-4 rounded bg-raised"></div>
                  <div className="h-4 rounded bg-raised"></div>
                  <div className="h-4 rounded bg-raised"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <main className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        {/* Mobile header with hamburger */}
        <div className="flex shrink-0 items-center justify-between border-b border-line bg-surface p-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Buka navigasi materi"
            className="flex size-11 items-center justify-center rounded border border-line text-fg hover:text-accent"
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
          <p className="truncate font-display text-lg font-bold text-heading">
            {title || "BIOS Learn"}
          </p>
          <div className="w-11"></div> {/* Spacer for centering */}
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {currentPath && breadcrumbs.length > 1 && (
              <Breadcrumb items={breadcrumbs} />
            )}
            <div className="mx-auto max-w-7xl">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
