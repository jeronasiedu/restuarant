import { Container } from "@chakra-ui/react"
import { About, Explore, Hero, Navbar } from "./components"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container maxW="container.xl">
        <About />
        <Explore />
      </Container>
    </>
  )
}

export default App
