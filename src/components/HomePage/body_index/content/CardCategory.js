import React, { Component } from "react";
import categoryApi from "../../../../api/categoryAPI";
import productApi from "../../../../api/productAPI";
import Card from "./Card";
class CardCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      products: [],
    };
  }

  componentDidMount() {
    
    if(localStorage.getItem("Products")==null){
      this.getAll();
    }
    else{
      this.setState({products:JSON.parse(localStorage.getItem("Products"))})
    }
    this.getOneCategory(this.props.id);
  }
  getOneCategory = (id) => {
    categoryApi
      .getOne(id)
      .then((res) => {
        this.setState({ category: res });
      })
      .catch((err) => {});
  };
  getAll = () => {
    productApi
      .getAll()
      .then((res) => {
        this.setState({ products: res });
      })
      .catch((err) => {});
  };
  render() {
    console.log("render categorry");
    return (
      <div>
        <div
          className="special-tour__tittle"
          data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
        >
          <div className="section-tittle">
            <h3>{this.state.category.name}</h3>
            <div className="section-tittle__line-under" />
            <p>{this.state.category.name}</p>
          </div>
          <p className="special-tour__sub-tittle"> </p>
        </div>
        <section className="section" id="sale">
          <div className="container">
            <div className="row">
              {this.state.products.map((pro, index) => {
                if (pro.categoryID === this.state.category.id) {
                  return (
                    <Card
                      key={index}
                      id={pro.id}
                      img={pro.img}
                      name={pro.name}
                      old_price={pro.old_price}
                      new_price={pro.new_price}
                      check_price={true}
                      displayAll={false}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CardCategory;
