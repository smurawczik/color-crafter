import { Paragraph } from "@/components/ui/paragraph";
import { isValidColor } from "@/helpers/is.valid.color";
import { colorSelectors } from "@/store/color/color.slice.selectors";
import { useAppSelector } from "@/store/hooks";

export const ColorRepresentation = () => {
  const currentColor = useAppSelector(colorSelectors.inputHex);

  if (!currentColor) {
    return null;
  }

  if (!isValidColor(currentColor)) {
    return <Paragraph>Invalid color</Paragraph>;
  }

  return (
    <div
      className="w-16 h-10 rounded-sm"
      style={{
        backgroundColor: currentColor,
      }}
    />
  );
};
