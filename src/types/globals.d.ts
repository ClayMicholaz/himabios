// Type declarations for CSS imports
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}

// Side-effect CSS imports (no default export)
declare module "*.css" {
  const css: string;
}
