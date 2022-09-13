import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const theme = extendTheme(
  {
    fonts: {
      heading: `'capriola', sans-serif`,
      body: `'work sans', sans-serif`,
    },
    colors: {
      brand: {
        50: "#FFF4E5",
        100: "#FFE2B8",
        200: "#FFCF8A",
        300: "#FFBC5C",
        400: "#FFA92E",
        500: "#FF9600",
        600: "#CC7800",
        700: "#995A00",
        800: "#663C00",
        900: "#331E00",
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: "0",
          padding: "1.5rem",
          _focus: {
            boxShadow: "0 0 0 3px #FFA92E",
          },
        },
      },
      Text: {
        baseStyle: {
          fontSize: "1.25rem",
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
)
export default theme
