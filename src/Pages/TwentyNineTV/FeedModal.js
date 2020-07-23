import React from "react";
import SnsModal from "./SnsModal";
import ActiveLIkeIcon from "./ActiveLikeIcon";
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

  render() {
    const { showReport, hideReport } = this;
    const { hideModal, data, idxPrevHandler, idxNextHandler } = this.props;
    return (
      <div className="FeedModal">
        {this.state.shareModal && <SnsModal hideReport={hideReport} />};
        <div onClick={idxPrevHandler} className="leftBtn"></div>
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
              src={data.thumbnail_img}
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
                  <span className="brandOfficial">Official</span>
                </div>
              </div>
              <div className="moreBtn">•••</div>
            </div>
            <div className="contents">
              <div className="text">{data.content}</div>
              <div className="tag">{data.hashtag}</div>
            </div>
            <div className="icons">
              <ActiveLIkeIcon />
              <div onClick={showReport} className="shareIcon">
                <i className="fas fa-share-alt" />
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
        <div className="rightBtn" onClick={idxNextHandler}></div>
      </div>
    );
  }
}

export default FeedModal;
