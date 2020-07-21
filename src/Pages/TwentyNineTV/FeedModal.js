import React from "react";
import "./FeedModal.scss";

class FeedModal extends React.Component {
  render() {
    return (
      <div className="FeedModal">
        <div className="leftBtn"></div>
        <div className="ModalContentContainer">
          <button className="closeBtn">
            <img
              alt="closeBtn"
              src="https://img.29cm.co.kr/next29cm/media/btn_viewer.png"
            />
          </button>
          <div className="ModalContentImg">
            <img
              alt="contentImg"
              className="contentImg"
              src="https://img.29cm.co.kr/tvfeed/2020/07/20/adad1927a3c3498790fdad238f6ca695_20200720154143.jpeg"
            />
          </div>
          <div className="rightContents">
            <div className="profile">
              <div className="info">
                <div className="logo">
                  <img
                    alt="profileLogo"
                    className="profileLogo"
                    src="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
                  />
                </div>
                <div className="profileName">
                  <span className="brandName">BikerStalet</span>
                  <span className="brandOfficial">Official</span>
                </div>
              </div>
              <div className="moreBtn">•••</div>
            </div>
            <div className="contents">
              <div className="text">Noelle Small. Beige</div>
              <div className="tag">
                <span>#노엘 </span>
                <span>#노엘스몰 </span>
                <span>#버킷백 </span>
                <span>#데일리백 </span>
                <span>#숄더백 </span>
                <span>#크로스백 </span>
                <span>#토트백 </span>
                <span>#바이커스탈렛 </span>
              </div>
            </div>
            <div className="icons">
              <div className="favIcon">
                <i class="far fa-heart">
                  <span className="number">1</span>
                </i>
              </div>
              <div className="shareIcon">
                <i class="fas fa-share-alt" />
              </div>
            </div>
            <div className="productContainer">
              <div className="titleContainer">
                <span className="title">관련 상품 및 브랜드</span>
                <div className="sideBtn">
                  <button className="left">
                    <i class="fas fa-chevron-left" />
                  </button>
                  <button className="right">
                    <i class="fas fa-chevron-right" />
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
        <div className="rightBtn"></div>
      </div>
    );
  }
}

export default FeedModal;
