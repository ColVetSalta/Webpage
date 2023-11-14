import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import React from "react"
import { type Resol } from '../types'

export interface resSliceState {
  resoluciones: Resol[]
  currentRes: Resol
}

const initialState: resSliceState = {
  resoluciones: [{
    id: 0,
    fecha: "",
    num: 0,
    year: 0,
    titulo:"",
    visto: "",
    considerando: "",
    resuelve: "",
    orgid: "",
    firmas: []
  }],
  currentRes: {
    id: 0,
    fecha: "",
    num: 0,
    year: 0,
    titulo:"",
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
    getResoluciones: (state, action: PayloadAction<Resol[]>) => {
      state.resoluciones = action.payload;
    },
    getCurrentRes: (state, action: PayloadAction<Resol>) => {
      state.currentRes = action.payload;
    },
  },
});

export const { getResoluciones, getCurrentRes } = resSlice.actions;
export default resSlice.reducer;
