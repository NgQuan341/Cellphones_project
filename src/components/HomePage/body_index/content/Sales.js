import React, { Component, Fragment } from "react";
import productApi from "../../../../api/productAPI";
import Card from "./Card";
class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  getAll = () => {
    productApi
      .getAll()
      .then((res) => {
        this.setState({ products: res });
        localStorage.setItem("Products", JSON.stringify(res));
      })
      .catch((err) => {});
  };

  componentDidMount() {
    if(localStorage.getItem("Products")==null){
      this.getAll();
    }
    else{
      this.setState({products:JSON.parse(localStorage.getItem("Products"))})
    }
  }
  
  render() {
    return (
      <Fragment>
        <div
          className="special-tour__tittle"
          data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
        >
          <div className="section-tittle">
            <h3>Selling</h3>
            <div className="section-tittle__line-under" />
            <p>Selling Products</p>
          </div>
          <p className="special-tour__sub-tittle"> </p>
        </div>
        <section className="section" id="sale">
          <div className="container">
            <div className="row">
              {this.state.products.map((pro, index) => {
                return (
                  <Card
                    key={index}
                    id={pro.id}
                    img={pro.img}
                    name={pro.name}
                    old_price={pro.old_price}
                    new_price={pro.new_price}
                    check_price={pro.check_price}
                    displayAll={true}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Sales;
