import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            searchTerm: "",
            setSearchTerm: "",
            isDelete: false
        }
    }

    componentDidMount() {
        this.getData();
    }


    getData = () => {
        axios({
            method: 'GET',
            url: 'https://data-reactjs.herokuapp.com/products',
            data: null
        }).then(res => {
            this.setState({ product: res.data });
        }).catch(err => { });
    }

    onDelete = (id) => {
        axios({
            method: 'DELETE',
            url: `https://data-reactjs.herokuapp.com/products/${id}`,
            data: null
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
        });
        window.location.reload();
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
        console.log(this.state.isDelete)
    }


    render(products) {

        return (
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-products">

                    <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <input className="form-control form-control-sm ml-3 w-75"
                            type="text" placeholder="Search"
                            name="searchTerm"
                            aria-label="Search"
                            onChange={this.onChange} />
                    </form>
                    <br />
                    <div className="tm-product-table-container">

                        <table className="table table-hover tm-table-small tm-product-table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">ID</th>
                                    <th scope="col">PRODUCT NAME</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">BRAND</th>
                                    {/* <th scope="col">SALE</th> */}
                                    <th scope="col">IMAGE</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {this.state.product
                                    .filter((product) => {
                                        if (this.state.searchTerm === "") {
                                            return product;
                                        } else if (
                                            product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                                        ) {
                                            return product;
                                        }
                                    }).map(pro =>
                                        <tr key={pro.id}>
                                            <td scope="col">{pro.id}</td>
                                            <td scope="col">{pro.name}</td>
                                            <td scope="col">{pro.new_price}</td>
                                            <td scope="col">{pro.brand}</td>
                                            <td scope="col">
                                                <img src={pro.img} style={{ width: 50 }} />
                                            </td>

                                            <td>
                                                <Link to={`edit_product/${pro.id}`}><i className="fas fa-pencil-alt tm-product-delete-icon"></i></Link>
                                            </td>
                                            <td>
                                                <a className="tm-category-link" style={{ cursor: "pointer" }} onClick={() => this.onDelete(pro.id)} >
                                                    <i className="far fa-trash-alt tm-product-delete-icon" ></i>
                                                </a>

                                            </td>
                                        </tr>
                                    )}


                            </tbody>
                        </table>
                    </div>

                    <Link className="btn btn-primary btn-block text-uppercase mb-3" to="/add_product" >Add New Product</Link>

                    <a href="" className="btn btn-primary btn-block text-uppercase mb-3">See All Products</a>
                </div>
            </div>
        );
    }
}



export default AllProducts;