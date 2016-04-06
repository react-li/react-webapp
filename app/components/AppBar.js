/**
 * App header
 */

import React, { Component, PropTypes } from 'react'

export default class AppBar extends Component {
  
  constructor(props) {
    super(props)
    this.renderAppBarLeft = this.renderAppBarLeft.bind(this)
    this.renderAppBarCenter = this.renderAppBarCenter.bind(this)
    this.renderAppBarRight = this.renderAppBarRight.bind(this)
    this.defaultGoBack = this.defaultGoBack.bind(this)
  }

  defaultGoBack(e) {
    e.preventDefault()
    this.context.router.goBack()
  }

  renderAppBarLeft() {
    const {left} = this.props
    if (!left) {
      const style = {
        padding: '15px 5px',
        fontSize: '24px'
      }
      return <i className="ion ion-back"
                style={style}
                onClick={this.defaultGoBack}></i>
    }
    return left
  }

  renderAppBarCenter() {
    const {title,children} = this.props
    if (!children) {
      const style = {
        fontSize: '20px'
      }
      return <span style={style}>{title}</span>
    }
    if (children) {
      return children
    }
  }

  renderAppBarRight() {
    const {right} = this.props
    if (!right) {
      return
    }
    return right
  }
  render() {
    return (
      <header className="app-bar">
        <div className="bar-left">
          {this.renderAppBarLeft()}
        </div>
        <div className="bar-center">
          {this.renderAppBarCenter()}
        </div>
        <div className="bar-right">
          {this.renderAppBarRight()}
        </div>
      </header>
    )
  }
}

AppBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

AppBar.propTypes = {
  children: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.string
}