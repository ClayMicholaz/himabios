// Design System Constants for HIMA BIOS Announcement
export const designTokens = {
  // Brand Colors
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    secondary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    accent: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
    },
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    warning: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },
    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },

  // Gradient Definitions
  gradients: {
    primary: "bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700",
    secondary: "bg-gradient-to-r from-secondary-500 to-secondary-600",
    accent: "bg-gradient-to-r from-accent-500 to-accent-600",
    success: "bg-gradient-to-r from-success-500 to-success-600",
    warning: "bg-gradient-to-r from-warning-500 to-warning-600",
    background:
      "bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
    card: "bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95",
    schedule:
      "bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900",
  },

  // Typography Scale
  typography: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
  },

  // Spacing Scale
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
    "4xl": "4rem",
    "5xl": "5rem",
  },

  // Border Radius
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
  },

  // Animation Durations
  animation: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },

  // Status Colors
  status: {
    accepted: {
      background:
        "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      border: "border-green-200 dark:border-green-700",
      text: "text-green-700 dark:text-green-400",
      textSecondary: "text-green-600 dark:text-green-300",
      icon: "🎉",
    },
    rejected: {
      background:
        "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      border: "border-orange-200 dark:border-orange-700",
      text: "text-orange-700 dark:text-orange-400",
      textSecondary: "text-orange-600 dark:text-orange-300",
      icon: "🌟",
    },
    pending: {
      background:
        "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      border: "border-blue-200 dark:border-blue-700",
      text: "text-blue-700 dark:text-blue-400",
      textSecondary: "text-blue-600 dark:text-blue-300",
      icon: "⏳",
    },
  },
};

// Component-specific styles
export const componentStyles = {
  card: {
    base: "rounded-2xl shadow-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl",
    padding: "p-8 md:p-10",
    border: "border border-gray-200/50 dark:border-gray-700/50",
  },
  button: {
    base: "font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4",
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500/50",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-white shadow-md focus:ring-gray-500/50",
    success:
      "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg focus:ring-green-500/50",
    warning:
      "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg focus:ring-orange-500/50",
    social: {
      instagram:
        "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg focus:ring-pink-500/50",
      whatsapp:
        "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg focus:ring-green-500/50",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    },
  },
  input: {
    base: "border-2 rounded-xl focus:ring-4 transition-all duration-300 transform focus:scale-105 dark:bg-gray-700 dark:text-white shadow-lg",
    valid:
      "border-green-500 dark:border-green-400 focus:border-green-500 focus:ring-green-500/30",
    invalid:
      "border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-red-500/30",
    default:
      "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30",
  },
  text: {
    heading: {
      primary: "text-gray-900 dark:text-white font-bold",
      secondary: "text-gray-700 dark:text-gray-300 font-semibold",
    },
    body: {
      primary: "text-gray-800 dark:text-gray-200",
      secondary: "text-gray-600 dark:text-gray-400",
      muted: "text-gray-500 dark:text-gray-500",
    },
  },
};

// Animation classes
export const animations = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  bounce: "animate-bounce",
  pulse: "animate-pulse",
  ping: "animate-ping",
  spin: "animate-spin",
};
