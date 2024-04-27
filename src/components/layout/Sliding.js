'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function Sliding() {
  return(
    <section className="">
      {/* <div className="grid sm:grid-cols-3 gap-4"> */}
        {/* {bestSellers?.length > 0 && bestSellers.map(item => (
          <CarouselItem key={item._id} {...item} />
        ))} */}
        
      {/* </div> */}
    </section>
  )
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    //   return (
    //     <Slider {...settings}>
    //       <div>
            
    //       </div>
    //       <div>
    //         <h3>2</h3>
    //       </div>
    //       <div>
    //         <h3>3</h3>
    //       </div>
    //       <div>
    //         <h3>4</h3>
    //       </div>
    //       <div>
    //         <h3>5</h3>
    //       </div>
    //       <div>
    //         <h3>6</h3>
    //       </div>
    //     </Slider>
    //   );
}
