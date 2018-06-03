import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Index from './index';
import LoginPage from './comps/login';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact={true} path="/" component={LoginPage}/>
                <Route exact={true} path="/index" component={Index} />
            </div>
        );
    }
}

export default PrivateRoute;