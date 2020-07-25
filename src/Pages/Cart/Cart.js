import React from "react";
import "./Cart.scss";
// import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const cartData = [
  {
    id: 410,
    name: "[29Edition.]_PEACE BEGINS SMILE TEE (WHITE)",
    price: "38000.00",
    discount_rate: 10,
    discount_price: "34200.00",
    brand: "빅웨이브컬렉티브",
    image: [
      "https://img.29cm.co.kr/next-product/2020/05/22/1760d38e60584816b499e4a7c19e14e2_20200522155254.jpg?width=700",
    ],
    item_quantity: 2,
  },
  {
    id: 1004,
    name: "레이스 롱원피스 잠옷",
    price: "53000.00",
    // discount_rate: 90,
    // discount_price: "5300.00",
    brand: "코즈넉",
    image: [
      "//img.29cm.co.kr/next-product/2020/07/07/ce3c05a2f144411b882529837a13f329_20200707152351.jpg?width=150",
    ],
    item_quantity: 1,
  },
];

class Cart extends React.Component {
  handleSumToalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total = parseInt(total) + Number(cartData[i].price);
      // total = cartData[1].price;
      // console.log(typeof cartData[1].price);
    }

    return total;
  };

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

              {cartData.map((item, i) => {
                return <CartItem cartData={item} key={i} />;
              })}
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
                  <span className="price">{this.handleSumToalPrice()}</span>
                  <span className="currency">원</span>
                </div>
                <div className="quantity">총 1개</div>
              </div>
              <div className="td2">
                <span className="price">0</span> <span>원</span>
              </div>
              <div className="td3">
                <div className="totalPayment">
                  <span className="price">{this.handleSumToalPrice()}</span>
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
