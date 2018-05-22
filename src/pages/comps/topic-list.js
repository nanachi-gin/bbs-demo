import React from 'react';
import TopicItem from './topic-item';

class TopicList extends React.Component {
    render() {
        const topicList = this.props.topicList;
        const topicItem = topicList.map((item, index) => {
            return (
                <TopicItem
                    key = {index}
                    content = {item.content}
                    date = {item.publishDate}
                />
            )
        });

        return (
            <div>{ topicItem }</div>
        )
    }
}

export default TopicList;