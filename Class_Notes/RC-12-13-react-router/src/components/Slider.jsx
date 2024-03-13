import React from "react";
import { Carousel } from "react-bootstrap";
import isa from "../img/isa.jpeg";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg";
const Slider = () => {
  return (
    // !!!!!!!!!!!
    //! fade=soluklaşarak diğer resme geç, autoPlay={true} otomatik resim değiş, interval={5000} 5 saniyede bir değiş. slide={false} otomatik geçişi iptal et.
    //! carusel in bootstrap ten gelen default attribute u autoPlay={true}.

    <Carousel variant="dark" interval={5000}>
      <Carousel.Item>
        <img className="w-100 " src={about} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 " src={devops} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 " src={isa} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
