import {
  Button,
  ButtonGroup,
  Heading,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import MenuFood from "../../core/MenuFood"

const Explore = () => {
  const menus = ["Breakfast", "Lunch", "Dinner", "Dessert"]
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)
  const changeMenuIndex = (id) => {
    setActiveMenuIndex(id)
  }
  const numberOfSlides = useBreakpointValue(
    {
      base: 4,
      md: 6,
      lg: 10,
    },
    { ssr: false }
  )
  return (
    <VStack
      alignItems="flex-start"
      w="full"
      as="section"
      py={[4, 6, 8]}
      pb={10}
      px={1}
    >
      <Heading size="md" color="brand.400">
        Explore
      </Heading>
      <Stack
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        w="full"
        pb={5}
      >
        <Heading>Our Delicious Menu</Heading>
        <ButtonGroup isAttached>
          {menus.map((item, index) => (
            <Button
              key={index}
              variant={index === activeMenuIndex ? "solid" : "outline"}
              onClick={() => changeMenuIndex(index)}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
      <SimpleGrid
        w="full"
        minChildWidth={["160px", "170px", "190px", "210px"]}
        spacing={[2, 3]}
        rowGap={5}
      >
        {Array(numberOfSlides)
          .fill("*")
          .map((item, index) => (
            <MenuFood key={index} />
          ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Explore
