export enum ColorType {
  HEX = "hex",
  RGB = "rgb",
  RGBA = "rgba",
  HSL = "hsl",
  HSLA = "hsla",
  UNKNOWN = "unknown",
}

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}
