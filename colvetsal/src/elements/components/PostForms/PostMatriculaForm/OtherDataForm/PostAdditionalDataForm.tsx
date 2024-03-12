import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ModalBody,
} from "@chakra-ui/react";
import { nextFocus } from "../../../../../utils/FormUtils";
import { ChangeEvent } from "react";
import { AdditionalData } from "../../../../../types";

interface DataForm {
    odt: AdditionalData;
    setData: React.Dispatch<React.SetStateAction<AdditionalData>>
}
/*

export default function PostTelModalForm(
    { tel, defaultTel, setTel }: TelForm
     */
export default function PostAdditionalDataForm({ odt, setData }: DataForm): JSX.Element {

  
  function HandleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setData({
      ...odt,
      [e.target.name]: e.target.value
    })
  }
 

  return <ModalBody>
          <FormControl
            overflowY={'scroll'}
            overflowX={'auto'}
            maxHeight={'50dvh'}
            id="Form"
          >
            <FormLabel>Asunto:</FormLabel>
            <Input
              className="input"
              id="input1"
              placeholder="Ejemplo: 'Correo electrónico alternativo'"
              type='text'
              onKeyDown={(e) => nextFocus(e)}
              name='titulo'
              value={odt.titulo}
              onChange={HandleChange}
            />
            <FormLabel>Descripcion:</FormLabel>
            <Input
              className="input"
              id="input2"
              placeholder="Detalle"
              onKeyDown={(e) => nextFocus(e)}
              type='text'
              name='descripcion'
              value={odt.descripcion}
              onChange={HandleChange}
            />
            <FormHelperText>Opcional: Escriba breve descripcion o dato accesorio</FormHelperText>
          </FormControl>
        </ModalBody>

}

/*
PostMForm
<
FUNCTION(NewTelFuncComp)<> PostAdditionalDataForm
table
  <
    TH<
    Tr
      <
      Td..nn
      Td..dd
      Td..ww
      >
    >
    MAPPER(TelMapperComp)<>
  >
>

*/