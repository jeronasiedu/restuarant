import {
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

const About = () => {
  return (
    <Stack
      w="full"
      py={14}
      px={5}
      spacing={[8, 12, 16, 24]}
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
    >
      <Center w="full" rounded="md" overflow="hidden">
        <Image
          src="/images/people.jpg"
          alt="people at restaurant"
          objectFit="cover"
        />
      </Center>
      <VStack w="full" alignItems="flex-start" spacing={1}>
        <Heading size="md" color="brand.400">
          Welcome
        </Heading>
        <Heading>About Jeatery</Heading>
        <VStack spacing={3} pb={5}>
          <Text>
            Jeatery cooks and delivers hot, tasty, healthy & hygienic meals to
            your office or home - at the right time, every time for all your
            emotions
          </Text>
          <Text>
            Choose from large variety of healthy and delicious meal plans
            designed by our nutritionists and cooked to perfection by our proud
            Chefs
          </Text>
        </VStack>
        <Button px={14} w={["full", "full", "auto"]}>
          Latest Offers
        </Button>
      </VStack>
    </Stack>
  )
}

export default About
