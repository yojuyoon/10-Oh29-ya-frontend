import React from "react";
import { withRouter } from "react-router-dom";
import { itemList } from "./itemListData";
import "./SpecialOrder.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="SpecialOrder">
        <ul className="itemContainer">
          {itemList.item.map(({ index, img, title, subtitle, date }) => (
            <li key={index} className="itemList">
              <div className="imgContainer">
                <img className="orderImg" alt="img" src={img} />
              </div>
              <p className="itemTitle">{title}</p>
              <p className="itemSubtitle">{subtitle}</p>
              <div className="dDayBubble"></div>
              <div className="dDayBorder"></div>
              <p className="itemDate">{date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Login);
