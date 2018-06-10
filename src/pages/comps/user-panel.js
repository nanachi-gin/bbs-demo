import React from 'react';
import $ from "jquery";

class UserPanel extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {}

    _logout() {
        $.ajax({
            url: '/logout',
            typ: 'GET',
            dataType: 'text',
            success: data => {
                console.log('logout!');
                location.replace("/");
            },
            error: err => {
                console.log('_addLogout err' + err);
            }
        });
    }

    render() {
        return(
            <div className="user-panel">
                <button className="btn-logout"
                        onClick={this._logout.bind(this)}>
                    注销
                </button>
                <img className="user-avatar" src={this.props.avatar} />
                <p>欢迎回来{this.props.nickname}</p>
            </div>
        );
    }
}

export default UserPanel;