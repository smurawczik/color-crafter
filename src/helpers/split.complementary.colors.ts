import { RGBColor } from "@/types/color";
import { transformToHex } from "./color.transformers";
import { getColorType } from "./get.color.type";
import { hexToRgb } from "./hex.to.rgb";
import { rgbToHex } from "./rgb.to.hex";

export function calculateSplitComplementaryColors(
  color: string | null
): string[] {
  if (!color) {
    return [];
  }

  const colorType = getColorType(color);
  const colorInHex = transformToHex(color, colorType);
  const rgb = hexToRgb(colorInHex);
  if (!rgb) {
    return [];
  }

  const splitColor1: RGBColor = {
    r: rgb.g,
    g: rgb.b,
    b: rgb.r,
  };

  // Calculate the second split color by rotating the hue of the original color by approximately -150 degrees
  const splitColor2: RGBColor = {
    r: rgb.b,
    g: rgb.r,
    b: rgb.g,
  };
  return [rgbToHex(splitColor1), rgbToHex(splitColor2)];
}
