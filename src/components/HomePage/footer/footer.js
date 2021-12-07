import React, { Component } from 'react';

import emailjs from "emailjs-com";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val,
    });

  };

  handleSubmit = (event) => {
    event.preventDefault();
    var email = this.state.email;
    var name = this.state.name;
    var message = this.state.message;
  
    emailjs
    .send(
        "101010",
        "template_uhujp8d",
      {
        name: name,
        message: message,
        email: email,
      },
      "user_ZZ4un7i0BAvAOX7ogQtCV"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Thank you so much! Your message sent to the Superior shop.")

      },
      (error) => {
        console.log(error.text);
      
      }
    );
    
    
  }
  


  render() {
    return (
      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              {/* ***** Contact Form Start ***** */}
             
             
              <div className="col-lg-6 col-md-12 col-sm-12">
              <form onSubmit={this.handleSubmit }>
                <div className="contact-form">

                    <div className="row">
                      <div className="col-md-6 col-sm-12">

                        <fieldset>
                          <input name="name" type="text" id="name" placeholder="Full name" required style={{ backgroundColor: 'rgba(250,250,250,0.3)' }} onChange={this.handleChange}></input>

                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input name="email" type="email" id="email" placeholder="Email" required style={{ backgroundColor: 'rgba(250,250,250,0.3)' }} onChange={this.handleChange}></input>

                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" rows={6} placeholder="Your Message" required style={{ backgroundColor: 'rgba(250,250,250,0.3)' }} onChange={this.handleChange}></textarea>

                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" name="sendcontact" id="form-submit" className="main-button"  >Send Message
                                  Now  </button>

                        </fieldset>
                      </div>
                    </div>

                 
                </div>
                </form>
              </div>
           
            
              {/* ***** Contact Form End ***** */}
              <div className="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>More About <em>US</em></h2>
                <p>If you need this contact form to send email to your inbox, you may follow our <a rel="nofollow" href="https://mail.google.com" >contact</a> page for more detail.</p>
                <ul className="social">
                  <li><a href="https://facebook.com"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://www.instagram.com"><i className="fa fa-instagram" /></a></li>
                  <li><a href="https://mail.google.com"><i className="fa fa-envelope-o" /></a></li>
                  <li><a href="https://www.linkedin.com"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;