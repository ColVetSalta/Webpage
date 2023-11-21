import { useState } from "react";
import { Matriculado } from "../types";

export function ValidateMat(input: Matriculado) {
    const [error, setError] = useState({
        mp: '',
        nombre: '',
        apellido: '',
        correo_electronico: '',
        f_nacimiento: '',
        domicilio_particular: '',
        domicilio_laboral: '',
        departamento_d_laboral: '',
        f_alta: '',
        active: false,
        telefono: [{
            numero: '',
            whatsapp: false,
            principal: false,
            descripcion: '',
        }],
        otrodato: [{
            titulo: '',
            descripcion: '',
        }]})
    if (input.mp && input.mp > 0) {
        setError({ ...error, mp: '' })
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