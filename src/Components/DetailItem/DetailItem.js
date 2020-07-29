import React from "react";
import { withRouter } from "react-router-dom";
import { ip } from "./../../Pages/Login/ip";
import "./DetailItem.scss";

class DetailItem extends React.Component {
  state = {
    input: 1,
    data: {},
    heart: "",
  };

  calculationHandler = (e) => {
    let { input } = this.state;
    const { name } = e.target;
    const isPlus = name === "plus";

    if (!isPlus && input === 1) return 1;

    this.setState({
      input: isPlus ? (input += 1) : (input -= 1),
    });
  };

  quantityHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  componentDidMount = () => {
    fetch(`${ip}/product/${this.props.match.params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  shoppingHandler = () => {
    localStorage.setItem("cart_count", this.state.input);

    fetch(`http://${ip}/cart/add`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        product: this.state.data.id,
        quantity: this.state.input,
      }),
    });

    this.props.history.push("/Cart");
  };

  cardPrice = () => {
    return (this.state.data.price * 2) / 100;
  };

  heartHandler = () => {};

  decimalRemove = (data) => {
    return (
      Math.floor(data).toLocaleString(undefined, {
        maximumFractionDigits: 5,
      }) + "원"
    );
  };

  render() {
    const { input, data } = this.state;
    const {
      calculationHandler,
      quantityHandler,
      shoppingHandler,
      cardPrice,
      heartHandler,
      decimalRemove,
    } = this;

    return (
      <div className="DetailItem">
        <div className="titleContainer">
          <div className="imgContainer">
            <img alt="logo" src={data.brand_logo} />
          </div>
          <div className="brandLink">
            <h1>{data.brand}</h1>
            <p>{data.brand_desc}</p>
            <button>BRAND HOME</button>
          </div>
        </div>
        <div className="detailItemContainer">
          <div className="imgContainer">
            <img alt="img" src={data.image} />
          </div>
          <div className="detailOrder">
            <div className="orderRowContainer">
              <div className="orderTitle">
                <h1>{data.name}</h1>
              </div>
              <div className="imgContainer">
                <svg
                  onClick={heartHandler}
                  viewBox="0 0 48 48"
                  width="24"
                  height="24"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
                <p>{data.like_num}</p>
              </div>
            </div>
            <p className="costPrice">{decimalRemove(data.price)}</p>
            <div className="priceContainer">
              <p className="price">
                {data.discount_rate}
                {"% "}
                {decimalRemove(data.discount_price)}
              </p>
              <button className="coupon">쿠폰적용불가상품</button>
            </div>
            <div className="titleBottomBorder" />
            <div className="saleContainer">
              <span className="tr">상품할인</span>
              <span className="td">
                {data.discount_rate}
                {"% "}
                {decimalRemove(data.discount_price)}
              </span>
            </div>
            <div className="benefitContainer">
              <span className="tr">추가혜택</span>
              <span>
                <p>현대카드 {cardPrice()}원 할인 (2% 청구할인)</p>
                <p>적립금 66p</p>
                <p className="openCard">무이자 카드보기</p>
              </span>
            </div>
            <div className="priceResultContainer">
              <div className="resultProduct">
                <span className="productName">{data.name}</span>
                <span className="rowContainer">
                  <span className="caculatar">
                    <button
                      className="numberBtn"
                      name="minus"
                      onClick={calculationHandler}
                    >
                      -
                    </button>
                    <input
                      className="productNumber"
                      value={input}
                      onChange={quantityHandler}
                    />
                    <button
                      className="numberBtn"
                      name="plus"
                      onClick={calculationHandler}
                    >
                      +
                    </button>
                  </span>
                  <span className="price">
                    {decimalRemove(data.discount_price)}
                  </span>
                </span>
              </div>
              <div className="border" />
              <div className="totalPrice">
                <span className="text">총 상품 금액</span>
                <span className="price">
                  {(data.discount_price * input).toLocaleString(undefined, {
                    maximumFractionDigits: 5,
                  })}
                  {"원"}
                </span>
              </div>
            </div>
            <div className="purcharseContainer">
              <button className="purchaseBtn bag" onClick={shoppingHandler}>
                SHOPPING BAG
              </button>
              <button className="purchaseBtn buy">BUY NOW</button>
            </div>
            <div className="firstPurchaseContainer">
              <span>
                앱에서 첫 구매 시 <span className="redFont">15%</span> 할인
                그리고 다양한 추가 할인 혜택들
              </span>
              <img
                alt="arrow"
                src="https://img.29cm.co.kr/next29cm/combined_shape.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailItem);
