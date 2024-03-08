import { generateColorScale } from "@/helpers/color.scale";
import { useAppSelector } from "@/store/hooks";
import { useRef } from "react";

export const ColorScale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useAppSelector((state) => state.color.scale);

  if (!scale.from || !scale.to) {
    return null;
  }

  const colorScale = generateColorScale(scale.from, scale.to, 20);

  return (
    <div className="absolute bottom-10 w-full z-50 left-0">
      <div className="relative text-center max-w-4xl m-auto" ref={containerRef}>
        <div className="flex gap-1">
          {colorScale.map((color, index) => {
            return (
              <div
                key={index}
                className={`w-10 h-10 relative rounded-sm hover:scale-110 hover:z-20 ${
                  index === 0 && "hover:translate-x-1"
                } ${
                  index === colorScale.length - 1 && "hover:-translate-x-1"
                } hover:shadow-xl transition-transform cursor-pointer`}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
