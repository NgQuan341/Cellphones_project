import React, {Fragment, Component } from 'react';
import Cart from "./components/HomePage/body_index/content/Cart";
import Header from "./components/HomePage/header/header";
import Footer from "./components/HomePage/footer/footer";
import Welcome from './components/HomePage/body_index/Welcome';
class Cartpage extends Component {
    localstorageID = JSON.parse(localStorage.getItem("loginAcc"))===null? null : JSON.parse(localStorage.getItem("loginAcc")).id;
    
    componentDidMount () {
      
        // window.scrollTo(0, 0)
        // const script = document.createElement("script");
        // const script1 = document.createElement("script");
        // script.src = "/assets/js/custom.js";
        // script1.src = "/assets/js/owl-carousel.js"
        // script.async = true;
        // script1.async = true;
        // document.body.appendChild(script1);
        // document.body.appendChild(script);
     
    }
    render() {
        return (
            <Fragment>
                <div id="preloader">
                    <div className="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <Header idAcc={this.localstorageID}></Header>
                <div className="div__Homepage">
                <div style={{display:"none"}}>
                   <Welcome />
                    </div>
                    <div style={{ minHeight: "40vh" }}></div>
                    <div className="div__Homepage--content">
                        <Cart id={this.props.match.params.id} idAcc={this.localstorageID}></Cart>
                        
                    </div>
                </div>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default Cartpage;