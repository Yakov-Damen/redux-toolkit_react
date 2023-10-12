import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SwitchState {
  value: string;
}

const initialState: SwitchState = {
  value: "",
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    changeByPayload: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeByPayload } = switchSlice.actions;
export default switchSlice.reducer;
