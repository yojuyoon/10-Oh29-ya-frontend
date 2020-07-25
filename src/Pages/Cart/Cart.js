import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="orderFlow">
          <ol>
            <li className="inCart">
              <span>01 SHOPPING BAG</span>
              <i class="fas fa-chevron-right"></i>
            </li>
            <li className="orderNow">
              <span className="greyed">02 ORDER</span>
              <i class="fas fa-chevron-right"></i>
            </li>
            <li className="orderConfirmed">
              <span className="greyed">03 ORDER CONFIRMED</span>
            </li>
          </ol>
        </div>
        <div className="order">
          <div className="productInfoWrap">
            <div className="cartList">
              <div className="category">
                <div className="th1">
                  <span className="check">
                    <input type="checkbox"></input>
                  </span>
                </div>
                <div className="th2">상품 정보</div>
                <div className="th3">수량</div>
                <div className="th4">주문금액</div>
                <div className="th5">배송비</div>
              </div>
              <div className="content">
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
                      <Link className="info">
                        PEACE BEGINS SMILE TEE (BLACK)
                      </Link>
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
            </div>
            <div className="cartControl">
              <button type="button">선택상품 삭제</button>
              <button type="button">품절상품 삭제</button>
              <p>장바구니는 접속 종료 후 60일 동안 보관됩니다.</p>
            </div>
          </div>
          <div className="priceInfoWrap">
            <div className="category">
              <div className="th1">총 주문금액</div>
              <div className="th2">총 배송비</div>
              <div className="th3">총 결제금액</div>
            </div>
            <div className="content">
              <div className="td1">
                <div className="totalPrice">
                  <span className="price">38,000</span>
                  <span className="currency">원</span>
                </div>
                <div className="quantity">총 1개</div>
              </div>
              <div className="td2">
                <span className="price">0</span> <span>원</span>
              </div>
              <div className="td3">
                <div className="totalPayment">
                  <span className="price">38,000</span>
                  <span className="currency">원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btnOrderWrap">
            <button className="btnShopping" type="button">
              CONTINUE SHOPPING
            </button>
            <button className="btnCheckout" type="button">
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
