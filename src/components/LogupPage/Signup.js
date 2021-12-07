import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import "./assets/css/login.css";
import { Link } from "react-router-dom";

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

class Signup extends Component {
  state = {
    random: 0,
    username: "",
    password: "",
    passagain: "",
    email: "",
    address: "",
    phone: "",
    first_name: "",
    last_name: "",
    role:"user",
    block:false,
    account: [],
  };

  passagain = () => {
    if (this.state.password !== this.state.password2) {
      return (
        <small className="form-text text-danger">
          Passwords are not duplicates
        </small>
      );
    }
  };
  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val,
    });
  };
  //để getData chạy trước postData
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios({
      method: "GET",
      url: "http://localhost:4000/api/accounts",
      data: null,
    })
      .then((res) => {
        this.setState({ account: res.data });
        console.log(this.state.account);
      })
      .catch((err) => {});
  };

  sendEmail = () => {
    //random code
    var min = 100000;
    var max = 999999;
    var rands = Math.round(min + Math.random() * (max - min));

    //gán rand cho random tại state
    setTimeout(this.setState({ random: rands }), 1000);

    //get email at input
    var email = this.state.email;

    // var rands = this.state.random;
    console.log(email);

    console.log(rands);

    emailjs
      .send(
        "040421",
        "template_7koowzo",
        {
          rand: rands,
          email: email,
        },
        "user_ho9Sahp61jJl7EWy586k1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("send email");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  postData = (event) => {
    event.preventDefault();
    this.form.validateAll();
    var phone = this.state.phone;
    var email = this.state.email;
    var so = 0;
    this.state.account.map((acc) => {
      if (acc.email === email || acc.phone === phone) {
        so = 1;
      }
    });
    if (this.checkBtn.context._errors.length !== 0) {
      alert("Registration failed !!!");
    } else if (this.checkBtn.context._errors.length === 0) {
      if (so === 1) {
        alert("Account already exists!!!");
      } else {
        this.sendEmail();
        setTimeout(() => {
          var t = prompt(
            "The verification code sent to your email. Please check and enter your verification code: "
          );
          if (t == this.state.random) {
            const acc = {
              username: this.state.username,
              password: this.state.password,
              email: this.state.email,
              address: this.state.address,
              phone: this.state.phone,
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              role:this.state.role,
              block:this.state.block
            };
            axios
              .post("http://localhost:4000/api/accounts", acc)
              .then((res) => {
                console.log(res);
                console.log(res.data);
              });
            alert("Registration success!!! ");
          } else {
            alert("Registration failed !!!");
          }
        }, 1000);
      }
    }
  };

  render() {
    return (
      <div>
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0 mt-5">
          <div className="container">
            <div className="card login-card">
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img
                    src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-13-1.jpeg"
                    alt="login"
                    className="login-card-img"
                  />
                </div>
                <div className="col-md-7">
                  {/* <div className="card-body"> */}
                  <center>
                    {" "}
                    <p className="login-card-description mt-5">Sign up</p>
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
                            className="form-control"
                            placeholder="Username"
                            onChange={this.onChange}
                            validations={[required]}
                          />
                        </div>
                        <div className="form-group col-6">
                          <Input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={this.onChange}
                            validations={[required, pass]}
                          />
                        </div>
                        <div className="form-group col-12">
                          <Input
                            type="password"
                            name="password2"
                            id="password2"
                            className="form-control"
                            placeholder="Confirm password"
                            onChange={this.onChange}
                            validations={[required, this.passagain]}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-6">
                          <Input
                            type="text"
                            name="first_name"
                            className="form-control"
                            placeholder="Your first name"
                            onChange={this.onChange}
                            validations={[required]}
                          />
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="last_name" className="sr-only">
                            Lastname
                          </label>
                          <Input
                            type="text"
                            name="last_name"
                            className="form-control"
                            placeholder="Your last name"
                            onChange={this.onChange}
                            validations={[required]}
                          />
                        </div>
                        <div className="form-group col-12">
                          <Input
                            type="text"
                            name="phone"
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
                            className="form-control"
                            placeholder="Enter your address"
                            onChange={this.onChange}
                            validations={[required]}
                          />
                        </div>
                      </div>
                      <div className="" style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                      <Link to = "/login" className = "btn login-btn mb-4">
                        Login
                      </Link>
                      <button
                        type="button"
                        name="btn"
                        className="btn login-btn mb-4"
                        onClick={this.postData}
                      >
                        Submit
                      </button>
                      <Link to = "/" className = "btn login-btn mb-4">
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

export default Signup;
