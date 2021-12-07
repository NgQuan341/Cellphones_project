import React, { Component } from 'react';

class Promotion extends Component {
    render() {
        return (
          <section className="section" id="promotion">
          <div className="container">
            <div className="row">
              <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                <img src="./assets/images/left_img.png" className="rounded img-fluid d-block mx-auto" alt="App" />
              </div>
              <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                <ul>
                  <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="./assets/images/Medkit_icon.png" alt=""/>
                    <div className="text">
                      <h4>Genuine product</h4>
                      <p>We value product quality more than price</p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                    <img src="./assets/images/Hear_icon.png" alt="" />
                    <div className="text">
                      <h4>Guarantee</h4>
                      <p>
                      Because of the trust of users and product safety, we always release products according to certain years and suitable for each product.</p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                    <img src="./assets/images/Money_icon.png" alt="" />
                    <div className="text">
                      <h4>Support</h4>
                      <p>
                        In addition to the quality and price requirements, we always support when users have difficulties</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
          );
    }
}

export default Promotion;