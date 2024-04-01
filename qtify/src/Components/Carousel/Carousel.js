
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import Carddetails from "../Card/Carddetail";
import styles from "./Carousel.module.css"
function Carousel(data) {

const count = 1 ;
    const swiperitems = () =>{
return (
    <>
   
{
    data.carouseldata.map((ele)=> <SwiperSlide key={ele.id} > <Carddetails carddata={ele} type={data.carouseldata.type} /></SwiperSlide>)
    
    
}

    </>
)
    }

    return <>
 <div className={styles.swiperdiv}>
 <Swiper slidesPerView={7} >

{swiperitems(data.carouseldata)}

    
</Swiper>
</div>
    
    </>
}

export default Carousel