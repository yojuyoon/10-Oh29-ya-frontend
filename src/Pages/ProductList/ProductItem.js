import React from "react";
import "./ProductItem.scss";

class ProductItem extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <li className="itemContainer">
        <div className="imgBox">
          <img src="//img.29cm.co.kr/next-product/2020/07/20/c97515156b3b4cd191004c9069eed367_20200720160946.jpg?width=500" />
        </div>
        <div className="info">
          <div className="brand">{data[0].brand}</div>
          <div className="name">{data[0].name}</div>
          <div className="price">
            <div className="sellPrice">
              <span>{data[0].sellPrice}</span>
            </div>
            <div className="discountedPrice">
              <span>{data[0].discountRate}</span>
              <span>{data[0].discountedPrice}</span>
              <span>원</span>
            </div>
          </div>
        </div>
        <div className="heartArea">
          <div className="heart">
            <div className="image">
              <img src="Images/test_heart2.png" />
            </div>
            <div className="count">1,189</div>
          </div>
          <div className="review">
            <div className="image">
              <img src="Images/test_heart2.png" />
            </div>
            <div className="count">265</div>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductItem;
