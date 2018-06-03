import React from 'react';
import TopicItem from './topic-item';

class TopicList extends React.Component {
    render() {
        const topicList = this.props.topicList;
        const topicItem = topicList.map((item, index) => {
            return (
                <TopicItem
                    key = {index}
                    title = {item.title}
                    content = {item.content}
                    publishDate = {item.publishDate}
                    nickname = {item.byUserNickname}
                />
            )
        });
        return (
            <div>{ topicItem }</div>
        )
    }
}

export default TopicList;