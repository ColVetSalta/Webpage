import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Matriculado, News, Organismo, Resol } from "../types";

export type Res =  Matriculado | Resol | Organismo | News | Record<string, never>;

export interface IuseCurrentState {
    currentState: Res,
    setCurrentState: React.Dispatch<React.SetStateAction<Res>>,
    HandleSubmit: () => Promise<void>
}

export function useCurrentState(section: string): IuseCurrentState {
  const [currentState, setCurrentState] = useState({});

  useEffect(() => {
    if(section !== '') import(`./InitialStates/${section}.json`).then((data) => {
      setCurrentState(data);
    });
  }, [section]);
  const route = section.toLocaleLowerCase();
  async function HandleSubmit() {
    // let message = 'Ha ocurrido un error, intentelo nuevamente más tarde'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let Alert = (res: AxiosResponse<any, any>) => alert(res);
    if (route === "matriculado") {
      setCurrentState({ ...currentState, active: true });
      Alert = (res: {
        data: { nombre: string; apellido: string; mp: number };
      }) =>
        alert(
          `Nuevo Matriculado: ${res.data.nombre} ${res.data.apellido} registrado correctamente con la matrícula N°: ${res.data.mp}`
        );
    }
    await axios.post(`/${route}`, currentState).then((res) => Alert(res));
  }
  return { currentState, setCurrentState, HandleSubmit };
}
