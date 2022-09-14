import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/nunito"
import "@fontsource/nunito/300.css"
import "@fontsource/nunito/500.css"
import "@fontsource/nunito/600.css"
import "@fontsource/nunito/700.css"
import "@fontsource/nunito/800.css"
import "@fontsource/work-sans"
import "@fontsource/work-sans/300.css"
import "@fontsource/work-sans/500.css"
import "@fontsource/work-sans/600.css"
import "@fontsource/work-sans/700.css"
import "@fontsource/work-sans/800.css"
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
