import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Slider from "react-slick";

import ashwin from "./img/testimonials/ashwin.png";
import jayashree from "./img/testimonials/jayashree.png";
import kaival from "./img/testimonials/kaival.png";
import swathi from "./img/testimonials/swathi.png";

const SliderSection = styled.section`
  max-width: 90rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  > div {
    text-align: center;
    padding: 5rem 0;
  }
  img {
    width: 18rem;
    margin: 0 auto;
    transition: 1s;
    transform: scale(0.8);
  }
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  .slick-dots,
  .slick-next,
  .slick-prev {
    position: absolute;
    display: block;
    padding: 0;
  }
  .slick-dots li button:before,
  .slick-next:before,
  .slick-prev:before {
    font-family: slick;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-loading .slick-list {
    background: url(ajax-loader.gif) center center no-repeat #fff;
  }
  @font-face {
    font-family: slick;
    font-weight: 400;
    font-style: normal;
    src: url(fonts/slick.eot);
    src: url(fonts/slick.eot?#iefix) format("embedded-opentype"),
      url(fonts/slick.woff) format("woff"),
      url(fonts/slick.ttf) format("truetype"),
      url(fonts/slick.svg#slick) format("svg");
  }
  .slick-next,
  .slick-prev {
    font-size: 0;
    line-height: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    color: transparent;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus:before,
  .slick-next:hover:before,
  .slick-prev:focus:before,
  .slick-prev:hover:before {
    opacity: 1;
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    opacity: 0.25;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: #fff;
  }
  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "â†";
  }
  .slick-next:before,
  [dir="rtl"] .slick-prev:before {
    content: "â†’";
  }
  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  [dir="rtl"] .slick-next:before {
    content: "â†";
  }
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }
  .slick-dots {
    bottom: -25px;
    width: 100%;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  .slick-dots li button:focus,
  .slick-dots li button:hover {
    outline: 0;
  }
  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "â€¢";
    text-align: center;
    opacity: 0.25;
    color: #000;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #000;
  }
  .slick-slide.slick-center img {
    transform: scale(1.1);
  }
`;

var settings = {
  dots: true,
  infinite: true,
  speed: 10,
  cssEase: "ease-out",
  centerMode: true,
  useTransform: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    { breakpoint: 500, settings: { autoplay: true, slidesToShow: 1 } }
  ]
};

const Testimonials = () => (
  <SliderSection>
    <Slider {...settings}>
      <div>
        <h3>
          <img src={ashwin} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={jayashree} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={kaival} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={swathi} />
        </h3>
      </div>
    </Slider>
  </SliderSection>
);

export default Testimonials;
