import React from "react";
import { Image } from '@chakra-ui/react';
import TopBack from '../../../assets/DSCN2717.png'
import { Novedades } from "../..";
interface HomeProps {}

const Home: React.FC <HomeProps> = ()=> {
	return (
	<>		
	<Image 
	position={'fixed'}
	left='0'
	width={'100%'} 
	src={TopBack} alt="top background"/>
	<Novedades/>
	</>		
	)
};

export default Home;