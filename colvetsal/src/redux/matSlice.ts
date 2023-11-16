import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import React from "react"
import { type Matriculado } from '../types'

export interface novedadSliceState {
  matriculados: Matriculado[]
  currentMat: Matriculado
}

const initialState: novedadSliceState = {
  matriculados: [{ 
    mp: 0,
  nombre: "", // OBLIGATORIO
  apellido: "" ,// OBLIG,A,TORIO
  correo_electronico: "", // Opcional
  f_nacimiento: new Date("1900-01-01T00:00:00.000Z") ,// ('mm/dd/aaaa'), OBLIGATORIO
  domicilio_particular: "",// OBLIGATORIO
  domicilio_laboral: "" ,// OBLIGATORIO
  departamento_d_laboral: "" ,// OBLIGATORIO
  f_alta: new Date("1900-01-01T00:00:00.000Z"),
  active: false,
  telefono: [
    {
      numero: "",
      whatsapp: false ,// OBLIGATORIO
      principal: false ,// OBLIGATORIO
      descripcion: "" ,// Opcional
    }
  ], // *tabla intermedia* Opcional
  otrodato: [
    {
      titulo: "" ,// OBLIGATORIO
      descripcion: "", // OBLIGATORIO
    }
  ]
}],
  currentMat: { 
    mp: 0,
  nombre: "", // OBLIGATORIO
  apellido: "" ,// OBLIG,A,TORIO
  correo_electronico: "", // Opcional
  f_nacimiento: new Date("1900-01-01T00:00:00.000Z") ,// ('mm/dd/aaaa'), OBLIGATORIO
  domicilio_particular: "",// OBLIGATORIO
  domicilio_laboral: "" ,// OBLIGATORIO
  departamento_d_laboral: "" ,// OBLIGATORIO
  f_alta: new Date("1900-01-01T00:00:00.000Z"),
  active: false,
  telefono: [
    {
      numero: "",
      whatsapp: false ,// OBLIGATORIO
      principal: false ,// OBLIGATORIO
      descripcion: "" ,// Opcional
    }
  ], // *tabla intermedia* Opcional
  otrodato: [
    {
      titulo: "" ,// OBLIGATORIO
      descripcion: "", // OBLIGATORIO
    }
  ]
}
//   ref: React.createRef<HTMLDivElement | null>(),
}

const matSlice = createSlice({
  name: "mat",
  initialState,
  reducers: {
    getMats: (state, action: PayloadAction<Matriculado[]>) => {
      state.matriculados = action.payload;
    },
    getCurrentMat: (state, action: PayloadAction<Matriculado>) => {
      state.currentMat = action.payload;
    },
  },
});

export const { getMats, getCurrentMat } = matSlice.actions;
export default matSlice.reducer;
