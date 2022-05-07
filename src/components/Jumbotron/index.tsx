import { Flex, Text } from "@chakra-ui/react";

interface JumbotronProps {
  image: string;
  name: string;
}

export default function Jumbotron({ image, name }: JumbotronProps) {
  return (
    <Flex
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      h={["150px", "500px"]}
      m="auto"
      direction="column-reverse"
      justify={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
      pl="8"
      pb="8"
    >
      <Text
        fontSize={["28px", "48px"]}
        fontWeight="600"
        color="white"
        align={["center", "left"]}
        w="100%"
        maxW={1460}
        mx="auto"
        my={["auto", "0"]}
        p="8"
      >{name}</Text>
    </Flex>
  )
}