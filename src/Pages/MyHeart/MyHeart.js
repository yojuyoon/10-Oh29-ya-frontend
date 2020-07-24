import React from "react";
import "./MyHeart.scss";

class MyHeart extends React.Component {
  handleClicked = () => {};
  render() {
    return (
      <div className="MyHeart">
        <aside className="myHeartMenu">
          <div className="user">
            <h2 className="userName">윤지영님</h2>
            <span className="myHeartNumber">
              나의 하트<span>11</span>
            </span>
            <span className="following">
              팔로잉<span>0</span>
            </span>
          </div>
          <ul className="myShoppingInfo">
            <h3 className="title">나의 쇼핑 정보</h3>
            <li className="orderInfo">주문 배송 조회</li>
            <li className="returnInfo">취소/교환/반품 내역</li>
            <li className="review">상품 리뷰</li>
            <li className="paper">증빙서류 발급</li>
          </ul>
          <ul className="myAccountSetting">
            <h3 className="title">나의 계정 설정</h3>
            <li className="userInfoEdit">회원 정보 수정</li>
            <li className="userGrade">회원 등급</li>
            <li className="currentMileage">마일리지현황</li>
            <li className="couponInfo">쿠폰</li>
          </ul>
          <ul className="serviceCenter">
            <h3 className="title">고객 센터</h3>
            <li className="inquiry">1:1 문의내역</li>
            <li className="productqna">상품 Q&A</li>
            <li className="notice">공지사항</li>
            <li className="faq">FAQ</li>
          </ul>
          <ul className="customerInfo">
            <h3 className="number">1644-0560</h3>
            <span>CUSTOMER@29CM.CO.KR</span>
            <span>AM 10:00 - PM 17:00</span>
            <span>(점심시간 12:00 - 14:00)</span>
            <span>DAY OFF(토/일/공휴일)</span>
          </ul>
          <button className="inquireBtn">1:1 문의하기 →</button>
        </aside>
        <main className="myHeartMain">
          <div className="myHeartTopContainer">
            <div className="membershipGrade">
              <h4 className="title">회원등급 〉</h4>
              <div className="membershipContent">
                <span className="grade">ORANGE</span>
                <button className="moreBtn">할인혜택 보기</button>
              </div>
            </div>
            <div className="coupon">
              <h4 className="title">사용가능쿠폰 〉</h4>
              <div className="number">2</div>
            </div>
            <div className="mileage">
              <h4 className="title">마일리지 〉</h4>
              <div className="number">910</div>
            </div>
          </div>
          <div className="myheartCategory">
            <button className="product">PRODUCT()</button>
            <button className="brand">BRAND()</button>
            <button className="tv">TV()</button>
            <button className="post">POST()</button>
          </div>
          <div className="myHeartContents"></div>
        </main>
      </div>
    );
  }
}

export default MyHeart;
