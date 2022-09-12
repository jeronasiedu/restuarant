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
import { EffectCards } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import StylishText from "../../core/StylishText"
const Hero = () => {
  const slides = [
    "/images/food1.jpg",
    "/images/food3.jpg",
    "/images/food4.jpg",
    "/images/food5.jpg",
  ]
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
        <VStack w="full" spacing={8}>
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
              rightIcon={<BiRightArrow />}
            >
              Our Menu
            </Button>
          </Show>
        </VStack>
        <Center w="full">
          <Swiper
            style={{
              maxWidth: "36rem",
            }}
            modules={[EffectCards]}
            effect="cards"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                // style={{
                //   width: "20rem",
                //   height: "20rem",
                // }}
              >
                <Image
                  src={slide}
                  rounded="xl"
                  objectFit="cover"
                  alt="swiper image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
