import { RGBColor } from "@/types/color";

export function rgbToHex(rgb: RGBColor): string {
  return (
    "#" +
    ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
  );
}
