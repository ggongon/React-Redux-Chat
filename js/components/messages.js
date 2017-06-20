import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages} from '../actions'

export class Messages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    if (this.props.currentRoomId === null) {
      // console.log("cwm:", this.props.currentRoomId)
      this.props.fetchMessages(this.props.currentRoomId);
    }
  }

  componentWillUpdate(nextProps) {
    // console.log("cwu:", nextProps.currentRoomId)
    if (nextProps.currentRoomId !== this.props.currentRoomId) {
      this.props.fetchMessages(nextProps.currentRoomId);
    }
  }

  renderMessages() {
    if (!this.props.messages) return;
    console.log(this.props)
    return this.props.messages.map((message, index) => {
      return (
        <li key={index} className={(this.props.username === message.name)?"txtR":""}>
          <div className="message">{message.message}</div>
          {message.name!==this.props.username && <div className="user">{message.name}</div>}
        </li>
      )
    })
  }

  render() {
    // console.log(this.props.currentRoomId, this.props.messages)
    if (!this.props.messages.length) return <div className="stretchy">No messages.</div>

    return (
      <div id="messages" className="stretchy">
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({username, currentRoomId, messages}) => {
  return {
    username, currentRoomId, messages
  }
}

export default connect(mapStateToProps, {fetchMessages})(Messages);
