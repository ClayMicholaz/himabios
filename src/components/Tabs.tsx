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
    Children.forEach(children, (child) => {
      if (
        isValidElement<TabItemProps>(child) &&
        (child.type === TabItem ||
          (typeof child.type === "function" && child.type.name === "TabItem"))
      ) {
        const props = child.props;
        tabItems.push({
          label: props.label || props.value,
          value: props.value,
          content: props.children,
        });
      }
    });
  }

  const [activeTab, setActiveTab] = useState(
    defaultValue || tabItems[0]?.value || ""
  );

  if (tabItems.length === 0) {
    return <div>{children}</div>;
  }

  return (
    <div className="my-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Tab Headers */}
      <div className="flex bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        {tabItems.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.value
                ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-900"
                : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white dark:bg-gray-900">
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
