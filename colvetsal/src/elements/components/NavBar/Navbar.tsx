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
import { NavMenu } from "../..";

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
      paddingInlineStart= {'10px'}
        >
      <ListItem >
        <NavMenu 
        name='NOVEDADES' 
        items={['RESOLUCIONES', 'NOTICIAS', 'ARTICULOS', 'CURSOS', 'EVENTOS']}
        />
        </ListItem>
      <ListItem >
        <NavMenu 
        name='INSTITUCIONAL' 
        items={['CONSEJO MAYOR', 'TRIBUNAL DE ÉTICA', 'MESA DIRECTIVA', 'PERSONAL', 'SUBCOMISIONES']}
        />
        </ListItem>
      <ListItem >
        <NavMenu 
        name='MATRICULADOS' 
        items={['ACTIVOS', 'ACCESO', 'ESPECIALIDADES', 'ACREDITACIONES']}
        />
        </ListItem>
      <ListItem >
        <NavMenu 
        name='CONTACTO' 
        items={[]}
        /></ListItem>
    </List>
  </nav>;
}

export default NavBar;