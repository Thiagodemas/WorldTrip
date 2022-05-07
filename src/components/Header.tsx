import { Flex, Image, Box } from '@chakra-ui/react'


export function Header() {
  return (
    <Flex
      h={100}
      align="center"
      justify="center"
    >
      <Image
        src='/images/logo.png'
        alt='Worldtrip'
        w={185}
      />
    </Flex>
  )
}