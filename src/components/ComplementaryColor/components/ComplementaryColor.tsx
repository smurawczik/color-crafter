import { Paragraph } from "@/components/ui/paragraph";
import { transformToHex } from "@/helpers/color.transformers";
import { calculateComplementaryColor } from "@/helpers/complementaryColor";
import { getColorType } from "@/helpers/getColorType";
import { isValidColor } from "@/helpers/isValidColor";
import { shouldUseWhiteText } from "@/helpers/text.contrast";
import { colorSelectors } from "@/store/color/color.slice.selectors";
import { useAppSelector } from "@/store/hooks";

export const ComplementaryColor = () => {
  const currentColor = useAppSelector(colorSelectors.hex);
  const complementaryColor = calculateComplementaryColor(currentColor);

  if (!isValidColor(currentColor)) {
    return null;
  }

  const complementaryColorType = getColorType(complementaryColor);
  const useLightText = shouldUseWhiteText(
    transformToHex(complementaryColor, complementaryColorType)
  );

  return (
    <div className="flex items-center mt-4 mb-2 group">
      <div
        className="w-32 h-8 rounded-sm ml-2 flex items-center justify-center"
        style={{
          backgroundColor: complementaryColor,
        }}
      >
        <div
          className="hidden group-hover:block select-none"
          style={{
            color: useLightText ? "white" : "black",
          }}
        >
          <Paragraph>Complementary</Paragraph>
        </div>
      </div>
    </div>
  );
};
