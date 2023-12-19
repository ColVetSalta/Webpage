import { NewsError, News } from "../types";
// import ValTelephone from "./ValTelefono";

export interface  IValNovedad {
  input: News;
  setError: React.Dispatch<React.SetStateAction<NewsError>>;
}

export function ValNovedad({ input, setError }: IValNovedad) {
  if ( input.id === 0 ) {
    setError((PrevState)=> ({
      ...PrevState,
      id: 'En realidad no tendría que estar validando el id, eso está a cargo de postgres. Yo no pongo id'
    }))
  }
//fecha
  if ( input.date ) {
    setError((PrevState)=> ({
      ...PrevState,
      id: 'En realidad no tendría que estar validando el id, eso está a cargo de postgres. Yo no pongo id'
    }))
  }
//titular
  if ( input.title ) {
    setError((PrevState)=> ({
      ...PrevState,
      id: 'En realidad no tendría que estar validando el id, eso está a cargo de postgres. Yo no pongo id'
    }))
  }
//categoría
  if ( input.categoria ) {
    setError((PrevState)=> ({
      ...PrevState,
      id: 'En realidad no tendría que estar validando el id, eso está a cargo de postgres. Yo no pongo id'
    }))
  }
}