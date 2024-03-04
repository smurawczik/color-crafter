import { Input } from "@/components/ui/input";
import { resetSelectedColors, setColorHex } from "@/store/color/color.slice";
import { colorSelectors } from "@/store/color/color.slice.selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const ColorInput = () => {
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(colorSelectors.inputHex);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setColorHex(e.target.value));
    dispatch(resetSelectedColors());
  };

  return (
    <Input
      type="color"
      placeholder="#00FF00"
      value={currentColor}
      onChange={onChange}
    />
  );
};
