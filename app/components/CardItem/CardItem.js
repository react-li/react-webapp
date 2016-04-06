import React, { Component, PropTypes } from 'react'
import './carditem.scss'

class CardItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {title,description,children,background} = this.props

    const style = {
      background: `url("${background}")`
    }

    return (
      <div style={style} className="Carditem">
        <h2>{title}</h2>
        <p>{description}</p>
        <i>{children}</i>
      </div>
    )
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
}

module.exports = CardItem