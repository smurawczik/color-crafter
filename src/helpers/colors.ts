import { RGBColor } from "@/types/color";
import { calculateComplementaryColor } from "./complementaryColor";

export function calculateOppositeColor(color: string): string {
  // Convert hex color to RGB
  const hexToRgb = (hex: string): number[] =>
    hex.match(/\w\w/g)?.map((s) => parseInt(s, 16)) || [];
  const rgb = hexToRgb(color.replace(/^#/, ""));

  if (rgb.length !== 3) {
    throw new Error("Invalid color format");
  }

  // Calculate the opposite color (complementary color)
  const oppositeColor = rgb.map((component) => 255 - component);

  // Convert RGB to hex
  const componentToHex = (component: number): string => {
    const hex = component.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const oppositeHexColor = "#" + oppositeColor.map(componentToHex).join("");

  return oppositeHexColor;
}

// Convert hexadecimal color to RGB
export function hexToRgb(hex: string): RGBColor | null {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Regex pattern to match both 3 and 6 characters hex strings
  const hexPattern = /^#?([a-f\d]{3}|[a-f\d]{6})$/i;

  // Match the hex pattern
  const result = hexPattern.exec(hex);

  if (!result) {
    return null; // Invalid hex format
  }

  // Extract the red, green, and blue components
  let r: number, g: number, b: number;
  if (result[1].length === 3) {
    r = parseInt(result[1][0] + result[1][0], 16);
    g = parseInt(result[1][1] + result[1][1], 16);
    b = parseInt(result[1][2] + result[1][2], 16);
  } else {
    r = parseInt(result[1].substring(0, 2), 16);
    g = parseInt(result[1].substring(2, 4), 16);
    b = parseInt(result[1].substring(4, 6), 16);
  }

  return { r, g, b };
}

// Convert RGB to hexadecimal color
export function rgbToHex(rgb: RGBColor): string {
  return (
    "#" +
    ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
  );
}

// Calculate split complementary colors
export function calculateSplitComplementaryColors(color: string): string[] {
  const rgb = hexToRgb(color);
  if (!rgb) {
    return [];
  }

  const complementaryRgb = {
    r: 255 - rgb.r,
    g: 255 - rgb.g,
    b: 255 - rgb.b,
  };
  const firstSplitRgb = {
    r: Math.floor((complementaryRgb.r + rgb.r) / 2),
    g: Math.floor((complementaryRgb.g + rgb.g) / 2),
    b: Math.floor((complementaryRgb.b + rgb.b) / 2),
  };
  const secondSplitRgb = {
    r: Math.floor((255 + rgb.r) / 2),
    g: Math.floor((255 + rgb.g) / 2),
    b: Math.floor((255 + rgb.b) / 2),
  };
  return [rgbToHex(firstSplitRgb), rgbToHex(secondSplitRgb)];
}

// Calculate analogous colors
export function calculateAnalogousColors(color: string): string[] {
  const rgb = hexToRgb(color);

  if (!rgb) {
    return [];
  }

  const analogousColors = [];
  const angle = 30; // Angle between analogous colors in degrees
  for (let i = 1; i <= 3; i++) {
    const rads = (angle * i * Math.PI) / 180;
    const newRgb = {
      r: Math.round(rgb.r + Math.cos(rads) * 50),
      g: Math.round(rgb.g + Math.cos(rads) * 50),
      b: Math.round(rgb.b + Math.cos(rads) * 50),
    };
    analogousColors.push(rgbToHex(newRgb));
  }
  return analogousColors;
}

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

// Generate a scale of colors between two given colors
export function generateColorScale(
  startColor: string,
  endColor: string,
  numberOfSteps: number
): string[] {
  const startRgb = hexToRgb(startColor);
  const endRgb = hexToRgb(endColor);

  if (!startRgb || !endRgb) {
    throw new Error("Invalid color format");
  }

  const scale = [];

  for (let i = 0; i <= numberOfSteps; i++) {
    const ratio = i / numberOfSteps;
    const newRgb = {
      r: Math.round(startRgb.r + (endRgb.r - startRgb.r) * ratio),
      g: Math.round(startRgb.g + (endRgb.g - startRgb.g) * ratio),
      b: Math.round(startRgb.b + (endRgb.b - startRgb.b) * ratio),
    };
    scale.push(rgbToHex(newRgb));
  }

  return scale;
}
