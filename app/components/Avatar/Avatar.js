import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'

import './avatar.scss'


class Avator extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {avatar,title,children,dark} = this.props

    const Avatar = classNames(
      'Avatar',
      {
        'dark': dark === true
      }
    )

    return (
      <div className={Avatar}>
        <img src={avatar} />
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    )
  }
}

Avator.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  dark: PropTypes.bool,
  // color: PropTypes.oneOf(['dark'])
}

module.exports = Avator