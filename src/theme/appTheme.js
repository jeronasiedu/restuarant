import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const theme = extendTheme(
  {
    fonts: {
      heading: `'nunito', sans-serif`,
      body: `'work sans', sans-serif`,
    },
    colors: {
      brand: {
        50: "#ddfcfd",
        100: "#baf2f3",
        200: "#94e8e7",
        300: "#6bddd8",
        400: "#45d4c8",
        500: "#2bbaaa",
        600: "#1d918c",
        700: "#0e6568",
        800: "#00383f",
        900: "#001518",
      },
    },
    components: {
      Button: {
        baseStyle: ({ colorMode }) => ({
          borderRadius: "0",
          _focus: {
            boxShadow:
              colorMode === "light" ? "0 0 0 3px #45d4c8" : "0 0 0 3px #1d918c",
          },
        }),
      },
      Text: {
        baseStyle: {
          fontSize: "1.25rem",
        },
      },
      Link: {
        baseStyle: ({ colorMode }) => ({
          _focus: {
            boxShadow:
              colorMode === "light" ? "0 0 0 3px #45d4c8" : "0 0 0 3px #1d918c",
          },
        }),
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
)
export default theme
