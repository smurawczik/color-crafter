import { ColorPillWithTools } from "@/components/ColorPill/components/ColorPill";
import { Small } from "@/components/ui/small";
import { calculateComplementaryColor } from "@/helpers/complementary.color";
import { isValidColor } from "@/helpers/is.valid.color";
import { colorSelectors } from "@/store/color/color.slice.selectors";
import { useAppSelector } from "@/store/hooks";

export const ComplementaryColor = () => {
  const currentColor = useAppSelector(colorSelectors.inputColor);
  const complementaryColor = calculateComplementaryColor(currentColor);

  if (!isValidColor(currentColor)) {
    return null;
  }

  return (
    <div className="flex items-center mt-4 mb-2 group">
      <ColorPillWithTools color={complementaryColor} selectable>
        <Small>Complementary</Small>
      </ColorPillWithTools>
    </div>
  );
};
