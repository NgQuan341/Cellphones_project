import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartapi from '../../../../api/cartAPI';
import productApi from '../../../../api/productAPI';
import commentAPI from "../../../../api/commentAPI";
import { isEmpty } from "validator";
import Comment from "./Comment";

class DetailProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      img: {},
      products: [],
      cart: {},
      productsID: [],
      comment: "",
      comments:[],
    }
  }
  setPlus = (id) => {
    let obj = {
      productID: id,
      quantity: 1,
      check_cart: 1
    }
    let arrProductsID = []
    arrProductsID = this.state.productsID;
    arrProductsID.map((arr, index) => {
      if (arr.productID === id) {
        obj.quantity = ++arr.quantity
        obj.check_cart = arr.check_cart
        arrProductsID[index] = obj;
        this.setState({ productsID: arrProductsID })
      }
      return (null)

    })
  }
  // dựa vào id sản phẩm để set lại số lượng trong giỏ hàng
  // đã có thì tăng số lương lên 1
  // chưa có thì thêm mới một sản phẩm
  setArr = (id) => {
    let check = true
    
    const obj = {
      productID: id,
      product_name: this.state.product.name,
      img: this.state.product.img,
      quantity: 1,
      check_cart: 1,
      total: this.state.product.old_price
    }
    let arrProductsID = []
    arrProductsID = this.state.productsID;
    // check xem đã có sản phẩm chưa có thì tăng số lượng "quantity"
    arrProductsID.map((arr, index) => {
      if (arr.productID === id) {
        check = false
        obj.quantity = ++arr.quantity
        obj.check_cart = arr.check_cart
        obj.total = arr.total + this.state.product.old_price
        arrProductsID[index] = obj;
        this.setState({ productsID: arrProductsID })
      }
      return (null)
    })
    //chưa thì thêm một sản phẩm
    if (check) {
      arrProductsID.push(obj)
      const cart = this.state.cart
      cart.productsID = arrProductsID;
      this.setState({ cart: cart })
    }

  }

  //Check đã đăng nhập hay chưa
  checkLogin = () => {
    if (this.props.idAcc == null) {
      alert("You must login before buy something!!")
      window.location.href = "/login"
      return false
    }
    else {
      return true
    }
  }

  // thêm một sản phẩm vào cart hiện tại
  addToCart = (idPro, idCart) => {

    if (this.checkLogin()) {
      this.setArr(idPro)
      cartapi
        .put(this.state.cart, idCart)
        .then((res) => {
          alert("Added to cart");
        })
        .catch((err) => {
        });
    }
  }
  addToCmt = () => {
    let name = JSON.parse(localStorage.getItem('loginAcc')).username;
    let cmt = {
      "productID": this.props.id,
      "accountName": name,
      "comment": document.getElementById("review_field").value,
      "rank": "5",
    }
      commentAPI
        .post(cmt)
        .then((res) => {
          alert("Commented");
        })
        .catch((err) => {
        });
  }

  //Lấy một cart về dựa vào id account
  getOneCart = (id) => {
    cartapi
      .getOne(id)
      .then((res) => {
        this.setState({ cart: res[0] });
        this.setState({ productsID: res[0].productsID });
        localStorage.setItem("cart",JSON.stringify(res[0]))
      })
      .catch((err) => {
        this.createOneCart({
            accountID: this.props.idAcc,
            productsID: []
        })
        window.location.reload()
      });
  }
  //Tạo một cart mới (trong trường hợp account đó lần đầu đưa sản phẩm vào giỏ hàng)
  createOneCart = (data) => {
    cartapi
      .post(data)
      .then((res) => {
      })
      .catch((err) => {
      });
  }

  // lấy sản phẩm chi tiét
  getOnePro = (id) => {
    productApi
      .getOne(id)
      .then((res) => {
        this.setState({ product: res });
        this.setState({ img: res.img })
      })
      .catch((err) => { });
  }
  getOneComment = () => {
    commentAPI
      .getAll()
      .then((res) => {
        console.log(res);
        this.setState({ comments: res });
        // this.setState({ img: res.img });
      })
      .catch((err) => {});
  };

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getOnePro(this.props.id)
    if (this.props.idAcc != null) {
      this.getOneCart(this.props.idAcc)
    }
    this.getOneComment();
  }
  render() {
    const required = (value) => {
      if (isEmpty(value)) {
        return (
          <small className="form-text text-danger">This field is required</small>
        );
      }
    };
    return (
      <section className="section mt-5">
        <div className="container" id="details">
          <div className="row">
            <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big mt-5" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s" data-scroll-reveal-id={29} data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
              <img src={this.state.img} width="500px" height="900px" className="rounded img-fluid d-block mx-auto" alt="App" />
            </div>
            <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix mt-5" id="inforofTour">
              <div className="tour-infomation" style={{ fontSize: '30px' }}>
                <h2 id="displaynameTour" style={{ fontSize: '40px', fontWeight: 600 }}>
                </h2>
              </div>
              <br />
              <div>
                <h3>{this.state.product.name}</h3><br></br>
                <h2>{this.state.product.old_price} VND</h2>

                <div className="product-infomation-content-time-table">
                  <span>Brand</span>
                  <p>{this.state.product.brand}</p>
                </div>
                <div className="product-infomation-content-time-table">
                  <span>Transport</span>
                  <p>Free transport</p>
                  <p>&nbsp;</p>
                  <p>From</p>
                  <p>&nbsp;</p>
                  <p>Transport fee</p>
                </div>
                <div className="product-infomation-content-time-table" style={{display:this.state.product.battery==null?"none":"grid"}}>
                  <span>BATTERY</span>
                  <p>{this.state.product.battery}</p>
                </div>
                <div className="product-infomation-content-time-table" style={{display:this.state.product.bluetooth==null?"none":"grid"}}>
                  <span>BLUETOOTH</span>
                  <p>{this.state.product.bluetooth}</p>
                </div>
                <div className="product-infomation-content-time-table" style={{display:this.state.product.gate==null?"none":"grid"}}>
                  <span>GATE</span>
                  <p>{this.state.product.gate}</p>
                </div>
                <div className="product-infomation-content-time-table" style={{display:this.state.product.ram==null?"none":"grid"}}>
                  <span>RAM / ROM</span>
                  <p>{this.state.product.ram}/{this.state.product.memory}</p>
                </div>

              </div>
              <div className="mt-4">
                <button className="main-button" onClick={() => this.addToCart(this.state.product.id, this.state.cart.id)}>
                  ADD TO CART
                </button>
                &emsp;&emsp;
                <Link to={`/cart/${this.props.idAcc}`} className="main-button" >Go to Cart</Link>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="product-detail page-product__detail">
              <div className="detail">
                <div className="detail-title">CHI TIẾT SẢN PHẨM</div>
                <div className="detail-content">
                  
                  <div className="detail-product">
                    <div className="detail-product-thongso">Brand</div>
                    <div>{this.state.product.brand}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.gate==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Gate: </div>
                    <div>{this.state.product.gate}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.name==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Model</div>
                    <div>{this.state.product.name}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.memory==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Disk Memory</div>
                    <div>{this.state.product.memory}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.screen==null?"none":"grid"}}className="detail-product" style={{display:this.state.product.gate==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Kích thước màn hình (Inches)</div>
                    <div>{this.state.product.screen}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.ram==null?"none":"grid"}}>
                    <div className="detail-product-thongso">RAM</div>
                    <div>{this.state.product.ram}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.type==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Type:</div>
                    <div>{this.state.product.type}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.screen==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Screen:</div>
                    <div>{this.state.product.screen}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.battery==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Battery: (mAh)</div>
                    <div>{this.state.product.battery}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.os==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Operating System:</div>
                    <div>{this.state.product.os}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.Wattage==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Wattage:</div>
                    <div>{this.state.product.Wattage}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.bluetooth==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Bluetooth:</div>
                    <div>{this.state.product.bluetooth}</div>
                  </div>
                  <div className="detail-product" style={{display:this.state.product.Input_current==null?"none":"grid"}}>
                    <div className="detail-product-thongso">Input current</div>
                    <div>{this.state.product.Input_current}</div>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="detail-title">MÔ TẢ SẢN PHẨM</div>
                <div className="detail-content">
                  <div className="detail-product-mota">
                    <span>
                      {this.state.product.description}
                    </span>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="detail-title">
                  <span className="totalcomment">
                    <b>Hỏi và đáp </b>
                  </span>
                </div>
                <div className="detail-content">
                  <div className="comment">
                  {this.state.comments.map((cmt, index) => {
                    console.log(cmt);
                    if (cmt.productID === this.props.id) {
                      console.log("check");
                      return (
                      <Comment key={index} accountName = {cmt.accountName} comment = {cmt.comment} createAt={new Intl.DateTimeFormat(['ban', 'id'], {year: 'numeric', month: '2-digit',day: '2-digit'}).format(cmt.createdAt)}/>
                      );
                    } else return null;
                  })}
                  </div>
                  <div className="main_form">
                    <textarea
                    type="text"
                      className="form-control"
                      name="detail"
                      id="review_field"
                      cols={5}
                      rows={5}
                      validations={[required]}
                      placeholder="Xin mời để lại câu hỏi, Shop sẽ trả lời trong 1h từ 8h - 22h mỗi ngày."
                    />
                    <div className="below-comment">
                      <div className="cmt_left">
                        <a href="index.html" className="poli">
                          Quy định đăng bình luận
                        </a>
                      </div>
                      <div className="cmt_right">
                        <button className="main-button" id="btnSendCmt" onClick={()=>this.addToCmt()}>
                          Gửi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <ul />
                <div className="f-left comment_wrap">
                  <div className="cmt_loadmore">
                    <button className="main-button">Xem thêm</button>
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

export default DetailProduct;