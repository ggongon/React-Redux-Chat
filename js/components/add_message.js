import React, {PropTypes} from 'react';

export default class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ""
    }
  }

  onKeyup(e) {

    //this.setState({messageText: this.state.messageText + e.target.value});
  }
  render() {
    return (
      <footer className="footer">
        <form>
          <input type="text" placeholder="Type a message and hit enter..." value={this.state.messageText} onKeyUp={this.onKeyup.bind(this)} />
          <button type="submit">Add</button>
        </form>

      </footer>
    );
  }
}
