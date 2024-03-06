import { ColorPillWithTools } from "@/components/ColorPill/components/ColorPill";
import { Small } from "@/components/ui/small";
import { calculateAnalogousColors } from "@/helpers/calculate.analogous.colors";
import { isValidColor } from "@/helpers/is.valid.color";
import { colorSelectors } from "@/store/color/color.slice.selectors";
import { useAppSelector } from "@/store/hooks";

export const AnalogousColors = () => {
  const currentColor = useAppSelector(colorSelectors.inputColor);
  const analogousColors = calculateAnalogousColors(currentColor);

  if (!isValidColor(currentColor) || !analogousColors.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-4 mb-2">
      {analogousColors.map((color, index) => {
        return (
          <div className="group mb-2" key={index}>
            <ColorPillWithTools color={color} selectable>
              <Small>Analogous</Small>
            </ColorPillWithTools>
          </div>
        );
      })}
    </div>
  );
};
