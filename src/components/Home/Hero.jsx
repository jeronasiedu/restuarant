import {
  Heading,
  Image,
  Stack,
  VStack,
  Center,
  Text,
  Button,
  InputGroup,
  Input,
  chakra,
  InputLeftElement,
} from '@chakra-ui/react'
import { GiMeal } from 'react-icons/all'
import heroImage from '../../assets/asset2.png'
const Hero = () => {
  return (
    <Stack py={16} direction={['column', 'column', 'row']} spacing={[8, 5, 3]}>
      <VStack flex="1" spacing={8}>
        <Heading size="3xl" textAlign={['center', 'center', 'left']}>
          It's not just food food, it's an experience
        </Heading>
        <Text
          fontSize="xl"
          textAlign={['center', 'center', 'left']}
          color="gray.600"
        >
          Hey! Our delicious food is waiting for you, we are always near to you
          with fresh item of food
        </Text>
        <chakra.form
          alignSelf={['center', 'center', 'flex-start']}
          color="gray.300"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <GiMeal />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Find a meal"
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              color="black"
            />
            <Button
              colorScheme="blue"
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
            >
              Search
            </Button>
          </InputGroup>
        </chakra.form>
      </VStack>
      <Center flex="1">
        <Image
          src={heroImage}
          alt="An image of food on a plate"
          w="full"
          h="full"
          objectFit="cover"
        />
      </Center>
    </Stack>
  )
}

export default Hero
