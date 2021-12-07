import React, { Component } from "react";
class Start extends Component {
  render() {
    return (
      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  What They Think <em>About Us</em>
                </h2>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </div>
            </div>
            <div
              className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="owl-carousel owl-theme">
                <div className="item service-item">
                  <div className="author">
                    <i>
                    <img
                      style={{ 
                        borderRadius:"60px"
                        
                      }}
                        src="assets/images/huan.jpg"
                        alt="Second Author"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <h4>Martino Tino</h4>
                    <p>
                      “Morbi non mi luctus felis molestie scelerisque. In ac
                      libero viverra, placerat est interdum, rhoncus leo.”
                    </p>
                    <span>Web Analyst</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                      style={{ 
                        borderRadius:"60px"
                        
                      }}
                        src="assets/images/huan.jpg"
                        alt="Second Author"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <h4>Martino Tino</h4>
                    <p>
                      “Morbi non mi luctus felis molestie scelerisque. In ac
                      libero viverra, placerat est interdum, rhoncus leo.”
                    </p>
                    <span>Web Analyst</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                    <img
                      style={{ 
                        borderRadius:"60px"
                        
                      }}
                        src="assets/images/huan.jpg"
                        alt="Second Author"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <h4>George Tasa</h4>
                    <p>
                      “Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                      justo. Donec quam dolor, congue a fringilla sed, maximus
                      et urna.”
                    </p>
                    <span>System Admin</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                    <img
                      style={{ 
                        borderRadius:"60px"
                        
                      }}
                        src="assets/images/huan.jpg"
                        alt="Second Author"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <h4>Sir James</h4>
                    <p>
                      "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                      justo. Donec quam dolor, congue a fringilla sed, maximus
                      et urna."
                    </p>
                    <span>New Villager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Start;
