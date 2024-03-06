import { transformToHex } from "./color.transformers";
import { getColorType } from "./get.color.type";
import { hexToRgb } from "./hex.to.rgb";
import { rgbToHex } from "./rgb.to.hex";

export function generateColorScale(
  startColor: string,
  endColor: string,
  numberOfSteps: number
): string[] {
  const startColorType = getColorType(startColor);
  const endColorType = getColorType(endColor);

  const startHex = transformToHex(startColor, startColorType);
  const endHex = transformToHex(endColor, endColorType);

  const startRgb = hexToRgb(startHex);
  const endRgb = hexToRgb(endHex);

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
