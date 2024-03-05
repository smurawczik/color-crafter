import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { ColorWheelIcon } from "@radix-ui/react-icons";
import { CopyColors } from "./CopyColors";

export const SelectedColorActions = () => {
  const selectedColors = useAppSelector((state) => state.color.selectedColors);
  const selectedColorsLength = selectedColors.length;

  if (!selectedColorsLength) {
    return null;
  }

  return (
    <div className="absolute z-50 bottom-0 left-0 w-full">
      <div className="w-full py-4 px-20 text-center">
        <Alert>
          <AlertTitle>
            You have {selectedColorsLength} selected color
            {selectedColorsLength > 1 ? "s" : ""}
          </AlertTitle>
          <AlertDescription className="mt-4 flex items-center gap-2 justify-center">
            <CopyColors />
            <Button variant="destructive" disabled={selectedColorsLength <= 2}>
              <ColorWheelIcon className="mr-2" /> Make a palette
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
