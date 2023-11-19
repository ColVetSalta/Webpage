import { KeyboardEvent } from "react";

export function nextFocus(e: KeyboardEvent<HTMLDivElement>) {
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
