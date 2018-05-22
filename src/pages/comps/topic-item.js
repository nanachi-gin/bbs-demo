import React from 'react';

class TopicItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="topicItem">
                <p>
                    <span className="itemTitle">{ this.props.content }</span>
                    <span className="itemTime">{ this.props.publishDate}</span>
                </p>
            </div>
        )
    }
}

export default TopicItem;
