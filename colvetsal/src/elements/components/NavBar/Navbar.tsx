import React from "react";
import ColvetLogo from '../../../assets/logo_.png'
import n from './NavBar.module.css'
import {
  Flex,
  List,
  ListItem,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { NavMenu } from "../..";
import navList from "../../../Navegacion.json";
import { Link } from "react-router-dom";
import { type Navigation } from '../../../types';

interface NavBarProps {

}
const NavBar: React.FC<NavBarProps> = () => {
  const impList: Navigation[] = navList;
  return <nav className={n.Cont}>
    <Flex>
      <Image
        boxSize={"4em"}
        src={ColvetLogo}
        alt="ColVet"
      />
      <Box id={n.Title}>
        <Text
          width={'20dvw'}
          fontSize={'8px'}
          margin={0}
          noOfLines={[1, 2, 3]}
          textAlign='left'
        >Colegio de Médicos Veterinarios de Salta</Text>
      </Box>
    </Flex>
    <List
      gap={'0.6em'}
      display={"flex"}
      paddingInlineStart={'10px'}
    >
      {
        impList ? impList.map((list) => {
          if (list.subindex) {
            return <ListItem>
              <NavMenu name={list.indexTitle} items={list.subindex} />
            </ListItem>
          }
          else if (list.url) {
            return <ListItem>
              <Link to={list.url} className={n.links}>{list.indexTitle}</Link>
            </ListItem>
          } else {
            return null
          }
        }) : null
      }
    </List>
  </nav>;
}

export default NavBar;