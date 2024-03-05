export function colorToHSLA(color: string): string | null {
  // Create a dummy element to parse the color
  const dummyElement = document.createElement("div");
  dummyElement.style.display = "none";
  dummyElement.style.color = color;
  document.body.appendChild(dummyElement);

  // Check if the color is valid
  if (!dummyElement.style.color) {
    console.error("Invalid color string");
    return null;
  }

  // Get the computed style of the dummy element
  const computedColor = window.getComputedStyle(dummyElement).color;

  // Create a canvas element to get HSL values
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Canvas not supported");
    return null;
  }

  // Set the canvas size to 1x1 pixel
  canvas.width = 1;
  canvas.height = 1;

  // Fill the canvas with the computed color
  ctx.fillStyle = computedColor;
  ctx.fillRect(0, 0, 1, 1);

  // Get the pixel data
  const pixelData = ctx.getImageData(0, 0, 1, 1).data;

  // Convert RGB to HSL
  const [r, g, b] = pixelData.slice(0, 3);
  const hslValues = rgbToHSL(r, g, b);

  // Convert alpha value to range [0, 1]
  const alpha =
    parseFloat(computedColor.split(",")?.[3]?.trim()?.slice(0, -1) ?? 1) / 100;

  dummyElement.remove();

  // Construct the HSLA string
  const hslaString = `hsla(${hslValues[0]}, ${hslValues[1]}%, ${
    hslValues[2]
  }%, ${alpha * 100})`;

  return hslaString;
}

// Helper function to convert RGB to HSL
function rgbToHSL(r: number, g: number, b: number): number[] {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

// Example usage
// const colorString = "#F0F023";
// export const hslaColor = colorToHSLA(colorString);
// if (hslaColor) {
//   console.log(hslaColor); // Output: hsla(0, 100%, 50%, 0.5)
// }
