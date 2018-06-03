import React from 'react';

class Nav extends React.Component{
    render() {
        return(
            <div className="nav">
                <span>Home</span>
                <span>Search</span>
                <span>Information</span>
                <span>DM</span>
                <form className="form-search">
                    <input type="text" defaultValue="搜索"/>
                    <input type="submit" value="√" />
                </form>
            </div>
        );
    }
}

export default Nav;