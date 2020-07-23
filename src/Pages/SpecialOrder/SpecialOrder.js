import React from "react";
import { withRouter } from "react-router-dom";
import "./SpecialOrder.scss";
import "../../Styles/common.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="SpecialOrder">
        <section className="orderContainer">
          <ul className="itemContainer">
            <li className="itemList">
              <div className="imgContainer">
                <img
                  className="orderImg"
                  alt="img"
                  src="Images/orderImg1.jpg"
                />
              </div>
              <p className="itemTitle">
                뉴트로 스타일로 돌아온 오비라거 랄라베어
              </p>
              <p className="itemSubtitle">
                29cm 단독, 오비라거 랄라베어 MD 한정판 4종
              </p>
              <div className="dDayBubble"></div>
              <div className="dDayBorder"></div>
              <p className="itemDate">2020.07.21 ~ 08.10</p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
