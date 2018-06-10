import React, { Component } from 'react';


class ReplyItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reply-item">
                <span className="reply-item-title">{ this.props.title }</span>
                <span className="reply-item-time">{ this.props.publishDate }</span>
                <span className="reply-item-nickname">{ this.props.nickname }</span>
                <p className="reply-item-content">{ this.props.content }</p>
                <img className="topic-item-avatar" src={this.props.avatar} />
            </div>
        )
    }
}

export default ReplyItem;
