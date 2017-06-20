import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.onSubmit(e);
    }
  }

  onChange(e) {
    this.setState({messageText: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.spy && this.props.spy();
    this.props.addMessage(this.props.currentRoomId, {
      name: this.props.username,
      message: this.state.messageText
    });
    this.setState({messageText: ''});

  }
  render() {
    return (
      <footer className="footer">
        <form className="flex row" onSubmit={this.onSubmit.bind(this)}>
          <input className="stretchy" type="text"
            placeholder="Type a message and hit enter..."
            value={this.state.messageText}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress.bind(this)}
          />
          <button className="submit" type="submit">Add</button>
        </form>
      </footer>
    );
  }
}

const mapStateToProps = ({currentRoomId, username}) => {
  return {currentRoomId, username};
}
export default connect(mapStateToProps, actions)(AddMessage);
