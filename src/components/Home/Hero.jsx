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
} from "@chakra-ui/react"
import { GiMeal } from "react-icons/all"
import StylishText from "../../core/StylishText"
const Hero = () => {
  return (
    <Stack py={16} direction={["column", "column", "row"]} spacing={[8, 5, 3]}>
      <VStack flex="1" spacing={8}>
        <Heading
          size="3xl"
          textAlign={["center", "center", "left"]}
          lineHeight={1.2}
        >
          Food for all moods · Where{" "}
          <chakra.span color="#FF9908">Ghana</chakra.span> eats!
        </Heading>
        <Text
          fontSize="xl"
          textAlign={["center", "center", "left"]}
          color="gray.600"
          lineHeight={1.7}
        >
          Every flavor tells a <StylishText text="story" color="#FF9908" />.
          Delicious food with meaning. A new way to experience food. at {""}
          <StylishText text="Low Cost" />
          but High Quality.
        </Text>
        <chakra.form
          alignSelf={["center", "center", "flex-start"]}
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
          src="/images/food2.png"
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
