import { transformToHex } from "./color.transformers";
import { getColorType } from "./get.color.type";
import { hexToRgb } from "./hex.to.rgb";

export function calculateAnalogousColors(color: string | null): string[] {
  if (!color) {
    return [];
  }

  const colorType = getColorType(color);
  const hexColor = transformToHex(color, colorType);

  const rgb = hexToRgb(hexColor);

  if (!rgb) {
    return [];
  }

  const analogousColors: string[] = [];

  // Calculate hex color luminiscence for hsl
  const luminiscence = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  // Calculate analogous colors by varying hue
  for (let i = 10; i <= 130; i += 30) {
    const hslColor = `hsl(${(i + 360) % 360}, 100%, ${luminiscence * 100}%)`;
    const tempDiv = document.createElement("div");
    tempDiv.style.backgroundColor = hslColor;
    document.body.appendChild(tempDiv);
    const computedColor = getComputedStyle(tempDiv).backgroundColor;

    document.body.removeChild(tempDiv);
    analogousColors.unshift(computedColor);
  }

  return analogousColors;
}
