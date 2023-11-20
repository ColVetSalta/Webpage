import { Card, Flex, Text } from "@chakra-ui/react";
import { DatosMinimos } from "../types";

export default function PresentCard({ n }: { n: DatosMinimos }): JSX.Element {
    return <Card
        background={'darkgray'}
        key={n.mp}>
        <Flex
            display={'column'}
            color={'#2c193e'}
        >
            <Text>Dr/a: {n.nombre} {n.apellido}</Text>
            <Text>M.P.: {n.mp}</Text>
        </Flex>
    </Card>;
}