import { categories } from "../elements/components/PostForms/PostNewsForm";
import { NewsError, News } from "../types";
// import ValTelephone from "./ValTelefono";

export interface  IValNovedad {
  input: News;
  setError: React.Dispatch<React.SetStateAction<NewsError>>;
}

export function ValNovedad({ input, setError }: IValNovedad) {
//fecha
  if ( input.date  && new Date(input.date) instanceof Date ) {
    setError((PrevState)=> ({
      ...PrevState,
      date: 'pass'
    }))
  } else {   
    setError((PrevState)=> ({
      ...PrevState,
      date: 'Formato de fecha erróneo'
    }))
  }
//titular
  if ( input.title ) {
    setError((PrevState)=> ({
      ...PrevState,
      title: 'pass'
    }))
  } else {   
    setError((PrevState)=> ({
      ...PrevState,
      title: 'Debe agregar un Titular'
    }))
  }
//categoría
  if ( categories.includes(input.categoria) ) {
    setError((PrevState)=> ({
      ...PrevState,
      categoria: 'pass'
    }))
  } else {
    setError((PrevState)=> ({
      ...PrevState,
      categoria: 'Categoría inexistente'
    }))
  }
}