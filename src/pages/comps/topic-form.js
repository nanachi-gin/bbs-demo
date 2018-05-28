import React from 'react';
import $ from 'jquery';

class TopicForm extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <form ref="topicForm" onSubmit={this.props.handleSubmit}>
              <label>
                  <textarea ref="content" className="topic-Content"
                    defaultValue="有什么新鲜事？"/>
              </label>
              <input type="submit" value="发表" />
          </form>
        );
    }
}

export default TopicForm;