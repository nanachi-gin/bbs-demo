import React, { Component } from 'react';


class ReplyItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reply-item">
                <div className="reply-item-user">
                    <img className="topic-item-avatar" src={this.props.avatar} />
                    <p className="reply-item-nickname">{ this.props.nickname }</p>
                </div>
                <p className="reply-item-content">{ this.props.content }</p>
                <p className="reply-item-time">{ this.props.publishDate }</p>
            </div>
        )
    }
}

export default ReplyItem;
