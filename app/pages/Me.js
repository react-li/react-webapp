import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import Link from '../components/Link.js'

export default class Me extends Component {

  constructor(props) {
    super(props)
  }

  renderAppBar() {
    return (
      <AppBar  title="我的" />
    )
  }

  render() {
    return (
      <div className="has-header">
        {this.renderAppBar()}
        <Link route="reg"><div>注册</div></Link>
      </div>
    )
  }
}

Me.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}