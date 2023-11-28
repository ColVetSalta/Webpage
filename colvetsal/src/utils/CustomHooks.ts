import axios from "axios";
import { useState, useEffect } from "react";
import { Res } from "../types";
import { FormAlert } from "./FormUtils";
// import { useValidate } from "./Validates";

export interface IuseCurrentState {
    currentState: Res,
    setCurrentState: React.Dispatch<React.SetStateAction<Res>>,
    HandleSubmit: () => Promise<void>
}

export function useCurrentState(section: string): IuseCurrentState {
  const [currentState, setCurrentState] = useState({});
// const [error, setError, Validate] = useValidate(section)
  useEffect(() => {
    if(section !== '') import(`./InitialStates/${section}.json`).then((data) => {
      setCurrentState(data);
      // setError(data)
    });
  }, [section]);

  const route = section.toLocaleLowerCase();

  async function HandleSubmit() { 
    await axios.post(`/${route}`, currentState).then((res) => FormAlert(res, route));
  }

  return { currentState,
    setCurrentState,
    HandleSubmit, 
    // error, 
    // setError, 
    // Validate 
  };
}