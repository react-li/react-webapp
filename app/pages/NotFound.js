/**
 * 404
 */

import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'

export default class NotFound extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const notFoundStyle = {
      textAlign: 'center',
      fontSize: '200px',
      paddingTop: '150px'
    }
    return (
      <div>
        <AppBar title="404"/>
        <div className="has-bar" style={notFoundStyle}>
          404
        </div>
      </div>
    )
  }
}

NotFound.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}