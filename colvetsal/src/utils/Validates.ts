import { useEffect, useState } from "react";
import { Res, ErrorRes } from "../types";
import { IValMatriculado, ValMatriculado } from "./ValMatriculado";

export type IuseValidate = {
  error: ErrorRes;
  Validate: (input: Res) => void;
};

export function useValidate(section: string): IuseValidate {
  const [error, setError] = useState<ErrorRes>({})
  
  useEffect(() => {
    if(section !== '') import(`./InitialStates/${section}.json`).then((data) => {
      setError(data);
    });
  }, [section]);

  const Validate: IuseValidate["Validate"] = (input: Res) => {
    if (section === "MATRICULADO") ValMatriculado({input, setError} as IValMatriculado)
  };
  return {
    error, 
    Validate };
}
