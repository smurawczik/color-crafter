import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ColorSliceState } from "./color.slice.types";

// Define the initial state using that type
const initialState: ColorSliceState = {
  input: "#95b738",
  selectedColors: [],
};

export const colorSlice = createSlice({
  name: "color",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setColorHex: (state, action: PayloadAction<ColorSliceState["input"]>) => {
      state.input = action.payload;
    },
    toggleSelectedColor: (state, action: PayloadAction<string>) => {
      if (state.selectedColors.includes(action.payload)) {
        state.selectedColors = state.selectedColors.filter(
          (color) => color !== action.payload
        );
      } else {
        state.selectedColors.push(action.payload);
      }
    },
    resetSelectedColors: (state) => {
      state.selectedColors = [];
    },
  },
});

export const { setColorHex, toggleSelectedColor, resetSelectedColors } =
  colorSlice.actions;

export default colorSlice.reducer;
