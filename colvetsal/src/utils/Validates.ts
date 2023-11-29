import { useState } from "react";
import { Res, ErrorRes } from "../types";
import { IValMatriculado, ValMatriculado } from "./ValMatriculado";

export type IuseValidate = {
  error: ErrorRes;
  setError: React.Dispatch<React.SetStateAction<ErrorRes>>;
  Validate: (input: Res) => void;
};

export function useValidate(section: string): IuseValidate {
  const [error, setError] = useState<ErrorRes>({})

  const Validate: IuseValidate["Validate"] = (input: Res) => {
    if (section === "MATRICULADO") ValMatriculado({input, error, setError} as IValMatriculado)
  };
  return { error, setError, Validate };
}
