import { useEffect, useState } from "react";
import { Res, ErrorRes } from "../types";
import { IValMatriculado, ValMatriculado } from "./ValMatriculado";
import { IValNovedad, ValNovedad } from "./ValNovedad";

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
    if (section === "NOVEDADES") ValNovedad({input, setError} as IValNovedad)
  };
  return {
    error, 
    Validate };
}
