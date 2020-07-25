import React from "react";
import { withRouter } from "react-router-dom";
// import { itemList } from "./itemListData";
import "./SpecialContent.scss";

class SpecialContent extends React.Component {
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
    const { index, content } = this.props;
    console.log(index);
    console.log(dDay);
    return (
      <li className="SpecialContent">
        <div className="imgContainer">
          <img className="orderImg" alt="img" src={content.img} />
        </div>
        <h2 className="itemTitle">{content.title}</h2>
        <h4 className="itemSubtitle">
          {content.subtitle}
          <span className="subcontent">{content.subcontent}</span>
        </h4>
        <div className="dDayBubble">
          {content.index === 1 ? (
            <div className="bubble">
              D-day{" "}
              {digitCheck(
                Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
              )}
              {":"}
              {digitCheck(Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60)))}
              {":"}
              {digitCheck(Math.floor((dDay % (1000 * 60)) / 1000))}
            </div>
          ) : null}
        </div>
        <div className="dDayBorder">
          <div className={content.progress} />
        </div>
        <p className="itemDate">{content.date}</p>
      </li>
    );
  }
}

export default withRouter(SpecialContent);
