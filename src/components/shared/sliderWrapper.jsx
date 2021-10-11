import { Container } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

/**
 * A slider component to display slide carousel 
 * 
 * @param {*} props 
 */


 function SliderCore({ title, children,initialSlide }) {
  const slidesToShow = useMemo(
    () => (window.matchMedia("(max-width: 750px)").matches ? 1 : 3),
    []
  ); // if its Mobile, display 1 Slide, else 3
  
  // config of slider
  const settings = {
    slidesToShow: slidesToShow,
    infinite: false,
    slidesToScroll: 1,
    initialSlide:initialSlide
  };


  return (
    <Container>
      <h2>{title || "Slides"}</h2>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}
const  SliderWrapper = React.memo(SliderCore);
export default SliderWrapper