"use client";

import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { PrevNextNavigation } from "@/lib/markdown";

interface NavigationButtonsProps {
  navigation: PrevNextNavigation;
}

export default function NavigationButtons({
  navigation,
}: NavigationButtonsProps) {
  const { prev, next } = navigation;

  // If no navigation items, don't render
  if (!prev && !next) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center gap-4">
        {/* Previous Button */}
        <div className="flex-1">
          {prev ? (
            <Link
              href={prev.path}
              className="group flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <ChevronLeftIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Sebelumnya
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {prev.title}
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div></div> // Empty placeholder to maintain flexbox layout
          )}
        </div>

        {/* Next Button */}
        <div className="flex-1">
          {next ? (
            <Link
              href={next.path}
              className="group flex items-center justify-end p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Selanjutnya
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {next.title}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>
            </Link>
          ) : (
            <div></div> // Empty placeholder to maintain flexbox layout
          )}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Terus belajar untuk menguasai materi
          </span>
        </div>
      </div>
    </div>
  );
}
