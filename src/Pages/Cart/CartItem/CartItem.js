import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.cartData.item_quantity, //나중에 연결하면 컴디마에서 setState해 줄것.
      checkState: false,
      checkMasterState: false,
    };
  }

  // +눌렀을 때 작동되는 함수
  handleSum = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  // -눌렀을 때 작동되는 함수
  handleMinus = () => {
    //왜 1이상이지? 이건 이상한데,,
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  //CartItem안에 물건 금액 계산 하는 함수
  handleTotalPriceItem = () => {
    const { discount_rate, discount_price, price } = this.props.cartData;
    const { quantity } = this.state;

    if (discount_rate) {
      return quantity * discount_price;
    }
    return quantity * price;
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
    } = this.props.cartData;

    const { itemSelected } = this.props;

    return (
      <div className="CartItem">
        <div className="td1">
          <span
            className="check"
            onClick={() => this.props.handleSelectedItem(id)}
          >
            <input
              type="checkbox"
              checked={itemSelected.includes(id) ? "checked" : null}
              // checked={
              //   this.state.checkState
              //     ? this.props.checkMasterState
              //       ? "checked"
              //       : null
              //     : this.props.checkMasterState
              //     ? "checked"
              //     : null
              // }
            ></input>
          </span>
        </div>
        <div className="td2">
          <div className="image">
            <Link>
              <img src={image} />
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
              <span className="price">{parseInt(price)}</span>{" "}
              <span className="currency">원</span>
            </div>
            <div className={discount_rate ? "productPrice" : "hide"}>
              <span className="discountRate">[{discount_rate}%]</span>{" "}
              <span className="totalPrice">{parseInt(discount_price)}</span>
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
              <button className="btn" type="button" onClick={this.handleMinus}>
                -
              </button>
              <div className="quantity">{this.state.quantity}</div>
              <button className="btn" type="button" onClick={this.handleSum}>
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
