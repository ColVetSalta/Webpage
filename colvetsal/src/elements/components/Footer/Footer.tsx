import { Link as ReactLink } from 'react-router-dom';
import f from './Footer.module.css'
import { Flex, Heading, Link, Box, List, ListItem, ListIcon, Grid  } from "@chakra-ui/react";
import { 
  // AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineEnvironment,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineWhatsApp 
} from "react-icons/ai"

export default function Footer(): JSX.Element {
  return <Flex
    justify={'space-between'}
    className={f.Cont}>
    <Box>
      <Heading>CONTACTO</Heading>
      <List
        textAlign={'left'}
      >
        <ListItem>
          <ListIcon as={AiOutlineMail} me='1em' />
          colvetsalta@gmail.com
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineMobile} me='1em' />
          +54 9 387 528-9422
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlinePhone} me='1em' />
          0387-4227751
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineEnvironment} me='1em' />
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
        {/* <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillLinkedin /></Link> */}
        <Link as={ReactLink} className={f.footLink} to='https://www.facebook.com/ColegiodeMedicosVeterinariosdeSalta' isExternal><AiFillFacebook /></Link>
        <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillYoutube /></Link>
        <Link as={ReactLink} className={f.footLink} to='' isExternal><AiFillInstagram /></Link>
        <Link as={ReactLink} className={f.footLink} to='https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B5438765289422%26data%3DARDx9f4QkfLeviSabsujD_-xpltUzXG9JTF_pzi8kpiaNwl-j5N3BToK0lB8wN07zDo1Sl4gsXgH2sV_fFud4P4mhF5iHSHmDqoShA7VUNs9BZnC-3P9wgy1TrJwHfRgkYYzAIjv5-tgdrcUnGXV06E%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR0VC67SiHjToVR2GZkJ0hZf6g6SqeTmqEVkOFa_vTZDubPO9Eelnf5uaps&h=AT2Bdi7swmmOQivxVqlguvO3pcCXO0q5-LAATvcBs0q1PCtcPN6OhQlWBsGciZVdnLykg2IRg68fOvYjrXbs_dFK66G8yvKsNGAjY65Liqbk71nCSYHk68Pn7yFwoxlKu6I' isExternal><AiOutlineWhatsApp /></Link>
      </Grid>
    </Box>
  </Flex>;
}