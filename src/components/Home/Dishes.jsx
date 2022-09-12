import {
  Button,
  ButtonGroup,
  Heading,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"

const Dishes = () => {
  const mealTime = [
    {
      type: "Breakfast",
    },
    {
      type: "Launch",
    },
    {
      type: "Dinner",
    },
  ]
  const [active, setActive] = useState("Launch")
  const handleActive = (e) => {
    setActive(e.target.textContent)
  }
  return (
    <VStack alignItems="flex-start" py={8}>
      <Stack w="full" direction={["column", "column", "row"]} spacing={3}>
        <Heading justifySelf="center" pos="relative">
          Our New Hottest Dish
        </Heading>
        <Spacer />
        <ButtonGroup isAttached variant="outline">
          {mealTime.map((item, idx) => (
            <Button
              key={idx}
              variant={active === item.type ? "solid" : "outline"}
              colorScheme={active === item.type ? "brand" : "gray"}
              onClick={handleActive}
            >
              {item.type}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </VStack>
  )
}

export default Dishes
