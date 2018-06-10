import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Index from './index';
import LoginPage from './login';
import TopicDetail from "./comps/topic/topic-detail";
import Register from "./register";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact={true} path="/" component={LoginPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/index" component={Index} />
                <Route path="/topic/:id" component={TopicDetail}/>
            </div>
        );
    }
}

export default PrivateRoute;