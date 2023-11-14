import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import React from "react"
import { type Resol } from '../types'

export interface resSliceState {
  resoluciones: Resol
}

const initialState: resSliceState = {
  resoluciones: {
    fecha: "",
    num: 0,
    year: 0,
    visto: "",
    considerando: "",
    resuelve: "",
    orgid: "",
    firmas: []
  }
//   ref: React.createRef<HTMLDivElement | null>(),
}

const resSlice = createSlice({
  name: "res",
  initialState,
  reducers: {
    getResoluciones: (state, action: PayloadAction<Resol>) => {
      state.resoluciones = action.payload;
    },
  },
});

export const { getResoluciones } = resSlice.actions;
export default resSlice.reducer;
