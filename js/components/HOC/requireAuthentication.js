import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (WrappedComponent) => {
    class Authentication extends Component{

      componentWillMount() {
        if (!this.props.authenticated) {
          this.context.router.history.push("/");
        }
      }

      componentWillUpdate(nextProps) {
        if (!nextProps.authenticated) {
          this.context.router.history.push("/");
        }
      }

      render() {
        return (
          <WrappedComponent {...this.props} />
        )
      }

    }

    Authentication.contextTypes = {
      router: React.PropTypes.object
    }


    function mapStateToProps({authenticated}) {
      return {authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}
