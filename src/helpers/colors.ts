import { hexToRgb } from "./hex.to.rgb";
import { rgbToHex } from "./rgb.to.hex";

// Calculate triadic colors
export function calculateTriadicColors(color: string): string[] {
  const rgb = hexToRgb(color);

  if (!rgb) {
    return [];
  }

  const triadicColors = [];
  const angles = [120, 240]; // Angles between triadic colors in degrees
  for (const angle of angles) {
    const rads = (angle * Math.PI) / 180;
    const newRgb = {
      r: Math.round(rgb.r + Math.cos(rads) * 50),
      g: Math.round(rgb.g + Math.cos(rads) * 50),
      b: Math.round(rgb.b + Math.cos(rads) * 50),
    };
    triadicColors.push(rgbToHex(newRgb));
  }
  return triadicColors;
}

// Generate a palette of 4 or 5 colors based on an initial color
export function generateColorPalette(
  initialColor: string,
  numberOfColors: number
): string[] {
  const palette = [];
  const initialRgb = hexToRgb(initialColor);

  if (initialRgb === null) {
    throw new Error("Invalid color format");
  }

  palette.push(initialColor);

  const angleIncrement = 360 / (numberOfColors - 1);

  for (let i = 1; i < numberOfColors; i++) {
    const angle = angleIncrement * i;
    const radians = angle * (Math.PI / 180);
    const sin = Math.sin(radians);
    const cos = Math.cos(radians);

    const newRgb = {
      r: (initialRgb.r + sin * 50) % 256,
      g: (initialRgb.g + cos * 50) % 256,
      b: (initialRgb.b + sin * 100) % 256,
    };

    palette.push(rgbToHex(newRgb));
  }

  return palette;
}
