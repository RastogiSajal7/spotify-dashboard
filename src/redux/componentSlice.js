import { createSlice } from "@reduxjs/toolkit";

export const componentSlice = createSlice({
  name: "component",
  initialState: {
    selectedComponent: null,
  },
  reducers: {
    setSelectedComponent: (state, action) => {
      state.selectedComponent = action.payload;
    },
  },
});

export const { setSelectedComponent } = componentSlice.actions;

export default componentSlice.reducer;
