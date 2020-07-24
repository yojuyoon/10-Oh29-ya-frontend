import React from "react";
import { withRouter } from "react-router-dom";
import { itemList } from "./itemListData";
import "./SpecialOrder.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="SpecialOrder">
        <ul className="itemContainer">
          {itemList.item.map(
            ({ index, img, title, subtitle, date, subcontent }) => (
              <li key={index} className="itemList">
                <div className="imgContainer">
                  <img className="orderImg" alt="img" src={img} />
                </div>
                <h2 className="itemTitle">{title}</h2>
                <h4 className="itemSubtitle">
                  {subtitle}
                  <span className="subcontent">{subcontent}</span>
                </h4>
                <div className="dDayBubble">
                  {index === 4 ? (
                    <p className="bubble">D-day 00:39:51</p>
                  ) : null}
                </div>
                <div className="dDayBorder" />
                <p className="itemDate">{date}</p>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(Login);
