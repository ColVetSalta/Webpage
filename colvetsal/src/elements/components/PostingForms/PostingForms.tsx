import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export default function PostingForms(): JSX.Element {
    return <FormControl>
        <FormLabel>M.P:</FormLabel>
        <Input
            placeholder="Número de Matrícula"
            type='number'
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Nombre:</FormLabel>
        <Input
            placeholder="Nombre completo"
            type='email'
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Input
            placeholder="Select Date and Time"
            type='email'
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Input
            placeholder="Select Date and Time"
            type='email'
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
}