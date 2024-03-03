import { transformToHex } from "@/helpers/color.transformers";
import { getColorType } from "@/helpers/get.color.type";
import { shouldUseWhiteText } from "@/helpers/text.contrast";

export const ColorPill = ({
  color,
  children,
}: {
  color: string;
  children?: React.ReactNode;
}) => {
  const complementaryColorType = getColorType(color);
  const useLightText = shouldUseWhiteText(
    transformToHex(color, complementaryColorType)
  );

  return (
    <div
      className="w-32 h-10 flex items-center justify-center border-gray-600 border rounded-sm dark:border-gray-200"
      style={{
        backgroundColor: color,
      }}
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
