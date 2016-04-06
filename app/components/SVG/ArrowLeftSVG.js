import React, { Component, PropTypes } from 'react'

class ArrowLeftSVG extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const size = this.props.size || 32
    const color = this.props.color || '#000'
    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path fill={color} d="M658.005333 685.994667l-59.989333 59.989333-256-256 256-256 59.989333 59.989333-196.010667 196.010667z" />
      </svg>
    )
  }
}

ArrowLeftSVG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

module.exports = ArrowLeftSVG