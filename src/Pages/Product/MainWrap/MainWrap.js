import React from "react";
import "./MainWrap.scss";
import MainLeftNav from "./MainLeftNav/MainLeftNav";
import MainSlider from "./MainSlider/MainSlider";
import CategorySection from "./CategorySection/CategorySection";
import CategoryTwoBanner from "./CategoryTwoBanner/CategoryTwoBanner";

class MainWrap extends React.Component {
  render() {
    return (
      <div className="MainWrap">
        <div className="categoryMainWrap">
          <div className="categoryNav">
            <MainLeftNav />
          </div>
          <div className="categoryContent">
            <div className="mainSwiper">
              <MainSlider />
            </div>
            <div className="categorySection">
              <CategorySection />
              <CategoryTwoBanner />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainWrap;
