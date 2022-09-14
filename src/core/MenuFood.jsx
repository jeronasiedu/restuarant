import { Box, Image, Text, VStack } from "@chakra-ui/react"

const MenuFood = () => {
  return (
    <VStack
      p={2}
      rounded="sm"
      bg="white"
      _dark={{
        bg: "brand.900",
      }}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    >
      <Box
        p={[1, 1, 1, 2]}
        borderWidth={2}
        borderStyle="dashed"
        rounded="sm"
        borderColor="brand.100"
        _dark={{
          borderColor: "brand.50",
        }}
      >
        <Image src="images/rice.jpg" alt="rice" rounded="sm" />
      </Box>
      <VStack spacing={1} alignItems="flex-start">
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
