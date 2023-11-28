import { useState } from "react";
import { Matriculado, Res, ErrorRes, MatriculadoError } from "../types";

export type IuseValidate = {
  error: ErrorRes;
  setError: React.Dispatch<React.SetStateAction<ErrorRes>>;
  Validate: (input: Res) => void;
};

export function useValidate(section: string): IuseValidate {
  const [error, setError] = useState<ErrorRes>({});

  const Validate: IuseValidate["Validate"] = (input: Res) => {
    if (section === "MATRICULADO") {
      const matErr = input as Matriculado;
      if (matErr.mp && matErr.mp > 0) {
        setError({ ...(error as MatriculadoError), mp: 0 });
      }
      if (Number.isNaN(matErr.mp)) {
        setError({ ...(error as MatriculadoError), mp: 'M.P. debe ser un número' });
      }
    }
  };
  return { error, setError, Validate };
}
