import React from "react";
import "./Product.scss";
import "../../Styles/reset.scss";
import { withRouter } from "react-router-dom";
import MainWrap from "./MainWrap/MainWrap";
import TabSwiper from "./TabSwiper/TabSwiper";
import BrandName from "./BrandName/BrandName";
import ProductComponent from "./ProductComponent/ProductComponent";

class Product extends React.Component {
  render() {
    return (
      <div>
        <div className="Section">
          <div>
            <div>
              <MainWrap />
              <TabSwiper />
              <BrandName />
              <ProductComponent />
              <div className="rightBtnTopEnd"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Product);
