import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <Fragment>
        <div className="special-tour__tittle" id="categories" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
          <div className="section-tittle">
            <h3>TECHNOLOGY</h3>
            <div className="section-tittle__line-under" />
            <p>Categories</p>
          </div>
          <p className="special-tour__sub-tittle"> </p>
        </div>
        <hr className="my-3" />
        <div className="container destination">
          <div className="row image" id="img-lg">
            <div className="col-3" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <a href={`/category/1`}>
                <div className="itemBox" id="itemBox1">
                  <div id="item1" className="item">
                  </div>
                  <p className="location">Phones</p>
                  <p className="stat">(Items)</p>
                  <div className="line" />
                  <div className="overlay" />
                </div>

              </a>
            </div>
            <div className="col-6" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-4">
                  <a href="/category/4">
                    <div className="itemSmallBox" id="itemBox2">
                      <div className="item" id="item2">
                      </div>
                      <p className="location">Watchs</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-8" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/2">
                    <div className="itemSmallBox">
                      <div className="item" id="item3">
                      </div>
                      <p className="location">Laptops</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-6" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/3">
                    <div className="itemSmallBox">
                      <div className="item" id="item4">
                      </div>
                      <p className="location">Tablet</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-6" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/5">
                    <div className="itemSmallBox">
                      <div className="item" id="item5">
                      </div>
                      <p className="location">Audio</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <a href="/category/6">
                <div className="itemBox">
                  <div className="item" id="item6">
                  </div>
                  <p className="location">Accessories</p>
                  <p className="stat">(Items)</p>
                  <div className="line" />
                  <div className="overlay" />
                </div>
              </a>
            </div>
          </div>
          <div className="row image" id="img-md">
            <div className="col-lg-4 col-md-4" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-12">
                  <a href="/category/1">
                    <div className="itemBox">
                      <div className="item" id="item1_1">
                      </div>
                      <p className="location">Phones</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <div className="itemSmallBox">
                    <a href="/category/4">
                      <div className="item" id="item2_1">
                      </div>
                      <p className="location">Watchs</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-12">
                  <a href="/category/2">
                    <div className="itemSmallBox">
                      <div className="item" id="item3_1">
                      </div>
                      <p className="location">Laptops</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <div className="itemSmallBox">
                    <div className="item" id="item7">
                    </div>
                  </div>
                </div>
                <div className="col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/3">
                    <div className="itemSmallBox">
                      <div className="item" id="item4_1">
                      </div>
                      <p className="location">Tablet</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-12">
                  <a href="/category/5">
                    <div className="itemSmallBox">
                      <div className="item" id="item5_1">
                      </div>
                      <p className="location">Audio</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/6">
                    <div className="itemBox">
                      <div className="item" id="item6_1">
                      </div>
                      <p className="location">Accessories</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row image" id="img-sm" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
            <div className="col-sm-6 col-12">
              <div className="row">
                <div className="col-12">
                  <a href="/category/1">
                    <div className="itemBox">
                      <div className="item" id="item1_2">
                      </div>
                      <p className="location">Phones</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-12">
                  <div className="itemSmallBox">
                    <a href="/category/4">
                      <div className="item" id="item2_2">
                      </div>
                      <p className="location">Watchs</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </a>
                  </div>
                </div>
                <div className="col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/2">
                    <div className="itemSmallBox">
                      <div className="item" id="item3_2">
                      </div>
                      <p className="location">Laptops</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-12">
                  <a href="/category/3">
                    <div className="itemSmallBox">
                      <div className="item" id="item4_2">
                      </div>
                      <p className="location">Tablet</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
                <div className="col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <a href="/category/5">
                    <div className="itemSmallBox">
                      <div className="item" id="item5_2">
                      </div>
                      <p className="location">Audio</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="row">
                <div className="col-12">
                  <a href="/category/6">
                    <div className="itemBox">
                      <div className="item" id="item6_2">
                      </div>
                      <p className="location">Accessories</p>
                      <p className="stat">(Items)</p>
                      <div className="line" />
                      <div className="overlay" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default Category;