import { ColorType } from "@/types/color";

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function transformToHex(
  colorString: string,
  colorType: ColorType
): string {
  switch (colorType) {
    case ColorType.HEX: {
      return colorString;
    }
    case ColorType.RGB: {
      const rgbMatch = colorString.match(/\d+/g);
      if (rgbMatch && rgbMatch.length === 3) {
        const [r, g, b] = rgbMatch.map(Number);
        return rgbToHex(r, g, b);
      }
      break;
    }
    case ColorType.RGBA: {
      const rgbaMatch = colorString.match(/\d+/g);
      if (rgbaMatch && rgbaMatch.length >= 4) {
        const [r, g, b] = rgbaMatch.slice(0, 3).map(Number);
        return rgbToHex(r, g, b);
      }
      break;
    }
    case ColorType.HSL: {
      const hslMatch = colorString.match(/\d+/g);
      if (hslMatch && hslMatch.length === 3) {
        const [h, s, l] = hslMatch.map(Number);
        const [r, g, b] = hslToRgb(h / 360, s / 100, l / 100);
        return rgbToHex(r, g, b);
      }
      break;
    }
    case ColorType.HSLA: {
      const hslaMatch = colorString.match(/\d+/g);
      if (hslaMatch && hslaMatch.length === 4) {
        const [h, s, l] = hslaMatch.slice(0, 3).map(Number);
        const [r, g, b] = hslToRgb(h / 360, s / 100, l / 100);
        return rgbToHex(r, g, b);
      }
      break;
    }
    default:
      return "";
  }
  return "";
}
