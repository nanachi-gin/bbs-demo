import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import PrivateRoute from "./privateRoute";

ReactDOM.render((
    <BrowserRouter>
        <PrivateRoute/>
    </BrowserRouter>
    ), document.getElementById("app")
);