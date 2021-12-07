import React, { Component } from 'react';
import axios from 'axios';
class AddProduct extends Component {
    state = {
        name: null,
        brand: null,
        categoryID: null,
        old_price: null,
        new_price: null,
        description: null,
        screen: null,
        cpu: null,
        ram: null,
        memory: null,
        battery: null,
        os: null,
        mark: null,
        batterypk: null,
        gate: null,
        type: null,
        Wattage: null,
        bluetooth: null,
        Input_current: null,
        sale: false,
        img: ""
    }
    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    uploadImage = async (event) => {
        const target = event.target;
        const file = target.files[0];
        const base64 = await  this.convertBase64(file);
        this.state.img = base64;
        console.log(base64);
      };
    
      convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    check = () => {
        if (this.state.sale === false) {
            console.log("Da roi");
            document.getElementById("tet").style.display = "block";
        }
        else {
            document.getElementById("tet").style.display = "none";
        }
    }

    checkcategory = () => {
        if (this.state.categoryID == 1 || this.state.categoryID == 2 || this.state.categoryID == 3 || this.state.categoryID == 4) {
            console.log(this.state.categoryID);
            document.getElementById("speci1").style.display = "block";
            document.getElementById("speci5").style.display = "none";
            document.getElementById("speci6").style.display = "none";
        }
        else if (this.state.categoryID == 5) {
            document.getElementById("speci1").style.display = "none";
            document.getElementById("speci5").style.display = "block";
            document.getElementById("speci6").style.display = "none";

        } else {
            document.getElementById("speci1").style.display = "none";
            document.getElementById("speci5").style.display = "none";
            document.getElementById("speci6").style.display = "block";
        }


    }
    postData = event => {
        event.preventDefault();
        var batteryy
        if (this.state.battery !== null) {
            batteryy = this.state.battery
        }
        else if (this.state.batterypk !== null) {
            batteryy = this.state.batterypk
        }
        console.log(batteryy);
        const pro1 = {
            name: this.state.name,
            brand: this.state.brand,
            categoryID: this.state.categoryID,
            old_price: this.state.old_price,
            new_price: this.state.new_price,
            description: this.state.description,
            mark: this.state.mark,
            check_price: this.state.sale,
            screen: this.state.screen,
            cpu: this.state.cpu,
            ram: this.state.ram,
            memory: this.state.memory,
            battery: batteryy,
            os: this.state.os,
            Wattage: this.state.Wattage,
            bluetooth: this.state.bluetooth,
            Input_current: this.state.Input_current,
            gate: this.state.gate,
            type: this.state.type,
            img: this.state.img
        }
        axios.post(' https://data-reactjs.herokuapp.com/products', pro1)
            .then(res => {
                alert("Add New product successful !!!")
            })

    }
    render() {
        return (
            <div className="container tm-mt-big tm-mb-big">
                <div className="row">
                    <div className="col-xl-11 col-lg-10 col-md-12 col-sm-12 mx-auto">
                        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="tm-block-title d-inline-block">Add Product</h2>
                                </div>
                            </div>
                            <div className="row tm-edit-product-row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <h3 className="tm-block-title d-inline-block">INFORMATION</h3>
                                    <form className="tm-edit-product-form" encType="multipart/form-data">
                                        <div className="form-group mb-3">
                                            <input id="id" name="id" type="hidden" style={{ color: 'grey' }} defaultValue className="form-control validate required" onChange={this.onChange} />
                                        </div>

                                        <div class=" form-group mb-3" >
                                            <label htmlFor="name">Product name</label>
                                            <input id="name" name="name" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div>
                                            <label htmlFor="sales" >Sale</label>
                                            &nbsp;&nbsp;&nbsp;<input
                                                name="sale"
                                                value={false}
                                                type="checkbox" onClick={this.check}
                                                checked={this.state.sale}
                                                onChange={this.onChange}
                                            />

                                        </div>

                                        {/* TEST */}

                                        <div className="form-group mb-3" >
                                            <label htmlFor="old_price"> Price</label>
                                            <input id="old_price" name="old_price" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>

                                        <div id="tet" style={{ display: "none" }}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="new_price">New Price </label>
                                                <input id="new_price" name="new_price" type="text" className="form-control validate" required onChange={this.onChange} />
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="brand">Brand </label>
                                            <input id="brand" name="brand" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="brand">Image </label>
                                            <input
                                                id="img"
                                                name="img"
                                                type="file"
                                                className="form-control validate"
                                                required
                                                onChange={this.uploadImage}
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="description">Description</label>
                                            <textarea className="form-control validate tm-small" rows={4} id="description" name="description" defaultValue={""} onChange={this.onChange} />
                                        </div>
                                        <div className="row">
                                            <div className="form-group mb-3 col-6">
                                                <label htmlFor="category">Category</label>
                                                <select className="custom-select tm-select-accounts" id="categoryID" name="categoryID" onChange={this.onChange} onClick={this.checkcategory}>
                                                    <option selected value="1">Phone</option>
                                                    <option value="2">Laptop</option>
                                                    <option value="3">Table</option>
                                                    <option value="4">Smart Watch</option>
                                                    <option value="5">Audio</option>
                                                    <option value="6">Accessories</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3 col-6">
                                                <label htmlFor="mark">Mark</label>
                                                <select className="custom-select tm-select-accounts" id="mark" name="mark" onChange={this.onChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option selected value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <h3 className="tm-block-title d-inline-block">SPECIFICATIONS</h3>
                                    <form className="tm-edit-product-form" id="speci1">
                                        <div className="form-group mb-3">
                                            <input id="id_tour" name="id_tour" type="hidden" style={{ color: 'grey' }} defaultValue className="form-control validate required" onChange={this.onChange} />
                                        </div>
                                        <div class=" form-group mb-3" >
                                            <label htmlFor="screen">Screen
                                        </label>
                                            <input id="screen" name="screen" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div class=" form-group mb-3" >
                                            <label htmlFor="cpu">CPU
                                         </label>
                                            <input id="cpu" name="cpu" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="ram">RAM </label>
                                            <input id="ram" name="ram" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="memory">Memory</label>
                                            <input id="memory" name="memory" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="battery">Battery</label>
                                            <input id="battery" name="battery" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="os">OS</label>
                                            <input id="os" name="os" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                    </form>
                                    {/* Phụ kiện*/}
                                    <form className="tm-edit-product-form" id="speci6" style={{ display: 'none' }} >

                                        <div class=" form-group mb-3" >
                                            <label htmlFor="gate">Gate
                                        </label>
                                            <input id="gate" name="gate" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div class=" form-group mb-3" >
                                            <label htmlFor="type">Type
                                         </label>
                                            <input id="type" name="type" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>


                                    </form>


                                    {/*Audio  */}
                                    <form className="tm-edit-product-form" id="speci5" style={{ display: 'none' }} >

                                        <div class=" form-group mb-3" >
                                            <label htmlFor="Wattage">Wattage
                                        </label>
                                            <input id="Wattage" name="Wattage" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                        <div class=" form-group mb-3" >
                                            <label htmlFor="bluetooth">Bluetooth
                                         </label>
                                            <input id="bluetooth" name="bluetooth" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="Input_current">Input current </label>
                                            <input id="Input_current" name="Input_current" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="battery">Battery</label>
                                            <input id="batterypk" name="batterypk" type="text" className="form-control validate" required onChange={this.onChange} />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn btn-primary btn-block text-uppercase" name="submit_insert_tour" onClick={this.postData}>Add Product Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;
