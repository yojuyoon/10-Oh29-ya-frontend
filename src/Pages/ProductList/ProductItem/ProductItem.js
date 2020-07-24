import React from "react";
import "./ProductItem.scss";

class ProductItem extends React.Component {
  render() {
    const { data } = this.props;
    const { image, brand, name, price, discount_rate, discount_price } = data;

    return (
      <li className="itemContainer">
        <div className="imgBox">
          <img src={data.image} />
        </div>
        <div className="info">
          <div className="brand">{data.brand}</div>
          <div className="name">{data.name}</div>
          <div className="price">
            <div className={data.discount_rate ? "sellPrice" : "nonDiscounted"}>
              <span>{parseInt(data.price)}</span>
              <span className={data.discount_rate ? "hide" : "nonDiscounted"}>
                원
              </span>
            </div>
            <div
              className={
                data.discount_rate ? "discountedPrice" : "discountedPrice hide"
              }
            >
              <span>{data.discount_rate}</span>
              <span>% </span>
              <span>{parseInt(data.discount_price)}</span>
              <span>원</span>
            </div>
          </div>
          <div className="freeShipping">무료배송</div>
        </div>
        <div className="heartArea">
          <div className="heart">
            <div className="image">
              <i class="far fa-heart" />
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
