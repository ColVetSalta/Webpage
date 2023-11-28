import { useState } from "react";
import { Matriculado } from "../types";
import { Res } from "./CustomHooks";

export interface IuseValidate {
    error: Res,
    setError: React.Dispatch<React.SetStateAction<Res>>,
    [Validate: string]: (input: Res) => void
}

export function useValidate(section: string): IuseValidate {
  const [error, setError] = useState({});
  function ValidateMat(input: Res) {
    const inp = input as Matriculado
    if (inp.mp && inp.mp > 0) {
      setError({ ...error, mp: "" });
    }
    // else if(input.summary || input.health_score || input.stepbystep || input.diets.length > 0){
    //     setError({ ...error, name: 'Don\'t forget the Recipe Title' });
    // };
    // if (input.summary) {
    //     setError({ ...error, summary: '' })
    // }else if(input.health_score || input.stepbystep || input.diets.length > 0) {
    //     setError({ ...error, summary: 'Don\'t forget the Summary' })
    // };
    // if (isNaN(input.health_score) || input.health_score > 100) {
    //     setError({ ...error, health_score: 'Health Score must ba a number between 0 and 100.' })
    // }
  }
  if (section === 'MATRICULADO') return {error, setError, ValidateMat}
}

/** const [error, setError] = useState(
        {
            name: '',
            summary: '',
            health_score: 0,
            stepbystep: '',
            image: '',
            diets: [],
        }
    );
    function Validate(input) {
        if (input.name) {
            setError({ ...error, name: '' })
        } else if(input.summary || input.health_score || input.stepbystep || input.diets.length > 0){
            setError({ ...error, name: 'Don\'t forget the Recipe Title' });
        };
        if (input.summary) {
            setError({ ...error, summary: '' })
        }else if(input.health_score || input.stepbystep || input.diets.length > 0) {
            setError({ ...error, summary: 'Don\'t forget the Summary' })
        };
        if (isNaN(input.health_score) || input.health_score > 100) {
            setError({ ...error, health_score: 'Health Score must ba a number between 0 and 100.' })
        }
    } */
