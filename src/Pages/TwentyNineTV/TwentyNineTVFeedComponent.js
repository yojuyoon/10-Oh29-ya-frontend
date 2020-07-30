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
      feed: {
        thumbnail_image,
        staff_logo,
        staff_name,
        content,
        official_check,
        like_num,
        hashtag,
        post_id,
        user_likes_pressed,
      },
    } = this.props;
    return (
      <section className="TwentyNineTV">
        <div className="feedContainer">
          <div className="feedContent">
            <div className="container">
              <img
                onClick={onClick}
                alt="feed"
                className="feedImg"
                src={thumbnail_image}
              />
            </div>
            <div className="feedText">
              <div className="feedProfile">
                <img alt="feedProfile" className="profile" src={staff_logo} />
                <div className="feedProfileText">
                  <span className="brandName">{staff_name}</span>
                  <span className="brandOffical"></span>
                  {official_check && (
                    <span className="officialCheck">✹ Official</span>
                  )}
                </div>
              </div>
              <div
                className={
                  content.length > 0 && (
                    <div className="feedComment">
                      <p>{content}</p>
                    </div>
                  )
                }
              ></div>
              <div className="feedTag">{hashtag.join(" ")}</div>
              <ActiveLikeBtn
                handleIcon={this.props.handleIcon}
                postId={post_id}
                likedNumber={like_num}
                heartState={user_likes_pressed}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(TwentyNineTVFeedComponent);
