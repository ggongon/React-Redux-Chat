import React, {PropTypes} from 'react';

export default class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({messageText: e.target.value});
  }
  render() {
    return (
      <footer className="footer">
        <form className="flex row">
          <input className="stretchy" type="text" placeholder="Type a message and hit enter..." value={this.state.messageText} onChange={this.onChange} />
          <button type="submit">Add</button>
        </form>
      </footer>
    );
  }
}
