import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import TopicList from './comps/topic-list'

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
            type: 'get',
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

    topicSort(topicList) {
        topicList.reverse();
        return topicList;
    }

    //提交表单
    handleSubmit(event) {
        event.preventDefault();
        if (this.refs.content.value === "") {
            this.refs.content.focus();
            this.setState({
            });
            return ;
        }

        const newTopic = {
            content: this.refs.content.value
        };

/*        console.log(newTopic);*/
        this._addTopic(newTopic);
        this.refs.topicForm.reset();
    }

    render() {
        return (
            <div className="container">
                <h2 className="header">Topic List</h2>
                <form color="topicForm" ref="topicForm"
                      onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="content" type="text"
                           className="topicContent" />
                </form>
                <TopicList topicList={this.state.topicList}/>
            </div>
        );
    }
}

export default Topic;