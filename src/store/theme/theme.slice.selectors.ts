import { isValidColor } from "@/helpers/is.valid.color";
import { RootState } from "../store";

export const colorSelectors = {
  colorState: (state: RootState) => state.color,
  inputColor: (state: RootState) => state.color.input,
  inputHex: (state: RootState) => state.color.input ?? "",
  validatedColor: (state: RootState) => isValidColor(state.color.input),
};
