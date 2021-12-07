import React, { Component } from "react";
import Header from "./components/HomePage/header/header";
import Footer from "./components/HomePage/footer/footer";
import Sales from "./components/HomePage/body_index/content/Sales";
import Category from "./components/HomePage/body_index/content/Category";
import Promotion from "./components/HomePage/body_index/content/Promotion";
import Start from "./components/HomePage/body_index/content/Start";
import Welcome from "./components/HomePage/body_index/Welcome";

class HomePage extends Component {
 
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
          <Welcome></Welcome>
          
          <div className="left-image-decor" />
          <div style={{ minHeight: "20vh" }}></div>
          <div className="div__Homepage--content">
            <Sales></Sales>
            <Category></Category>
            <Promotion></Promotion>
            <div className="right-image-decor" />
            <Start></Start>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default HomePage;
