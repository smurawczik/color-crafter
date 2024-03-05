import { createSlice } from "@reduxjs/toolkit";
import { ThemeSliceState } from "./theme.slice.types";

// Define the initial state using that type
const initialState: ThemeSliceState = {
  type: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.type = state.type === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
