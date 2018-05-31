import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Index from './index';
import LoginPage from './comps/login-form';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/index">Index</Link>
                <Route path="/" component={LoginPage}/>
                <Route path="/index" component={Index} />
            </div>
        );
    }
}

export default PrivateRoute;