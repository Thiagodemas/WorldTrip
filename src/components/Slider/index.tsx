import { Flex } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './SliderItem';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';


interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface SliderProps {
  continents: Continent[];
}

export default function Slider({ continents }: SliderProps) {
  return (
    <Flex
      w="100%"
      maxW={1240}
      mx="auto"
      justifyContent="center"
      alignItems="center"
      mb="8"
    >
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={(swiper) => console.log('slide change', swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={0}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {continents.map(continent => (
          <SwiperSlide key={`slide-${continent.id}`}>
            <SliderItem
              id={continent.id}
              name={continent.name}
              image={continent.carrouselImage}
              description={continent.description} />
          </SwiperSlide>))}

      </Swiper>
    </Flex>
  )
}