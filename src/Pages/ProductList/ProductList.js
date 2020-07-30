import React from "react";
import "./ProductList.scss";
// import "../../Styles/reset.scss"; //지울거
import "./LeftNav.scss";
import LeftNav from "../Men/MainWrap/MainLeftNav/MainLeftNav";
import ProductItem from "./ProductItem/ProductItem";
import CategoryList from "./CategoryList/CategoryList";
import FilterNav from "./FilterNav/FilterNav";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      originItemData: [],
      itemData: [],
      detailList: [],
    };
  }

  // componentDidMount() {
  //   this.handleData();
  // }

  // handleData = () => {
  //   //내로컬;
  //   // fetch("http://localhost:3000/data/product.json")
  //   //   .then((response) => response.json())
  //   //   .then((response) => {
  //   //     // console.log(response);
  //   //     this.setState({
  //   //       itemData: response.data,
  //   //       originItemData: response.data,
  //   //     });
  //   //   });

  //   fetch(
  //     `http://10.58.4.24:8000/product?category=MEN&subcategory=상의`,
  //     localStorage.getItem("token")
  //       ? {
  //           headers: {
  //             Authorization: localStorage.getItem("token"),
  //           },
  //         }
  //       : null
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ itemData: res.data, originItemData: res.data });
  //     });
  // };

  //되는거!!

  handleCreateCategories = () => {
    let detail_list = new Set();

    for (let i = 0; i < this.state.itemData.length; i++) {
      detail_list.add(this.state.itemData[i].detail);
    }

    this.setState({ detailList: [...detail_list] });
  };

  componentDidMount() {
    console.log(this.props.match.params.category);

    fetch(
      `http://10.58.4.24:8000/product?category=${this.props.match.params.category}&subcategory=${this.props.match.params.subcategory}`,

      localStorage.getItem("token")
        ? {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        : null
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({ itemData: res.data, originItemData: res.data }, () => {
          this.handleCreateCategories();
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params) {
      fetch(
        `http://10.58.4.24:8000/product?category=${this.props.match.params.category}&subcategory=${this.props.match.params.subcategory}`,
        localStorage.getItem("token")
          ? {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          : null
      )
        .then((res) => res.json())
        .then((res) =>
          this.setState(
            { itemData: res.data, originItemData: res.data },
            () => {
              this.handleCreateCategories();
            }
          )
        );
    }
  }

  ////////////////////////////////////////////////////////////

  //itemData는 fetch후 res.data를 담은 상태

  /*********여기는 좌측 Nav *********/

  //이 친구는 onClick했을 때 할인 중인 상품들만 보여주는 함수 (할인상품만)
  handleFilterDiscount = () => {
    const { itemData } = this.state;

    const filtered = itemData.filter((item) => {
      return item.discount_rate !== 0;
    });
    this.setState({ itemData: filtered });
  };

  //무료배송 =>나중에 데이터 들어오면 delivery_fee로 아래 discount_rate고쳐야 함
  handleFilterFreeShipping = () => {
    const { itemData } = this.state;

    const filtered = itemData.filter((item) => {
      return item.discount_rate === 0;
    });
    this.setState({ itemData: filtered });
  };

  //onClick했을 때, 10000원 이하의 제품을 보여주는 함수
  handleFilterRate = () => {
    const { itemData } = this.state;

    const filtered = itemData.filter((item) => {
      return item.discount_rate
        ? parseInt(item.discount_price) < 50000
        : parseInt(item.price) < 50000;
    });
    this.setState({ itemData: filtered });
  };

  //초기화
  handleFilterReset = () => {
    const { originItemData } = this.state;

    this.setState({ itemData: originItemData });
  };

  /*********여기는 상단 categoryfilter에 있는 드롭다운 *********/

  //내림차순, 높은 가격순
  // handleSortDescending = () => {
  //   console.log("돌아감");
  //   const { itemData } = this.state;
  //   let tempData = [...itemData];

  //   // console.log("아 왜!!", tempData[0].price);
  //   for (let i = 0; i < tempData.length; i++) {
  //     for (let j = tempData.length - 1; j > i; j--) {
  //       console.log(tempData[j]);
  //       // console.log("j+1" + tempData[j + 1]);
  //       // console.log(parseInt(tempData[j + 1].price));
  //       // tempData[j].discount_rate
  //       //   ? (price = "discount_price")
  //       //   : (price = "price");

  //       if (tempData[j].price < tempData[j + 1].price) {
  //         let temp = tempData[j];
  //         tempData[j] = tempData[j + 1];
  //         tempData[j + 1] = temp;
  //       }
  //     }
  //   }
  //   // console.log(tempData);
  //   this.setState({ itemData: tempData });
  // };

  //////////////////////////////////////////////////////////////////

  render() {
    const { itemData } = this.state;

    return (
      <div className="ProductList">
        <div className="categoryWrap">
          <div className="left">
            <LeftNav />
            <FilterNav
              handleFilterDiscount={this.handleFilterDiscount}
              handleFilterRate={this.handleFilterRate}
              handleFilterReset={this.handleFilterReset}
              handleFilterFreeShipping={this.handleFilterFreeShipping}
            />
          </div>
          <div className="right">
            <CategoryList
              handleSortDescending={this.handleSortDescending}
              detailList={this.state.detailList}
            />
            <ul className="productSection">
              {itemData.map((item) => {
                return (
                  <ProductItem
                    data={item}
                    key={item.id}
                    likeNum={item.like_num}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
