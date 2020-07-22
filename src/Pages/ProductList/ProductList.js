import React from "react";
import "./ProductList.scss";
import "../../Styles/reset.scss"; //지울거

import ProductItem from "./ProductItem";

class ProductList extends React.Component {
  render() {
    return (
      <div className="ProductList">
        <div className="categoryWrap">
          <div className="leftNav">
            <div className="fakeNav">이야이</div>
          </div>
          <div className="rightItems">
            <div className="categoryList"></div>
            <div className="productContent">
              <ul>
                <ProductItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
