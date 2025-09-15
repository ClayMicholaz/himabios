"use client";

import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { BreadcrumbItem } from "@/lib/breadcrumbs";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isHome = index === 0 && item.label.toLowerCase() === "home";

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center text-sm transition-colors px-2 py-1 rounded-md ${
                    isHome
                      ? "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  }`}
                >
                  {isHome ? <HomeIcon className="w-4 h-4" /> : item.label}
                </Link>
              ) : (
                <span
                  className={`flex items-center text-sm font-medium px-2 py-1 rounded-md ${
                    isLast
                      ? "text-emerald-600 dark:text-emerald-400 bg-gray-100 dark:bg-gray-800"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {isHome ? <HomeIcon className="w-4 h-4" /> : item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
