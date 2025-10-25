// CSS Modules type declarations
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Global CSS side-effect imports
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
