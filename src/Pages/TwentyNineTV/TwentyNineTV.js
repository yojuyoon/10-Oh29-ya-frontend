import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVFeedComponent from "./TwentyNineTVFeedComponent";
import FeedModal from "./FeedModal";
import API_URL from "../../config";
import "./TwentyNineTV.scss";
import "../../Styles/common.scss";

class TwentyNineTV extends React.Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      data: [],
      currentModalData: [],
      currentIdx: 0,
    };
  }

  componentDidMount = () => {
    fetch(`http://${API_URL}/media/recommend`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data.map((feed) => {
            return feed;
          }), //서버 켜지면 맵 함수 없애고 실행시켜본 다음 리팩토링 할 것
        });
      });
  };

  handleIcon = (clickedId, option) => {
    console.log(clickedId);
    console.log(option);

    this.setState({
      data: this.state.data.map((feed) => {
        if (feed.post_id === clickedId) {
          return {
            ...feed, //feed에서 like_num 과 user_likes_pressed 값을 재설정
            like_num: option.like_num,
            user_likes_pressed: option.user_likes_pressed,
          };
        }

        return feed;
      }),
    });
    // const filteredData = data.filter((data) => clickedId === data.post_id);
    // console.log(filteredData);
    // const clickedIndex = data.indexOf(filteredData[0]);
    // console.log("index", clickedIndex);
    // console.log(option, "option");
    // data[clickedIndex].user_likes_pressed = option.heart;
    // data[clickedIndex].like_num = option.likedNumber;

    // this.setState({ data: data }, () =>
    //   console.log("consoledata::::", this.state.data)
    // );
    // console.log(clickedId);
    // this.setState({
    //   heartState: heartIcon,
    //   likedNumber: likeNum,
    // });
  };

  showModal = () => {
    this.setState({
      modalStatus: true,
      currentModalData: this.state.currentModalData,
    });
    document.body.style.overflow = "hidden";
  };

  hideModal = () => {
    this.setState({ modalStatus: false });
    document.body.style.overflow = "unset";
  };

  idxNextHandler = () => {
    this.setState({ currentIdx: this.state.currentIdx + 1 });
  };

  idxPrevHandler = () => {
    this.setState({ currentIdx: this.state.currentIdx - 1 });
  };

  setModalIdx = (idx) => {
    this.setState({ currentIdx: idx });
  };

  render() {
    const {
      showModal,
      hideModal,
      setModalIdx,
      idxNextHandler,
      idxPrevHandler,
    } = this;
    const { modalStatus, data, currentIdx } = this.state;

    console.log(data);
    return (
      <div className="TwentyNineTVFeed">
        {data.map((feed, index) => {
          return (
            <TwentyNineTVFeedComponent
              onClick={() => {
                showModal();
                setModalIdx(index);
              }}
              feed={feed}
              key={index}
              handleIcon={this.handleIcon}
            />
          );
        })}
        {modalStatus && (
          <FeedModal
            handleIcon={this.handleIcon}
            hideModal={hideModal}
            data={data[currentIdx]}
            idxNextHandler={
              currentIdx === currentIdx.length - 1
                ? !idxNextHandler
                : idxNextHandler
            }
            idxPrevHandler={currentIdx > 0 && idxPrevHandler}
          />
        )}
        <button className="moreBtn">더보기</button>
      </div>
    );
  }
}
export default withRouter(TwentyNineTV);
