import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { DoneSVG,WeiXinSVG,QQSVG } from '../components/SVG/index.js'

import {Toaster} from '../components/index.js'

import {$q} from '../utils/server.js'

import logo from '../components/images/logo.png'

const cardStyle = {
  position: 'absolute',
  width: '80%',
  left: '10%',
  top: '15%',
  textAlign: 'center'
}
const formStyle = {
  padding: '20px 30px'
}
const otherStyle = {
  padding: '20px 30px'
}

const logoStyle = {
  marginTop: '30px',
  width: '80px'
}

const cBtnStyle = {
  marginTop: '10px',
  background: '#4DD17D',
  color: '#FFF'
}

export default class Register extends Component {

  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault()
    // this.refs.reg.reset()
    const email = this.refs.email.value
    const password = this.refs.password.value
    const {toaster} = this.refs
    if (!email) {
      toaster.show('error','请输入邮箱')
      return
    }else if (!password) {
      toaster.show('error','请输入密码')
      return
    }else if(password.length < 6){
      toaster.show('error','密码长度过小')
      return
    }
    const req = {
      "email": email,
      "password": password
    }
    $q('path/register',req).then(function (data) {
      console.log(data)
    },function (error) {
      console.log(error)
    })
  }

  renderRegister() {
    return (
      <form className="pure-form"
            style={formStyle}
            ref='reg'
            onSubmit={this.handleSubmit.bind(this)}>
        <input ref='email'
               type="email"
               className="input-clear"
               placeholder="邮箱" />
        <input ref='password'
               type="password"
               className="input-clear"
               placeholder="密码" />
        <button style={cBtnStyle}
                className="pure-button button-full">
          <DoneSVG color="#FFF" />
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="page-gradient">
        <Toaster ref="toaster" />
        <div style={cardStyle}
             className="card-shadow">
          <img style={logoStyle} src={logo} />
          {this.renderRegister()}
          <div style={otherStyle}>
            <div className="pure-button button-clear">
              <WeiXinSVG color="#4EA7D1" />
            </div>
            <div className="pure-button button-clear">
              <QQSVG color="#BB4949" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}