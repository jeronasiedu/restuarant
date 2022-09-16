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
      text: {
        dark: "#A0AEC0",
        light: "#4A5568",
      },
      card: {
        dark: "#262837",
      },
    },
    shadows: {
      tailwind:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
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
          _hover: {
            textDecorationColor: colorMode === "light" ? "#45d4c8" : "#1d918c",
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
