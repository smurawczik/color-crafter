import { ColorPillWithTools } from "@/components/ColorPill/components/ColorPill";
import { Small } from "@/components/ui/small";
import { isValidColor } from "@/helpers/is.valid.color";
import { calculateSplitComplementaryColors } from "@/helpers/split.complementary.colors";
import { colorSelectors } from "@/store/color/color.slice.selectors";
import { useAppSelector } from "@/store/hooks";

export const SplitComplementaryColors = () => {
  const currentColor = useAppSelector(colorSelectors.inputColor);
  const complementarySplitColors =
    calculateSplitComplementaryColors(currentColor);

  if (!isValidColor(currentColor) || !complementarySplitColors.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-4 mb-2">
      {complementarySplitColors.map((color, index) => {
        return (
          <div className="group mb-2" key={index}>
            <ColorPillWithTools color={color} selectable>
              <Small>Split</Small>
            </ColorPillWithTools>
          </div>
        );
      })}
    </div>
  );
};
