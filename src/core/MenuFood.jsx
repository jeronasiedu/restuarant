import { Box, Button, Image, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
const MenuFood = ({ image, name }) => {
  return (
    <VStack
      rounded="sm"
      bg="white"
      _dark={{
        bg: "card.dark",
      }}
      shadow="tailwind"
      overflow="hidden"
      as={motion.div}
      layout
      initial={{
        y: 70,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 70,
      }}
    >
      <Image
        src={image}
        alt="rice"
        rounded="sm"
        w="full"
        h={["12rem", "10rem", "11rem"]}
        objectFit="cover"
      />
      <VStack w="full" alignItems="flex-start" spacing={1}>
        <Box px={2}>
          <Text>{name}</Text>
        </Box>
        <Button w="full">Learn More</Button>
      </VStack>
    </VStack>
  )
}
export default MenuFood
