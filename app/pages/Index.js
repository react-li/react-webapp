/**
 * 首页
 *
 */

import React, { Component, PropTypes } from 'react'

import { Router, Route, Link } from 'react-router'

import AppBar from '../components/AppBar.js'
// import Link from '../components/Link.js'
import SearchAuto from '../components/SearchAuto.js'
import Banners from '../components/Banners.js'
import CatgWraps from '../components/CatgWraps.js'

import {ArrowLeftSVG} from '../components/SVG'
import {$q} from '../utils/server.js'
import {getCityChecked} from '../utils/localStorage.js'

import 'isomorphic-fetch'

import {Tab,TabItem} from '../components'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.text = this.text.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {
    $q('banners')
      .then(data => {
        this.setState({banners: data})
      })
      .catch(error => console.log(error))
    $q('catgs')
      .then(data => {
        this.setState({catgs: data})
      })
      .catch(error => console.log(error))
  }

  searchTodo(val) {
    console.log(val)
  }

  text(){
    this.context.router.push('me')
  }
  renderAppBar() {
    const leftStyle = {
      fontSize: 16,
      paddingLeft: 10
    }
    const rightStyle = {
      fontSize: 16,
      paddingRight: 10
    }
    const left = <Link to="me">
                  <div style={leftStyle}>
                    <i className="ion ion-location ion-left">
                      {getCityChecked() || '全国'}
                    </i>
                  </div>
                 </Link>
    const right = <a href="me">
                    <div style={rightStyle}>
                      <ArrowLeftSVG color="#fff" size={32} />我的
                    </div>
                  </a>
    return (
      <AppBar left={left} right={right} title="团购首页" />
    )
  }
  
  renderSearchAuto() {
    return (
      <div className="padding bg-stable">
        <SearchAuto placeholder="搜索商家分类、地点、商品"
                todo={this.searchTodo.bind(this)} />
      </div>
    )
  }

  renderBanners() {
    if (this.state.banners) {
    return <Banners data={this.state.banners} />
    }
  }

  /**
   * [renderCatgWraps]
   * 
   * @return {DOM} [返回dom节点]
   * 
   * data格式:[{id:0,order:0,name:'',icon:''},...]
   * trLength tdLength 个数比例
   */
  renderCatgWraps() {
      if (this.state.catgs) {
      const mixin = {
        data: this.state.catgs,
        trLength: 4,
        tdLength: 2
      }
      return <CatgWraps {...mixin} />
    }
  }

  renderText() {
    return (
      <div>
        <input />
        <button onClick={this.requestText}>sub</button>
      </div>
    )
  }

  requestText() {
    fetch('http://localhost:3030/shopping/shop/save', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        shopId: 111111,
        name: 'text111',
        cover: 'cover111',
        tel: '111111'
      })
    }).then(response => response.json()).then(data => {
      console.log(data)
    })
  }

  render() {
    
    return (
      <div className="has-header">
        {this.renderAppBar()}
        {this.renderSearchAuto()}
        {this.renderBanners()}
        {this.renderCatgWraps()}
        {this.renderText()}

        <Tab active={0}>
          <TabItem title="标题1">
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
            <Link to="me"><span>tab1</span><br /></Link>
            <span>tab1</span><br />
            <span>tab1</span><br />
            <span>tab1</span><br />
          </TabItem>
          <TabItem title="标题2">
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />
            <span onClick={this.text}>tab2sssss</span><br />
            <span>tab2</span><br />
            <span>tab2</span><br />

          </TabItem>
          <TabItem title="标题3">
            <span>tab3</span>
          </TabItem>
        </Tab>
      </div>
    )
  }
}

Index.contextTypes = {
  router: React.PropTypes.object.isRequired
}