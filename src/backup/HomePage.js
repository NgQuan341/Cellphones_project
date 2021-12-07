
// import Header from './components/HomePage/header/header';
// import Footer from './components/HomePage/footer/footer';
// // import Welcome from './components/HomePage/body_index/Welcome';
// // import Sales from './components/HomePage/body_index/content/Sales';
// // import Category from './components/HomePage/body_index/content/Category';
// // import Promotion from './components/HomePage/body_index/content/Promotion';
// // import Start from './components/HomePage/body_index/content/Start';
// // import DetailProduct from './components/HomePage/body_index/content/DetailProduct';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, { Component } from 'react';
// import routes from './routes/routes';
// class HomePage extends Component {

//   componentDidMount() {
//     window.scrollTo(0, 0)
//   }
//   showContentMenu = (routes) => {
//     var result = null;
//     if (routes.length > 0) {
//         result = routes.map((route, index) => {
//             return (
//                 <Route key={index} path={route.path} exact={route.exact} component={route.main} />
//             );
//         });
//     }
//     return result;
// }
//   render() {
//     return (
//       <Router>
//         <Switch>
//         {this.showContentMenu(routes)}
//       </Switch>
//       {/* <div id="preloader">
//         <div className="jumper">
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
//       </div>
//       <Header></Header>
      
//       <Footer></Footer> */}
//     </Router>
//     );
//   }
// }

// export default HomePage;

