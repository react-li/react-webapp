import React, { Component, PropTypes } from 'react'

class DoneSVG extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const size = this.props.size || 32
    const color = this.props.color || '#000'
    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path fill={color} d="M384 692.010667l452.010667-454.016 59.989333 59.989333-512 512-237.994667-237.994667 57.984-59.989333z" />
      </svg>
    )
  }
}

DoneSVG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

module.exports = DoneSVG