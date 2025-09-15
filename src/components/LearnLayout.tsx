import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { getNavigationStructure } from "@/lib/markdown";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

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

  return (
    <div className="flex min-h-screen bg-docusaurus dark:bg-docusaurus-bg-dark">
      <Sidebar structure={navigationStructure} currentPath={currentPath} />
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
