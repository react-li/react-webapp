import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import Link from '../components/Link.js'
import Search from '../components/Search.js'
import Letters from '../components/Letters.js'

import {$q} from '../utils/server.js'
import {setCityChecked} from '../utils/localStorage.js'

export default class City extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    $q('citys')
      .then(data => {
        this.setState({citys: data})
      })
      .catch(error => console.log(error))
  }

  searchTodo(value) {
    var thisCitys = []
    this.state.citys.map((arr)=>{
      var thisKey = Object.keys(arr)
      arr[thisKey].map((item)=>{
        if (item.indexOf(value) != -1) {
          thisCitys.push(item)
        }
      })
    })
    this.setState({serchEnd: thisCitys})
  }

  lettersTodo(value) {
    setCityChecked(value)
    this.context.router.goBack()
  }

  renderAppBar() {
    const rightStyle = {
      fontSize: 24,
      padding: '15px 10px'
    }
    const right = <Link route=""><i style={rightStyle} className="ion ion-homefill"></i></Link>
    return <AppBar right={right} title="选择城市" />
  }

  renderSearch() {
    return (
      <div>
        <div className="padding">
          <Search placeholder="输入城市"
                  todo={this.searchTodo.bind(this)} />
        </div>
        {this.renderSerchEnd()}
      </div>
    )
  }

  renderSerchEnd() {
    if (this.state.serchEnd && this.state.serchEnd.length > 0) {
      return (
        <div>
          <div className="list-title">搜索城市</div>
          <div className="padding">
            {
              this.state.serchEnd.map((item,key)=>{
                return <span key={key}
                             className="list-box-sizing"
                             onClick={this.lettersTodo.bind(this,item)}>
                         {item}
                       </span>
              })
            }
          </div>
        </div>
      )
    }
  }

  renderLetters(props) {
    if (props) {
      return (
        <div>
          <div className="list-title">全部城市</div>
          <Letters todo={this.lettersTodo.bind(this)} data={props} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="has-header">
        {this.renderAppBar()}
        {this.renderSearch()}
        <div className="list-title">热门城市</div>
        <div className="padding">
          <span className="list-box-sizing" onClick={this.lettersTodo.bind(this,'上海')}>上海</span>
          <span className="list-box-sizing" onClick={this.lettersTodo.bind(this,'北京')}>北京</span>
        </div>
        {this.renderLetters(this.state.citys)}
      </div>
    )
  }
}

City.contextTypes = {
  router: React.PropTypes.object.isRequired
}