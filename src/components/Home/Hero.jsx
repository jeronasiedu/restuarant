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
import { AiOutlineDoubleRight } from "react-icons/all"
import { Autoplay, EffectCards } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import StylishText from "../../core/StylishText"
const Hero = () => {
  const slides = [
    "/images/food1.jpg",
    "/images/food3.jpg",
    "/images/food4.jpg",
    "/images/food5.jpg",
    "/images/lunch/4.jpg",
    "/images/dessert/3.jpg",
  ]
  return (
    <Box
      bg="brand.50"
      _dark={{
        // TODO: change the background color
        bg: "brand.900",
      }}
    >
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[8, 5, 8, 3]}
        maxW="container.xl"
        mx="auto"
        py={12}
        px={5}
        w="full"
      >
        <VStack w="full" spacing={8}>
          <Heading
            size="3xl"
            textAlign={["left", "center", "center", "left"]}
            lineHeight={1.1}
          >
            Food for all moods, Where{" "}
            <chakra.span
              color="brand.500"
              _dark={{
                color: "brand.400",
              }}
            >
              Ghana
            </chakra.span>{" "}
            eats!
          </Heading>
          <Text
            lineHeight={1.7}
            textAlign={["left", "center", "center", "left"]}
            maxW="xl"
          >
            Every flavor tells a <StylishText text="Story." />
            Delicious food with meaning. A new way to experience food at
            <StylishText text="Low Cost" />
            and High Quality.
          </Text>
          <Show above="md">
            <Button
              alignSelf={{ md: "center", lg: "flex-start" }}
              rightIcon={<AiOutlineDoubleRight />}
              mb={5}
              px={14}
              py={6}
            >
              Our Menu
            </Button>
          </Show>
        </VStack>
        <Center w="full" overflow="hidden">
          <Swiper
            modules={[EffectCards, Autoplay]}
            grabCursor
            effect="cards"
            centeredSlides
            autoplay
            loop
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                style={{
                  borderRadius: "0.4rem",
                  overflow: "hidden",
                }}
              >
                <Image src={slide} objectFit="cover" alt="swiper image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Center>
        <Show breakpoint="(max-width: 767px)">
          <Button
            px={14}
            py={6}
            sx={{
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
            rightIcon={<AiOutlineDoubleRight />}
          >
            Our Menu
          </Button>
        </Show>
      </Stack>
    </Box>
  )
}

export default Hero
