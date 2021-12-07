import AllProducts from "../components/AdminPage/body/AllProducts";
import NotificationList from "../components/AdminPage/body/NotificationList";
import OrderList from "../components/AdminPage/body/OrderList";
import AddNewCatelory from "../components/AdminPage/body/AddNewCatelory";
import Accounts from "../components/AdminPage/body/Accounts";
import Title from "../components/AdminPage/body/Title";
// import Sales from "../components/HomePage/body_index/content/Sales";
// import Category from "../components/HomePage/body_index/content/Category";
// import Promotion from "../components/HomePage/body_index/content/Promotion";
// import Start from "../components/HomePage/body_index/content/Start";
// import Welcome from "../components/HomePage/body_index/Welcome";
// import DetailProduct from "../components/HomePage/body_index/content/DetailProduct";
// import Header from "../components/HomePage/header/header";
// import Footer from "../components/HomePage/footer/footer";
import HeaderAd from "../components/AdminPage/header/headerAd";
import FooterAd from "../components/AdminPage/footer/footerAd";
// import { Fragment } from "react";
import HomePage from "../Homepage";
import Cartpage from "../Cartpage";
import Detailpage from "../Detailpage";
import CategoryPage from "../Categorypage";
import Paymentpage from "../Paymentpage";
import Login from "../components/LoginPage/Login";
import Signup from "../components/LogupPage/Signup";
import AddProduct from "../components/AdminPage/body/AddProduct";
import Edit from "../components/AdminPage/body/EditProduct";
import SearchPage from "../SearchPage";
import Profile from "../components/HomePage/body_index/Profile"
import HistoryPage from "../HistoryPage";
import OrderPage from "../OrderPage";


const routes = [
    {
        path: "/",
        exact: true,
        main: () =><HomePage />
    },
    {
        path: "/cart/:id",
        exact: true,
        main: ({match,history}) =><Cartpage match={match} history={history} />
    },
    {
        path: "/category/:id",
        exact: true,
        main: ({match,history}) =><CategoryPage match={match} history={history}/>
    },
    {
        path: '/orders/:id',
        exact: false,
        main: ({match,history}) =><OrderPage match={match} history={history}/>
    },
    {
        path: '/histories/:id',
        exact: false,
        main: ({match,history}) =><HistoryPage match={match} history={history}/>
    },
    {
        path: '/detailProduct/:id',
        exact: false,
        main: ({match,history}) =><Detailpage match={match} history={history}/>
    },
    {
        path: '/payment',
        exact: false,
        main: ({match,history}) =><Paymentpage match={match} history={history}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({match,history}) =><Login match={match} history={history}/>
    },
    {
        path: '/signup',
        exact: false,
        main: ({match,history}) =><Signup match={match} history={history}/>
    },
    {
        path: '/search',
        exact: false,
        main: ({match,history}) =><SearchPage match={match} />
    },
    {
        path: '/profile/:id',
        exact: false,
        main: ({match,history}) =><Profile match={match} history={history}/>
    },
    {
        path: '/home',
        exact: true,
        main: () =>
        <>
         <div id="bodyAdmin">
            <HeaderAd></HeaderAd>
            <div className="container mt-5">
                <Title></Title>
                < div className="row tm-content-row" >
                    <NotificationList></NotificationList>
                </div>
            </div>
           
        </div>
        <FooterAd></FooterAd>
        </>
        
    },
    {
        path: '/products',
        exact: true,
        main: () => 
        <>
        <div id="bodyAdmin">
            
            <HeaderAd></HeaderAd><div className="container mt-5">
                < div className="row tm-content-row" >
                    <AllProducts></AllProducts>
                    <AddNewCatelory></AddNewCatelory>
                </div>
            </div>
            
        </div>
        <FooterAd></FooterAd>
        </>
    },
    {
        path: '/add_product',
        exact: true,
        main: () => 
        <>
        <div id="bodyAdmin">
            <HeaderAd></HeaderAd><div className="container mt-5">
                < div className="row tm-content-row" >
                    <AddProduct></AddProduct>
                </div>
            </div>
           
        </div>
         <FooterAd></FooterAd>
         </>
    },
    {
        path: '/edit_product/:id',
        exact: true,
        main: ({match}) => 
        <>
        <div id="bodyAdmin">
            <HeaderAd></HeaderAd><div className="container mt-5">
                < div className="row tm-content-row" >
                    <Edit match={match}></Edit>
                </div>
            </div>
            
        </div>
        <FooterAd></FooterAd>
        </>
    },
    // {
    //     path: '/add_product',
    //     exact: true,
    //     main: () => <div id="bodyAdmin">
    //         <HeaderAd></HeaderAd><div className="container mt-5">
    //             < div className="row tm-content-row" >
    //                 <AddProduct></AddProduct>
    //             </div>
    //         </div>
    //         <FooterAd></FooterAd>
    //     </div>
    // },
    {
        path: '/accounts',
        exact: true,
        main: () => 
        <>
        <div id="bodyAdmin">
            <HeaderAd></HeaderAd><div className="container mt-5">
                <div className="row tm-content-row" >
                    <Accounts></Accounts>
                </div>
            </div>
            
        </div>
        <FooterAd></FooterAd>
        </>
    }

]

export default routes;