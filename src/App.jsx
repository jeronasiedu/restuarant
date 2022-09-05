import { Container } from "@chakra-ui/react";
import { Dishes, Hero, Menu, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Hero />
        <Menu />
        <Dishes />
      </Container>
    </>
  );
}

export default App;
