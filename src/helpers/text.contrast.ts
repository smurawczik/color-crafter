import { RGBColor } from "@/types/color";
import { hexToRgb } from "./hex.to.rgb";

function calculateRelativeLuminance(color: RGBColor): number {
  const { r, g, b } = color;

  const sRGB = [r / 255, g / 255, b / 255].map((channel) => {
    if (channel <= 0.03928) {
      return channel / 12.92;
    } else {
      return Math.pow((channel + 0.055) / 1.055, 2.4);
    }
  });

  // Calculate relative luminance
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

export function shouldUseWhiteText(hexColor: string): boolean {
  const rgbColor = hexToRgb(hexColor);

  if (!rgbColor) {
    throw new Error("Invalid hex color");
  }

  // Calculate relative luminance of the color
  const luminance = calculateRelativeLuminance(rgbColor);

  // Choose text color based on luminance
  return luminance <= 0.5;
}
