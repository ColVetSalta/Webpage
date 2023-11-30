import axios from "axios";
import { useState, useEffect } from "react";
import { ErrorRes, Res } from "../types";
import { FormAlert } from "./FormUtils";
// import { useValidate } from "./Validates";

export interface IuseCurrentState {
  currentState: Res;
  setCurrentState: React.Dispatch<React.SetStateAction<Res>>;
  HandleSubmit: (errorState: ErrorRes) => Promise<void>;
}

export function useCurrentState(section: string): IuseCurrentState {
  const [currentState, setCurrentState] = useState({});
  useEffect(() => {
    if (section !== "")
      import(`./InitialStates/${section}.json`).then((data) => {
        setCurrentState(data);
      });
  }, [section]);

  const route = section.toLocaleLowerCase();

  async function HandleSubmit(errorState: ErrorRes) {
    console.log(errorState);
    let i = 0
    for (const key in errorState) {
      console.log(key);
      if (Object.prototype.hasOwnProperty.call(errorState, key)) {
        const element = errorState[key as keyof typeof errorState] as
          | string
          | number
          | unknown[]
        if(key === 'default') { /* empty */ } else if (!(element === 0 || element === "")) {
          // if (Array.isArray(element)) {
            // element.forEach((o)=>)
          // }
          i++
          alert(
            `Debe completar todos los campos requeridos, con el formato adecuado: (${element})`
          );
        }
      }
    }
    i === 0 && await axios.post(`/${route}`, currentState).then((res) => FormAlert(res, route));
  }

  return { currentState, setCurrentState, HandleSubmit };
}
