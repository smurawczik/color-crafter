import { colorToHSLA } from "@/helpers/color.to.hsla";
import { transformToHex } from "@/helpers/color.transformers";
import { getColorType } from "@/helpers/get.color.type";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

export type CopyType = "json" | "hex" | "hsl";

export const useCopyColors = () => {
  const [copied, setCopied] = useState(false);
  const selectedColors = useAppSelector((state) => state.color.selectedColors);

  const handleColorCopy = (copyType: CopyType) => {
    const copyText = (text: string) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
        })
        .catch((error) => {
          console.error("Failed to copy colors to clipboard:", error);
        })
        .finally(() => {
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        });
    };

    // Copy as array
    if (copyType === "json") {
      copyText(JSON.stringify(selectedColors));
    } else if (copyType === "hex") {
      copyText(
        selectedColors
          .map((color) => {
            const colorType = getColorType(color);
            return transformToHex(color, colorType);
          })
          .join(", ")
      );
    } else if (copyType === "hsl") {
      copyText(selectedColors.map(colorToHSLA).join(", "));
    }
  };

  return { handleColorCopy, copied };
};
