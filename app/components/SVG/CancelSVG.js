import React, { Component, PropTypes } from 'react'

class CancelSVG extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const size = this.props.size || 32
    const color = this.props.color || '#000'
    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path fill={color} d="M726.016 665.984l-153.984-153.984 153.984-153.984-59.989333-59.989333-153.984 153.984-153.984-153.984-59.989333 59.989333 153.984 153.984-153.984 153.984 59.989333 59.989333 153.984-153.984 153.984 153.984zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z" />
      </svg>
    )
  }
}

CancelSVG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

module.exports = CancelSVG