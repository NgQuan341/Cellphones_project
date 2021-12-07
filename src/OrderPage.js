import React, { Component } from "react";
import Header from "./components/HomePage/header/header";
import Footer from "./components/HomePage/footer/footer";
import Order from "./components/HomePage/body_index/content/Order";

class OrderPage extends Component {
 
  localstorageID =
    JSON.parse(localStorage.getItem("loginAcc")) === null
      ? null
      : JSON.parse(localStorage.getItem("loginAcc")).id;

  componentDidMount() {

    // window.scrollTo(0, 0);
    const script = document.createElement("script");
    const script1 = document.createElement("script");

    script.src = "/assets/js/custom.js";
    script1.src = "/assets/js/owl-carousel.js";

    script.async = true;
    script1.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <div id="preloader">
          <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <Header idAcc={this.localstorageID}></Header>
        
        <div className="div__Homepage">          
          <div style={{ minHeight: "20vh" }}></div>
          <div className="div__Homepage--content">
            <Order id={this.props.match.params.id} idAcc={this.localstorageID}></Order>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default OrderPage;
