import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
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
    discount_rate: 0,
    discount_price: "0.00",
    brand: "코즈넉",
    image: [
      "//img.29cm.co.kr/next-product/2020/07/07/ce3c05a2f144411b882529837a13f329_20200707152351.jpg?width=150",
    ],
    item_quantity: 1,
  },
  {
    id: 403,
    name: "[29Edition.]_NYLON BLEND SHORTS (Safari + Mango + Evergreen)",
    price: "45000.00",
    discount_rate: 35,
    discount_price: "29925.00",
    brand: "브릭",
    image: [
      "https://img.29cm.co.kr/next-product/2018/05/08/e84d1225ffe24f86bffd611d73b9d73d_20180508121032.jpg?width=700",
    ],
    item_quantity: 4,
  },
];

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: [],
      checkMasterState: false,
    };
  }

  handleSumToalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      // total = parseInt(total) + Number(cartData[i].price);
      // total = cartData[1].price;
      // console.log(typeof cartData[1].price);
      if (cartData[i].discount_rate) {
        total =
          total +
          cartData[i].item_quantity * Number(cartData[i].discount_price);
      } else {
        total = total + cartData[i].item_quantity * Number(cartData[i].price);
      }
    }

    return total;
  };

  //이게 아닌가벼;; 좀 더 고민해 볼것. 안됨
  //자식 컴포넌트에서도 리턴 값을 전달 받는 걸 생각해 보자,,,,,,
  // handleTotalPriceItem = () => {
  //   if (cartData.discount_price) {
  //     return cartData.quantity * cartData.discount_price;
  //   }
  //   return cartData.quantity * cartData.price;
  // };

  //itemSelected를 업데이트 cartItem컴포넌트에서 체크 된 것들의 배열
  handleSelectItem = (id) => {
    const { itemSelected } = this.state;
    console.log("HEY: " + id);

    for (let i = 0; i < itemSelected.length; i++) {
      if (itemSelected[i] === id) {
        return;
      }
    }
    this.setState({
      itemSelected: [...itemSelected, id],
    });
  };

  handleMasterSelectBtn = () => {
    const { itemSelected } = this.state;
    if (itemSelected.length == cartData.length) {
      console.log("다 있어!");
      //카드에 담긴 아이템 길이랑 selected item길이가 같으면 selected를 다 비워줌
      //자식컴포넌트 체크도 풀어야 하는데 그건 어떻게..?,,
      this.setState({ itemSelected: [] });
      this.setState({ checkMasterState: !this.state.checkMasterState });
      console.log(this.state.itemSelected);
    } else {
      console.log("하나라도 있어!");
      //자식 컴포넌트의 체크 풀고 & itemSelected에 장바구니에 담긴 모든 아이템 담기
      const filteredItems = cartData.map((item) => item.id);
      this.setState({
        itemSelected: filteredItems,
      });

      /////
      console.log("sdffsdjklfsdjkl");
    }
  };

  handleDelSelectedItem = (id) => {
    const { itemSelected } = this.state;
    for (let i = 0; i < itemSelected.length; i++) {
      if (itemSelected[i] === id) {
        itemSelected.splice(i, 1);
        console.log(this.state.itemSelected);
        return;
      }
    }
  };

  //여기서 fetch함수&POST메소드로 선택된 상품들을 알려주면 좋을 듯 한데,,,흠
  //배열로 보내 줄 수 있음
  delSelectedItems = () => {
    console.log("선택 된 상품 arr 삭제");
    //여기서 POST
    this.setState({ itemSelected: [] });
    console.log(this.state.itemSelected);
  };

  render() {
    console.log(this.state.itemSelected);

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
                    <input
                      type="checkbox"
                      checked={
                        this.state.checkMasterState ? "checked" : undefined
                      }
                      onClick={this.handleMasterSelectBtn}
                    ></input>
                  </span>
                </div>
                <div className="th2">상품 정보</div>
                <div className="th3">수량</div>
                <div className="th4">주문금액</div>
                <div className="th5">배송비</div>
              </div>

              {cartData.map((item, i) => {
                return (
                  <CartItem
                    cartData={item}
                    handleSelectItem={this.handleSelectItem}
                    handleDelSelectedItem={this.handleDelSelectedItem}
                    key={i}
                  />
                );
              })}
            </div>
            <div className="cartControl">
              <button type="button" onClick={this.delSelectedItems}>
                선택상품 삭제
              </button>
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
              <Link>CONTINUE SHOPPING</Link>
            </button>
            <button className="btnCheckout" type="button">
              <Link>CHECK OUT</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
