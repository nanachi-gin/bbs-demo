import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import $ from 'jquery';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            nickname: '',
            bio: '',
            avatar: 'https://gss0.baidu.com/7Ls0a8Sm2Q5IlBGlnYG/sys/portraitl/item/aa943726'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this._getUserInfo();
    }

    handleChange(e) {
        e.preventDefault();
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password,
            nickname: this.state.nickname,
            bio: this.state.bio,
            avatar: this.state.avatar
        };

        this._register(data);
    }

    _register(data) {
        $.ajax({
            url: "/register",
            type: "POST",
            dataType: "json",
            data: data,
            success: res => {
                console.log(res);
                this.props.history.push('/index');
            },
            error: err => {
                alert(err.responseText);
            }
        });
    }

    _getUserInfo() {
        const that = this;
        $.ajax({
            url: '/getUserInfo',
            type: 'GET',
            dataType: 'json',
            success: data => {
                if (data.isLogin === 1) {
                    this.props.history.push('/index');
                }
            },
            error: err => {
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div>
                <Link to="/">登录</Link>
                <form ref="registerForm" onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" ref="username"
                           onChange={this.handleChange}/><br/>
                    <label>Password:</label>
                    <input type="password" name="password" ref="password"
                           onChange={this.handleChange}/><br/>
                    <label>RePassword:</label>
                    <input type="password" name="rePassword"/><br/>
                    <label>nickname:</label>
                    <input type="text" name="nickname" ref="nickname"
                           onChange={this.handleChange}/><br/>
                    <label>bio:</label>
                    <input type="text" name="bio" ref="bio"
                           onChange={this.handleChange}/><br/>
                    <label>avatar:</label>
                    <input type="text" name="avatar" ref="avatar"
                           onChange={this.handleChange}/><br/>
                    <input type="submit" value="注册"/>
                </form>
            </div>
        );
    }
}

export default Register;