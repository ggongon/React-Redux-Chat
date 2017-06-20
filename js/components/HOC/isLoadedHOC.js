import React, {Component} from 'react';
import {connect} from 'react-redux'

export default (WrappedComponent) => {
  class ValidateRoom extends Component {

    componentWillMount() {
      console.log("cwm roomid:",this.props.currentRoomId);
    }

    componentWillUpdate(nextProps) {
      console.log("nextProps roomid:",nextProps.currentRoomId);
    }

    render() {
      console.log("roomid:",this.props.currentRoomId);
      // if (this.props.currentRoomId === null) {
      //   return <div>Select a room.</div>
      // }

      return (<WrappedComponent {...this.props }/>);
    }
  }

  function mapStateToProps({currentRoomId}) {
    return {currentRoomId}
  }

  return connect(mapStateToProps)(ValidateRoom);

}
