import { Box, Button, ButtonGroup, Heading, Stack } from "@chakra-ui/react"
import { useState } from "react"

const Explore = () => {
  const menus = ["Breakfast", "Lunch", "Dinner", "Dessert"]
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)
  const changeMenuIndex = (id) => {
    setActiveMenuIndex(id)
  }
  return (
    <Box as="section" py={[4, 6, 8]} px={2}>
      <Heading size="md" color="brand.400" mb={2}>
        Explore
      </Heading>
      <Stack
        direction={["column", "column", "row"]}
        justifyContent="space-between"
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
    </Box>
  )
}

export default Explore
