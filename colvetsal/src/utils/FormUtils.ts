import { KeyboardEvent } from "react";

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