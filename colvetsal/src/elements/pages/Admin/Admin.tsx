import {
    Grid,
    GridItem,
} from "@chakra-ui/react";
import FormModal from "../../components/FormModal";
import { Loading } from "../../components/Loading";
import { useAppDispatch } from "../../../redux/hooks";
import axios from "axios";
import { getOrganism } from "../../../redux/orgSlice";
import { Organismo } from "../../../types";
import { useEffect } from "react";

export default function Admin(): JSX.Element {
    const actionList = ['NOVEDADES', 'ORGANISMO', 'RESOLUCIONES', 'MATRICULADO', 'NORMATIVA', 'HISTORIA']


  const dispatch = useAppDispatch();

  useEffect(()=>{
    axios.get<Organismo>('/organismo?full=true')
    .then((data)=> {
      console.log(data)
      dispatch(getOrganism(data.data))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    return (
        <Grid
        minHeight={'55dvh'}
            templateColumns='repeat(3, 1fr)'
            marginBlockStart={'15dvh'}>
            {
                actionList ?
                    actionList.map((item) => {
                        return <GridItem
                            key={item}
                        >
                            <FormModal section={item} />
                        </GridItem>
                    }) :
                    <Loading/>
            }

        </Grid>
    )
}