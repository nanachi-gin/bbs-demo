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
                <div className="register-left">
                    <img src="/images/main_page_logo.png"/>
                </div>
                <div className="register-container">
                    <h1>立即加入</h1>
                    <Link to="/">已有账号？去登录>></Link>
                    <form ref="registerForm" onSubmit={this.handleSubmit}
                          className="register-form-container">
                        <label>账号</label>
                        <input type="text" name="username" ref="username"
                               onChange={this.handleChange}/><br/>
                        <label>密码</label>
                        <input type="password" name="password" ref="password"
                               onChange={this.handleChange}/><br/>
                        <label>密码</label>
                        <input type="password" name="rePassword"/><br/>
                        <label>昵称</label>
                        <input type="text" name="nickname" ref="nickname"
                               onChange={this.handleChange}/><br/>
                        <label>简介</label>
                        <input type="text" name="bio" ref="bio"
                               onChange={this.handleChange}/><br/>
                        <label>头像</label>
                        <input type="text" name="avatar" ref="avatar"
                               onChange={this.handleChange}/><br/>
                        <input type="submit" value="注册" className="submit-register"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;