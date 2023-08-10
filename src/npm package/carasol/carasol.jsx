import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img13, img14, img15 } from "../../assets/images";


const Front = () => {
  const images = [
    img13,
    img14,
    img15,
  ];

    return (

        <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} width={100} height={'540px'} style={{objectFit:'cover'}} />
            </div>
          ))}
        </Carousel>
 
    );
};

export default Front;
