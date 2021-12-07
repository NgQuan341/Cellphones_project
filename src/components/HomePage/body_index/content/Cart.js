import React, { Component, Fragment } from "react";
import cartapi from "../../../../api/cartAPI";
import productApi from "../../../../api/productAPI";


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_order: 0,
      checkBox: false,
      cartID: "",
      accountID: "",
      productsID: [],
      products: [],
      cart_products: [],
      count: 0,
      count_item:0
    };
  }

  //Kiểm tra xem có đăng nhập chưa
  // chưa thì chuyển trang đăng nhập
  // rồi thì lấy cart có id account về
  checkLogin = () => {
    if (this.props.idAcc === null) {
      alert("You must login before buy something !!!")
      window.location.href = "/login"
    }
    else {
      this.getOneCart(this.props.idAcc)
      console.log("chạy vào getonecart");
    }
  }
  // chuyển trang payment
  // payment = () => {
  //   this.updateCart();
  //   window.location.href = "/payment";
  // };
  // Mua hàng
  buyNow = () =>{
    let check = false;
    this.state.productsID.map((proID)=>{
      if(proID.check_cart === 2){
        check = true;
      }
      return proID;
    });
    console.log(check);
    
    if(check){
      this.updateCart();
      window.location.href = "/payment";
    }
    else
    alert("Hãy chọn một sản phẩm trước khi mua")
  }
  // Update cả cart
  updateCart = () => {
    this.update(
      {
        accountID: this.state.accountID,
        productsID: this.state.productsID,
      },
      this.state.cartID
    );
    localStorage.setItem("Cart", JSON.stringify(this.state.productsID))
  };

  // xóa một sản phẩm trong cart
  deleteProductCart = (id) => {
    this.state.productsID.map((proID, index, arr) => {
      if (proID.productID === id) {
        arr.splice(index, 1)
      }
      this.setState({ productsID: arr });
      return null;
    });
    this.updateCart();
  };
  // change check_cart in state = 2
  checkCart = (id) => {
    let sum = this.state.total_order;
    let count = this.state.count;
    let count_item=this.state.count_item
  
    let arrayIDs = this.state.productsID.map((proID) => {
      if (proID.productID === id) {
        if (proID.check_cart === 1) {
          proID.check_cart = 2;
          sum += proID.total   
          count+=proID.quantity
          count_item++    
        }
        else {
          proID.check_cart = 1;
          sum -= proID.total
          count-=proID.quantity
          count_item--
        }

      }
      return proID;
    });
    localStorage.setItem("Cart", JSON.stringify(arrayIDs))
    console.log(arrayIDs)
    this.setState({ productsID: arrayIDs, total_order: sum, count:count,count_item:count_item });
  };
  // Cart
  // lấy một cart gắn vào state
  getOneCart = (id) => {
    cartapi
      .getOne(id)
      .then((res) => {
       
        let arr = res[0].productsID.map(proID=>{
          if(proID.check_cart === 2){
            proID.check_cart=1
          }
          return proID
        })
        
        
        this.setState({
          cartID: res[0].id,
          accountID: res[0].accountID,
          productsID: arr
        });
      })
      .catch((err) => { });
  };

  update = (data, id) => {
    cartapi
      .put(data, id)
      .then((res) => { })
      .catch((err) => { });
  };
  // Products
  // Lấy toàn bộ products gắn vào state
  getAllProduct = () => {
    productApi
      .getAll()
      .then((res) => {
        this.setState({ products: res });
        localStorage.setItem("Products", JSON.stringify(res));
        //   this.state.products= res;
      })
      .catch((err) => { });
  };
  setPlus = (id, price) => {
    this.state.productsID.map((proID, index, arr) => {
      if (proID.productID === id) {
        let quan = ++proID.quantity
        arr[index].quantity = quan;
        arr[index].total = price * quan
      }
      this.setState({ productsID: arr });
      this.selectAllAmount()
      return null;
    });
  };
  setMinus = (id, price) => {
    this.state.productsID.map((proID, index, arr) => {
      if (proID.productID === id && arr[index].quantity > 1) {
        let quan = --proID.quantity
        arr[index].quantity = quan;
        arr[index].total = price * quan
      }
      this.setState({ productsID: arr });

      return null;
    });
    this.selectAllAmount();
  };
  // to payment page

  selectAllCheckBox = () => {
    let check;
    let count = this.state.count
    let count_item=this.state.count_item
    let sum = 0
   
    for (
      let i = 0;
      i < document.querySelectorAll(".cart-check-box").length;
      i++
    ) {
     
      count_item ++;
      check = this.state.checkBox;
      check
        ? (document.querySelectorAll(".cart-check-box")[i].checked = false)
        : (document.querySelectorAll(".cart-check-box")[i].checked = true);
    }
    check ? (this.state.checkBox = false) : (this.state.checkBox = true);
    let arr = this.state.productsID.map((proID) => {
      check ? (proID.check_cart = 1) : (proID.check_cart = 2);
      sum += proID.total;
      count += proID.quantity;
      return proID;
    });
    check?count=0:count=count
    check?count_item=0:count_item=count_item
    check?sum=0:sum = sum
    this.setState({ productsID: arr, count:count, total_order:sum,count_item:count_item });
    console.log(arr);
  };

  selectAllAmount = () => {
    let sum = 0;
    this.state.productsID.map(id => {
      sum += id.total
      return id;
    })
    this.setState({ total_order: sum })
  };
  componentWillUnmount(){

  }
  // DID Mount
  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("Products") == null) {
      this.getAllProduct();
    }
    else {
      this.setState({ products: JSON.parse(localStorage.getItem("Products")) })
    }
    this.checkLogin()
  }
  render() {
    return (
      <Fragment>
        <form>
          <div
            role="main"
            className="cart-page__content cart-page__content--opc"
            style={{ marginBottom: "0px" }}
          >
            <table style={{ width: "100%", border: "1px" }}>
              <thead id="cart">
                <tr>
                  <th>
                    <p style={{ margin: "15px 10px 10px 15px" }}>&nbsp;</p>
                  </th>
                  <th>&nbsp;</th>
                  <th colSpan={2}>Products</th>
                  <th>Unit price</th>
                  <th>Number of Product</th>
                  <th>Amount</th>
                  <th colSpan={2} style={{ textAlign: "center" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody style={{}}>
                {this.state.products.map((pro) =>
                  this.state.productsID.map((id) => {
                    if (pro.id === id.productID) {
                      return (
                        <tr key={id.productID} className="cart-items">
                          <td>
                            <input
                              className="cart-check-box"
                              type="checkbox"
                              style={{
                                margin: "15px 10px 10px 15px",
                                backgroundColor: "rgb(255, 162, 86)",
                              }}
                              onClick={() => this.checkCart(id.productID)}
                            />
                          </td>
                          <td>
                            <img
                              src={pro.img}
                              width="100px"
                              height="100px"
                              alt="ảnh"
                            ></img>
                          </td>
                          <td>
                            <p>{pro.name}</p>
                          </td>
                          <td>
                            <p>&nbsp;</p>
                          </td>

                          <td>
                            <span className="">{pro.old_price}</span>
                          </td>

                          <td>
                            <button
                              type="button"
                              className="cart-btn-minus"
                              onClick={() => this.setMinus(id.productID, pro.old_price)}
                            >
                              -
                            </button>
                            <input
                              className="cart-amount"
                              type="text"
                              readOnly
                              value={id.quantity}
                            />
                            <button
                              type="button"
                              className="cart-btn-plus"
                              onClick={() => this.setPlus(id.productID, pro.old_price)}
                            >
                              +
                            </button>
                          </td>

                          <td>
                            <input
                              className="amountCart"
                              type="text"
                              style={{ maxWidth: "100px", textAlign: "center" }}
                              readOnly
                              value={id.total}
                            />
                          </td>

                          <td className="cart-items-btn">
                            <p>&nbsp;</p>
                          </td>
                          <td className="cart-items-btn">
                            <button
                              type="button"
                              className="main-button main-button-cart btnDelete"
                              onClick={() =>
                                this.deleteProductCart(id.productID)
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })
                )}
              </tbody>
            </table>

            <table id="total" style={{ width: "100%" }}>
              <tbody>
                <tr className="">
                  <td className="" colSpan={7} style={{ textAlign: "right" }}>
                    &nbsp;
                  </td>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    <span className="">
                      <span>&nbsp;</span>
                    </span>
                  </td>
                </tr>
                <tr className="cart-items">
                  <td></td>
                  <td>
                    <button
                      type="button"
                      className="main-button main-button-cart"
                      onClick={() => this.selectAllCheckBox()}
                    >
                      Chọn tất cả ({this.state.count_item})
                    </button>
                  </td>
                  <td>
                    <p>&nbsp;</p>
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <div className="" style={{ textAlign: "right" }}>
                      <b>Tổng thanh toán ({this.state.count} Sản phẩm): </b>
                      <input
                        className=""
                        type="text"
                        style={{ maxWidth: "100px", textAlign: "right" }}
                        readOnly
                        value={this.state.total_order}
                      />
                    </div>
                  </td>
                  <td className="">
                    <button
                      type="button"
                      className="main-button main-button-cart"
                      onClick={() => this.buyNow()}
                    >
                      Mua hàng
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Cart;
