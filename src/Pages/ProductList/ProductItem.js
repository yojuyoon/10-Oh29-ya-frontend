import React from "react";
import "./ProductList.scss";

class ProductItem extends React.Component {
  render() {
    return (
      <li className="itemContainer">
        <div className="imgBox">
          {/* <img src="//img.29cm.co.kr/next-product/2020/07/20/c97515156b3b4cd191004c9069eed367_20200720160946.jpg?width=500" /> */}
        </div>
        <div className="content"></div>
      </li>
    );
  }
}

export default ProductItem;
