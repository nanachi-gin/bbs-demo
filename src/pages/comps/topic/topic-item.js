import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

class TopicItem extends React.Component {

    constructor(props) {
        super(props);
    }

/*    toTopicDetail() {
        let that = this;

        this.props.history.push('/topic/' + that.props.topicId);
    }*/

    render() {
        return (
            <div  className="topic-item">
                <Link to={"/topic/" + this.props.topicId} >{ this.props.title }</Link>
                <img src={this.props.avatar} className="topic-item-avatar"/>
                <span className="topic-item-time">{ this.props.publishDate }</span>
                <span className="topic-item-nickname">{ this.props.nickname }</span>
                <p className="topic-item-content">{ this.props.content }</p>
            </div>
        )
    }
}

export default withRouter(TopicItem);
