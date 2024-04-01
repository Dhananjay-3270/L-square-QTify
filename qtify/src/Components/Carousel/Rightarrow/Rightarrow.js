import { ReactComponent as Right } from "./Right.svg";
import { useSwiper } from "swiper/react";
function Rightarrow() {
  const swiper = useSwiper();
  return (
    <>
      <Right onClick={() => swiper.slideNext()} />
    </>
  );
}

export default Rightarrow;
