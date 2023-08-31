import React from "react";
import { Container } from '@chakra-ui/react';
import { Footer, Novedades } from "../..";
interface HomeProps {}

const Home: React.FC <HomeProps> = ()=> {
	return <Container>		
	<Novedades/>
	<Footer/>
	</Container>
};

export default Home;