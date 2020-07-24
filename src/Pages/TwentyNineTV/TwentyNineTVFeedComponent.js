import React from "react";
import { withRouter } from "react-router-dom";
import ActiveLIkeIcon from "./ActiveLikeIcon";
import "./TwentyNineTV.scss";

class TwentyNineTVFeedComponent extends React.Component {
  state = {
    officialCheck: false,
  };

  official = () => {
    return <span className="officialCheck">✹ Official</span>;
  };

  render() {
    const {
      onClick,
      img,
      logo,
      brandName,
      text,
      officialCheck,
      hashtag,
    } = this.props;
    const { official } = this;
    return (
      <>
        <section className="TwentyNineTV">
          <div className="feedContainer">
            <div className="feedContent">
              <div className="container">
                <img
                  onClick={onClick}
                  alt="feed"
                  className="feedImg"
                  src={img}
                />
              </div>
              <div className="feedText">
                <div className="feedProfile">
                  <img alt="feedProfile" className="profile" src={logo} />
                  <div className="feedProfileText">
                    <span className="brandName">{brandName}</span>
                    <span className="brandOffical"></span>
                    {officialCheck && official()}
                  </div>
                </div>
                <div className={text.length > 0 && "feedComment"}>
                  <p>{text}</p>
                </div>
                <div className="feedTag">{hashtag.join(" ")}</div>
                <ActiveLIkeIcon />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withRouter(TwentyNineTVFeedComponent);
