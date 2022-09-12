import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/oswald"
import React from "react"
import ReactDOM from "react-dom/client"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-cards"
import App from "./App"
import "./index.css"
import theme from "./theme/appTheme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
