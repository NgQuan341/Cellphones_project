import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class HeaderAd extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-xl">
          <div className="container h-100">
            <Link className="navbar-brand" to='/'>
              <h1 className="tm-site-title mb-0">Admin</h1>
            </Link>
            <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars tm-nav-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto h-100">
                <li className="nav-item">
                  <Link className="nav-link" to='/home'><i className="fas fa-tachometer-alt" /> Dashboard</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/'>
                    <i className="far fa-file-alt" />
                    <span> Reports <i className="fas fa-angle-down" /> </span>
                  </Link>
                  {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to = '/' className="dropdown-item">Daily Report</Link>
                    <Link to = '/' className="dropdown-item">Weekly Report</Link>
                    <Link to = '/' className="dropdown-item">Yearly Report</Link>
                  </div> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/products'><i className="fas fa-shopping-cart" />Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/accounts'><i className="far fa-user" />Accounts</Link>
                </li>
                {/* <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="index.html"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-cog"></i>
                      <span> Settings <i class="fas fa-angle-down"></i> </span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="index.html">Profile</a>
                      <a class="dropdown-item" href="index.html">Billing</a>
                      <a class="dropdown-item" href="index.html">Customize</a>
                    </div>
                  </li> */}
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link d-block" href="../process/login_process.php?logout">
                    Admin/<b>Logout</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default HeaderAd;