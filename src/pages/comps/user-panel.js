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
                <div className="user-panel-top">
                    <img className="user-panel-avatar" src={this.props.avatar} />
                </div>
                <div className="user-panel-bottom">
                    <p className="user-panel-nickname">{this.props.nickname}</p>
                    <button className="btn-logout"
                            onClick={this._logout.bind(this)}>
                        注销
                    </button>
                    <table className="user-panel-table">
                        <tr>
                            <th>主题</th>
                            <th>回复</th>
                        </tr>
                        <tr>
                            <td>???</td>
                            <td>???</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserPanel;