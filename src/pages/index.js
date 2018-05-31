import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import TopicList from './comps/topic-list'
import TopicForm from "./comps/topic-form";
import Login from "./comps/login-form";

class Topic extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            topicList: []
        };
    }

    componentDidMount() {
        this._getTopicList();
    }

    _getTopicList() {
        const that = this;
        $.ajax({
            url: '/getAllTopic',
            type: 'GET',
            dataType: 'json',
            success: data => {
                const topicList = that.topicSort(data);
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
                console.log(data);
                const topicList = that.topicSort(data);
                that.setState({
                    topicList
                });
            },
            error: err => {
                console.log('_addTopic err' + err);
            }
        });
    }

    topicSort(topicList) {
        topicList.reverse();
        return topicList;
    }

    //提交表单
    handleSubmit(event) {
        event.preventDefault();

        console.log(event.target.value);

        if (this.refs.content.value === "") {
            this.refs.content.focus();
            this.setState({
            });
            return ;
        }

        const newTopic = {
            content: this.refs.content.value
        };

        this._addTopic(newTopic);
        this.refs.topicForm.reset();
    }

    render() {
        return (
            <div className="container">
                <h2 className="header">TLLL</h2>
                <form color="topicForm" ref="topicForm"
                      onSubmit={this.handleSubmit.bind(this)}>
                    {/*<input ref="content" type="text"
                           className="topicContent" />*/}
                    <textarea ref="content" className="topicContent"
                        defaultValue="有什么新鲜事?" />
                    <input type="submit" value="发表"/>
                </form>
                {/*<TopicForm handleSubmit={this.handleSubmit.bind(this)}/>*/}
                <TopicList topicList={this.state.topicList}/>
                {/*<Login/>*/}
            </div>
        );
    }
}

export default Topic;