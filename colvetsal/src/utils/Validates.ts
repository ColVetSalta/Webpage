import { useState } from "react";
import { Matriculado, Res, ErrorRes, MatriculadoError } from "../types";

export type IuseValidate = {
  error: ErrorRes;
  setError: React.Dispatch<React.SetStateAction<ErrorRes>>;
  Validate: (input: Res) => void;
};

export function useValidate(section: string): IuseValidate {
  const [error, setError] = useState<ErrorRes>({});
//   const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  const Validate: IuseValidate["Validate"] = (input: Res) => {
    if (section === "MATRICULADO") {
      const matErr = input as Matriculado;
      if (isNaN(matErr.mp)) {
        setError({ ...(error as MatriculadoError), mp: 'M.P. debe ser un número' });
      }
      if (matErr.mp && matErr.mp > 0) {
        setError({ ...(error as MatriculadoError), mp: 0 });
      } else if (
        matErr.nombre.length > 0 ||
        matErr.apellido.length > 0 ||
        matErr.correo_electronico.length > 0 ||
        matErr.domicilio_particular.length > 0 ||
        matErr.domicilio_laboral.length > 0 ||
        matErr.departamento_d_laboral.length > 0 ||
        matErr.active
      ){
        setError({ ...(error as MatriculadoError), mp: 'Recuerde que debe ingresar un número de Matrícula Profesional' });
      }
      if (matErr.nombre && matErr.nombre.length > 0) {
        setError({ ...(error as MatriculadoError), nombre: '' });
      } else if (
        matErr.apellido.length > 0 ||
        matErr.correo_electronico.length > 0 ||
        matErr.domicilio_particular.length > 0 ||
        matErr.domicilio_laboral.length > 0 ||
        matErr.departamento_d_laboral.length > 0 ||
        matErr.active
      ){
        setError({ ...(error as MatriculadoError), nombre: 'No se olvide de completar el nombre' });
      }
      if (matErr.apellido && matErr.apellido.length > 0) {
        setError({ ...(error as MatriculadoError), apellido: '' });
      } else if (
        matErr.correo_electronico.length > 0 ||
        matErr.domicilio_particular.length > 0 ||
        matErr.domicilio_laboral.length > 0 ||
        matErr.departamento_d_laboral.length > 0 ||
        matErr.active
      ){
        setError({ ...(error as MatriculadoError), apellido: 'No se olvide de completar el apellido' });
      }
      if (matErr.correo_electronico && matErr.correo_electronico.length > 0) {
        setError({ ...(error as MatriculadoError), correo_electronico: '' });
      } else if (
        matErr.domicilio_particular.length > 0 ||
        matErr.domicilio_laboral.length > 0 ||
        matErr.departamento_d_laboral.length > 0 ||
        matErr.active
      ){
        setError({ ...(error as MatriculadoError), correo_electronico: 'No se olvide de completar el correo_electronico' });
      }

    }
  };
  return { error, setError, Validate };
}
