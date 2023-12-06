import { useState } from "react";
import { Telefono, TelefonoError } from "../types";

export default function ValTelephone(tn: Telefono) {
  const [vTel, setVTel] = useState<TelefonoError>({
    numero: "",
    descripcion: "",
    principal: "",
    whatsapp: "",
  });

  if (tn.numero === "") {
    setVTel({
      ...vTel,
      numero: "Debe ingresar el número",
    });
  } else {
    setVTel({
      ...vTel,
      numero: "pass",
    })
  }
console.log(vTel);
  return vTel
}
