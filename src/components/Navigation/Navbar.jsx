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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { BiMoon, BiSun, CgMenu } from "react-icons/all"
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
  const { toggleColorMode } = useColorMode()
  const themeIcon = useColorModeValue(<BiMoon size={22} />, <BiSun size={22} />)
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
          icon={themeIcon}
          isRound
          variant="ghost"
          onClick={toggleColorMode}
        />
        <Show breakpoint="(max-width: 767px)">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<CgMenu />}
              variant="outline"
              rounded="md"
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
