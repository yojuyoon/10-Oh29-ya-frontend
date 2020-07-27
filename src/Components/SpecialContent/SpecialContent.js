import React from "react";
import { withRouter } from "react-router-dom";
import "./SpecialContent.scss";

class SpecialContent extends React.Component {
  state = {
    dDay: 0,
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
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
    const { digitCheck } = this;
    const { dDay } = this.state;
    const { content } = this.props;

    const Second = 1000 * 60;
    const Minute = Second * 60;
    const Hour = Minute * 24;
    const hourCheck = digitCheck(Math.floor((dDay % Hour) / Minute));
    const minuteCheck = digitCheck(Math.floor((dDay % Minute) / Second));
    const secondCheck = digitCheck(Math.floor((dDay % Second) / 1000));
    const dDayTime = hourCheck + ":" + minuteCheck + ":" + secondCheck;

    return (
      <li className="SpecialContent">
        <div className="imgContainer">
          <a
            href={
              content.index === 1 ? "https://wecode.co.kr/" : "/DetailProduct"
            }
          >
            <img className="orderImg" alt="img" src={content.img} />
          </a>
        </div>
        <h2 className="itemTitle">{content.title}</h2>
        <h4 className="itemSubtitle">
          {content.subtitle}
          <span className="subcontent">{content.subcontent}</span>
        </h4>
        <div className="dDayBubble">
          {content.index === 1 && (
            <div className="bubble">D-day {dDayTime}</div>
          )}
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
