import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { getNavigationStructure } from "@/lib/markdown";
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
}

export default function LearnLayout({
  children,
  currentPath,
  title,
}: LearnLayoutProps) {
  const navigationStructure = getNavigationStructure();
  const breadcrumbs = currentPath
    ? generateBreadcrumbs(currentPath, title)
    : [];

  // Ensure we always show sidebar even if structure is empty/loading
  const hasStructure = Object.keys(navigationStructure).length > 0;

  return (
    <div className="flex min-h-screen bg-docusaurus dark:bg-docusaurus-bg-dark">
      {/* Always render sidebar container to prevent layout shift */}
      <div className="w-80 bg-docusaurus-bg dark:bg-docusaurus-bg-dark border-r border-gray-200 dark:border-gray-700">
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
      <main className="flex-1 max-w-8xl mx-auto">
        <div className="p-8">
          {currentPath && breadcrumbs.length > 1 && (
            <Breadcrumb items={breadcrumbs} />
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
