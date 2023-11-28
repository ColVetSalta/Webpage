import axios from "axios";
import { useState, useEffect } from "react";
import { Matriculado, News, Organismo, ResolPost } from "../types";
import { FormAlert } from "./FormUtils";
import { useValidate } from "./Validates";

export type Res =  Matriculado | ResolPost | Organismo | News | Record<string, never>;

export interface IuseCurrentState {
    currentState: Res,
    setCurrentState: React.Dispatch<React.SetStateAction<Res>>,
    HandleSubmit: () => Promise<void>
}

export function useCurrentState(section: string): IuseCurrentState {
  const [currentState, setCurrentState] = useState({});
const [error, setError, Validate] = useValidate(section)
  useEffect(() => {
    if(section !== '') import(`./InitialStates/${section}.json`).then((data) => {
      setCurrentState(data);
      setError(data)
    });
  }, [section]);

  const route = section.toLocaleLowerCase();

  async function HandleSubmit() { 
    await axios.post(`/${route}`, currentState).then((res) => FormAlert(res, route));
  }

  return { currentState, setCurrentState, HandleSubmit, error, setError, Validate };
}