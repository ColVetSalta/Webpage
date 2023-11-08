import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import React from "react"
import { type ResolAnual } from '../types'

export interface resSliceState {
  resoluciones: ResolAnual
}

const initialState: resSliceState = {
  resoluciones: {}
//   ref: React.createRef<HTMLDivElement | null>(),
}

const resSlice = createSlice({
  name: "res",
  initialState,
  reducers: {
    getResoluciones: (state, action: PayloadAction<ResolAnual>) => {
      state.resoluciones = action.payload;
    },
  },
});

export const { getResoluciones } = resSlice.actions;
export default resSlice.reducer;
