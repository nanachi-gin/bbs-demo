import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
import TopicList from './comps/topic/topic-list'
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
                topicList.reverse();
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

    inputOnFocus(){
        this.setState({ focus: true });
        this.refs.content.value = '';
    }
    inputOnBlur(){
        this.setState({ focus: false });
    }

    //提交表单
    handleSubmit(event) {
        event.preventDefault();

        const newTopic = {
            title: this.refs.title.value,
            content: this.refs.content.value,
            byUserId: this.state.now_userId,
            byUserNickname: this.state.now_nickname,
            byUserAvatar: this.state.now_avatar
        };

        this._addTopic(newTopic);
        this.refs.formTopic.reset();
    }

    render() {
        return (
            <div className="index-container">
                <Nav/>
                <div className="container">
                    <div className="main">
                        <div className="box-form">
                            <img className="user-avatar" src={this.state.now_avatar}/>
                            <form ref="formTopic" className="form-topic"
                                  onSubmit={this.handleSubmit.bind(this)}>
                                <label className="label-title">标题</label>
                                <input type="text" ref="title" className="input-title"/>
                                <input className="submit-topic"
                                       type="submit" value="发表"/>
                                <div className="textarea-box"
                                     onFocus={this.inputOnFocus.bind(this)}
                                     onBlur={this.inputOnBlur.bind(this)}>
                                    <textarea ref="content" className="textarea-content"
                                              defaultValue="有什么新鲜事?" />
                                </div>
                            </form>
                        </div>
                        <TopicList topicList={this.state.topicList}/>
                    </div>
                    <UserPanel
                        nickname={this.state.now_nickname}
                        avatar={this.state.now_avatar}
                    />
                </div>
            </div>
        );
    }
}

export default Topic;