import {
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

const Dishes = () => {
  const mealTime = [
    {
      type: 'Breakfast',
    },
    {
      type: 'Launch',
    },
    {
      type: 'Dinner',
    },
  ]
  const [active, setActive] = useState('Launch')
  const handleActive = (e) => {
    setActive(e.target.textContent)
  }
  return (
    <VStack alignItems="flex-start" py={8}>
      <Stack w="full" direction={['column', 'column', 'row']} spacing={3}>
        <Heading
          justifySelf="center"
          pos="relative"
          sx={{
            '&::before': {
              content: "''",
              pos: 'absolute',
              bottom: -1,
              left: 0,
              //   transform: 'translateX(-50%)',
              w: '40%',
              height: '4px',
              rounded: 'sm',
              bg: 'blue.400',
            },
          }}
        >
          Our New Hottest Dish
        </Heading>
        <Spacer />
        <ButtonGroup isAttached variant="outline">
          {mealTime.map((item, idx) => (
            <Button
              key={idx}
              variant={active === item.type ? 'solid' : ''}
              onClick={handleActive}
              colorScheme={active === item.type ? 'blue' : ''}
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
