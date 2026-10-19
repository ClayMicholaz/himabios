"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { BreadcrumbItem } from "@/lib/breadcrumbs";
import { useState, useEffect } from "react";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, only show first, ellipsis, and last 2 items for space
  const displayItems =
    items.length > 3 && isMobile
      ? [items[0], { label: "...", href: undefined }, ...items.slice(-2)]
      : items;

  return (
    <nav className="flex mb-4 sm:mb-6 overflow-hidden" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 sm:space-x-2 min-w-0 flex-wrap">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isHome = index === 0 && item.label.toLowerCase() === "home";
          const isEllipsis = item.label === "...";

          return (
            <li key={index} className="flex min-w-0 shrink items-center">
              {index > 0 && (
                <ChevronRightIcon className="mx-1 size-3 shrink-0 text-muted sm:mx-2 sm:size-4" />
              )}
              {item.href && !isEllipsis ? (
                <Link
                  href={item.href}
                  className="flex min-w-0 items-center rounded px-1 py-1 font-mono text-xs text-muted transition-colors hover:text-accent sm:px-2 sm:text-sm"
                >
                  {isHome ? (
                    <HomeIcon className="size-3 shrink-0 sm:size-4" />
                  ) : (
                    <span className="truncate max-w-[100px] sm:max-w-[200px]">
                      {item.label}
                    </span>
                  )}
                </Link>
              ) : (
                <span
                  className={`flex min-w-0 items-center rounded px-1 py-1 font-mono text-xs sm:px-2 sm:text-sm ${
                    isEllipsis
                      ? "text-muted"
                      : isLast
                        ? "text-heading"
                        : "text-fg"
                  }`}
                >
                  {isHome ? (
                    <HomeIcon className="size-3 shrink-0 sm:size-4" />
                  ) : isEllipsis ? (
                    "..."
                  ) : (
                    <span className="truncate max-w-[120px] sm:max-w-[250px]">
                      {item.label}
                    </span>
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
