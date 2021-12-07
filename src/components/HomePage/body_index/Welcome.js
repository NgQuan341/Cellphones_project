import React, { Component } from 'react';


class Welcome extends Component {
    render() {
        return (
          <div className="welcome-area" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s" id="welcome">
          {/* ***** Header Text Start ***** */}
          <div className="header-text">
            <div className="container">
              <div className="row">
                <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                  <h1>DON'T IGNORE <br/><em>OUR PRODUCTS</em></h1>
                  {/* <Products products={this.state.products} /> */}
                </div>
              </div>
            </div>
          </div>
          {/* ***** Header Text End ***** */}
        </div>
          );
    }
}

export default Welcome;