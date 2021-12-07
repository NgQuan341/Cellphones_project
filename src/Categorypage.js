import React, {Fragment, Component } from 'react';
import Header from "./components/HomePage/header/header";
import Footer from "./components/HomePage/footer/footer";
import Welcome from "./components/HomePage/body_index/Welcome";
import CardCategory from './components/HomePage/body_index/content/CardCategory';
import Category from './components/HomePage/body_index/content/Category';
class CategoryPage extends Component {
    localstorageID = JSON.parse(localStorage.getItem("loginAcc"))===null? null : JSON.parse(localStorage.getItem("loginAcc")).id;
    componentDidMount () {
        window.scrollTo(0, 0)
        const script = document.createElement("script");
        const script1 = document.createElement("script");
        script.src = "/assets/js/custom.js";
        script1.src = "/assets/js/owl-carousel.js"
        script.async = true;
        script1.async = true;
        document.body.appendChild(script1);
        document.body.appendChild(script); 
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
                    <Welcome></Welcome>
                    <div className="left-image-decor" />
                    <div className="div__Homepage--content">
                        <CardCategory id={this.props.match.params.id}></CardCategory>
                        <Category></Category>
                    </div>
                </div>
                <Footer></Footer>
            </Fragment>
            
        );
    }
}

export default CategoryPage;
