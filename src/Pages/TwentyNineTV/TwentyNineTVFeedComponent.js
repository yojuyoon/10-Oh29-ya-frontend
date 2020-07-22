import React from "react";
import { withRouter } from "react-router-dom";
// import FeedModal from "./FeedModal";
import "./TwentyNineTV.scss";

class TwentyNineTVFeedComponent extends React.Component {
  render() {
    const { onClick, img, logo, brandName, text } = this.props;
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
                    <span className="brandOffical">
                      <span>✹</span>Official
                    </span>
                  </div>
                </div>
                <div className="feedComment">
                  <p>{text}</p>
                </div>
                <div className="feedTag">
                  <span>#2Way </span>
                  <span>#마스카라 </span>
                  <span>#롱래쉬 </span>
                </div>
                <div className="likeIcon">
                  <i className="far fa-heart" />
                  <span className="likeNumber">1</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withRouter(TwentyNineTVFeedComponent);
