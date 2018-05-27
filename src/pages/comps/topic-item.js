import React from 'react';

class TopicItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topicItem">
                <span className="itemTitle">{ this.props.title }</span>
                <span className="itemTime">{ this.props.publishDate }</span>
                <p className="itemContent">{ this.props.content }</p>
            </div>
        )
    }
}

export default TopicItem;
