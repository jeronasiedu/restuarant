import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/oswald"
import "swiper/css"
import theme from "./theme/appTheme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
