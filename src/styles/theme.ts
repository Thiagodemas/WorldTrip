import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    yellow: {
      "900": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans- serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'black.900'
      }
    }
  }
})