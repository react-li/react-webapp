import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import {Avatar,ModalItem,CardItem} from '../components'
import {QQSVG} from '../components/SVG'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  renderAvatar() {
    const style = {
      padding: '15px 10px',
      background: '-webkit-linear-gradient(#372D56,#281E47)'
    }
    return (
      <div style={style}>
        <Link to="/register">
          <Avatar dark={true}
                  title="名字还是土一点好"
                  avatar="http://p3.music.126.net/jBUvF-7028ZI3DSaVjb1fA==/7968160767060979.jpg">
            <b>等级：1 金币：1010</b>
          </Avatar>
        </Link>
      </div>
    )
  }
  
  renderUserModal() {
    const style = {
      padding: '15px 0px',
      color: '#EAEAED',
      background: '-webkit-linear-gradient(#332A50,#22193E)'
    }
    return (
      <div style={style}>
        <ModalItem title="猜猜" description="一夜暴富不是梦">
          <QQSVG size={20} color="#EAEAED" />
        </ModalItem>
        <ModalItem title="猜猜" description="一夜暴富不是梦">
          <QQSVG size={20} color="#EAEAED" />
        </ModalItem>
      </div>
    )
  }

  renderInviteDinner() {
    const style = {
      borderRadius: '5px',
      background: '-webkit-linear-gradient(#00CDD8,#00D6BC)'
    }
    return (
      <div className="button" style={style}>
        <CardItem title="约饭" description="咱们凑一桌子吧!">
          开始游戏 >
        </CardItem>
      </div>
    )
  }
  renderCard2() {
    const card1 = {
      borderRadius: '5px',
      background: '-webkit-linear-gradient(#FF6FB8,#FF6468)'
    }
    return (
      <div className="button" style={card1}>
        <CardItem title="采撷" description="采撷一下吧">
          开始游戏 >
        </CardItem>
      </div>
    )
  }
  renderCard3() {
    const card1 = {
      borderRadius: '5px',
      background: '-webkit-linear-gradient(#C87EED,#A24BE8)'
    }
    return (
      <div className="button" style={card1}>
        <CardItem title="采撷" description="采撷一下吧">
          开始游戏 >
        </CardItem>
      </div>
    )
  }
  renderCard4() {
    const card1 = {
      borderRadius: '5px',
      background: '-webkit-linear-gradient(#FBD449,#FFB532)'
    }
    return (
      <div className="button" style={card1}>
        <CardItem title="采撷" description="采撷一下吧">
          开始游戏 >
        </CardItem>
      </div>
    )
  }

  render() {
    const style = {
      background: '#2A204A'
    }
    return (
      <section style={style}>
        <div className="padding">
          {this.renderAvatar()}
          {this.renderUserModal()}
          {this.renderInviteDinner()}
          {this.renderCard2()}
          {this.renderCard3()}
          {this.renderCard4()}
        </div>
      </section>
    )
  }
}

Main.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}