import React from "react";
import SnsModal from "./SnsModal";
import ActiveLikeBtn from "../../Components/ActiveLikeBtn/ActiveLikeBtn";
import "./FeedModal.scss";

class FeedModal extends React.Component {
  constructor() {
    super();
    this.state = {
      shareModal: false,
      last: false,
    };
  }

  showReport = () => {
    this.setState({
      shareModal: true,
    });
  };

  hideReport = () => {
    this.setState({
      shareModal: false,
    });
  };

  official = () => {
    return <span className="officialCheck">✹ Official</span>;
  };

  render() {
    const { showReport, hideReport, official } = this;
    const { hideModal, data, idxPrevHandler, idxNextHandler } = this.props;
    return (
      <div className="FeedModal">
        {this.state.shareModal && <SnsModal hideReport={hideReport} />};
        <div
          onClick={idxPrevHandler}
          className={!idxPrevHandler ? "leftBtnHide" : "leftBtn"}
        ></div>
        <div className="ModalContentContainer">
          <button onClick={hideModal} className="closeBtn">
            <img
              alt="closeBtn"
              src="https://img.29cm.co.kr/next29cm/media/btn_viewer.png"
            />
          </button>
          <div className="ModalContentImg">
            <img
              alt="contentImg"
              className="contentImg"
              src={data.thumbnail_image}
            />
          </div>
          <div className="progressBar"></div>
          <div className="rightContents">
            <div className="profile">
              <div className="info">
                <div className="logo">
                  <img
                    alt="profileLogo"
                    className="profileLogo"
                    src={data.staff_logo}
                  />
                </div>
                <div className="profileName">
                  <span className="brandName">{data.staff_name}</span>
                  <span className="officialCheck">
                    {data.official_check && official()}
                  </span>
                </div>
              </div>
              <div className="moreBtn">•••</div>
            </div>
            <div className="contents">
              <div className="text">{data.content}</div>
              <div className="tag">{data.hashtag.join(" ")}</div>
            </div>
            <div className="icons">
              <ActiveLikeBtn
                data={this.props.data}
                postId={this.props.postId}
                likedNumber={this.props.likedNumber}
                heartState={this.props.heartState}
              />
              <div onClick={showReport} className="shareIcon">
                <img
                  alt="shareIcon"
                  src="https://img.icons8.com/windows/32/000000/share-2.png"
                />
              </div>
            </div>
            <div className="productContainer">
              <div className="titleContainer">
                <span className="title">관련 상품 및 브랜드</span>
                <div className="sideBtn">
                  <button className="left">
                    <i className="fas fa-chevron-left" />
                  </button>
                  <button className="right">
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
              <div className="productImage">
                <div className="product">
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={idxNextHandler}
          className={!idxNextHandler ? "rightBtnHide" : "rightBtn"}
        ></div>
      </div>
    );
  }
}

export default FeedModal;
