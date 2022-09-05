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
      mx={2}
      wordBreak="keep-all"
      whiteSpace="nowrap"
    >
      {text}
    </chakra.span>
  )
}
export default StylishText
