import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ColorSliceState } from "./color.slice.types";

// Define the initial state using that type
const initialState: ColorSliceState = {
  input: "#95b738",
  selectedColors: [],
  scale: {
    from: undefined,
    to: undefined,
  },
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
    setScaleFrom: (state, action: PayloadAction<string>) => {
      if (state.scale.from === action.payload) {
        state.scale.from = undefined;
      } else {
        state.scale.from = action.payload;
      }
    },
    setScaleTo: (state, action: PayloadAction<string>) => {
      if (state.scale.to === action.payload) {
        state.scale.to = undefined;
      } else {
        state.scale.to = action.payload;
      }
    },
  },
});

export const {
  setColorHex,
  toggleSelectedColor,
  resetSelectedColors,
  setScaleFrom,
  setScaleTo,
} = colorSlice.actions;

export default colorSlice.reducer;
