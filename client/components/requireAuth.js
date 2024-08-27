import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import currentUser from '../queries/CurrentUser'
import { hashHistory } from 'react-router'

export default WrappedComponent => {
  class RequireAuth extends Component {
    // called with a new set of props that component is about to render with
    // componentDidMount
    
    // every time when query updates the state
    componentWillUpdate(nextProps) {
      if (!nextProps.data.user && !nextProps.data.loading) {
        hashHistory.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return graphql(currentUser)(RequireAuth)
}
