import React from "react";
import "./ProductItem.scss";

class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      heartCount: 0,
      myHeartState: false,
    };
  }

  componentDidMount() {
    this.setState({
      heartCount: this.props.data.like_num,
      myHeartState: this.props.data.user_like_pressed,
    });
  }

  handleHeartItem = () => {
    this.setState({
      myHeartState: !this.state.myHeartState,
    });

    fetch("http://10.58.4.24:8000/product/like", {
      method: "PATCH",
      body: JSON.stringify({
        user: 2,
        product: this.props.data.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.like_num);

        this.setState({
          heartCount: res.like_num,
        });
      });
  };

  render() {
    const { data } = this.props;
    const { image, brand, name, price, discount_rate, discount_price } = data;

    return (
      <li className="itemContainer">
        <div className="imgBox">
          <img src={image} />
        </div>
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="price">
            <div className={discount_rate ? "sellPrice" : "nonDiscounted"}>
              <span>{parseInt(price)}</span>
              <span className={discount_rate ? "hide" : "nonDiscounted"}>
                원
              </span>
            </div>
            <div
              className={
                data.discount_rate ? "discountedPrice" : "discountedPrice hide"
              }
            >
              <span>{discount_rate}</span>
              <span>% </span>
              <span>{parseInt(discount_price)}</span>
              <span>원</span>
            </div>
          </div>
          <div className="freeShipping">무료배송</div>
        </div>
        <div className="heartArea">
          <div className="heart" onClick={this.handleHeartItem}>
            <div className="heartImageBox">
              <svg
                aria-label="non colored"
                className={this.state.myHeartState ? "hide" : "dislike"}
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
              <svg
                aria-label="colored"
                className={this.state.myHeartState ? "like" : "hide"}
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <div className="count">{this.state.heartCount}</div>
          </div>

          {/* <div className="review">
            <div className="image">
              <i class="far fa-comment-alt"></i>
            </div>
            <div className="count">265</div>
          </div> */}
        </div>
      </li>
    );
  }
}

export default ProductItem;
