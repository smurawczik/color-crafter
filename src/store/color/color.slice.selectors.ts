import { isValidColor } from "@/helpers/isValidColor";
import { RootState } from "../store";

export const colorSelectors = {
  colorState: (state: RootState) => state.color,
  hex: (state: RootState) => state.color.input,
  inputHex: (state: RootState) => state.color.input ?? "",
  validatedColor: (state: RootState) => isValidColor(state.color.input),
};
