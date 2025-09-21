// Utility functions for breadcrumb generation

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function generateBreadcrumbs(
  pathname: string,
  title?: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  // console.log("Breadcrumb pathname:", pathname, "title:", title);

  if (pathname.startsWith("/learn")) {
    breadcrumbs.push({ label: "Learn", href: "/learn" });

    const pathParts = pathname.split("/").filter(Boolean).slice(1); // Remove 'learn'

    let currentPath = "/learn";
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;

      // Format the part for display with proper English translations
      let displayName = part
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .replace(/\bIo\b/g, "I/O")
        .replace(/\bApi\b/g, "API")
        .replace("Intro To Programming", "Introduction to Programming");

      // Use the provided title for the last item if available
      if (index === pathParts.length - 1 && title) {
        displayName = title;
      }

      // If it's the last item, don't include href (current page)
      if (index === pathParts.length - 1) {
        breadcrumbs.push({ label: displayName });
      } else {
        breadcrumbs.push({ label: displayName, href: currentPath });
      }
    });
  } else if (pathname.startsWith("/about")) {
    breadcrumbs.push({ label: "Tentang Kami" });
  }

  return breadcrumbs;
}

export type { BreadcrumbItem };
