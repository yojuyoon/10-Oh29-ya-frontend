import React from "react";
import { withRouter } from "react-router-dom";
import "./TwoNineTV.scss";

class TwonineTVFeedComponenet extends React.Component {
  render() {
    return (
      <>
        <section className="TwoNineTV">
          <div className="feedContainer">
            <div className="feedContent">
              <div className="container">
                <img alt="feed" className="feedImg" src={this.props.img} />
              </div>
              <div className="feedText">
                <div className="feedProfile">
                  <img
                    alt="feedProfile"
                    className="profile"
                    src={this.props.logo}
                  ></img>
                  <div className="feedProfileText">
                    <span className="brandName">{this.props.brandName}</span>
                    <span className="brandOffical">
                      <span>✹</span>Official
                    </span>
                  </div>
                </div>
                <div className="feedComment">
                  <p>독특하고 특별한 컬러의 카키, 노엘 스몰 카키</p>
                </div>
                <div className="feedTag">
                  <span>#2Way</span>
                  <span>#마스카라</span>
                  <span>#롱래쉬</span>
                </div>
                <div className="likeIcon">
                  <i class="far fa-heart"></i>
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
export default withRouter(TwonineTVFeedComponenet);
