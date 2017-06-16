import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

export class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    if (this.props.currentRoomId) {
      this.props.fetchMessages(this.props.currentRoomId);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.currentRoomId != this.props.currentRoomId) {
      this.props.fetchMessages(this.props.currentRoomId);
    }
  }

  renderMessages() {
    if (!this.props.messages) return;
    return this.props.messages.map((message, index) => {
      return <li key={index}>
        <div className="message">{message.message}</div>
        <div className="user">{message.name}</div>
      </li>
    })
  }
  render() {
    if (!this.props.messages.length) return <div>No messages.</div>

    return (
      <div>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({currentRoom, currentRoomId, messages}) => {
  return {
    currentRoom, currentRoomId, messages
  }
}

export default connect(mapStateToProps, actions)(Messages);
