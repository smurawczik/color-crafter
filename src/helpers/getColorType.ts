import { ColorType } from "@/types/color";

export function getColorType(colorString: string): ColorType {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  const rgbaRegex =
    /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0(\.\d+)?|1(\.0+)?)\)$/;
  const hslRegex = /^hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)$/;
  const hslaRegex =
    /^hsla\((\d{1,3}), (\d{1,3})%, (\d{1,3})%, (0(\.\d+)?|1(\.0+)?)\)$/;

  if (hexRegex.test(colorString)) {
    return ColorType.HEX;
  } else if (rgbRegex.test(colorString)) {
    return ColorType.RGB;
  } else if (rgbaRegex.test(colorString)) {
    return ColorType.RGBA;
  } else if (hslRegex.test(colorString)) {
    return ColorType.HSL;
  } else if (hslaRegex.test(colorString)) {
    return ColorType.HSLA;
  } else {
    return ColorType.UNKNOWN;
  }
}
