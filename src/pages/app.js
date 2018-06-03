import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter, HashRouter} from 'react-router-dom';
import PrivateRoute from "./privateRoute";

ReactDOM.render((
    <HashRouter>
        <PrivateRoute/>
    </HashRouter>
    ), document.getElementById("app")
);