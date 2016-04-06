/**
 * 返回顶部
 */

import React, { Component, PropTypes } from 'react'

export default class Scroll2Top extends Component {

  static defaultProps = {
    style: {
      position: 'fixed',
      bottom: 50,
      right: 50,
      fontSize: 38,
      color: '#F06066',
      zIndex: 99
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      visibility: 'hidden'
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const showUnder = this.props.showUnder || 500
    const {visibility} = this.state
    if (window.scrollY >= showUnder && visibility === 'hidden') {
      this.setState({visibility: 'visible'})
    } else if (window.scrollY < showUnder && visibility === 'visible') {
      this.setState({visibility: 'hidden'})
    }
  }

  handleClick(e) {
    e.preventDefault()
    window.scrollTo(0,0)
  }
  
  render() {
    const {visibility} = this.state
    const {style} = this.props
    let _style = {
      ...style,
      visibility
    }
    return (
      <div style={_style}
           onClick={this.handleClick}>
        <i className="ion ion-pullup"></i>
      </div>
    )
  }
}

Scroll2Top.propTypes = {
  showUnder: PropTypes.number
}