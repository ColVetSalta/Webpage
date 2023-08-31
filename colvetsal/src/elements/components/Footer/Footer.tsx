import React from "react";
import { Link as ReactLink } from 'react-router-dom';
import f from './Footer.module.css'
import { Flex, Heading, Link, Box, List, ListItem, ListIcon, Grid  } from "@chakra-ui/react";
// import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram, BsMailbox, BsTelephone, BsPhone, BsFileEarmarkCodeFill, BsMapFill, BsMap } from "react-icons/bs";
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube, AiFillInstagram, AiOutlineEnvironment, AiOutlineMobile, AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

  const Footer: React.FC = () => {

    return <Flex
    justify={'space-between'}
    className={f.Cont}>
      <Box>
      <Heading>CONTACTO</Heading>
      <List 
      textAlign={'left'}
      >
        <ListItem>
          <ListIcon as={AiOutlineMail} me='1em'/>
          colvetsalta@gmail.com
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineMobile} me='1em'/>
          +54 9 387 528-9422
          </ListItem>
        <ListItem>
          <ListIcon as={AiOutlinePhone} me='1em'/>
          0387-4227751
          </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineEnvironment} me='1em'/>
          J. M. Leguizamón 1844
          </ListItem>
      </List>
      </Box>
      <Box
    bg='whiteAlpha.300'
    fontSize={'1.5em'}
    >
      <Heading>REDES</Heading>
      <Grid
      templateColumns='repeat(4, 1fr)'
      templateRows='repeat(1, 1fr)'
      gap='2'>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillLinkedin /></Link>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillFacebook /></Link>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillYoutube /></Link>
      <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillInstagram /></Link>
      </Grid>
      </Box>
    </Flex>;
}

export default Footer;