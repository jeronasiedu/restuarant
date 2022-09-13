import { Container } from "@chakra-ui/react"
import { About, Hero, Navbar } from "./components"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container maxW="container.xl">
        <About />
      </Container>
    </>
  )
}

export default App
