import { RGBColor } from "@/types/color";

export function hexToRgb(hex: string): RGBColor | null {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Parse hex color
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char.repeat(2))
      .join("");
  }

  const parsedHex = parseInt(hex, 16);

  // Ensure hex color is valid
  if (isNaN(parsedHex) || hex.length !== 6) {
    return null;
  }

  // Extract RGB components
  const r = (parsedHex >> 16) & 255;
  const g = (parsedHex >> 8) & 255;
  const b = parsedHex & 255;

  return { r, g, b };
}
