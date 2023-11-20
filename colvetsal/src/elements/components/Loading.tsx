import { Spinner } from '@chakra-ui/react'
export const Loading = () => {
  return <Spinner
  gridColumn={2}
  justifySelf={'center'}
  thickness='6px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
}
