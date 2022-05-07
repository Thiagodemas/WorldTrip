import { Flex, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head";
import { Category } from '../components/Category'
import { Header } from '../components/Header'
import Banner from '../components/Banner'

import db from '../../db.json';
import Slider from '../components/Slider';


export default function Home() {

  const { continents } = db;

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Home</title>
      </Head>
      <Header />
      <Banner />
      <Category />
      <Divider w="90px" h='3px' bg="black.500" m="auto" />
      <Heading
        w="100%"
        textAlign="center"
        mt={["8", "16"]}
        mb={["4", "8"]}
        fontSize={["20px", "36px"]}
        color="black.600"
        fontWeight="500"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents} />

    </Flex>
  )
}