import React, { Component } from 'react';
import axios from 'axios';

class Accounts extends Component {
    state = {
        //Phần 1
        account: [],
        //++++++++++++++++++++++++
        //Phần 2
        username: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        first_name: "",
        last_name: "",
        role: "",
        block: false
    }
    // chính vì thế nên cái block phần này nó sẽ không giống với trong mảng account
    // NÓ không giống sau khi m nhấn nút m hiểu ý t nói không
    // cÓ Mà cái đó không cho false thì hắn không biết giá trị chi_Tao cũng không rõ
    // không không phải rứa
    // t chia hai phẩn nhé, để t nói lại nhé
    // t ví dụ acc 1 nó có block là true nhé
    // Ở Phần 1: nó sẽ lấy mảng account về trong đó acc 1 block = true được chưa (tức là sau khi chạy componentDidMount thì account đã có 
    // Nhưng Phần 2 chưa có chi hết)
    // dùng account đó đổ ra thành bảng bằng vòng map
    // Sau khi nhấn nút thì PHần 2 đã có dữ liệu của acc 1 và block = true xong nó lại trả sang false ở đoạn này
    // giờ tức là trong PHần 1 thì block = true nhưng phần 2 lại = false
    // Mà phần map ở dưới lại đổ từ phần 1 ra do đó nút nó không bị ẩn
    // hiểu ý t nói không
    // đang hiểu
    //Chừ đang tìm cách thay đổi giá trị bên dưới để nó bằng với cái phần 2 đúng không? 
    // đại loại thế, đúng bản chất là thay đổi cái acc 1 đó ở trong phần 1, tức là nhấn nút xong thì cái block trong phần 1 phải nhảy cùng phần 2
    componentDidMount() {
        axios.get(`https://data-reactjs.herokuapp.com/accounts`)
            .then(res => {
                this.setState({ account: res.data });
            })
            .catch(error => console.log(error));

    }
   
  Block= (id) => {
        console.log("có không");
        axios.get(`https://data-reactjs.herokuapp.com/accounts/${id}`)
            .then(res => {
              
               
                var blocck;
                var arr;
                var str = "block" +id;
                var str1 = "unblock" + id;
                if(res.data.block===false){                  
                    document.getElementById(str1).style.display = "none";
                    document.getElementById(str).style.display = "block";
                    
                    blocck = true;
                    alert("Tài khoản " + res.data.username + " đã bị khóa");
                }
                else{                  
                    document.getElementById(str1).style.display = "block";
                    document.getElementById(str).style.display = "none";
                    blocck=false;
                    alert("Tài khoản " + res.data.username + " đã được mở khóa");
                }
                const acc = {
                    username: res.data.username,
                    password: res.data.password,
                    email: res.data.email,
                    address: res.data.address,
                    phone: res.data.phone,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    role: res.data.role,
                    block: blocck
                }
              
                this.setState({
                    username: res.data.username,
                    password: res.data.password,
                    email: res.data.email,
                    address: res.data.address,
                    phone: res.data.phone,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    role: res.data.role,
                    block: blocck
                })
               
                arr = this.state.account
                arr = arr.map(a =>{
                    if(a.id === id){
                        a={id:id,...acc}
                    }
                    return a
                })

                this.setState({account: arr})
             
                axios({
                    method: 'PUT',
                    url: `https://data-reactjs.herokuapp.com/accounts/${id}`,
                    data: acc,
                }).then(res => {
                }).catch(err => {
                });
            })
    }

    render() {       
        console.log("render")
        return (          
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-products">
                    <h2 className="tm-block-title">Accounts List</h2>
                        <div className="tm-product-table-container">
                            <table className="table table-hover tm-table-small tm-product-table">
                                <thead className>
                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">USERNAME</th>
                                        <th scope="col">ROLE</th>
                                        <th scope="col">STATE</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.account.map((acc) =>
                                        <tr >
                                            <th scope="row">&nbsp;</th>
                                            <td scope="col">{acc.id}</td>
                                            <td scope="col">{acc.username}</td>
                                            <td scope="col">{acc.role}</td>                                         
                                            <td scope="col">
                                                <a style = {{display: acc.block ? "block" : "none"}}
                                                 type="button" className="fa fa-lock"  id={"block"+acc.id}  onClick={() => this.Block(acc.id)}  ></a>
                                                <a style = {{display: acc.block ? "none" : "block"}}
                                                 type="button" className="fa fa-unlock" id={"unblock"+acc.id}   onClick={() => this.Block(acc.id)}  ></a>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>          
        );
    }
}
export default Accounts;