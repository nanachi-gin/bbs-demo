import React from 'react';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';

class Nav extends React.Component{
    render() {
        return(
            <div className="nav">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to='/index'>主页</Link>
                        <a>瞬间</a>
                        <a>消息</a>
                        <a>私信</a>
                    </div>
                    <form className="form-search">
                        <input className="input-search" type="text" />
                        <input className="submit-search" type="submit" value="搜索" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Nav;