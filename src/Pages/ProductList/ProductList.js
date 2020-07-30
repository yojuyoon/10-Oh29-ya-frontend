import React from "react";
import "./ProductList.scss";
import "./LeftNav.scss";
import LeftNav from "./LeftNav/LeftNav";
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

  componentDidMount() {
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

  handleCreateCategories = () => {
    let detail_list = new Set();

    for (let i = 0; i < this.state.itemData.length; i++) {
      detail_list.add(this.state.itemData[i].detail);
    }

    this.setState({ detailList: [...detail_list] });
  };

  /*********좌측 Nav *********/

  handleFilterDiscount = () => {
    const { itemData } = this.state;

    const filtered = itemData.filter((item) => {
      return item.discount_rate !== 0;
    });
    this.setState({ itemData: filtered });
  };

  handleFilterFreeShipping = () => {
    const { itemData } = this.state;

    const filtered = itemData.filter((item) => {
      return item.discount_rate === 0;
    });
    this.setState({ itemData: filtered });
  };

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

  /*********상단 드롭다운 메뉴*********/

  handleSortDescending = () => {
    const { itemData } = this.state;
    let tempData = [...itemData];
    let price = "";

    for (let i = tempData.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        let j_price = 0;
        let j2_price = 0;
        if (tempData[j].discount_rate) j_price = tempData[j].discount_price;
        else j_price = tempData[j].price;
        if (tempData[j + 1].discount_rate)
          j2_price = tempData[j + 1].discount_price;
        else j2_price = tempData[j + 1].price;
        if (parseInt(j_price) < parseInt(j2_price)) {
          let temp = tempData[j];
          tempData[j] = tempData[j + 1];
          tempData[j + 1] = temp;
        }
      }
    }
    this.setState({ itemData: tempData });
  };

  handleSortAscending = () => {
    const { itemData } = this.state;
    let tempData = [...itemData];
    let price = "";

    for (let i = tempData.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        let j_price = 0;
        let j2_price = 0;
        if (tempData[j].discount_rate) j_price = tempData[j].discount_price;
        else j_price = tempData[j].price;
        if (tempData[j + 1].discount_rate)
          j2_price = tempData[j + 1].discount_price;
        else j2_price = tempData[j + 1].price;

        if (parseInt(j_price) > parseInt(j2_price)) {
          let temp = tempData[j];
          tempData[j] = tempData[j + 1];
          tempData[j + 1] = temp;
        }
      }
    }
    this.setState({ itemData: tempData });
  };

  handleSortCreatedAt = () => {
    const { itemData } = this.state;
    let tempData = [...itemData];

    for (let i = tempData.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        let time1 = parseInt(
          tempData[j].created_at.split(":")[2].replace(".", "").replace("Z", "")
        );
        let time2 = parseInt(
          tempData[j + 1].created_at
            .split(":")[2]
            .replace(".", "")
            .replace("Z", "")
        );

        if (time1 < time2) {
          let temp = tempData[j];
          tempData[j] = tempData[j + 1];
          tempData[j + 1] = temp;
        }
      }
    }
    this.setState({ itemData: tempData });
  };

  render() {
    const { itemData } = this.state;

    return (
      <div className="ProductList">
        <div className="categoryWrap">
          <div className="left">
            <LeftNav gender={this.props.match.params.category} />
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
              handleSortAscending={this.handleSortAscending}
              handleSortCreatedAt={this.handleSortCreatedAt}
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
