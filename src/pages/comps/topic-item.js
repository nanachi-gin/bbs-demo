import React from 'react';

class TopicItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topic-item">
                <span className="topic-item-title">{ this.props.title }</span>
                <span className="topic-item-time">{ this.props.publishDate }</span>
                <span className="topic-item-nickname">{ this.props.nickname }</span>
                <p className="topic-item-content">{ this.props.content }</p>
            </div>
        )
    }
}

export default TopicItem;
