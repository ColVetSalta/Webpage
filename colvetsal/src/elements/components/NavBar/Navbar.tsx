import React from "react";
// import { NavLink } from 'react-router-dom';
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

interface NavBarProps {

}
const NavBar: React.FC<NavBarProps> = () => {

  return <nav className={n.Cont}>
    <Flex>
      <Image
        boxSize={"4em"}
        src={ColvetLogo}
        alt="ColVet"
      />
      <Box id={n.Title}>
        <Text
          fontSize={'8px'}
          margin={0}
          noOfLines={[1, 2, 3]}
        >Colegio de Médicos Veterinarios de Salta</Text>
      </Box>
    </Flex>
    <List
      gap={'0.6em'}
      display={"flex"}>
      <ListItem >NOVEDADES</ListItem>
      <ListItem >INSTITUCIONAL</ListItem>
      <ListItem >PROFESIONALES</ListItem>
      <ListItem >CONTACTO</ListItem>
    </List>
  </nav>;
}

export default NavBar;