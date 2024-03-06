import { transformToHex } from "@/helpers/color.transformers";
import { getColorType } from "@/helpers/get.color.type";
import { shouldUseWhiteText } from "@/helpers/text.contrast";
import { toggleSelectedColor } from "@/store/color/color.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { withColorTools } from "../hoc/withColorTools";

export const ColorPill = ({
  color,
  children,
  selectable = false,
}: {
  color: string;
  children?: React.ReactNode;
  selectable?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const selectedColors = useAppSelector((state) => state.color.selectedColors);

  const complementaryColorType = getColorType(color);
  const hexColor = transformToHex(color, complementaryColorType);
  const useLightText = shouldUseWhiteText(hexColor);

  const isColorSelected = selectedColors.includes(hexColor);

  const onColorPillClick = () => {
    if (selectable) {
      dispatch(toggleSelectedColor(hexColor));
    }
  };

  return (
    <div
      className={`w-32 h-10 flex items-center justify-center border-gray-600 border rounded-sm dark:border-gray-200 outline ${
        isColorSelected
          ? "outline-2 outline-blue-500 dark:outline-red-500"
          : "outline-0"
      } ${selectable ? "cursor-pointer" : ""}`}
      style={{
        backgroundColor: color,
      }}
      onClick={onColorPillClick}
    >
      <div
        className="hidden group-hover:block select-none"
        style={{
          color: useLightText ? "white" : "black",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const ColorPillWithTools = withColorTools(ColorPill);
