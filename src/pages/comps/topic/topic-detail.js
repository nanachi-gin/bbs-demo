import React from 'react';
import $ from 'jquery';
import Nav from "../nav";
import ReplyList from "../reply/reply-list";

class TopicDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            replyList: []
        }
    }

    componentDidMount() {
        const that = this;
        var topicId =  that.props.match.params.id;
        this.setState({
            id: topicId
        });

        this._getUserInfo();
        this._getTopicDetail({
            id: topicId
        });

        this._getReplyList({
            id: topicId
        });

    }

    replySort(arr) {
        arr.reverse();
        return arr;
    }

    _getTopicDetail(data) {
        const that = this;
        $.ajax({
            url: '/getTopicDetail',
            type: 'GET',
            data: data,
            dataType: 'json',
            success: data => {
                that.setState({
                    title: data.title,
                    content: data.content,
                    byUserNickname: data.byUserNickname,
                    publishDate: data.publishDate,
                    byUserAvatar: data.byUserAvatar
                });
            },
            error: err => {
                console.log(err);
            }
        });
    }

    _getReplyList(data) {
        const that = this;
        $.ajax({
            url: '/getReplyFromTopic',
            type: 'GET',
            data: data,
            dataType: 'json',
            success: data => {
                var replyList = data;
                that.setState({
                    replyList
                })
            },
            error: err => {
                console.log(err);
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

    _addReply(newReply) {
        const that = this;
        $.ajax({
            url: '/addReply',
            type: 'POST',
            dataType: 'json',
            data: newReply,
            success: data => {
                var replyList = data;
                that.setState({
                    replyList
                });
            },
            error: err => {
                console.log('_addReply err' + err);
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const newReply = {
            content: this.refs.contentReply.value,
            fromTopic: this.state.id,
            byUserId: this.state.now_userId,
            byUserNickname: this.state.now_nickname,
            byUserAvatar: this.state.now_avatar
        };

        this._addReply(newReply);
        this.refs.formReply.reset();
    }

    render() {
        return(
            <div className="topic-detail">
                <Nav/>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <p>{this.state.byUserNickname}</p>
                <p>{this.state.publishDate}</p>
                <img className="topic-item-avatar" src={this.state.byUserAvatar}/>
                <form ref="formReply" className="form-reply"
                      onSubmit={this.handleSubmit.bind(this)}>
                    <div className="textarea-box">
                         <textarea ref="contentReply" />
                    </div>
                    <input type="submit" value="回复"/>
                </form>
                <ReplyList replyList={this.state.replyList}/>
            </div>
        );
    }

}

export default TopicDetail;