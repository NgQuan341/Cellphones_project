import React, { Component, Fragment } from "react";
import orderapi from "../../../api/orderAPI";

class NotificationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: [],
            style: false,
            count: 0,
            count1: 0
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

        }
        else if (id === 3) {
            this.style.style1 = { display: "none" };
            this.style.style2 = { display: "none" };
            this.style.style3 = { display: "block" };
            this.style.style4 = { display: "none" };
            this.setState({ style: true });
        }
        else {
            this.style.style1 = { display: "none" };
            this.style.style2 = { display: "none" };
            this.style.style3 = { display: "none" };
            this.style.style4 = { display: "block" };
            this.setState({ style: true });
        }
    };
    updatePayment = (data, id) => {
        orderapi
            .put(data, id)
            .then((res) => { })
            .catch((err) => { });
    };
    getPayment = () => {
        orderapi
            .getAll()
            .then((res) => {
                let count = 0,count1=0;
                res.map(pay=>{
                    if(pay.check_confirm===1){
                        count++
                    }
                    if(pay.check_confirm===2 && pay.check_receive===true){
                        count1++
                    }
                    return pay
                })
                this.setState({ payment: res, count:count,count1:count1 });
                
            })
            .catch((err) => { });
    };
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
    changeCheckConfirmTo2 = (id) => {
        let count = this.state.count;
        let arr = this.state.payment.map((pay) => {
            if (pay.id === id) {
                pay.check_confirm = 2;
                count --;
                this.updatePayment(pay, pay.id);
            }
            return pay;
        });
        this.setState({ payment: arr, count:count });
    };
    changeCheckConfirmTo3 = (id) => {
        let count1 = this.state.count1;
        let arr = this.state.payment.map((pay) => {
            if (pay.id === id) {
                pay.check_confirm = 3;
                count1--
                this.updatePayment(pay, pay.id);
            }
            return pay;
        });
        this.setState({ payment: arr,count1:count1 });
    };
    componentDidMount() {
        window.scrollTo(0, 0);
        this.getPayment();
    }
    render() {
        return (
            <Fragment>
                <div className="row ml-3 mb-4">
                    <button
                        className="btn btn-warning btn_houver"
                        style={{
                            position: "relative",
                            marginRight: "10px",
                            padding: "5px 10px",
                            borderRadius: "0px 10px 0px 10px",
                            backgroundColor: "#394f62"
                        }}
                        type="button"
                        onClick={() => this.changeStyle(1)}
                    >
                        <div 
                        style={{
                            display:this.state.count===0?"none":"block",
                            fontSize:"11px",
                            textAlign:"center",
                            position:"absolute",
                            right: "-5px",
                            top: "-5px",
                            backgroundColor:"red", 
                            borderRadius:"15px", 
                            height:"15px", 
                            width:"15px"}}>
                                {this.state.count}
                        </div>
                        Notification
                    </button>
                    <button

                        className="btn btn-warning btn_houver"
                        style={{
                            position: "relative",
                            marginRight: "10px",
                            padding: "5px 10px",
                            borderRadius: "0px 10px 0px 10px",
                            backgroundColor: "#394f62"
                        }}
                        type="button"
                        onClick={() => this.changeStyle(2)}
                    >
                        <div 
                        style={{
                            display:this.state.count1===0?"none":"block",
                            fontSize:"11px",
                            textAlign:"center",
                            position:"absolute",
                            right: "-5px",
                            top: "-5px",
                            backgroundColor:"red", 
                            borderRadius:"15px", 
                            height:"15px", 
                            width:"15px"}}>
                                {this.state.count1}
                        </div>
                        Waiting order
                    </button>
                    <button
                        className="btn btn-warning btn_houver"
                        style={{
                            marginRight: "10px",
                            padding: "5px 10px",
                            borderRadius: "0px 10px 0px 10px",
                            backgroundColor: "#394f62"
                        }}
                        type="button"
                        onClick={() => this.changeStyle(3)}
                    >
                        Received
          </button>
                    <button
                        className="btn btn-warning btn_houver "
                        style={{
                            marginRight: "10px",
                            padding: "5px 10px",
                            borderRadius: "0px 10px 0px 10px",
                            backgroundColor: "#394f62"
                        }}
                        type="button"
                        onClick={() => this.changeStyle(4)}
                    >
                        Cancel
          </button>
                </div>

                <div style={this.style.style1} className="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col"
                >
                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                        <h2 className="tm-block-title">Notification List</h2>
                        <div className="tm-notification-items">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">STATUS</th>
                                        <th scope="col">USER NAME</th>
                                        <th scope="col">TOTAL PRICE</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.payment.map((pay) => {
                                        if (pay.check_confirm === 1) {
                                            return (
                                                <tr key={pay.id}>
                                                    <th scope="row">
                                                        <b>{pay.id}</b>
                                                    </th>
                                                    <td>
                                                        <div className="tm-status-circle pending"></div>
                                                        Waiting
                                                     </td>
                                                    <td>
                                                        <b>{pay.username}</b>
                                                    </td>
                                                    <td>
                                                        <b>{pay.total}</b>
                                                    </td>
                                                    <td>
                                                        <b>{new Intl.DateTimeFormat(['ban', 'id'], {year: 'numeric', month: '2-digit',day: '2-digit'}).format(pay.createdAt)}</b>
                                                    </td>
                                                    <td>
                                                        <a
                                                            style={{ cursor: "pointer", marginRight: "20px" }}
                                                            className="tm-category-link"
                                                            onClick={() => this.changeCheckConfirmTo2(pay.id)}
                                                        >
                                                            <i className="far fa-check-circle tm-product-delete-icon"></i>
                                                        </a>

                                                        <a
                                                            style={{ cursor: "pointer" }}
                                                            className="tm-category-link"
                                                            onClick={() => this.changeCheckConfirmTo0(pay.id)}
                                                        >
                                                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={this.style.style2} className="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                        <h2 className="tm-block-title">Waiting Order List</h2>
                        <div className="tm-notification-items">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">STATUS</th>
                                        <th scope="col">USER NAME</th>
                                        <th scope="col">TOTAL PRICE</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.payment.map((pay) => {
                                        if (pay.check_confirm === 2) {
                                            return (
                                                <tr key={pay.id}>
                                                    <th scope="row">
                                                        <b>{pay.id}</b>
                                                    </th>
                                                    <td>
                                                        <div style={{display:pay.check_receive?"none":"inline-block"}} className="tm-status-circle pending"></div>
                                                        <div style={{display:pay.check_receive?"inline-block":"none"}} className="tm-status-circle pending1"></div>
                                                        Waiting
                                                    </td>
                                                    <td>
                                                        <b>{pay.username}</b>
                                                    </td>
                                                    <td>
                                                        <b>{pay.total}</b>
                                                    </td>
                                                    <td>
                                                        <b>{new Intl.DateTimeFormat(['ban', 'id'], {year: 'numeric', month: '2-digit',day: '2-digit'}).format(pay.createdAt)}</b>
                                                    </td>
                                                    <td>
                                                        <a
                                                            style={{
                                                                display: pay.check_receive ? "block" : "none",
                                                                cursor: "pointer",
                                                                marginLeft:"20px"
                                                            }}
                                                            className="tm-category-link"
                                                            onClick={() => this.changeCheckConfirmTo3(pay.id)}
                                                        >
                                                            <i className="far fa-check-circle tm-product-delete-icon"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={this.style.style3} className="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                        <h2 className="tm-block-title">Received List</h2>
                        <div className="tm-notification-items">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">STATUS</th>
                                        <th scope="col">USER NAME</th>
                                        <th scope="col">TOTAL PRICE</th>
                                        <th scope="col">DATE</th>
                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.payment.map((pay) => {
                                        if (pay.check_confirm === 3) {
                                            return (
                                                <tr key={pay.id}>
                                                    <th scope="row">
                                                        <b>{pay.id}</b>
                                                    </th>
                                                    <td>
                                                        <div className="tm-status-circle moving"></div>Received
                                                    </td>
                                                    <td>
                                                        <b>{pay.username}</b>
                                                    </td>
                                                    <td>
                                                        <b>{pay.total}</b>
                                                    </td>
                                                    <td>
                                                        <b>{new Intl.DateTimeFormat(['ban', 'id'], {year: 'numeric', month: '2-digit',day: '2-digit'}).format(pay.createdAt)}</b>
                                                    </td>
                                                    
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={this.style.style4} className="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                        <h2 className="tm-block-title">Cancel List</h2>
                        <div className="tm-notification-items">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">STATUS</th>
                                        <th scope="col">USER NAME</th>
                                        <th scope="col">TOTAL PRICE</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.payment.map((pay) => {
                                        if (pay.check_confirm === 0) {
                                            return (
                                                <tr key={pay.id}>
                                                    <th scope="row">
                                                        <b>{pay.id}</b>
                                                    </th>
                                                    <td>
                                                        <div className="tm-status-circle cancelled"></div>Cancelled
                                                    </td>
                                                    <td>
                                                        <b>{pay.username}</b>
                                                    </td>
                                                    <td>
                                                        <b>{pay.total}</b>
                                                    </td>
                                                    <td>
                                                        <b>{new Intl.DateTimeFormat(['ban', 'id'], {year: 'numeric', month: '2-digit',day: '2-digit'}).format(pay.createdAt)}</b>
                                                    </td>
                                                    <td>
                                                        <a
                                                            style={{marginLeft:"20px",cursor: "pointer" }}
                                                            className="tm-category-link"
                                                        >
                                                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NotificationList;
