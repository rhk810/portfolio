import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Youtube from "../../img/yt.png";
import Porfolio from "../../img/portfolio.jpg";
import Wikipedia from "../../img/wiki.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href= "https://effulgent-sprite-abaec8.netlify.app/">
          <img src={Youtube} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href= "https://ravula-harish-kumar.netlify.app/">
          <img src={Porfolio} alt="" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href= "https://lambent-clafoutis-0cd039.netlify.app/">
          <img src={Wikipedia} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
