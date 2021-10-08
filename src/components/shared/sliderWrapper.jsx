import { Container } from "@mui/material";
import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

export default function SliderWrapper(props) {
  const { title, children } = props;
  const slidesToShow = useMemo(
    () => (window.matchMedia("(max-width: 750px)").matches ? 1 : 3),
    []
  );
  const settings = { 
    slidesToShow: slidesToShow,
    infinite: false,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <h2>{title || 'Slides'}</h2>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}
