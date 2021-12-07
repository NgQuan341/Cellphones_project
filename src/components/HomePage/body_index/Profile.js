import React, { Component } from "react";
import axios from "axios";
// import emailjs from "emailjs-com";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
// import "./assets/css/login.css";
// import "../../../LogupPage/assets/css/login.css";
import { Link } from "react-router-dom";
import accountsApi from "../../../api/accountsAPI";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: {},
      password:"",
      password2:""
    }
  }
  updateAcc = (data,id) =>{
    accountsApi.put(data,id)
    .then((res)=>{

    })
    .catch((err)=>{})
  }
  getOneAcc = (id) =>{
    accountsApi.getOne(id)
    .then((res)=>{
      this.setState({account:res})
    }).catch((err)=>{})
  }
  postData = (event) => {
    event.preventDefault();
    this.form.validateAll();
    let acc ={
      "id": this.props.match.params.id,
      "username": document.getElementById("username").value,
      "password": document.getElementById("newpassword").value,
      "email": document.getElementById("email").value,
      "address": document.getElementById("address").value,
      "phone": document.getElementById("phone").value,
      "role": this.state.account.role,
      "first_name": document.getElementById("first_name").value,
      "last_name": document.getElementById("last_name").value,
    }
    console.log(acc);
    this.updateAcc(acc,this.props.match.params.id)
    alert("Update account complete")
    window.location.href="/";

  };
  onChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  componentDidMount(){
    this.getOneAcc(this.props.match.params.id)
  }
  render() {
    const passagain = () => {
      if (this.state.password !== this.state.password2) {
        return (
          <small className="form-text text-danger">
            Passwords are not duplicates
          </small>
        );
      }
    };
    const check_pass = (value)=>{
      if(value!==this.state.account.password){
        return (
          <small className="form-text text-danger">Password is wrong</small>
        );
      }
      else{
        document.getElementById("newpassword").readOnly=false
        document.getElementById("confirmpassword").readOnly=false
      }
    }
    const required = (value) => {
        if (isEmpty(value)) {
          return (
            <small className="form-text text-danger">This field is required</small>
          );
        }
      };
      
      const email = (value) => {
        if (!isEmail(value)) {
          return (
            <small className="form-text text-danger">Incorrect email format</small>
          );
        }
      };
      
      const pass = (value) => {
        if (value.trim().length < 6) {
          return (
            <small className="form-text text-danger">
              Password must be at least 6 characters long
            </small>
          );
        }
      };
      
      const phone = (value) => {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (value !== "") {
          if (vnf_regex.test(value) === false) {
            return (
              <small className="form-text text-danger">Incorrect phone number</small>
            );
          }
          if (value.trim().length < 10) {
            return (
              <small className="form-text text-danger">
                Phone number must be at have 10 number
              </small>
            );
          }
        }
      };
    return (
      <div>
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0 mt-5">
          <div className="container">
            <div className="card login-card">
              <div className="row no-gutters">
                <div className="col-md-12">
                  <center>
                    {" "}
                    <p className="login-card-description mt-5">
                      Edit personal information
                    </p>
                    <hr></hr>
                    <Form
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="row">
                        <div className="form-group col-6">
                          <Input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            value={this.state.account.username}
                           
                            validations={[required]}
                          />
                          <Input
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="form-control"
                            placeholder="Your first name"
                            value={this.state.account.first_name}
                            
                            validations={[required]}
                          />
                          <Input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="form-control"
                            placeholder="Your last name"
                            value={this.state.account.last_name}
                         
                            validations={[required]}
                          />
                        </div>

                        <div className="form-group col-6">
                          <Input
                            type="password"
                            name="old_password"
                            className="form-control"
                            placeholder="Old Password"
                            onChange={this.onChange}
                            validations={[required, pass,check_pass]}
                          />
                          <Input
                            type="password"
                            id="newpassword"
                            name="password"
                            readOnly = {true}
                            className="form-control"
                            placeholder="New Password"
                            onChange={this.onChange}
                            validations={[required, pass]}
                          />

                          <Input
                            type="password"
                            id="confirmpassword"
                            name="password2"
                            readOnly = {true}
                            className="form-control"
                            placeholder="Confirm password"
                            onChange={this.onChange}
                            validations={[required, passagain]}
                          />
                        </div>
                      </div>

                      <div className="row">
                        
                        <div className="form-group col-12">
                          <Input
                            type="text"
                            name="phone"
                            id="phone"
                            value={this.state.account.phone}
                            className="form-control"
                            placeholder="Your number phone"
                            onChange={this.onChange}
                            validations={[required, phone]}
                          />
                        </div>
                        <div className="form-group col-12">
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.account.email}
                            className="form-control"
                            placeholder="Email address"
                            onChange={this.onChange}
                            validations={[required, email]}
                          />
                        </div>
                        <div className="form-group col-12">
                          <Input
                            type="text"
                            name="address"
                            id="address"
                            value={this.state.account.address}
                            className="form-control"
                            placeholder="Enter your address"
                            onChange={this.onChange}
                            validations={[required]}
                          />
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <button
                          type="button"
                          name="btn"
                          className="btn login-btn mb-4"
                          onClick={this.postData}
                        >
                          Submit
                        </button>
                        <Link to="/" className="btn login-btn mb-4">
                          Home
                        </Link>
                      </div>
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
                  </center>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Profile;
