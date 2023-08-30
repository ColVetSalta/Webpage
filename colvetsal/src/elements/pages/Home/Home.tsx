import React from "react";
import { Container } from '@chakra-ui/react';
import { Novedades } from "../..";
interface HomeProps {}

const Home: React.FC <HomeProps> = ()=> {
	return <Container>		
	<Novedades/>
	</Container>
};

export default Home;