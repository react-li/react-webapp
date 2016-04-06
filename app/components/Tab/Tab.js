import React, { Component, PropTypes } from 'react'
import './Tab.scss'

class Tab extends Component {

  constructor(props) {
    super(props)
    this.renderTabBar = this.renderTabBar.bind(this)
    this.renderTabPanel = this.renderTabPanel.bind(this)
    this.state = {
      activeIndex: props.active === undefined ? 0 : props.active
    }
  }

  tabChecked(index) {
    this.setState({activeIndex: index})
    console.log(this.state)
  }

  renderTabBar() {
    const {activeIndex} = this.state
    const tabs = this.props.children
    return (
      <div className="TabBar">
        {tabs.map((tab,index)=>{
          return (
            <div key={index}
                 onClick={this.tabChecked.bind(this,index)}
                 className="TabBarItem">
              {tab.props.title}
            </div>
          )
        })}
      </div>
    )
  }

  renderTabPanel() {
    const {activeIndex} = this.state
    const tabs = this.props.children
    return (
      <div>
        {tabs[activeIndex]}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTabBar()}
        {this.renderTabPanel()}
      </div>
    )
  }
}

Tab.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}

module.exports = Tab