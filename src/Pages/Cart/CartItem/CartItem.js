import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";

class CartItem extends React.Component {
  render() {
    return (
      <div className="CartItem">
        <div className="td1">
          <span className="check">
            <input type="checkbox"></input>
          </span>
        </div>
        <div className="td2">
          <div className="image">
            <Link>
              <img src="//img.29cm.co.kr/next-product/2020/05/22/5e39351e8dcc4bf980e6ed92c2fa1ee8_20200522153231.jpg?width=150" />
            </Link>
          </div>
          <div className="productInfo">
            <div>
              <Link className="name">빅웨이브 컬렉티브</Link>
            </div>
            <div>
              <Link className="info">PEACE BEGINS SMILE TEE (BLACK)</Link>
            </div>
            <div className="originalPrice">
              <span className="price">38,000</span>{" "}
              <span className="currency">원</span>
            </div>
            <div className="productPrice">
              <span className="discountRate">[10%]</span>{" "}
              <span className="totalPrice">34,200원</span>
            </div>
            <button className="delBtn"></button>
          </div>
        </div>
        <div className="td3">
          <div>
            <div className="inputQuantity">
              <button className="btn" type="button">
                -
              </button>
              <input type="number"></input>
              <button className="btn" type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="td4">
          <div>
            <div className="price">
              <span>34,200</span>
              <span>원</span>
            </div>
            <div>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="td5">29CM 무료배송</div>
      </div>
    );
  }
}

export default CartItem;
