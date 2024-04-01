import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carddetails from "../Card/Carddetail";
import styles from "./Carousel.module.css";
import "swiper/css";
import { useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Leftarrow from "./Leftarrow/Leftarrow";
import Rightarrow from "./Rightarrow/Rightarrow";
const Controldata = (data) => {
  const swiper = useSwiper();
  const { cntr } = data;
  useEffect(() => {
    swiper.slideTo(0);
  }, [cntr]);

  return <></>;
};

function Carousel(data) {
  const swiperitems = () => {
    return (
      <>
        {data.carouseldata.map((ele) => (
          <SwiperSlide key={ele.id}>
            
            <Carddetails carddata={ele} type={data.carouseldata.type} />
          </SwiperSlide>

        ))}
      </>
    );
  };

  return (
    <>
      <div className={styles.swiperdiv}>
        <Swiper
          slidesPerView={7}
          modules={[Pagination, Navigation]}
          spaceBetween={40}
        >
          <Controldata controldata={data.carouseldata} />
          <Leftarrow />
<Rightarrow/>
          {swiperitems(data.carouseldata)}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
