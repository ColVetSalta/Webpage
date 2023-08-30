import React from "react";
import { Image } from '@chakra-ui/react';
import TopBack from '../../../assets/DSCN2717.png'
interface HomeProps {}

const Home: React.FC <HomeProps> = ()=> {
	return (
	<>		
	<Image width={'99dvw'} src={TopBack} alt="top background"/>
	<h1>Bienvenidos</h1>
	</>		
	)
};

export default Home;