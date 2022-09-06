import {
  Button,
  Center,
  chakra,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { BiChevronRight } from "react-icons/bi"
import StylishText from "../../core/StylishText"
const Hero = () => {
  return (
    <Stack py={12} direction={["column", "column", "row"]} spacing={[8, 5, 3]}>
      <VStack flex="1" spacing={8} alignItems="flex-start">
        <Heading
          size="3xl"
          textAlign={["left", "center", "left"]}
          lineHeight={1.2}
        >
          Food for all moods, Where{" "}
          <chakra.span color="#FF9908">Ghana</chakra.span> eats!
        </Heading>
        <Text
          fontSize="xl"
          textAlign={["left", "center", "left"]}
          color="gray.600"
          lineHeight={1.7}
        >
          Every flavor tells a <StylishText text="Story." color="#FF9908" />
          Delicious food with meaning. A new way to experience food at
          <StylishText text="Low Cost" />
          and High Quality.
        </Text>
        <Button
          w={["80%", "50%", "auto"]}
          // alignSelf={["center", "left", "left"]}
          rightIcon={<BiChevronRight />}
        >
          Browse Menus
        </Button>
      </VStack>
      <Center flex="1">
        <Image
          src="/images/food2.png"
          alt="An image of food on a plate"
          // h="full"
          objectFit="cover"
        />
      </Center>
    </Stack>
  )
}

export default Hero
