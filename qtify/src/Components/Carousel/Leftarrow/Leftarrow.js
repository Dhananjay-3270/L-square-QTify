import { useSwiper } from "swiper/react";
import { ReactComponent as Left } from "./Left.svg";

function Leftarrow() {


    const swiper = useSwiper()
  return (
    <>
      <Left onClick={() => swiper.slidePrev()} />
    </>
  );
}

export default Leftarrow;
