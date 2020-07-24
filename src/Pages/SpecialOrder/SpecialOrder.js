import React from "react";
import { withRouter } from "react-router-dom";
import { itemList } from "./itemListData";
import "./SpecialOrder.scss";

class Login extends React.Component {
  state = {
    dDay: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      dDay: new Date("2020/07/31 00:00:00").getTime() - new Date().getTime(),
    });
  }

  digitCheck = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  render() {
    const { dDay } = this.state;
    const { digitCheck } = this;

    return (
      <div className="SpecialOrder">
        <ul className="itemContainer">
          {itemList.item.map(
            ({ index, img, title, subtitle, date, subcontent, progress }) => (
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
                  {index === 1 && dDay >= 0 ? (
                    <div className="bubble">
                      D-day{" "}
                      {digitCheck(
                        Math.floor(
                          (dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                        )
                      )}
                      {":"}
                      {digitCheck(
                        Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60))
                      )}
                      {":"}
                      {digitCheck(Math.floor((dDay % (1000 * 60)) / 1000))}
                    </div>
                  ) : null}
                </div>
                <div className="dDayBorder">
                  <div className={progress} />
                </div>
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
