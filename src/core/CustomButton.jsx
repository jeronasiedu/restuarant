import { Box, Button } from "@chakra-ui/react"
import { BiRightArrow } from "react-icons/bi"

const CustomButton = ({ text, icon }) => {
  return (
    <Button display="flex">
      Latest Offers
      <Box>
        <BiRightArrow />
      </Box>
    </Button>
  )
}

export default CustomButton
