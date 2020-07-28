import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      checkState: false,
      checkMasterState: false,
    };
  }

  componentDidMount() {
    this.setState({ quantity: this.props.cartData.quantity });
    // console.log(this.props.cartData.quantity);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ quantity: this.props.cartData.quantity });
    }
  }

  // +눌렀을 때 작동되는 함수
  // handleSum = () => {
  //   const { discount_rate, discount_price, price, id } = this.props.cartData;
  //   this.setState({ quantity: this.state.quantity + 1 });
  //   console.log(id);

  //   ///// ///// ///// ///// /////

  //   fetch("http://10.58.4.24:8000/cart/add", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user: 1,
  //       product: id,
  //       quantity: 1,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });

  //   ///// ///// ///// ///// ///// /////
  // };

  // -눌렀을 때 작동되는 함수
  // handleMinus = () => {
  //   const { discount_rate, discount_price, price, id } = this.props.cartData;
  //   //왜 1이상이지? 이건 이상한데,,
  //   if (this.state.quantity > 1) {
  //     this.setState({ quantity: this.state.quantity - 1 });
  //   }

  //   ///// ///// ///// ///// /////

  //   fetch("http://10.58.4.24:8000/cart/add", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user: 1,
  //       product: id,
  //       quantity: -1,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });

  //   ///// ///// ///// ///// /////
  // };

  //CartItem안에 물건 금액 계산 하는 함수
  handleTotalPriceItem = () => {
    const { discount_rate, discount_price, price } = this.props.cartData;
    const { quantity } = this.state;

    if (discount_rate) {
      return (quantity * +discount_price).toLocaleString();
    }

    return (quantity * +price).toLocaleString();
  };

  handleDelEachItem = () => {
    console.log(this.price.cartData.id);
    console.log("삭제할거야");
  };

  render() {
    // console.log(this.props.checkMasterState);

    const {
      id,
      image,
      brand,
      name,
      price,
      discount_rate,
      discount_price,
      quantity,
    } = this.props.cartData;

    const { itemSelected } = this.props;

    return (
      <div className="CartItem">
        <div className="td1">
          <span
            className="check"
            onClick={() => this.props.handleSelectedItem(id, quantity)}
          >
            <input
              type="checkbox"
              checked={itemSelected.includes(id) ? "checked" : null}
            ></input>
          </span>
        </div>
        <div className="td2">
          <div className="image">
            <Link>
              <img src={image} alt="product" />
            </Link>
          </div>
          <div className="productInfo">
            <div>
              <Link className="name">{brand}</Link>
            </div>
            <div>
              <Link className="info">{name}</Link>
            </div>
            <div className="originalPrice">
              <span className="price">{parseInt(price).toLocaleString()}</span>{" "}
              <span className="currency">원</span>
            </div>
            <div className={discount_rate ? "productPrice" : "hide"}>
              <span className="discountRate">[{discount_rate}%]</span>{" "}
              <span className="totalPrice">
                {parseInt(discount_price).toLocaleString()}
              </span>
              <span className="currency">원</span>
            </div>
            <button
              className="delBtn"
              onClick={this.handleDelEachItem}
            ></button>
          </div>
        </div>
        <div className="td3">
          <div>
            <div className="inputQuantity">
              <button
                className="btn"
                type="button"
                onClick={() => this.props.handleMinus(id)}
              >
                -
              </button>
              <div className="quantity">{this.state.quantity}</div>
              <button
                className="btn"
                type="button"
                onClick={() => this.props.handleSum(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="td4">
          <div>
            <div className="price">
              <span>{this.handleTotalPriceItem()}</span>
              <span>원</span>
            </div>
            <div>
              <button>
                <Link>BUY NOW</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="td5">29CM 무료배송</div>
      </div>
    );
  }
}

export default CartItem;
