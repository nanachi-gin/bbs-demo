import React from 'react';
import ReplyItem from './reply-item';

class ReplyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const replyList = this.props.replyList;
        const replyItem = replyList.map((item, index) => {
            return (
                <ReplyItem
                    key = {index}
                    content = {item.content}
                    publishDate = {item.publishDate}
                    nickname = {item.byUserNickname}
                    replyId = {item._id}
                    avatar = {item.byUserAvatar}
                />
            )
        });
        return (
            <div>{ replyItem }</div>
        )
    }
}

export default ReplyList;