import React from "react";
import { Link } from "react-router-dom";
// import "./.scss";

class ProductComponentItem extends React.Component {
  render() {
    return (
      <li className="ProductComponentItem">
        <div className="storyBox">
          <div className="line" />
          <div className="feedImage">
            <img src="//img.29cm.co.kr/next-edition/2020/07/22/df6f904d61e448dab834f345e2642972_20200722135035.jpg?width=500" />
          </div>

          <div className="feedContent">
            <div className="title">어나더오피스의 오픈칼라 셔츠 발매</div>
            <div className="content">
              남녀노소 사랑받는 어나더오피스의 오픈칼라 셔츠가 발매됩니다.
              새로운 두 가지 컬러까지 추가되었어요. 뜨거운 찬사를 받고 있는
              어나더오피스의 셔츠를 오직 29CM에서 가장 먼저 만나보세요!
            </div>
          </div>
        </div>
        <div className="itemBox">
          <div className="itemContentLeft">
            <div className="itemImage">
              <img src="//img.29cm.co.kr/next-product/2020/07/22/c9a91679a93946cda9902044a4436d73_20200722224859.jpg?width=150" />
            </div>
            <div className="itemInfo">
              <div className="title">어나더오피스</div>
              <div className="content">Voyager Open Collar Shirt (Oatmeal)</div>
              <div className="priceBox">
                <div className="discount">
                  <span className="percent">10%</span>
                  <span className="price">88,290</span>
                  <span className="currency">won</span>
                </div>
              </div>
            </div>
          </div>
          <div className="heart">
            <div className="heartImg">
              <svg
                aria-label="좋아요"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <div>23</div>
          </div>
        </div>
        <div></div>
      </li>
    );
  }
}

export default ProductComponentItem;
