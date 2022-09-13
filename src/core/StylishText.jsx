import { chakra } from "@chakra-ui/react"
const StylishText = ({ text }) => {
  return (
    <chakra.span
      px={2}
      fontWeight={500}
      color="#fff"
      bg="brand.400"
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
