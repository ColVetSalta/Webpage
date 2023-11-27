import { AxiosResponse } from "axios";
import { ChangeEvent, KeyboardEvent } from "react";
import { Matriculado } from "../types";

// Don´t change KeyboardEvent type, you don´t know if Element is going to be div or textarea
export function nextFocus(e: KeyboardEvent<HTMLDivElement | HTMLTextAreaElement>) {
    const inputs = document?.querySelectorAll('.input')          
        if (e?.key == "Enter") {
            const actual = parseInt(
              (e.target as HTMLInputElement)?.id.replace("input", "")
            );
            if (inputs && (actual < inputs?.length)) {
              e.preventDefault();
              inputs && (inputs[actual] as HTMLInputElement)?.focus();
            }
          }
        }

      export const setDefaultcheckboxValue = (signatures: { [key: string]: boolean }) => {
          const list: string[] = ['']
          for (const key in signatures) {
              if (Object.prototype.hasOwnProperty.call(signatures, key)) {
                  signatures[key] && list.push(key)
              }
          }
          return list
      }

      export const FormAlert = (res: AxiosResponse<{data:{[key: string]: unknown}}>, route: string) => {
      if (route === "matriculado") {
        const mat = res.data as unknown as Matriculado
          alert(
            `Nuevo Matriculado: ${mat.nombre} ${mat.apellido} registrado correctamente con la matrícula N°: ${mat.mp}`
          );
      } else { alert('Registro Completado') }
    }

    export function HandleInputNumFirstFocus(e: ChangeEvent<HTMLInputElement>) {
        e.target.select()
    }