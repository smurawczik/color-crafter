export enum ColorType {
  HEX = "hex",
  RGB = "rgb",
  RGBA = "rgba",
  HSL = "hsl",
  HSLA = "hsla",
  UNKNOWN = "unknown",
}

export interface HSLColor {
  h: number; // Hue value between 0 and 360
  s: number; // Saturation value between 0 and 100
  l: number; // Lightness value between 0 and 100
}

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}
