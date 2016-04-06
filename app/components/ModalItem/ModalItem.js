import React, { Component, PropTypes } from 'react'
import './modalitem.scss'

class ModalItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {title,description,children} = this.props
    return (
      <div className="Modalitem">
        <h2>{title}</h2>
        <p>{description}</p>
        <i>{children}</i>
      </div>
    )
  }
}

ModalItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}

module.exports = ModalItem