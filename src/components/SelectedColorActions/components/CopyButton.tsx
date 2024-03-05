import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { CopyType, useCopyColors } from "../hooks/useCopyColors";
import { CheckIcon } from "@radix-ui/react-icons";

export const CopyButton = ({
  children,
  copyType,
}: PropsWithChildren<{ copyType: CopyType }>) => {
  const { handleColorCopy, copied } = useCopyColors();
  return (
    <Button
      variant="outline"
      className={`w-full ${
        copied
          ? "bg-blue-500 hover:bg-blue-500 text-white hover:text-white dark:bg-red-500 dark:hover:bg-red-500"
          : ""
      }`}
      onClick={() => handleColorCopy(copyType)}
    >
      {copied ? (
        <>
          Copied! <CheckIcon className="ml-2" />
        </>
      ) : (
        <>Copy as {children}</>
      )}
    </Button>
  );
};
