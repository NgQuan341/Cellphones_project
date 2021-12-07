import React, { Component } from 'react';

class OrderList extends Component {
    render() {
        return (
            <div className="col-12 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                    <h2 className="tm-block-title">Orders List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">NO.</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">TOUR NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">LASTNAME</th>
                                <th scope="col">EST DELIVERY DUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><b>id_order</b></th>
                                <td>
                                    <div className="tm-status-circle pending">
                                    </div>Checkout
                          </td>
                                <td><b>name_tour</b></td>
                                <td><b>email</b></td>
                                <td><b>phone</b></td>
                                <td>lname</td>
                                <td>date_book</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OrderList;