import { chakra } from "@chakra-ui/react"
const StylishText = ({ text, color = "blue.600" }) => {
  return (
    <chakra.span
      borderWidth={2}
      borderColor={color}
      py={1}
      px={2.5}
      rounded="full"
      fontWeight={500}
      color={color}
      mr={2}
    >
      {text}
    </chakra.span>
  )
}
export default StylishText
