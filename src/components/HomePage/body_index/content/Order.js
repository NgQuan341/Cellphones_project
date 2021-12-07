import React, { Component, Fragment } from "react";
import cartapi from "../../../../api/cartAPI";
import productApi from "../../../../api/productAPI";
// import productApi from "../../../../api/productAPI";
// import { Link } from "react-router-dom";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartID: "",
      accountID: "",
      productsID: [],
      products: [],
      cart_products: [],
      total_order: "",
      count: 0
    };
  }


  getProToPayment = (id) => {
    cartapi
      .getOne(id)
      .then((res) => {
        let arr = res[0].productsID.filter(proID => proID.check_cart === 2);
        console.log(arr);

        this.setState({
          productsID: arr,
        });
        let sum = 0;
        let count = 0;
        arr.map(a => {
          sum += a.total
          count += a.quantity
          return a;
        })
        this.setState({ total_order: sum,count:count })
        localStorage.setItem("totalOrder",JSON.stringify(sum))
      })
      .catch((err) => { });

  };

  updateCart = (data, id) => {
    cartapi
      .put(data, id)
      .then((res) => { })
      .catch((err) => { });
  }

  getAllProduct = () => {
    productApi
      .getAll()
      .then((res) => {
        this.setState({ products: res });
        localStorage.setItem("Products", JSON.stringify(res));
      })
      .catch((err) => { });
  };


  componentDidMount() {
    window.scrollTo(0, 0);

    if (localStorage.getItem("Products") == null) {
      this.getAllProduct();
    }
    else {
      this.setState({ products: JSON.parse(localStorage.getItem("Products")) })
    }
    this.getProToPayment(this.props.idAcc)
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

                  <th colSpan={2}>Products</th>

                  <th>Unit price</th>
                  <th>Number of Product</th>
                  <th>Amount</th>

                </tr>
              </thead>
              <tbody style={{}}>
                {this.state.products.map((pro) =>
                  this.state.productsID.map((id) => {
                    if (pro.id === id.productID) {
                      return (
                        <tr key={id.productID} className="cart-items">
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
                            <input
                              className="cart-amount"
                              type="text"
                              readOnly
                              value={id.quantity}
                            />
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
                  <td>&nbsp;</td>
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
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Order;
