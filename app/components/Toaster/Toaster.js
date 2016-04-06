import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classNames from 'classnames/bind'
import EventEmitter from 'events'

import {DoneSVG,ErrorSVG} from '../SVG/index.js'
import './toaster.scss'

var timer

class Toaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false,
      status: '',
      message: ''
    }
    this.countDown = this.countDown.bind(this)

    global.reactToasterEvents = new EventEmitter()
    this.eventListner()
  }
  eventListner(){
    reactToasterEvents.on('TOASTER.HIDE', ()=>{
      this.setState({visibility: false})
    })
  }
  show(status,message) {
    this.setState({
      visibility: true,
      status: status,
      message: message
    })
    this.countDown(3)
  }
  countDown(t) {
    clearTimeout(timer)
    if (t === 1) {
      return reactToasterEvents.emit('TOASTER.HIDE',this)
    }
    timer = setTimeout(this.countDown,1000,--t)
  }
  hide() {
    reactToasterEvents.emit('TOASTER.HIDE',this)
  }
  renderMessage(status,message) {
    if (status && message) {
      return (
        <Message status={status} message={message} />
      )
    }
  }
  render() {
    const {visibility,status,message} = this.state
    const Toaster = classNames(
      'Toaster',
      {
        'visibility': visibility === true
      }
    )
    return (
      <div className={Toaster}
           onClick={this.hide}>
        {this.renderMessage(status,message)}
      </div>
    )
  }
}

class Message extends Component {
  constructor(props) {
    super(props)
  }
  renderSVG(status) {
    if (status === 'waring') {
      return <ErrorSVG size={25} color="#FFF" />
    } else {
      return <DoneSVG size={25} color="#FFF" />
    }
  }
  render() {
    const {status,message} = this.props
    return (
      <div>
        <p className={status || 'done'}>
          {this.renderSVG(status)}
          <span>{message || '温馨提示!'}</span>
        </p>
      </div>
    )
  }
}

Message.propTypes = {
  status: PropTypes.oneOf(['done','error']),
  message: PropTypes.string.isRequired
}


module.exports = Toaster