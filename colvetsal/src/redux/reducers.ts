import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit"
// import React from "react"
import { type Organismo } from '../types'

export interface reduxState {
  organism: Organismo
}

const initialState: reduxState = {
    organism: {
      'Mesa Directiva': [
      {
          "cargo":"Presidente",
          "mp":2,
          "nombre":"Pedro",
          "apellido":"Coso",
          "fecha_inicio":"2021-12-10T03:00:00.000Z",
          "fecha_final":"2024-12-10T03:00:00.000Z",
          "numero":"0378564447",
          "correo_electronico":"hhstts@hgfdsa.ar"
      },
      {
          "cargo":"Secretario",
          "mp":1,
          "nombre":"Pedro",
          "apellido":"Samanasa",
          "fecha_inicio":"2021-12-10T03:00:00.000Z",
          "fecha_final":"2024-12-10T03:00:00.000Z",
          "numero":"38745588774",
          "correo_electronico":"pepito@gmail.com.ar"
      },
      {
          "cargo":"Tesorero",
          "mp":3,
          "nombre":"Alfonso",
          "apellido":"Primero",
          "fecha_inicio":"2021-12-10T03:00:00.000Z",
          "fecha_final":"2024-12-10T03:00:00.000Z",
          "numero":"0387-3265436",
          "correo_electronico":"alfi@ddeerr.ar"
          },
      {
          "cargo":"Vicepresidente",
          "mp":null,
          "nombre":null,
          "apellido":null,
          "fecha_inicio":null,
          "fecha_final":null,
          "numero":null,
          "correo_electronico":null
          }
    ]}
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
