import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: [],
      checkMasterState: false,
      checkState: false,
      cartData: [],
    };
  }

  //총 주문 금액 계산
  handleSumToalPrice = () => {
    const { itemSelected } = this.state;
    const { cartData } = this.state;

    let total = 0;

    for (let i = 0; i < cartData.length; i++) {
      if (itemSelected.includes(cartData[i].id)) {
        if (cartData[i].discount_rate) {
          total =
            total + cartData[i].quantity * Number(cartData[i].discount_price);
        } else {
          total = total + cartData[i].quantity * Number(cartData[i].price);
        }
      }
    }
    return total.toLocaleString();
  };

  //전체 선택 버튼을 따로 관리. 원래 담긴 아이템인 cartItem 배열의 전체 길이와 selectedItem 길이가 같고 다를 때 조건으로
  handleMasterSelectBtn = () => {
    const { itemSelected, cartData } = this.state;

    if (itemSelected.length === cartData.length) {
      //카드에 담긴 아이템 길이랑 selected item길이가 같으면 selected를 다 비워줌
      this.setState({ itemSelected: [], checkMasterState: false });
    } else {
      const filteredItems = cartData.map((item) => item.id);
      this.setState({
        itemSelected: filteredItems,
        checkMasterState: true,
      });
    }
  };

  //checkMasterState 별도 관리  //버그 있음,, 컴디업으로 옮겨야 하나?
  handleMasterState = () => {
    const { itemSelected, cartData } = this.state;

    if (itemSelected.length === cartData.length) {
      this.setState({ checkMasterState: true });
    } else {
      this.setState({ checkMasterState: false });
    }
  };

  //아이템이 들어오고 나갈 때 마다 itemSelected 배열을 관리해주는 함수
  handleSelectedItem = (id) => {
    const { itemSelected } = this.state;

    if (itemSelected.includes(id)) {
      const filter = itemSelected.filter((item) => {
        return item !== id;
      });
      this.setState({ itemSelected: filter }, () => this.handleMasterState());
    } else {
      this.setState(
        {
          itemSelected: [...itemSelected, id],
        },
        () => this.handleMasterState()
      );
    }
  };

  //DB로 보낼 데이터를 만드는 함수
  //형태 예시: [{product_list: [{id: 1004, quantity: 2}, {id: 404, quantity: 4}]}, {total: “225,700”}]
  handleCheckOut = () => {
    const { cartData, itemSelected } = this.state;
    let checkOut = [];
    let newData = [];
    var tempObj = {};

    for (let i = 0; i < itemSelected.length; i++) {
      for (let j = 0; j < cartData.length; j++) {
        if (itemSelected[i] === cartData[j].id) {
          tempObj = {};
          tempObj["id"] = itemSelected[i];
          tempObj["quantity"] = cartData[j].quantity;
          checkOut = [...checkOut, tempObj];
        }
      }
    }
    newData = [
      { product_list: checkOut },
      { total: this.handleSumToalPrice() },
    ];
    console.log(newData); //나중에 삭제
    ////

    // fetch("http://10.58.4.24:8000/cart/update", {
    //   method: "PATCH",
    //   headers: {
    //     Authorization: localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify({
    //     cart: newData,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("체크아웃 좀 시켜줘..ㅜ", res);
    //   });

    ////
    localStorage.setItem("cart_count", cartData.length);
    return newData;
  };

  //////////////////////////////////////////////////////////////////////////////

  /*플러스 마이너스를 하는 곳. 현재 props로 전달해서 cartItem에서 oncClick 호출 중*/

  handleSum = (itemId) => {
    console.log(itemId);

    const { cartData } = this.state;
    let temp = [];
    cartData.forEach((item) => {
      if (item.id === itemId) {
        let test = item;
        item.quantity = item.quantity + 1;
        temp.push(test);
      }
    });
    this.setState({ cardDate: temp });
  };

  handleMinus = (itemId) => {
    console.log(itemId);

    const { cartData } = this.state;
    let temp = [];
    cartData.forEach((item) => {
      if (item.id === itemId && item.quantity > 1) {
        let test = item;
        item.quantity = item.quantity - 1;
        temp.push(test);
      }
    });
    this.setState({ cardDate: temp });
  };

  //////////////////////////////////////////////////////////////////////////////

  //selectedItem 배열(선택 된 상품)에 해당하는 상품 삭제
  delSelectedItemGroup = () => {
    const { cartData, itemSelected } = this.state;
    let filtered = [...cartData];

    console.log(itemSelected);
    for (let i = 0; i < itemSelected.length; i++) {
      filtered = filtered.filter((eachItem) => {
        return itemSelected[i] !== eachItem.id;
      });
    }
    this.setState({ cartData: filtered, itemSelected: [] });
  };

  //cartItem에서 item개별적으로 삭제 버튼을 눌렀을 때 동작하는 함수
  delSelectedItem = (id) => {
    const { cartData, itemSelected } = this.state;

    const filter = cartData.filter((eachItem) => {
      return id !== eachItem.id;
    });
    this.setState({ cartData: filter });
    if (itemSelected.includes(id)) {
      this.handleSelectedItem(id);
    }
  };

  //만약에 삭제하려는 아이템아이디가 selected안에 있으면, 삭제

  //////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    ////내 로컬
    // fetch("http://localhost:3000/data/cartData.json")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState(
    //       {
    //         cartData: response.data,
    //       },
    //       () => {
    //         localStorage.setItem("cart_count", this.state.cartData.length);
    //       }
    //     );
    //   });

    fetch("http://10.58.4.24:8000/cart", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("여기!!", res);
        this.setState({
          cartData: res.data,
        });
      });

    ///
  }

  componentWillUnmount() {
    let newData = this.handleCheckOut();
    //newData를  body에 담아 POST
    //refresh했을 경우 어떻게 처리할지 고민해 볼 것.

    fetch("http://10.58.4.24:8000/cart/update", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        cart: newData,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("체크아웃 좀 시켜줘..ㅜ", res);
      });
  }

  render() {
    console.log(this.state.itemSelected);
    console.log("cartData: ", this.state.cartData);
    // console.log(this.state.checkMasterState);

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
              {this.state.cartData.map((item, i) => {
                return (
                  <CartItem
                    cartData={item}
                    checkMasterState={this.state.checkMasterState}
                    itemSelected={this.state.itemSelected}
                    handleSelectedItem={this.handleSelectedItem}
                    handleSum={this.handleSum}
                    handleMinus={this.handleMinus}
                    delSelectedItem={this.delSelectedItem}
                    key={i}
                  />
                );
              })}
            </div>
            <div className="cartControl">
              <button type="button" onClick={this.delSelectedItemGroup}>
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
                <div className="quantity">
                  총 {this.state.itemSelected.length}개
                </div>
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
            <button
              className="btnCheckout"
              type="button"
              onClick={this.handleCheckOut}
            >
              <Link>CHECK OUT</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
