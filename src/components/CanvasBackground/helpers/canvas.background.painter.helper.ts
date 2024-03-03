import { numberBetween } from "./../../../helpers/number.between";
import { PixelPosition } from "../types";

export class CanvasBackgroundPainter {
  private ctx: CanvasRenderingContext2D | null = null;
  private animation: number = -1;
  private drawnPixels: PixelPosition[] = [];

  constructor(
    private canvasElement: HTMLCanvasElement,
    private colorScheme: "dark" | "light" = "dark"
  ) {
    this.ctx = this.canvasElement.getContext("2d");
  }

  paint() {
    if (!this.ctx) return;

    const pixelPositions = this.generatePixelPositions(
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
    this.animateRandomPaintingAllPixels(pixelPositions);

    setTimeout(() => {
      this.startRemovingPixels();
    }, 10000);
  }

  startRemovingPixels() {
    this.animation = setInterval(() => {
      const randomIndex = 0;
      const pixel = this.drawnPixels[randomIndex];

      if (pixel) {
        this.clearPixel(pixel.x, pixel.y);

        this.drawnPixels.splice(randomIndex, 1);
      }
    }, 200);
  }

  clearPixel(x: number, y: number) {
    if (!this.ctx) return;

    this.ctx.clearRect(x, y, 5, 5);
  }

  generatePixelPositions(
    canvasWidth: number,
    canvasHeight: number
  ): PixelPosition[] {
    const positions: PixelPosition[] = [];
    for (let x = 0; x < canvasWidth; x += 5) {
      for (let y = 0; y < canvasHeight; y += 5) {
        positions.push({ x, y });
      }
    }

    return positions;
  }

  // to draw a pixel at a given position with a random color
  drawPixel(x: number, y: number) {
    let colorUnit = 0;
    if (this.colorScheme === "dark") {
      colorUnit = 255;
    }
    const color = `rgba(${colorUnit}, ${colorUnit}, ${colorUnit}, ${numberBetween(
      0.1,
      0.4
    )})`;

    if (!this.ctx) return;

    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 5, 5);
  }

  // to animate painting all pixels randomly on the canvas
  animateRandomPaintingAllPixels(pixelPositions: PixelPosition[]) {
    let remainingPixels = pixelPositions.length;
    this.animation = setInterval(() => {
      if (remainingPixels <= 0) {
        clearInterval(this.animation);
        return;
      }

      const randomIndex = Math.floor(Math.random() * remainingPixels);
      const pixel = pixelPositions[randomIndex];
      this.drawPixel(pixel.x, pixel.y);

      // Swap the painted pixel with the last remaining pixel
      pixelPositions[randomIndex] = pixelPositions[remainingPixels - 1];
      remainingPixels--;

      this.drawnPixels.push(pixel);
    }, 150);
  }

  // stop the animation
  stopAnimation() {
    clearInterval(this.animation);
  }
}
