// Greenwood Raw plugin
declare module "*?type=raw" {
  const content: string;
  export default content;
}

// Greenwood CSS Modules plugin
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// CSS Import Attribute
// TODO - https://github.com/microsoft/TypeScript/issues/46135
declare module "*.css" {
  const sheet: CSSStyleSheet;

  export default sheet;
}