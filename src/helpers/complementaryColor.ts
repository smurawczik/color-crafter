import { transformToHex } from "./color.transformers";
import { hexToRgb, rgbToHex } from "./colors";
import { getColorType } from "./getColorType";

// Calculate complementary color
export function calculateComplementaryColor(color: string | null): string {
  if (!color) {
    return "";
  }

  try {
    const colorType = getColorType(color);
    const colorInHex = transformToHex(color, colorType);

    const rgb = hexToRgb(colorInHex);

    if (!rgb) {
      return "";
    }

    const complementaryRgb = {
      r: 255 - rgb.r,
      g: 255 - rgb.g,
      b: 255 - rgb.b,
    };
    return rgbToHex(complementaryRgb);
  } catch (error) {
    return "";
  }
}
