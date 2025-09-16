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
            <li key={index} className="flex items-center min-w-0 flex-shrink">
              {index > 0 && (
                <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mx-1 sm:mx-2 flex-shrink-0" />
              )}
              {item.href && !isEllipsis ? (
                <Link
                  href={item.href}
                  className={`flex items-center text-xs sm:text-sm transition-colors px-1 sm:px-2 py-1 rounded-md min-w-0 ${
                    isHome
                      ? "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  }`}
                >
                  {isHome ? (
                    <HomeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  ) : (
                    <span className="truncate max-w-[100px] sm:max-w-[200px]">
                      {item.label}
                    </span>
                  )}
                </Link>
              ) : (
                <span
                  className={`flex items-center text-xs sm:text-sm font-medium px-1 sm:px-2 py-1 rounded-md min-w-0 ${
                    isEllipsis
                      ? "text-gray-500 dark:text-gray-400"
                      : isLast
                      ? "text-emerald-600 dark:text-emerald-400 bg-gray-100 dark:bg-gray-800"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {isHome ? (
                    <HomeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
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
