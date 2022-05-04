import { Button, HStack, IconButton, Link, Spacer } from '@chakra-ui/react'
import { BiShoppingBag, BiMenu } from 'react-icons/all'
const Navbar = () => {
  const links = [
    {
      title: 'Menu',
      url: '/',
    },
    {
      title: 'Services',
      url: '/',
    },
    {
      title: 'About',
      url: '/',
    },
    {
      title: 'Gallery',
      url: '/',
    },
  ]
  return (
    <HStack py="3" px={[3, 6, 8]} shadow="sm" as="nav">
      <Link href="/">Logo</Link>
      <Spacer />
      <HStack spacing={[4, 5, 7, 10]}>
        <HStack
          spacing={[4, 5, 7, 10]}
          display={['none', 'none', 'none', 'block']}
        >
          {links.map((item, idx) => (
            <Link key={idx} href={item.url}>
              {item.title}
            </Link>
          ))}
        </HStack>
        <IconButton
          icon={<BiShoppingBag size={22} />}
          colorScheme="linkedin"
          isRound
          variant="outline"
        />
        <Button
          colorScheme="linkedin"
          display={['none', 'none', 'none', 'block']}
        >
          Login
        </Button>
        <IconButton
          icon={<BiMenu size={22} />}
          colorScheme="linkedin"
          display={['inline-flex', 'inline-flex', 'inline-flex', 'none']}
        />
      </HStack>
    </HStack>
  )
}

export default Navbar
