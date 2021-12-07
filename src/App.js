import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';

import './components/AdminPage/assets/css/bootstrap.min.css';
import './components/AdminPage/assets/css/fontawesome.min.css';
import './components/AdminPage/assets/css/templatemo-style.css';

// import './components/HomePage/assets/css/bootstrap.min.css';
import './components/HomePage/assets/css/font-awesome.css';
import './components/HomePage/assets/css/templatemo-lava.css';
import './components/HomePage/assets/css/owl-carousel.css';
class App extends Component {
   
    
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            });
        }
        return result;
    }
    render() {
        return (
            <Router>
                <Switch>
                    {this.showContentMenu(routes)}
                </Switch>
            </Router>
        );
    }
}

export default App;