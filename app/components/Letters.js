import React, { Component, PropTypes } from 'react'

import {substrArrayByLength} from '../utils/func.js'

export default class Letters extends Component {

  constructor(props) {
    super(props)
  }

  keyClickShow(key) {
    var DOMS = document.querySelectorAll("li.let-li")
    for (var i=0; i< DOMS.length; i++) {
      DOMS[i].style.display = 'none'
    }
    var itemDOM = document.getElementById('let-li'+key)
    itemDOM.style.display = 'block'
  }

  handleClick(value) {
    this.props.todo(value)
  }

  renderLettersLi(li) {
    return (
      li.map((arr,key)=>{
        var thisKey = Object.keys(arr)
        return (
          <li id={"let-li"+thisKey} key={key} className="let-li">
            <div className="let-li-title">{thisKey}</div>
            <div className="let-li-citys">
              {
                arr[thisKey].map((item,index)=>{
                  return (
                    <span key={index}
                          onClick={this.handleClick.bind(this,item)}>{item || '0'}</span>
                  )
                })
              }
            </div>
          </li>
        )
      })
    )
  }

  renderLettersUl(ul) {
    return (
      ul.map((item,index)=>{
        var thisKey = Object.keys(item)
        if (item[thisKey].length > 0) {
          return (
            <div key={index}
                 className="let-ul"
                 onClick={this.keyClickShow.bind(this,thisKey)}>
              {thisKey}
            </div>
          )
        }
      })
    )
  }
  
  renderLettersBox(props) {
    if (props) {
      const mixinArr = substrArrayByLength(props,6)
      return mixinArr.map((arr,key)=>{
        return (
          <div className="let-box" key={key}>
            {this.renderLettersUl(arr)}
            {this.renderLettersLi(arr)}
          </div>
        )
      })
    }
  }
  render() {
    const {data} = this.props
    return (
      <div className="letters">
        {this.renderLettersBox(data)}
      </div>
    )
  }
}

Letters.propTypes = {
  // data json array like [{"A":["阿坝"...]}...]
  data: PropTypes.array.isRequired,
  todo: PropTypes.func
}
