import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import React from "react"
import { type Organismo } from '../types'

export interface orgSliceState {
  organism: Organismo
}

const initialState: orgSliceState = {
    organism: {}
//   ref: React.createRef<HTMLDivElement | null>(),
}

const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    getOrganism: (state, action: PayloadAction<Organismo>) => {
      state.organism = action.payload;
    },
  },
});

export const { getOrganism } = orgSlice.actions;
export default orgSlice.reducer;
