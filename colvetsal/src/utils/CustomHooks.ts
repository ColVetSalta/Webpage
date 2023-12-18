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
    const i = 0;

    function SubmitVal(
      errorState: { [x: string]: unknown },
      i: number
    ): number {
      for (const key in errorState) {
        console.log(key);
        if (Object.prototype.hasOwnProperty.call(errorState, key)) {
          const element = errorState[key as keyof typeof errorState] as
            | unknown
            | unknown[];
          if (key === "default") {
            /* empty */
          // } else if (Array.isArray(element)) {
          //   console.log(element);
          //   element.forEach((o) => SubmitVal(o, i));
          } else if (!(element === "pass")) {
            const info = key + ": " + element + ".";
            console.log(info)            
            i++;
            alert(
              `Debe completar todos los campos requeridos, con el formato adecuado: (${info})`
            );
          }
        }
      }
      return i;
    }
    const validate = SubmitVal(errorState as { [x: string]: unknown }, i);
    validate === 0 &&
      (await axios
        .post(`/${route}`, currentState)
        .then((res) => {
          FormAlert(res, route)
        })
        .catch(
          (error)=>{
            console.log(error.response.data)            
            alert(`Error: ${error.response.data.err}`)
          }
        )
      )
  }

  return { currentState, setCurrentState, HandleSubmit };
}
