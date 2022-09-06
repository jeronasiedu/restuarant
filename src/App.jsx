import { Container } from "@chakra-ui/react"
import { Dishes, Hero, Menu, Navbar } from "./components"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container maxW="container.xl">
        <Menu />
        <Dishes />
      </Container>
    </>
  )
}

export default App
