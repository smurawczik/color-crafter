import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ColorWheelIcon, Cross1Icon } from "@radix-ui/react-icons";
import { CopyColors } from "./CopyColors";
import { resetSelectedColors } from "@/store/color/color.slice";

export const SelectedColorActions = () => {
  const dispatch = useAppDispatch();
  const selectedColors = useAppSelector((state) => state.color.selectedColors);
  const selectedColorsLength = selectedColors.length;

  if (!selectedColorsLength) {
    return null;
  }

  return (
    <div className="absolute z-50 bottom-20 left-0 w-full">
      <div className="w-full py-4 px-20 lg:px-52 text-center">
        <Alert className="shadow-lg dark:shadow-gray-800">
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
          <div className="absolute right-2 top-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => dispatch(resetSelectedColors())}
            >
              <Cross1Icon />
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};
