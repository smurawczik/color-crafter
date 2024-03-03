import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ColorSliceState } from "./color.slice.types";

// Define the initial state using that type
const initialState: ColorSliceState = {
  input: "#F0FCCF",
};

export const colorSlice = createSlice({
  name: "color",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setColorHex: (state, action: PayloadAction<ColorSliceState["input"]>) => {
      state.input = action.payload;
    },
  },
});

export const { setColorHex } = colorSlice.actions;

export default colorSlice.reducer;
