import React, { Component, Fragment } from "react";
import cartapi from "../../../../api/cartAPI";
import orderapi from "../../../../api/orderAPI";
import productApi from "../../../../api/productAPI";
// import productApi from "../../../../api/productAPI";
// import { Link } from "react-router-dom";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: [],
      products: [],
      style: false,
    };
  }
  style = {
    style1: {
      display: "block",
    },
    style2: {
      display: "none",
    },
    style3: {
      display: "none",
    },
    style4: {
      display: "none",
    },
  };
  changeStyle = (id) => {
    if (id === 1) {
      this.style.style1 = { display: "block" };
      this.style.style2 = { display: "none" };
      this.style.style3 = { display: "none" };
      this.style.style4 = { display: "none" };
      this.setState({ style: true });
    } else if (id === 2) {
      this.style.style1 = { display: "none" };
      this.style.style2 = { display: "block" };
      this.style.style3 = { display: "none" };
      this.style.style4 = { display: "none" };
      this.setState({ style: true });
    } else {
      this.style.style1 = { display: "none" };
      this.style.style2 = { display: "none" };
      this.style.style3 = { display: "block" };
      this.style.style4 = { display: "none" };
      this.setState({ style: true });
    }
  };
  updatePayment = (data, id) => {
    orderapi
        .put(data, id)
        .then((res) => { })
        .catch((err) => { });
}
changeCheckConfirmTo0 = (id) =>{
  let arr = this.state.payment.map((pay) => {
      if (pay.id === id) {
          pay.check_confirm = 0;
          this.updatePayment(pay, pay.id);
      }
      return pay;
  });
  this.setState({ payment: arr });
}
changeCheckReceive = (id) =>{
  let arr = this.state.payment.map((pay) => {
      if (pay.id === id) {
          pay.check_receive = true;
          this.updatePayment(pay, pay.id);
      }
      return pay;
  });
  this.setState({ payment: arr });
}
  getOnePayment = (id) => {
    orderapi
      .getOne(id)
      .then((res) => {
        let products = JSON.parse(localStorage.getItem("Products"));
        this.setState({ payment: res, products: products });
      })
      .catch((err) => {});
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    let idAcc = JSON.parse(localStorage.getItem("loginAcc")).id;

    this.getOnePayment(idAcc);
  }

  render() {
    return (
      <Fragment>
        <div className="row ml-3 mb-4">
          <button
            className="main-button btnDelete"
            style={{
              position: "relative",
              marginRight: "10px",
              padding: "5px 10px",
              borderRadius: "0px 10px 0px 10px",
            }}
            type="button"
            onClick={() => this.changeStyle(1)}
          >
            Notification
          </button>
          <button
            className="main-button btnDelete"
            style={{
              position: "relative",
              marginRight: "10px",
              padding: "5px 10px",
              borderRadius: "0px 10px 0px 10px",
            }}
            type="button"
            onClick={() => this.changeStyle(2)}
          >
            Waiting order
          </button>
          <button
            className="main-button btnDelete"
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              borderRadius: "0px 10px 0px 10px",
            }}
            type="button"
            onClick={() => this.changeStyle(3)}
          >
            Received
          </button>
        </div>
        <div style={this.style.style1}>
          {this.state.payment.map((pay) => {
            if(pay.check_confirm === 1){
              return (
                <div
                  key={pay.id}
                  role="main"
                  className="cart-page__content cart-page__content--opc"
                  style={{ marginBottom: "0px" }}
                >
                  <table style={{ width: "100%", border: "1px" }}>
                    <thead id="cart">
                      <tr>
                        <th>
                          <p style={{ margin: "10px 10px 10px 10px" }}>&nbsp;</p>
                        </th>
                        <th>Img</th>
                        <th>Products Name</th>
                        <th>Total price</th>
                        <th colSpan={1}>Date</th>
                      </tr>
                    </thead>
                    <tbody style={{}}>
                      {pay.productsID.map((id) => {
                        return (
                          <tr key={id.productID} className="cart-items">
                            <td>&nbsp;</td>
                            <td>
                              <img
                                src={id.img}
                                width="50px"
                                height="50px"
                                alt="ảnh"
                              ></img>
                            </td>
                            <td>
                              <p>{id.product_name}</p>
                            </td>
                            <td>
                              <p>{id.total}</p>
                            </td>
                            <td>
                              {new Intl.DateTimeFormat(["ban", "id"], {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }).format(id.createdAt)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <hr></hr>
                  <table id="total" style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <p style={{ margin: "15px 10px 10px 15px" }}>&nbsp;</p>
                        </td>
                        <th>Status</th>
                        <td colSpan={2} S>Waiting confirm from Admin...</td>
                        <td className="cart-items-btn" style={{ float: "right" }}>
                          {/* <button
                            type="button"
                            className="main-button btnDelete"
                            style={{
                              borderRadius: "10px 0 0 10px",
                              padding: "8px",
                            }}
                            onClick={() =>}
                          >
                            Received
                          </button> */}
                          &nbsp;
                          <button
                            type="button"
                            className="main-button btnDelete"
                            style={{
                            
                              padding: "8px",
                            }}
                            onClick={() =>  this.changeCheckConfirmTo0(pay.id)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr></hr>
                </div>
              );
            }
            })}
        </div>
        <div style={this.style.style2}>
        {this.state.payment.map((pay) => {
            if(pay.check_confirm === 2){
              return (
                <div
                  key={pay.id}
                  role="main"
                  className="cart-page__content cart-page__content--opc"
                  style={{ marginBottom: "0px" }}
                >
                  <table style={{ width: "100%", border: "1px" }}>
                    <thead id="cart">
                      <tr>
                        <th>
                          <p style={{ margin: "10px 10px 10px 10px" }}>&nbsp;</p>
                        </th>
                        <th>Img</th>
                        <th>Products Name</th>
                        <th>Total price</th>
                        <th colSpan={1}>Date</th>
                      </tr>
                    </thead>
                    <tbody style={{}}>
                      {pay.productsID.map((id) => {
                        return (
                          <tr key={id.productID} className="cart-items">
                            <td>&nbsp;</td>
                            <td>
                              <img
                                src={id.img}
                                width="50px"
                                height="50px"
                                alt="ảnh"
                              ></img>
                            </td>
                            <td>
                              <p>{id.product_name}</p>
                            </td>
                            <td>
                              <p>{id.total}</p>
                            </td>
                            <td>
                              {new Intl.DateTimeFormat(["ban", "id"], {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }).format(id.createdAt)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <hr></hr>
                  <table id="total" style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <p style={{ margin: "15px 10px 10px 15px" }}>&nbsp;</p>
                        </td>
                        <th>Status</th>
                        <td colSpan={2}>{pay.check_receive?"Waiting confirm from Admin":"Please click Receive to confirm"}</td>
                        <td className="cart-items-btn" style={{ float: "right" }}>
                          <button
                            type="button"
                            className="main-button btnDelete"
                            style={{
                              borderRadius: "10px 0 0 10px",
                              padding: "8px",
                            }}
                            onClick={() => this.changeCheckReceive(pay.id)}
                          >
                            Received
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            className="main-button btnDelete"
                            style={{
                             
                              borderRadius: "0 10px 10px 0",
                              padding: "8px",
                            }}
                            onClick={() =>  this.changeCheckConfirmTo0(pay.id)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr></hr>
                </div>
              );
            }
            })}
        </div>
        <div style={this.style.style3}>
        {this.state.payment.map((pay) => {
            if(pay.check_confirm === 3){
              return (
                <div
                  key={pay.id}
                  role="main"
                  className="cart-page__content cart-page__content--opc"
                  style={{ marginBottom: "0px" }}
                >
                  <table style={{ width: "100%", border: "1px" }}>
                    <thead id="cart">
                      <tr>
                        <th>
                          <p style={{ margin: "10px 10px 10px 10px" }}>&nbsp;</p>
                        </th>
                        <th>Img</th>
                        <th>Products Name</th>
                        <th>Total price</th>
                        <th colSpan={1}>Date</th>
                      </tr>
                    </thead>
                    <tbody style={{}}>
                      {pay.productsID.map((id) => {
                        return (
                          <tr key={id.productID} className="cart-items">
                            <td>&nbsp;</td>
                            <td>
                              <img
                                src={id.img}
                                width="50px"
                                height="50px"
                                alt="ảnh"
                              ></img>
                            </td>
                            <td>
                              <p>{id.product_name}</p>
                            </td>
                            <td>
                              <p>{id.total}</p>
                            </td>
                            <td>
                              {new Intl.DateTimeFormat(["ban", "id"], {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }).format(id.createdAt)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <hr></hr>
                  <table id="total" style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <p style={{ margin: "15px 10px 10px 15px" }}>&nbsp;</p>
                        </td>
                        <th>Status</th>
                        <td colSpan={2} style={{fontStyle:"italic"}} >Received</td>
                        <td className="cart-items-btn" style={{ float: "right" }}>
                          &nbsp;
                          <button
                            type="button"
                            className="main-button btnDelete"
                            style={{                              
                              borderRadius: "0 10px 10px 0",
                              padding: "8px",
                            }}
                            onClick={() =>  this.changeCheckConfirmTo0(pay.id)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr></hr>
                </div>
              );
            }
            })}
        </div>
      </Fragment>
    );
  }
}

export default History;
