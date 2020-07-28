import React from "react";
import { withRouter } from "react-router-dom";
import ActiveLikeBtn from "../../Components/ActiveLikeBtn/ActiveLikeBtn";
import "./FavListTwoNine.scss";

class FavListTwoNineTV extends React.Component {
  state = {
    favList: [],
  };

  componentDidMount() {
    fetch("http://10.58.1.34:8000/media/mypage/post", {
      method: "POST",
      body: JSON.stringify({
        user: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          favList: res.my_heart_list,
        })
      );
  }

  render() {
    const { favList } = this.state;
    console.log(favList);
    return (
      <div className="FavListTwoNineTV">
        {favList.map((feed) => {
          return (
            <section className="TwentyNineTV">
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
                      postId={this.props.postId}
                      userId={this.props.userId}
                      likeIcon={this.props.likeIcon}
                      likedNumber={this.props.likedNumber}
                      heartState={this.props.heartState}
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
