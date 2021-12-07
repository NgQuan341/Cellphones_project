import React, { Fragment } from "react";

import productApi from "../api/productAPI";
class CRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        price: "",
        img: "",
      product: [],
    };
  }
  
  componentDidMount() {
   this.getAll()
      
  }
  getAll =()=>{
    productApi
    .getAll()
    .then((res) => {
      this.setState({ product: res });
    })
    .catch((err) => {});

  }
  getOne = (id) =>{
    productApi
      .getOne(id)
      .then((res) => {
        this.setState({
        id: res.id,
        title: res.title,
        price: res.price,
        img: res.img, });
      })
      .catch((err) => {});
  }
  post = (data) =>{
    productApi
      .post(data)
      .then((res) => {
        this.getAll()
      })
      .catch((err) => {});
  }
  update = (data,id) =>{
    productApi
      .put(data,id)
      .then((res) => {
        this.getAll()
        this.clearState()
      })
      .catch((err) => {});
  }
  beforeUpdate = (id) =>{
    
    let arr= this.state.product.filter(pro =>{
      return pro.id === id
    })
    let pro = arr[0]
    this.setState({
      id: pro.id,
      title: pro.title,
      price: pro.price,
      img: pro.img
    })
  }
  delete = (id)=>{
    productApi
      .delete(id)
      .then((res) => {
        this.getAll()
      })
      .catch((err) => {});
  }
  onChangeHandle = (event) =>{
    let name = event.target.name
    let val = event.target.value
    this.setState({[name]:val});
    
  }
  clearState=()=>{
    this.setState({title:"",img:"",price:""})
  }
  boxData = () =>{
    return {
      id: this.state.id,
      title: this.state.title,
      price: this.state.price,
      img: this.state.img,
    }
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={()=>this.update(this.boxData(),this.state.id)}>
          <input type="text" name="title" onChange={this.onChangeHandle} value={this.state.title}></input>
          <input type="text" name="price" onChange={this.onChangeHandle} value={this.state.price}></input>
          <input type="text" name="img" onChange={this.onChangeHandle} value={this.state.img}></input>
          <input type="submit" value="update"></input>
        </form>
       {
         this.state.product.map(pro =>{
           return(
             <Fragment key={pro.id}>
                <p >{pro.title}</p>
                <button onClick={()=>this.beforeUpdate(pro.id)}>UPdate</button>
                <button onClick={()=>this.delete(pro.id)}>Delete</button>
             </Fragment>
             
           )           
         })
         
       }
      </Fragment>
    );
  }
}

export default CRUD;
