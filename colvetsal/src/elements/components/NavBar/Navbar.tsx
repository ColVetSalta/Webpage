import ColvetLogo from '../../../assets/logo_.png'
import nb from './NavBar.module.css'
import {
  Flex,
  List,
  ListItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavMenu } from "../..";
import navList from "../../../Navegacion.json";
import { Link } from "react-router-dom";
import { type Navigation } from '../../../types';

export default function NavBar(): JSX.Element {
  const impList: Navigation[] = navList;
  return <nav className={nb.Cont}>
    <Flex>
      <Image
        boxSize={"4.2em"}
        src={ColvetLogo}
        alt="ColVet" />
      <Text
        width={'30dvw'}
        fontSize={'1.4em'}
        margin={0}
      >Colegio de Médicos Veterinarios de Salta</Text>
    </Flex>
    <List
      gap={'0.6em'}
      display={"flex"}
      paddingInlineStart={'10px'}
    >
      {impList ? impList.map((list) => {
        if (list.subindex) {
          return <ListItem key={list.indexTitle}>
            <NavMenu name={list.indexTitle} items={list.subindex} />
          </ListItem>;
        }
        else if (list.url) {
          return <ListItem>
            <Link to={list.url} className={nb.links}>{list.indexTitle}</Link>
          </ListItem>;
        } else {
          return null;
        }
      }) : null}
    </List>
  </nav>;
}