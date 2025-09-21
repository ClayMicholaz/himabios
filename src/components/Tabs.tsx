"use client";

import React, { useState, Children, isValidElement } from "react";

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  values?: Array<{ label: string; value: string }>;
}

interface TabItemProps {
  value: string;
  label?: string;
  children: React.ReactNode;
  default?: boolean;
}

export function TabItem({ children }: TabItemProps) {
  return <div>{children}</div>;
}

export function Tabs({ children, defaultValue, values }: TabsProps) {
  // Extract tabs from children or use values prop
  const tabItems: Array<{
    label: string;
    value: string;
    content: React.ReactNode;
  }> = [];

  // console.log("=== TABS COMPONENT DEBUG START ===");
  // console.log("Tabs component children:", children);
  // console.log("Children count:", Children.count(children));

  if (values) {
    // If values prop is provided, use it
    Children.forEach(children, (child, index) => {
      if (isValidElement(child) && child.type === TabItem) {
        const valueItem = values[index];
        if (valueItem && isValidElement<TabItemProps>(child)) {
          tabItems.push({
            label: valueItem.label,
            value: valueItem.value,
            content: child.props.children,
          });
        }
      }
    });
  } else {
    // Extract from children props
    let defaultTabValue = "";
    Children.forEach(children, (child) => {
      // console.log("Processing child:", child);
      if (isValidElement<TabItemProps>(child)) {
        // Check if it's a direct TabItem component
        if (
          child.type === TabItem ||
          (typeof child.type === "function" && child.type.name === "TabItem")
        ) {
          const props = child.props;
          tabItems.push({
            label: props.label || props.value,
            value: props.value,
            content: props.children,
          });

          // Set default tab if default prop is true
          if (props.default && !defaultTabValue) {
            defaultTabValue = props.value;
          }
        }
        // Check if it's a ReactMarkdown-generated component with TabItem props
        else if (child.props.value) {
          const props = child.props;
          tabItems.push({
            label: props.label || props.value,
            value: props.value,
            content: props.children,
          });

          // Set default tab if default prop is true
          if (props.default && !defaultTabValue) {
            defaultTabValue = props.value;
          }
        }
      }
    });

    // console.log("Extracted tabs:", tabItems);
    // console.log("Default tab value:", defaultTabValue);

    // Use the default tab if found, otherwise use defaultValue prop or first tab
    defaultValue = defaultValue || defaultTabValue;
  }

  const [activeTab, setActiveTab] = useState(
    defaultValue || tabItems[0]?.value || ""
  );

  // console.log("Final tab items length:", tabItems.length);
  // console.log("Active tab:", activeTab);
  // console.log("=== TABS COMPONENT DEBUG END ===");

  if (tabItems.length === 0) {
    console.log("No tab items found, returning raw children");
    return <div>{children}</div>;
  }

  return (
    <div className="my-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Tab Headers */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
          {tabItems.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-shrink-0 px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.value
                  ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-900"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-900 overflow-x-auto">
        {tabItems.map((tab) => (
          <div
            key={tab.value}
            className={activeTab === tab.value ? "block" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
