import React from 'react';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';

class Nav extends React.Component{
    render() {
        return(
            <div className="nav">
                <div className="nav-left">
                    <Link to='/index'>主页</Link>
                    <a>瞬间</a>
                    <a>消息</a>
                    <a>私信</a>
                </div>
                <form className="form-search">
                    <input type="text" defaultValue="搜索"/>
                    <input type="submit" value="√" />
                </form>
            </div>
        );
    }
}

export default Nav;