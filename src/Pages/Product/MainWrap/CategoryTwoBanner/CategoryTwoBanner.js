import React from "react";
import "./CategoryTwoBanner.scss";
import TwoBannerItem from "./TwoBannerItem/TwoBannerItem";

class CategoryTwoBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [
        {
          img:
            "//img.29cm.co.kr/next-product/2020/07/16/46b484b758234940bbd52fea4fd6f3a6_20200716234059.jpg?width=800",
          title: "그라운드웨이브의 단독 시즌오프",
          content:
            "누구보다 뛰어난 색감을 자랑하는 그라운드웨이브의 시즌오프가 오직 29CM에서 가장 먼저 시작합니다. 더욱 합리적인 가격으로 쇼핑을 즐겨보세요!",
        },
        {
          img:
            "//img.29cm.co.kr/next-product/2020/07/16/2a3cfd8192cf466cb544401c8c87ce78_20200716100813.jpg?width=800",
          title: "랄프로렌 신상품 입고",
          content:
            "남녀노소 세대를 불문하고 사랑받는 폴로 랄프로렌의 새로운 특가 아이템이 입고되었습니다. 최대 82% 할인된 놀라운 가격으로 준비했어요. 지금 바로 만나보세요!",
        },
        {
          img:
            "//img.29cm.co.kr/next-product/2020/07/16/75d91b266826464ebf76beecd2c8c492_20200716234210.jpg?width=800",
          title: "개성 있는 여름을 위해",
          content:
            "여름은 스타일이 더욱 돋보이는 계절이기도 하죠. 왕관의 스트리트 요소와 독특한 그래픽 상품을 통해 여러분의 여름을 즐겨보세요. 단독 ~40%",
        },
        {
          img:
            "//img.29cm.co.kr/next-product/2020/07/16/cd13a501372b4df6812049514497a4a9_20200716234241.jpg?width=800",
          title: "지속 가능한 패션은 바로 여기",
          content:
            "실용성 있는 디자인을 통해 지속 가능한 패션을 전개하는 ELWK, 실용성 뿐 아니라 개성 있는 디자인을 통해 스타일링의 포인트까지 챙겨보세요. 단독 ~65%",
        },
        {
          img:
            "//img.29cm.co.kr/next-product/2020/07/16/04d1bd377c194bd0ba6f5fc359fc63bd_20200716234255.jpg?width=800",
          title: "자외선 차단 필수 아이템 선글라스",
          content:
            "자외선 차단부터 센스 있는 스타일의 필수품, 선글라스. 데일리 아이템부터 트렌디한 디자인까지 전부 모아봤어요.",
        },
        {
          img:
            "//img.29cm.co.kr/next-product/2020/07/16/5553f5d7d5fc4f8691d95d55277fcb91_20200716234512.jpg?width=800",
          title: "유니크한 어글리 슈즈",
          content:
            "다양한 코디와 매칭이 가능하며 유니크한 감성까지 갖춘 비엠에스프랑스의 신상 스니커즈를 소개합니다. 편안한 착용감은 물론 키높이 효과까지 있는 스니커즈로 스타일링을 완성해보세요.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="CategoryTwoBanner">
        <div className="bannerContainer">
          <ul>
            {this.state.itemData.map((item, i) => {
              return (
                <TwoBannerItem
                  img={item.img}
                  title={item.title}
                  content={item.content}
                  key={i}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryTwoBanner;
