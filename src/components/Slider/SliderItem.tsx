import { Flex, Text, Box } from "@chakra-ui/react";
import Link from 'next/link';

interface SliderItemProps {
  id: number;
  image: string;
  name: string;
  description: string;
}

export default function SliderItem({
  id, image, name, description
}: SliderItemProps) {
  return (

    <Link href={`continent/${id}`}>
      <Flex
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        bg=""
        w="100%"
        h={["250px", "450px"]}>
        <Flex bg="#00000080" w="100%">
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            w="100%"
          >
            <Text fontWeight="700" color="white" fontSize={["24px", "48px"]}>{name}</Text>
            <Text fontWeight="600" color="white" fontSize={["14px", "24px"]}>{description}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
}