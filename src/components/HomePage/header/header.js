import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import categoryApi from '../../../api/categoryAPI';




class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
  }

  localstorage = JSON.parse(localStorage.getItem("loginAcc"))

  style = {
    admin_login: {
      display: this.localstorage == null ? "none" : this.localstorage.role === "admin" ? "display" : "none",
    },
    login_logup: {
      display: this.localstorage == null ? "block" : "none",
    },
    logout: {
      display: this.localstorage == null ? "none" : "block",
    }
  }
  getAllCategory = (id) => {
    categoryApi
      .getAll()
      .then((res) => {
        this.setState({ categories: res });
        localStorage.setItem("categories", JSON.stringify(res))
      })
      .catch((err) => { });
  }


  componentDidMount() {
    if (localStorage.getItem("categories") == null) {
      this.getAllCategory();
    }
    else {

      this.setState({ categories: JSON.parse(localStorage.getItem("categories")) })
    }

  }

  render() {
    return (
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <Link to="/" className="logo">
                  Superior
                  </Link>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section"><Link to="/">Home</Link></li>
                  {/* <li className="scroll-to-section"><a href="#sale" className="menu-item">Sale</a></li> */}
                  <li className="submenu">
                    <a href="#categories">Categories</a>
                    <ul>
                      {this.state.categories.map((cate, index) => {
                        return (
                          <li key={index}><a href={`/category/${cate.id}`}>{cate.name}</a></li>
                        )
                      }
                      )}
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#contact-us" className="menu-item">Contact Us</a></li>                 
                  <li style={this.style.admin_login}><Link to="/home">Admin</Link></li>
                  <li className="submenu" style={this.style.logout}>
                    <a>Profile</a>
                    <ul>
                        <li ><Link to={`/profile/${this.props.idAcc}`}>Edit infomation</Link></li>
                        {/* <li ><Link to={`/orders/${this.props.idAcc}`}>Orders</Link></li> */}
                        <li ><Link to={`/histories/${this.props.idAcc}`}>Histories</Link></li>
                        <li ><a style={this.style.logout} href={`/`} onClick={() => localStorage.clear()}>Log out</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><Link to="/search"><i className="fas fa-search" style={{color:"#7a7a7a"}}></i></Link></li>
                  <li className="scroll-to-section"><Link style={this.style.logout} to ={`/cart/${this.props.idAcc}`} > <i className="fas fa-cart-plus fa-2x"/></Link></li>
                  {/* <li style={this.style.logout}><Link to={`/profile/${this.props.idAcc}`}>profile</Link></li> */}
                </ul>
                
                <a style={this.style.login_logup} href="/login" className="logo1">login</a>
                <a style={this.style.login_logup} href="/signup" className="logo1">Sign up</a>
                {/* <a style={this.style.logout} href="/" onClick={() => localStorage.clear()} className="logo1">Log out</a> */}
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;