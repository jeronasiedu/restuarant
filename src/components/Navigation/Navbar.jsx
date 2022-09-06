import {
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
} from "@chakra-ui/react"
import { BiShoppingBag, CgMenu } from "react-icons/all"
const Navbar = () => {
  const links = [
    {
      title: "Menu",
      url: "/",
    },
    {
      title: "Services",
      url: "/",
    },
    {
      title: "About",
      url: "/",
    },
    {
      title: "Gallery",
      url: "/",
    },
  ]
  return (
    <HStack py="3" px={[3, 6, 8]} shadow="sm" as="nav">
      <Link href="/">Logo</Link>
      <Spacer />
      <HStack spacing={[4, 5, 7, 10]}>
        <HStack spacing={[4, 5, 7, 10]} display={["none", "none", "block"]}>
          {links.map((item, idx) => (
            <Link key={idx} href={item.url}>
              {item.title}
            </Link>
          ))}
        </HStack>
        <IconButton
          icon={<BiShoppingBag size={22} />}
          isRound
          variant="ghost"
        />
        <Show below="md">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<CgMenu />}
              variant="outline"
            />
            <MenuList>
              {links.map((item, index) => (
                <MenuItem key={index}>{item.title}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
      </HStack>
    </HStack>
  )
}

export default Navbar
