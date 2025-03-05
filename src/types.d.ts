declare module "*?type=raw" {
  const content: string;
  export default content;
}

// Incomplete - https://github.com/microsoft/TypeScript/issues/46135
declare module "*.css" {
  const sheet: CSSStyleSheet;

  export default sheet;
}