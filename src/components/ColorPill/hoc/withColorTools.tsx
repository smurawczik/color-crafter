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

export function withColorTools<P extends { color: string }>(
  Component: React.ComponentType<P>
): React.FC<P> {
  // This component receives props and returns another component
  return function WithColorTools(props: P) {
    const dispatch = useAppDispatch();
    const scaleFrom = useAppSelector((state) => state.color.scale.from);
    const scaleTo = useAppSelector((state) => state.color.scale.to);

    const onSetScaleFrom = () => {
      dispatch(setScaleFrom(props.color));
    };

    const onSetScaleTo = () => {
      dispatch(setScaleTo(props.color));
    };

    const matchScaleFrom = scaleFrom === props.color;
    const matchScaleTo = scaleTo === props.color;

    return (
      <div className="relative group">
        <Component {...props} />
        <div
          className={`absolute w-full items-center rounded-sm ${
            !matchScaleFrom && !matchScaleTo ? "hidden" : "flex"
          } justify-between -bottom-1/4 group-hover:flex z-10`}
        >
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                onClick={onSetScaleFrom}
                disabled={matchScaleTo && !isNil(scaleFrom)}
                className={`h-6 w-6 p-0 ${
                  matchScaleFrom
                    ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                    : ""
                }`}
              >
                <ArrowRightFromLineIcon size={10} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Set scale from</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                onClick={onSetScaleTo}
                disabled={matchScaleFrom && !isNil(scaleTo)}
                className={`h-6 w-6 p-0 ${
                  matchScaleTo
                    ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                    : ""
                }`}
              >
                <ArrowLeftFromLineIcon size={10} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Set scale to</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  };
}
