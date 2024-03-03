import { useAppSelector } from "@/store/hooks";
import { throttle } from "lodash";
import { useEffect, useLayoutEffect, useRef } from "react";
import { CanvasBackgroundPainter } from "../helpers/CanvasBackgroundPainter";

export const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasBackgroundPainter = useRef<CanvasBackgroundPainter | null>(null);
  const themeType = useAppSelector((state) => state.theme.type);

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
      themeType
    );
    canvasBackgroundPainter.current.paint();

    return () => {
      if (canvasBackgroundPainter.current) {
        canvasBackgroundPainter.current.destroy();
        canvasBackgroundPainter.current = null;
      }
    };
  }, [themeType]);

  return (
    <canvas
      style={{ position: "fixed" }}
      id="background"
      ref={canvasRef}
    ></canvas>
  );
};
