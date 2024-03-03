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
interface RGBColor {
  r: number;
  g: number;
  b: number;
}

// Convert hexadecimal color to RGB
function hexToRgb(hex: string): RGBColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Convert RGB to hexadecimal color
function rgbToHex(rgb: RGBColor): string {
  return (
    "#" +
    ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
  );
}

// Calculate complementary color
function calculateComplementaryColor(color: string): string {
  const rgb = hexToRgb(color);
  const complementaryRgb = {
    r: 255 - rgb.r,
    g: 255 - rgb.g,
    b: 255 - rgb.b,
  };
  return rgbToHex(complementaryRgb);
}

// Calculate split complementary colors
function calculateSplitComplementaryColors(color: string): string[] {
  const rgb = hexToRgb(color);
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
function calculateAnalogousColors(color: string): string[] {
  const rgb = hexToRgb(color);
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
function calculateTriadicColors(color: string): string[] {
  const rgb = hexToRgb(color);
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
function generateColorPalette(
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
function generateColorScale(
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

// Example usage
const startColor = "#FF0000"; // Red
const endColor = "#00FF00"; // Green
const colorScale = generateColorScale(startColor, endColor, 50);
colorScale.forEach((color) => {
  // write colors to the console and style the text color with its own color
  console.log.bind(
    console,
    `%c ${color}`,
    `color: ${color}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
  )();
});

// Example usage
const originalColor = "#FF0000";
console.log(
  `%cOriginal color: ${originalColor}`,
  `color: ${originalColor}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
);
console.log(
  `%cComplementary color: ${calculateComplementaryColor(originalColor)}`,
  `color: ${calculateComplementaryColor(
    originalColor
  )}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
);
calculateSplitComplementaryColors(originalColor).forEach((color) => {
  console.log(
    `%cSplit complementary color: ${color}`,
    `color: ${color}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
  );
});

calculateAnalogousColors(originalColor).forEach((color) => {
  console.log(
    `%cAnalogous color: ${color}`,
    `color: ${color}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
  );
});

calculateTriadicColors(originalColor).forEach((color) => {
  console.log(
    `%cTriadic color: ${color}`,
    `color: ${color}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
  );
});
const colorPalette = generateColorPalette(originalColor, 5);

colorPalette.forEach((color) => {
  console.log(
    `%cColor Palette: ${color}`,
    `color: ${color}; font-size: 12px; background-color: rgba(255,255,255,0.15);`
  );
});
