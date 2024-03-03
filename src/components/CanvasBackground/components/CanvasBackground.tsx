import { throttle } from "lodash";
import { useEffect, useLayoutEffect, useRef } from "react";
import { CanvasBackgroundPainter } from "../helpers/canvas.background.painter.helper";
import { useColorPreference } from "../../ColorScheme/hooks/useColorPreference";

export const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasBackgroundPainter = useRef<CanvasBackgroundPainter | null>(null);
  const { colorScheme } = useColorPreference();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = throttle(() => {
      canvas.width = window.outerWidth;
      canvas.height = window.outerHeight;
    }, 50);

    resizeCanvas();
  }, []);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvasBackgroundPainter.current = new CanvasBackgroundPainter(
      canvas,
      colorScheme
    );
    canvasBackgroundPainter.current.paint();

    return () => {
      if (canvasBackgroundPainter.current) {
        canvasBackgroundPainter.current.stopAnimation();
      }
    };
  }, [colorScheme]);

  return (
    <canvas
      style={{ position: "fixed" }}
      id="background"
      ref={canvasRef}
    ></canvas>
  );
};
