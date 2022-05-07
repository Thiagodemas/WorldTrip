import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Flex, Box, Text, Image, Divider } from '@chakra-ui/react'
import React from 'react'
import { Category } from '../components/Category'

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex
        py="80px"
        justify="center"
        bgImage="/images/Background.svg"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          width="100%"
          maxW={1140}
          justify="space-between"
          position="relative"
        >
          <Flex
            width="100%"
            maxW={525}
            direction="column"
            justify="center"
          >
            <Text
              fontSize='4xl'
              fontWeight="500"
              color="black.50"
            >
              5 Continentes, <br />infinitas possibilidades.
            </Text>
            <Text
              fontSize='xl'
              color="black.50"
              pt="3"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Flex position="relative" w="430px">
            <Image
              src='/images/Airplane.svg'
              alt='Airplane'
              position='absolute'
              ml="auto"
              mr="0"
              mb="-20px"
            />
          </Flex>
        </Flex>
      </Flex>
      <Category />
      <Divider
        w="90px"
        h='3px'
        bg="black.500"
        m="auto"

      />
    </Box>
  )
}

export default Home
