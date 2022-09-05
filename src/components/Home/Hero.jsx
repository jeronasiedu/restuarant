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
} from "@chakra-ui/react";
import { GiMeal } from "react-icons/all";
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
          <chakra.span color="blue.500">Ghana</chakra.span> eats!
        </Heading>
        <Text
          fontSize="xl"
          textAlign={["center", "center", "left"]}
          color="gray.600"
          lineHeight={1.7}
        >
          Every flavor tells a story. Delicious food with meaning. Food that
          tells a story {""}
          <chakra.span
            borderWidth={2}
            borderColor="blue.600"
            p={1.5}
            px={3}
            rounded="full"
            fontWeight={500}
            color="blue.600"
          >
            Low Cost,
          </chakra.span>{" "}
          High Quality
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
  );
};

export default Hero;
