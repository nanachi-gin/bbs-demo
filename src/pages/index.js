import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
import TopicList from './comps/topic-list'
import Nav from "./comps/nav";
import UserPanel from "./comps/user-panel";

class Topic extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            topicList: [],
            now_nickname: '',
            now_userId: '',
            now_avatar: '',
            history: '',
            focus: false
        };
    }
    
    componentDidMount() {
        this._getUserInfo();
        this._getTopicList();
    }

    topicSort(topicList) {
        topicList.reverse();
        return topicList;
    }

    _getTopicList() {
        const that = this;
        $.ajax({
            url: '/getAllTopic',
            type: 'GET',
            dataType: 'json',
            success: data => {
                let topicList = that.topicSort(data);
                console.log('getlist');
                console.log(topicList.reverse());
                that.setState({
                    topicList
                });
            },
            error: err => {
                console.log(err);
            }
        });
    }

    _addTopic(newTopic) {
        const that = this;
        $.ajax({
            url: '/addTopic',
            type: 'POST',
            dataType: 'json',
            data: newTopic,
            success: data => {
                let topicList = that.topicSort(data);
                console.log('add-getlist');
                console.log(topicList);
                that.setState({
                    topicList
                });
            },
            error: err => {
                console.log('_addTopic err' + err);
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
                    that.setState({
                        now_nickname: data.userInfo.nickname,
                        now_userId: data.userInfo._id,
                        now_avatar: data.userInfo.avatar
                    });
                }else {
                    this.props.history.push('/');
                }
            },
            error: err => {
                console.log(err);
            }
        });
    }

/*    _logout() {
        $.ajax({
            url: '/logout',
            typ: 'GET',
            dataType: 'text',
            success: data => {
                console.log('logout!');
                this.props.history.push('/');
            },
            error: err => {
                console.log('_addLogout err' + err);
            }
        });
    }*/

    inputOnFocus(){
        this.setState({ focus: true });
        this.refs.content.value = '';
    }
    inputOnBlur(){
        this.setState({ focus: false });
        this.refs.content.value = '有什么新鲜事?';
    }

    //提交表单
    handleSubmit(event) {
        event.preventDefault();

        /*if (this.refs.content.value === "") {
            this.refs.content.focus();
            this.setState({
            });
            return ;
        }*/

        const newTopic = {
            content: this.refs.content.value,
            byUserId: this.state.now_userId,
            byUserNickname: this.state.now_nickname
        };

        this._addTopic(newTopic);
        this.refs.topicForm.reset();
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
    {/*                <button className="btn-logout"
                            onClick={this._logout.bind(this)}>
                        注销
                    </button>
                    <p>欢迎回来{this.state.now_nickname}</p>*/}
                    <div className="main">
                        <div className="box-form">
                            <img className="user-avatar" src={this.state.now_avatar}/>
                            <form ref="form-topic"
                                  onSubmit={this.handleSubmit.bind(this)}>
                                <textarea ref="content" className="textarea-content"
                                          onFocus={this.inputOnFocus.bind(this)}
                                          onBlur={this.inputOnBlur.bind(this)}
                                      defaultValue="有什么新鲜事?" />
                                <input className={this.state.focus ?
                                    "show submit-topic" : "hidden submit-topic"}
                                       type="submit" value="发表"/>
                            </form>
                        </div>
                        <TopicList topicList={this.state.topicList}/>
                    </div>
                    <UserPanel />
                </div>
            </div>
        );
    }
}

export default Topic;