import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit"
// import React from "react"
import { type Organismo } from '../types'

export interface reduxState {
  organism: Organismo
}

const initialState: reduxState = {
    organism: {}
//   ref: React.createRef<HTMLDivElement | null>(),
}

const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    getOrganism: (state: Draft<reduxState>, action: PayloadAction<Organismo>) => {
      state.organism = action.payload;
    },
  },
});

// export const { setRef } = refSlice.actions;
export default orgSlice.reducer;
