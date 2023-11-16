import { Container } from '@chakra-ui/react';
import { Novedades } from "../..";

 export default function Home(): JSX.Element {
	return <Container
	maxWidth={'130ch'}
	marginBlockStart={'16dvh'}
	marginBlockEnd={'3dvh'}
	>		
	<Novedades motive='home'/>
	</Container>
}