import React from "react";
import "./ProductItem.scss";

class ProductItem extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <li className="itemContainer">
        <div className="imgBox">
          <img src="//img.29cm.co.kr/next-product/2020/07/20/c97515156b3b4cd191004c9069eed367_20200720160946.jpg?width=500" />
        </div>
        <div className="info">
          <div className="brand">{data.brand}</div>
          <div className="name">{data.name}</div>
          <div className="price">
            <div className="sellPrice">
              <span>{data.sellPrice}</span>
            </div>
            <div className="discountedPrice">
              <span>{data.discountRate} </span>
              <span>{data.discountedPrice}</span>
              <span>원</span>
            </div>
          </div>
          <div className="freeShipping">무료배송</div>
        </div>

        <div className="heartArea">
          <div className="heart">
            <div className="image">
              <i class="far fa-heart"></i>
            </div>
            <div className="count">1,189</div>
          </div>
          <div className="review">
            <div className="image">
              <i class="far fa-comment-alt"></i>
            </div>
            <div className="count">265</div>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductItem;
