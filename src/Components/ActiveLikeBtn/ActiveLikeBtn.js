import React from "react";
import API_URL from "../../config";
import ActiveIcon from "./svg/ActiveIcon";
import UnActiveIcon from "./svg/UnActiveIcon";
import "./ActiveLikeBtn.scss";

class ActiveLikeBtn extends React.Component {
  // state = {
  //   heart: this.props.heartState,
  //   icon: this.props.heartState ? <ActiveIcon /> : <UnActiveIcon />,
  //   likedNumber: this.props.likedNumber,
  // };
  //여기서 state를 다시 설정해주면 피드에서 모달로는 데이터가 전달이 되지만 모달에서 피드로는 데이터전달이
  //즉각 되지 않는다. 그 이유는 스테이트는 한 곳을 바라보아야 하는건데 여기서 또 스테이트를 지정해버리면
  //값은 두 곳에서 넘겨오는 것이 되므로.. 오른손이 뇌를 가지려는 격..

  // componentDidMount() {
  //   const { likedNumber } = this.props;
  //   this.setState({
  //     likedNumber: likedNumber,
  //   });
  // }
  //이것도 필요가 없다. 왜냐하면 이미 페치함수 내에 있는 데이터에서 값을 받아오고있기 때문에
  //여기서 또 지정해줄 필요가 없음

  iconHandler = () => {
    // const { heart } = this.state;
    // const { postId } = this.props;
    // heart
    //   ? this.setState({
    //       heart: false,
    //       icon: <UnActiveIcon />,
    //     })
    //   : this.setState({
    //       heart: true,
    //       icon: <ActiveIcon />,
    //     });
    //즉시 출력해주면 되는 것. 굳이 스테이트로 전달하지않아도..된다..

    //로직 이해하고 주석 다 삭제할 것

    const { postId, handleIcon } = this.props;
    fetch(`http://${API_URL}/media/recommend/like`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        post: postId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const option = {
          user_likes_pressed: res.data.user_likes_pressed,
          like_num: res.data.like_num,
        };
        handleIcon(postId, option);
      });
  };

  render() {
    const { iconHandler } = this;
    const { likedNumber, heartState } = this.props;
    return (
      <div onClick={iconHandler} className="likeIcon">
        <div>{heartState ? <ActiveIcon /> : <UnActiveIcon />}</div>
        <span className="likeNumber">{likedNumber}</span>
      </div>
    );
  }
}

export default ActiveLikeBtn;
