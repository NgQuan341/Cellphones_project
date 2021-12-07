import React, {Fragment, Component } from 'react';
import { Link } from 'react-router-dom';


class Card extends Component {
  
  style={
    display: this.props.check_price ? "block" : "none",
  }
  style1={
    textDecorationLine: this.props.check_price && this.props.displayAll ? "line-through" : "none",
    fontStyle : this.props.check_price && this.props.displayAll ? "italic" : "none",
    color: this.props.check_price && this.props.displayAll ? "grey" : "red",
    fontSize: this.props.check_price && this.props.displayAll ? "0.9rem" : "1.2rem",
    fontWeight: this.props.check_price && this.props.displayAll ? "none" : "500"
  }
  style2={
    display: this.props.check_price && this.props.displayAll ? "block" : "none",
    color: "red",
    fontSize: "1.2rem",    
    fontWeight: "500"
  }

    render() {
        return (
        <Fragment>
            <div key={this.props.id} style={this.style} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">
                  <img src={this.props.img} width="270px" height="180px" alt="" />
                  <h5 className="productName">{this.props.name}</h5>
                  <div className="style_price">
                  <p className="oldPrice" style={this.style1}>{this.props.old_price} VND</p>
                  <p className="newPrice" style={this.style2}>{this.props.new_price} VND</p>
                  </div>
                      <Link to = {`/detailProduct/${this.props.id}`} className="main-button">Read More</Link>
                  {/* <a href="#id_tour" ></a> */}
                </div>
              </div>
            </div>
        </Fragment>
        );
    }
}


export default Card;