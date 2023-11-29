import { Matriculado, MatriculadoError } from "../types";

export interface IValMatriculado {
    input: Matriculado,
    error: MatriculadoError,
    setError: React.Dispatch<React.SetStateAction<MatriculadoError>>;
}

export function ValMatriculado({input, error, setError}: IValMatriculado) {
    const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
    if (isNaN(input.mp)) {
      setError({
        ...error,
        mp: "M.P. debe ser un número",
      });
    }
    if (input.mp && input.mp > 0) {
      setError({ ...error, mp: 0 });
    } else if (
      input.nombre.length > 0 ||
      input.apellido.length > 0 ||
      input.correo_electronico.length > 0 ||
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0 ||
      input.active
    ) {
      setError({
        ...error,
        mp: "Recuerde que debe ingresar un número de Matrícula Profesional",
      });
    }
    if (input.nombre && input.nombre.length > 0) {
      setError({ ...error, nombre: "" });
    } else if (
      input.apellido.length > 0 ||
      input.correo_electronico.length > 0 ||
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0 ||
      input.active
    ) {
      setError({
        ...error,
        nombre: "No se olvide de completar el nombre",
      });
    }
    if (input.apellido && input.apellido.length > 0) {
      setError({ ...error, apellido: "" });
    } else if (
      input.correo_electronico.length > 0 ||
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0 ||
      input.active
    ) {
      setError({
        ...error,
        apellido: "No se olvide de completar el apellido",
      });
    }
    if (input.correo_electronico && input.correo_electronico.length > 0) {
      if (pattern.test(input.correo_electronico)) {
        setError({ ...error, correo_electronico: "" });
      } else {
        setError({
          ...error,
          correo_electronico: "Formato invalido. Ingrese un correo válido",
        });
      }
    } else if (
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0 ||
      input.active
    ) {
      setError({
        ...error,
        correo_electronico: "No se olvide de completar el correo_electronico",
      });
    }
    if (input.domicilio_particular && input.domicilio_particular.length > 0) {
      setError({ ...error, domicilio_particular: "" });
    } else if (
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0 ||
      input.active
    ) {
      setError({
        ...error,
        domicilio_particular: "No se olvide de completar el domicilio particular",
      });
    }
    if (input.domicilio_laboral && input.domicilio_laboral.length > 0) {
      setError({ ...error, domicilio_laboral: "" });
    } else if (
      input.departamento_d_laboral.length > 0 ||
      input.active
    ) {
      setError({
        ...error,
        domicilio_laboral: "Debe ingresar un domicilio laboral, recuerde que si es el mismo que el particular, puede urilizar el boton de arriba"
      });
    }
}