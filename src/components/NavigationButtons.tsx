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
    <div className="mt-12 border-t border-line pt-8">
      <div className="flex justify-between items-center gap-4">
        {/* Previous Button */}
        <div className="flex-1">
          {prev ? (
            <Link
              href={prev.path}
              className="group flex items-center rounded border border-line bg-surface p-4 transition-colors hover:border-accent"
            >
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <ChevronLeftIcon className="size-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="mb-1 font-mono text-xs text-muted">
                    Sebelumnya
                  </div>
                  <div className="line-clamp-2 font-display text-lg font-bold text-heading transition-colors group-hover:text-accent">
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
              className="group flex items-center justify-end rounded border border-line bg-surface p-4 transition-colors hover:border-accent"
            >
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="mb-1 font-mono text-xs text-muted">
                    Selanjutnya
                  </div>
                  <div className="line-clamp-2 font-display text-lg font-bold text-heading transition-colors group-hover:text-accent">
                    {next.title}
                  </div>
                </div>
                <div className="shrink-0">
                  <ChevronRightIcon className="size-6 text-accent" />
                </div>
              </div>
            </Link>
          ) : (
            <div></div> // Empty placeholder to maintain flexbox layout
          )}
        </div>
      </div>

      {/* Progress indicator */}
      <p className="mt-6 text-center font-mono text-xs text-muted">
        Terus belajar untuk menguasai materi
        <span className="animate-pulse text-accent">_</span>
      </p>
    </div>
  );
}
