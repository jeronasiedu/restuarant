import { chakra } from "@chakra-ui/react"
const StylishText = ({ text, color = "blue.600" }) => {
  return (
    <chakra.span
      px={2}
      fontWeight={500}
      color="#fff"
      bg={color}
      mx={1}
      display="inline-block"
      wordBreak="keep-all"
      whiteSpace="nowrap"
    >
      {text}
    </chakra.span>
  )
}
export default StylishText
