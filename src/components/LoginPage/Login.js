import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import "../LogupPage/assets/css/login.css";
import { Link } from "react-router-dom";

// import "./signin.css"
// import loginBackground from './assets/images/loginBackground.png';
// import slide1 from './assets/images/slide1.jpg'

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
      <small className="form-text text-danger">Invalid email format</small>
    );
  }
};

const Pass = (value) => {
  if (value.trim().length < 6) {
    return (
      <small className="form-text text-danger">
        Password must be at least 6 characters long
      </small>
    );
  }
};
class Login extends Component {
  state = {
    email: "",
    password: "",
    random: 0,
    account: [],
  };

  //để cho getData() chạy trước submitData()
  componentDidMount() {
    this.getData();
  }

  //get value at input
  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val,
    });
  };
  // kiểm tra account admin
  
  //submit login
  submitData = (event) => {
    event.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    var acc = this.state.account;
   
    this.form.validateAll();

   
    //check để kiểm tra đăng nhập
    let check = 0;


    for (var i = 0; i < acc.length; i++) {
      if (acc[i].email === email) {
        if (acc[i].block == true) {
          check = 1;
          alert("Your account has been locked !!!");
        }
        else{
          if (acc[i].password === password) {
            check = 1;
            let acclogin= {
              id: acc[i].id,
              username: acc[i].username,
              role:acc[i].role
            }
            localStorage.setItem("loginAcc",JSON.stringify(acclogin))
            alert("Sign in success!");
            this.props.history.goBack()
          } else {
            check = 1;
            alert("Password is wrong! Please check again!");
          }
        }
       
        break;
      }
    }
    if (check === 0) {
      alert("Your account does not exist. Please Sign up!");
    }
  };
  // get data from db.json
  getData = (event) => {
    axios({
      method: "GET",
      url: "https://data-reactjs.herokuapp.com/accounts",
      data: null,
    })
      .then((res) => {
        this.setState({ account: res.data });
      })
      .catch((err) => {});
  };

  //function send the verification code
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

    emailjs
      .send(
        "32441",
        "template_72ba0th",
        {
          rand: rands,
          email: email,
        },
        "user_Wgt9aEVe3BNO80scfFzaD"
      )
      .then(
        (result) => {
        
        },
        (error) => {
        
        }
      );
  };

  forgot = () => {
    // event.preventDefault();

    this.sendEmail();

    setTimeout(() => {
      var t = prompt(
        "The verification code sent to your email. Please check and enter your verification code:",
        "******"
      );

      if (t === this.state.random) {
        var newPass = prompt(
          "Confirm successfully! Please enter new password to change your password:"
        );
        while (newPass.trim().length < 6) {
          alert("Password must be at least 6 characters long");
          newPass = prompt(
            "Please enter new password to change your password:"
          );
        }
        var email = this.state.email;
        var acc = this.state.account;

        for (var i = 0; i < acc.length; i++) {
          if (acc[i].email === email) {
            var id = acc[i].id;
            var username = acc[i].username;
            var address = acc[i].address;
            var phone = acc[i].phone;
            var first = acc[i].first_name;
            var last = acc[i].last_name;
            axios({
              method: "PUT",
              url: `https://data-reactjs.herokuapp.com/accounts/${id}`,
              data: {
                username: username,
                password: newPass,
                email: email,
                address: address,
                phone: phone,
                first_name: first,
                last_name: last,
              },
            }).then((res) => {
              alert("Update successfully!");
            });
            break;
          }
        }
      } else {
        t = window.confirm(
          "The verification code is wrong. Do you want to send the code again?"
        );
        if (t) {
          this.sendEmail();
          t = prompt(
            "The verification code sent to your email. Please check and enter your verification code:",
            "******"
          );

          if (t === this.state.random) {
            newPass = prompt(
              "Confirm successfully! Please enter new password to change your password:"
            );
            while (newPass.trim().length < 6) {
              alert("Password must be at least 6 characters long");
              newPass = prompt(
                "Please enter new password to change your password:"
              );
            }
            email = this.state.email;
            acc = this.state.account;

            for (i = 0; i < acc.length; i++) {
              if (acc[i].email === email) {
                id = acc[i].id;
                username = acc[i].username;
                address = acc[i].address;
                phone = acc[i].phone;
                first = acc[i].first_name;
                last = acc[i].last_name;
                axios({
                  method: "PUT",
                  url: `https://data-reactjs.herokuapp.com/accounts/${id}`,
                  data: {
                    username: username,
                    password: newPass,
                    email: email,
                    address: address,
                    phone: phone,
                    first_name: first,
                    last_name: last,
                  },
                }).then((res) => {
                  alert("Change password successfully!");
                  window.location.reload();
                });
                break;
              }
            }
          } else {
            alert("Change your password failed!");
          }
        } else {
          alert("Change your password failed!");
        }
      }
    }, 1000);
  };
  render() {
    return (
      <div className="bg" style={{ backgroundColor: "#fff" }}>
        <section className="ftco-section">
          <div className="container mt-5">
          <center>
            <div className="card login-card" style={{width: "500px", padding: "70px"}}>
                <h3 className="login-card-description mt-3">Have an account?</h3>
                <Form
                  onSubmit={(e) => this.onSubmit(e)}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <div className="form-group">
                    <Input
                      name="email"
                      onChange={this.onChange}
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      validations={[required, email]}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <Input
                      name="password"
                      onChange={this.onChange}
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      validations={[required, Pass]}
                    />
                  </div>
                  <br />
                  <button
                    className="btn login-btn"
                    type="submit"
                    onClick={this.submitData}
                  >
                    Login
                  </button>
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />

                  <center>
                    <a
                      href="#!"
                      className="forgot-password-link"
                      onClick={this.forgot}
                    >
                      Forgot password?
                    </a>
                  </center>
                </Form>
                <p className="w-100 text-center">— Or Sign In With —</p>
                <div className="social d-flex text-center" style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <a href="/signup" className="btn login-btn mt-3">Sign up</a>
                    <Link to = "/" className = "btn login-btn mt-3">
                        Home
                    </Link>
                </div>
              
            </div>
            </center>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
