import { useSwiper } from "swiper/react";
import { ReactComponent as Left } from "./Left.svg";
import styles from "./Leftarrow.module.css"
function Leftarrow() {


    const swiper = useSwiper()
  return (

   <div className={styles.left}>
      <Left onClick={() => swiper.slidePrev()} />
 </div>
  );
}

export default Leftarrow;
