import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import React from "react"
import { type News } from '../types'

export interface novedadSliceState {
  news: News[]
  currentNew: News
}

const initialState: novedadSliceState = {
    news: [{
      id: 0,
      categoria: "ARTICULOS",
      image: "",
      alt: "",
      title: "",
      summary: "",
      fulltext: "",
      date: "",
      url: ""
  }],
  currentNew: {
    id: 0,
    categoria: "ARTICULOS",
    image: "",
    alt: "",
    title: "",
    summary: "",
    fulltext: "",
    date: "",
    url: ""
}
//   ref: React.createRef<HTMLDivElement | null>(),
}

const novedadSlice = createSlice({
  name: "novedad",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },
    getCurrentNew: (state, action: PayloadAction<News>) => {
      state.currentNew = action.payload;
    },
  },
});

export const { getNews, getCurrentNew } = novedadSlice.actions;
export default novedadSlice.reducer;
