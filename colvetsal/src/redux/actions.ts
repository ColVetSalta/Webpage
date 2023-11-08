// import { createAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { Organismo } from "../types";
// import { useAppDispatch } from "./hooks";

// const dispatch = useAppDispatch();

// export const getOrganism = createAction(
//   'org/getOrganism',
//   () => (
//     axios.get<Organismo[]>('/organismo?org=Mesa Directiva')
//   .then((data)=> {
//     console.log(data)
//     dispatch(data.data)
//   })
//   )
// );