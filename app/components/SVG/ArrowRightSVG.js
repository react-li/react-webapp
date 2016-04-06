import React, { Component, PropTypes } from 'react'

class ArrowRightSVG extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const size = this.props.size || 32
    const color = this.props.color || '#000'
    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path fill={color} d="M365.994667 697.984l196.010667-196.010667-196.010667-196.010667 59.989333-59.989333 256 256-256 256z" />
      </svg>
    )
  }
}

ArrowRightSVG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

module.exports = ArrowRightSVG