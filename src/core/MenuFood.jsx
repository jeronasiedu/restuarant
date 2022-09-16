import { Image, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
const MenuFood = ({ image }) => {
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
        h={["9rem", "10rem", "11rem"]}
        objectFit="cover"
      />
      <VStack spacing={0} alignItems="flex-start" p={2}>
        <Text>Rice with Stew</Text>
        <Text
          fontSize="sm"
          color="text.light"
          _dark={{
            color: "text.dark",
          }}
        >
          Enjoy our delicious rice prepared by our team of expert chefs
        </Text>
      </VStack>
    </VStack>
  )
}
export default MenuFood
