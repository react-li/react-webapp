import React, { Component, PropTypes } from 'react'

export default class Link extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const {route} = this.props
    this.context.router.push(route)
  }

  render() {
    return (
      <a onClick = {this.handleClick}>
        {this.props.children}
      </a>
    )
  }
}

Link.contextTypes = {
  router: React.PropTypes.object.isRequired
}
Link.propTypes = {
  route: PropTypes.string.isRequired
}