import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./MainSlider.scss";

class MainSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
    };

    return (
      <div className="MainSlider">
        <Slider {...settings}>
          <div>
            <img src="http://img.29cm.co.kr/next-product/2020/07/16/24c4e2a720c046f6be107964c02f1d93_20200716232700.jpg?width=2000" />
          </div>
          <div>
            <img src="http://img.29cm.co.kr/next-product/2020/07/16/91be5de2993948a08c804d53dffbd4e8_20200716232843.jpg?width=2000" />
          </div>
          <div>
            <img src="http://img.29cm.co.kr/next-product/2020/07/16/8826a7a213824ebb91166b847acb3d0c_20200716233634.jpg?width=2000" />
          </div>
          <div>
            <img src="http://img.29cm.co.kr/next-product/2020/07/16/629473ec8d674ed594d4e96f7155a82a_20200716233235.jpg?width=2000" />
          </div>
          <div>
            <img src="http://img.29cm.co.kr/next-product/2020/07/16/e7292da155b14d4c9f862a4792753fae_20200716233732.jpg?width=2000" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
