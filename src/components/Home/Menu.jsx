import {
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
  LinkBox,
  LinkOverlay,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'
import { useRef, useCallback, useEffect, useState, Suspense } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/all'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
const Menu = () => {
  const [tablet] = useMediaQuery('(min-width:62em)')
  const [desktop] = useMediaQuery('(min-width:80em')
  const sliderRef = useRef()
  const [menu, setMenu] = useState([])
  let spacing = tablet ? 15 : desktop ? 20 : 10
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])
  const fetchMenu = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    )
    const { categories } = await response.json()
    setMenu(categories)
  }
  useEffect(() => {
    fetchMenu()
  }, [])

  return (
    <VStack alignItems="flex-start" py={8} spacing={8}>
      <HStack w="full">
        <Heading
          justifySelf="center"
          pos="relative"
          sx={{
            '&::before': {
              content: "''",
              pos: 'absolute',
              bottom: -1,
              left: '50%',
              transform: 'translateX(-50%)',
              w: '50%',
              height: '4px',
              rounded: 'sm',
              bg: 'blue.400',
            },
          }}
        >
          Our Menus
        </Heading>
        <Spacer />
        <HStack>
          <IconButton icon={<BiLeftArrow size={20} />} onClick={handlePrev} />
          <IconButton icon={<BiRightArrow size={20} />} onClick={handleNext} />
        </HStack>
      </HStack>
      <Suspense fallback={<Text>Loading</Text>}>
        <Swiper
          spaceBetween={spacing}
          slidesPerView={3}
          grabCursor
          style={{
            width: '100%',
          }}
          loop
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
            992: {
              slidesPerView: 7,
            },
          }}
          ref={sliderRef}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
          }}
        >
          {menu.map((item, idx) => (
            <SwiperSlide key={idx}>
              <LinkBox>
                <VStack
                  p={6}
                  bg="blue.100"
                  rounded="md"
                  _hover={{
                    bg: 'blue.400',
                  }}
                  role="group"
                  transition="0.5s ease background-color"
                >
                  <Center overflow="hidden">
                    <LinkOverlay href="/">
                      <Image
                        src={item.strCategoryThumb}
                        alt={item.strCategory}
                        w="full"
                        h="full"
                        objectFit="cover"
                      />
                    </LinkOverlay>
                  </Center>
                  <Text
                    _groupHover={{
                      color: 'white',
                    }}
                    transition="0.5s ease"
                    fontSize="lg"
                  >
                    {item.strCategory}
                  </Text>
                </VStack>
              </LinkBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </VStack>
  )
}

export default Menu
