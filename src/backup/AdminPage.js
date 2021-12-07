// import React, { Component } from 'react';
// // import NotificationList from './components/AdminPage/body/NotificationList';
// // import OrderList from './components/AdminPage/body/OrderList';
// // import Title from './components/AdminPage/body/Title';
// // import Accounts from './components/AdminPage/body/Accounts';
// // import AddProduct from './components/AdminPage/body/AddProduct';
// // import AddNewCatelory from './components/AdminPage/body/AddNewCatelory';
// import FooterAd from './components/AdminPage/footer/footerAd';
// import HeaderAd from './components/AdminPage/header/headerAd';


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import { showContentMenu } from './components/AdminPage/header/headerAd';
// import routes from './routes/routes';

// class AppAd extends Component {
//     showContentMenu = (routes) => {
//         var result = null;
//         if (routes.length > 0) {
//             result = routes.map((route, index) => {
//                 return (
//                     <Route key={index} path={route.path} exact={route.exact} component={route.main} />
//                 );
//             });
//         }
//         return result;
//     }
//     render() {
//         return (
//             <Router>
//             <div id="bodyAdmin">
//                 <HeaderAd></HeaderAd>
//                 {/* <AddProduct></AddProduct> */}
//                 <Switch>
//                     {this.showContentMenu(routes)}
//                 </Switch>
                
//                 <FooterAd></FooterAd>
//             </div>
//             </Router>
//         );
//     }
// }

// export default AppAd;