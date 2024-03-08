import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { setScaleFrom, setScaleTo } from "@/store/color/color.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { isNil } from "lodash";
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from "lucide-react";
import { FC } from "react";

export const ScaleSetterButton: FC<{
  color: string;
  scaleType: "from" | "to";
}> = ({ scaleType, color }) => {
  const dispatch = useAppDispatch();
  const scale = useAppSelector((state) => state.color.scale);
  const scaleFromType = scale[scaleType];

  const onSetScale = () => {
    if (scaleType === "from") {
      dispatch(setScaleFrom(color));
    } else {
      dispatch(setScaleTo(color));
    }
  };

  const matchScaleFromType = scaleFromType === color;
  const matchScaleTo =
    scaleType === "from" ? scale.to === color : scale.from === color;

  return (
    <div
      className={`absolute rounded-sm ${
        !matchScaleFromType && !matchScaleTo ? "hidden" : "block"
      } justify-between ${
        scaleType === "from" ? "bottom-2 -left-3" : "bottom-2 -right-3"
      } group-hover:block z-10`}
    >
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            onClick={onSetScale}
            disabled={matchScaleTo && !isNil(scaleFromType)}
            className={`h-6 w-6 p-0 ${
              matchScaleFromType
                ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white dark:bg-red-500 dark:hover:bg-red-500 dark:hover:text-white"
                : ""
            }`}
          >
            {scaleType === "from" ? (
              <ArrowRightFromLineIcon size={10} />
            ) : (
              <ArrowLeftFromLineIcon size={10} />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Set scale {scaleType}</span>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
