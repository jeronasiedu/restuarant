import {
  Box,
  Button,
  Center,
  chakra,
  Heading,
  Image,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { BiRightArrow } from "react-icons/bi"
import StylishText from "../../core/StylishText"
const Hero = () => {
  return (
    <Box bg="brand.50">
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[8, 5, 3]}
        maxW="container.xl"
        mx="auto"
        py={12}
        px={5}
      >
        <VStack flex="1" spacing={8}>
          <Heading
            size="3xl"
            textAlign={["left", "center", "center", "left"]}
            lineHeight={1.3}
          >
            Food for all moods, Where{" "}
            <chakra.span color="#FF9908">Ghana</chakra.span> eats!
          </Heading>
          <Text
            fontSize="xl"
            color="gray.600"
            lineHeight={1.7}
            textAlign={["left", "center", "center", "left"]}
          >
            Every flavor tells a <StylishText text="Story." color="#FF9908" />
            Delicious food with meaning. A new way to experience food at
            <StylishText text="Low Cost" />
            and High Quality.
          </Text>
          <Show above="md">
            <Button
              py={6}
              px={14}
              alignSelf="flex-start"
              // sx={{
              //   "@media (max-width: 768px)": {
              //     width: "100%",
              //   },
              // }}
              rightIcon={<BiRightArrow />}
            >
              Our Menu
            </Button>
          </Show>
        </VStack>
        <Center flex="1">
          <Image
            src="/images/food2.png"
            alt="An image of food on a plate"
            // h="full"
            objectFit="cover"
          />
        </Center>
        <Show below="md">
          <Button
            py={6}
            sx={{
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
            rightIcon={<BiRightArrow />}
          >
            Our Menu
          </Button>
        </Show>
      </Stack>
    </Box>
  )
}

export default Hero
