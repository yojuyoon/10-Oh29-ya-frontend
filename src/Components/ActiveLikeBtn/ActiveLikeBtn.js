import React from "react";
import API_URL from "../../config";
import ActiveIcon from "./svg/ActiveIcon";
import UnActiveIcon from "./svg/UnActiveIcon";
import "./ActiveLikeBtn.scss";

class ActiveLikeBtn extends React.Component {
  state = {
    heart: this.props.heartState,
    icon: this.props.heartState ? <ActiveIcon /> : <UnActiveIcon />,
    likedNumber: 0,
  };

  componentDidMount() {
    const { likedNumber } = this.props;
    this.setState({
      likedNumber: likedNumber,
    });
  }

  iconHandler = () => {
    const { heart } = this.state;
    const { postId, userId } = this.props;
    heart
      ? this.setState({
          heart: false,
          icon: <UnActiveIcon />,
        })
      : this.setState({
          heart: true,
          icon: <ActiveIcon />,
        });

    return fetch(`http://${API_URL}/media/recommend/like`, {
      method: "PATCH",
      body: JSON.stringify({
        user: userId,
        post: postId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          likedNumber: res.like_num,
          heartState: res.user_likes_pressed,
        });
      });
  };

  render() {
    const { iconHandler } = this;
    const { icon, likedNumber } = this.state;
    return (
      <div onClick={iconHandler} className="likeIcon">
        <div>{icon}</div>
        <span className="likeNumber">{likedNumber}</span>
      </div>
    );
  }
}

export default ActiveLikeBtn;
