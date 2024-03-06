import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CodeIcon,
  CopyIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { CopyButton } from "./CopyButton";
import { useAppSelector } from "@/store/hooks";

export const CopyColors = () => {
  const selectedColors = useAppSelector((state) => state.color.selectedColors);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={(_open) => setOpen(_open)}>
      <PopoverTrigger asChild>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Copy colors{" "}
          {open ? (
            <ChevronUpIcon className="mt-1 ml-2 -mr-1" />
          ) : (
            <ChevronDownIcon className="ml-2 -mr-1" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center gap-2 w-auto">
        <CopyButton copyType="hex">
          HEX <CopyIcon className="ml-2" />
        </CopyButton>
        <CopyButton copyType="hsl">
          HSL <CopyIcon className="ml-2" />
        </CopyButton>
        <CopyButton copyType="json">
          JSON <CodeIcon className="ml-2" />
        </CopyButton>
        {selectedColors.length === 2 ? (
          <CopyButton copyType="mui">
            MUI Theme <CodeIcon className="ml-2" />
          </CopyButton>
        ) : null}
      </PopoverContent>
    </Popover>
  );
};
