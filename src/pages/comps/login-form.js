import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    _login(data) {
        $.ajax({
            url: "/login",
            type: "POST",
            dataType: "json",
            data: data,
            success: res => {
                if (res === null) {
                    console.log("用户名或密码错误");
                } else {
                    this.props.history.push('/index');
                }
            },
            error: err => {
                console.log('_login err' + err);
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password
        };

        this._login(data);
    }

    render() {
        return (
            <form ref="loginForm" onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" ref="username"
                 onChange={this.handleChange}/><br/>
                <label>Password:</label>
                <input type="password" name="password" ref="password"
                onChange={this.handleChange}/><br/>
                <input type="submit" value="登录"/>
            </form>
        );
    }
}

export default Login;