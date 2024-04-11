import { ReactComponent as Right } from "./Right.svg";
import { useSwiper } from "swiper/react";
import styles from "./Rightarrow.module.css"
function Rightarrow() {
  const swiper = useSwiper();
  return (
    <>
    <div className={styles.right}>
      <Right onClick={() => swiper.slideNext()} />
      </div>
    </>
  );
}

export default Rightarrow;
