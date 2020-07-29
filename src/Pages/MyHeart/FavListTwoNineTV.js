import React from "react";
import { withRouter } from "react-router-dom";
import ActiveLikeBtn from "../../Components/ActiveLikeBtn/ActiveLikeBtn";

import "./FavListTwoNine.scss";

class FavListTwoNineTV extends React.Component {
  state = {
    favList: [],
  };

  render() {
    const { favList, postId, userId, likeIcon } = this.props;
    const { heartState } = this.state;
    return (
      <div className="FavListTwoNineTV">
        {favList.map((feed, index) => {
          return (
            <section key={index} className="TwentyNineTV">
              <div className="feedContainer">
                <div className="feedContent">
                  <div className="container">
                    <img
                      alt="feed"
                      className="feedImg"
                      src={feed.thumbnail_image}
                    />
                  </div>
                  <div className="feedText">
                    <div className="feedProfile">
                      <img
                        alt="feedProfile"
                        className="profile"
                        src={feed.staff_logo}
                      />
                      <div className="feedProfileText">
                        <span className="brandName">{feed.staff_name}</span>
                        <span className="brandOffical"></span>
                        {feed.official_check && (
                          <span className="officialCheck">✹ Official</span>
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        feed.content.length > 0 && (
                          <div className="feedComment">
                            <p>{feed.content}</p>
                          </div>
                        )
                      }
                    ></div>
                    <div className="feedTag">{feed.hashtag.join(" ")}</div>
                    <ActiveLikeBtn
                      postId={postId}
                      userId={userId}
                      likeIcon={likeIcon}
                      likedNumber={feed.like_num}
                      heartState={heartState}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}

export default withRouter(FavListTwoNineTV);
