import React from "react";
import { Link as ReactLink } from 'react-router-dom';
import f from './Footer.module.css'
import { Container, Heading, Link, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
// import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram, BsMailbox, BsTelephone, BsPhone, BsFileEarmarkCodeFill, BsMapFill, BsMap } from "react-icons/bs";
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube, AiFillInstagram, AiOutlineEnvironment, AiOutlineMobile, AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

  const Footer: React.FC = () => {

    return <Container
    className={f.Cont}>
      <Box>
      <Heading>CONTACTO</Heading>
      <List>
        <ListItem>
          <ListIcon as={AiOutlineMail}/>
          colvetsalta@gmail.com
        </ListItem>
        <ListItem>
          <ListIcon as={
            // BsPhone
            AiOutlineMobile
            }/>
          +54 9 387 528-9422
          </ListItem>
        <ListItem>
          <ListIcon as={AiOutlinePhone}/>
          0387-4227751
          </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineEnvironment}/>
          J. M. Leguizamón 1844
          </ListItem>
      </List>
      </Box>
      <Box
    bg='whiteAlpha.300'>
      <Heading>REDES</Heading>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillLinkedin /></Link>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillFacebook /></Link>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillYoutube /></Link>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillInstagram /></Link>
      </Box>
    </Container>;
}

export default Footer;