import { HSLColor, RGBColor } from "@/types/color";

export function rgbToHsl(rgb: RGBColor): HSLColor {
  const { r, g, b } = rgb;

  const sRGB = [r / 255, g / 255, b / 255].map((channel) => {
    if (channel <= 0.03928) {
      return channel / 12.92;
    } else {
      return Math.pow((channel + 0.055) / 1.055, 2.4);
    }
  });

  const max = Math.max(...sRGB);
  const min = Math.min(...sRGB);
  const luminance = (max + min) / 2;

  let hue, saturation;
  if (max === min) {
    hue = saturation = 0; // achromatic
  } else {
    const delta = max - min;
    saturation =
      luminance > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case sRGB[0]:
        hue = (sRGB[1] - sRGB[2]) / delta + (sRGB[1] < sRGB[2] ? 6 : 0);
        break;
      case sRGB[1]:
        hue = (sRGB[2] - sRGB[0]) / delta + 2;
        break;
      case sRGB[2]:
        hue = (sRGB[0] - sRGB[1]) / delta + 4;
        break;
      default:
        hue = 0;
    }
    hue *= 60;
  }

  return { h: hue, s: saturation * 100, l: luminance * 100 };
}
