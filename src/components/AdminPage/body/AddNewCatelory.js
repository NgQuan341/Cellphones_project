import React, { Component } from 'react';

class AddNewCatelory extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
                <h2 className="tm-block-title">Tour Categories</h2>
                <div className="tm-product-table-container">
                    <table className="table tm-table-small table-hover table-focus tm-product-table">
                        <tbody>
                            <tr>
                                <td className="tm-product-name">Phone</td>
                                <td className="text-center">
                                    <a href="#" className="tm-category-link">
                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tm-product-name" >Laptop</td>
                                <td className="text-center">
                                    <a href="#" className="tm-category-link">
                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tm-product-name" >Tablet</td>
                                <td className="text-center">
                                    <a href="#" className="tm-category-link">
                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tm-product-name" >Smart Watch</td>
                                <td className="text-center">
                                    <a href="#" className="tm-category-link">
                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tm-product-name" >Audio</td>
                                <td className="text-center">
                                    <a href="#" className="tm-category-link">
                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tm-product-name" >Accessories</td>
                                <td className="text-center">
                                    <a href="#" className="tm-category-link">
                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                            
                    </table>
                </div>
                <button className="btn btn-primary btn-block text-uppercase mb-3">
                    Add new category
                </button>
                </div>
            </div>
        );
    }
}

export default AddNewCatelory;