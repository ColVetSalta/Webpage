import { Matriculado, MatriculadoError } from "../types";

export interface IValMatriculado {
    input: Matriculado,
    setError: React.Dispatch<React.SetStateAction<MatriculadoError>>;
}

export function ValMatriculado({input, setError}: IValMatriculado) {
    const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
    if (isNaN(input.mp)) {
      setError(prevError => ({
        ...prevError,
        mp: "M.P. debe ser un número",
      }));
    } else if (input.mp && input.mp > 0) {
      setError(prevError => ({
        ...prevError, mp: 0 }));
    } else if (
      input.nombre.length > 0 ||
      input.apellido.length > 0 ||
      input.correo_electronico.length > 0 ||
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0
    ) {       
      setError(prevError => ({
        ...prevError,
        mp: "Recuerde que debe ingresar un número de Matrícula Profesional",
    }));      
    }
    if (input.nombre && input.nombre.length > 0) {
      setError(prevError => ({...prevError, nombre: "" }));
    } else if (
      input.apellido.length > 0 ||
      input.correo_electronico.length > 0 ||
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0
    ) {
      setError(prevError => ({ ...prevError, nombre: "No se olvide de completar el nombre" }));
    }
    if (input.apellido && input.apellido.length > 0) {
      setError(prevError => ({ ...prevError,  apellido: "" }));
    } else if (
      input.correo_electronico.length > 0 ||
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0
    ) {
      setError(prevError => ({ 
        ...prevError, 
        apellido: "No se olvide de completar el apellido",
      }));
    }
    if (input.correo_electronico && input.correo_electronico.length > 0) {
      if (pattern.test(input.correo_electronico)) {
        setError(prevError => ({
          ...prevError, correo_electronico: "" }));
      } else {
        setError(prevError => ({
          ...prevError,
          correo_electronico: "Formato invalido. Ingrese un correo válido",
        }));
      }
    } else if (
      input.domicilio_particular.length > 0 ||
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0
    ) {
      setError(prevError => ({ 
        ...prevError, 
        correo_electronico: "No se olvide de completar el correo_electronico",
      }));
    }
    if (input.domicilio_particular && input.domicilio_particular.length > 0) {
      setError(prevError => ({ ...prevError,  domicilio_particular: "" }));
    } else if (
      input.domicilio_laboral.length > 0 ||
      input.departamento_d_laboral.length > 0
    ) {
      setError(prevError => ({ ...prevError, 
        domicilio_particular: "No se olvide de completar el domicilio particular",
      }));
    }
    if (input.domicilio_laboral && input.domicilio_laboral.length > 0) {
      setError(prevError => ({ ...prevError, domicilio_laboral: "" }));
    } else if (
      input.departamento_d_laboral.length > 0
    ) {
      setError(prevError => ({ 
        ...prevError, 
        domicilio_laboral: "Debe ingresar un domicilio laboral, recuerde que si es el mismo que el particular, puede urilizar el boton de arriba"
      }));
    }
    if (input.departamento_d_laboral && input.departamento_d_laboral.length > 0) {
      setError(prevError => ({ ...prevError,  departamento_d_laboral: "" }));
    }
}