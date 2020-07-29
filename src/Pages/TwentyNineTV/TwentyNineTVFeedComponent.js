import React from "react";
import { withRouter } from "react-router-dom";
import ActiveLikeBtn from "../../Components/ActiveLikeBtn/ActiveLikeBtn";
import "./TwentyNineTV.scss";

class TwentyNineTVFeedComponent extends React.Component {
  state = {
    officialCheck: false,
    clickedIcon: false,
    clickedNumber: 0,
  };

  render() {
    const {
      onClick,
      img,
      logo,
      brandName,
      text,
      officialCheck,
      likedNumber,
      hashtag,
      likeIcon,
      postId,
      heartState,
      userId,
      heartStateHandler,
    } = this.props;
    return (
      <section className="TwentyNineTV">
        <div className="feedContainer">
          <div className="feedContent">
            <div className="container">
              <img onClick={onClick} alt="feed" className="feedImg" src={img} />
            </div>
            <div className="feedText">
              <div className="feedProfile">
                <img alt="feedProfile" className="profile" src={logo} />
                <div className="feedProfileText">
                  <span className="brandName">{brandName}</span>
                  <span className="brandOffical"></span>
                  {officialCheck && (
                    <span className="officialCheck">✹ Official</span>
                  )}
                </div>
              </div>
              <div
                className={
                  text.length > 0 && (
                    <div className="feedComment">
                      <p>{text}</p>
                    </div>
                  )
                }
              ></div>
              <div className="feedTag">{hashtag.join(" ")}</div>
              <ActiveLikeBtn
                postId={postId}
                userId={userId}
                likeIcon={likeIcon}
                likedNumber={likedNumber}
                heartState={heartState}
                heartStateHandler={heartStateHandler}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(TwentyNineTVFeedComponent);
