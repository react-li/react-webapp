import React, { Component, PropTypes } from 'react'

export default class SearchAuto extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focus: false
    }
  }

  /**
   * search to do
   * [bind props func]
   */
  handleClick(e) {
    e.preventDefault()
    if (this.refs.searchAuto.value) {
      this.props.todo(this.refs.searchAuto.value)
    }
  }

  inputFocus() {
    this.setState({focus: true})
  }
  inputBlur() {
    this.setState({focus: false})
  }
  renderSuggestion() {
    const {focus} = this.state
    let animateSug
    if (this.state.focus === true) {
      animateSug = {
        display: 'block'
      }
    }
    return (
      <div className="suggestion" style={animateSug}>
        <ul>
          <li>
            <span className="wrap">匹配项</span>
            <span className="tip">项描述</span>
          </li>
        </ul>
        <div className="des">功能描述</div>
      </div>
    )
  }
  render() {
    const {placeholder} = this.props
    let animateInput
    let animateCancel
    if (this.state.focus === true) {
      animateInput = {
        width: '85%'
      }
      animateCancel = {
        opacity: 1
      }
    }
    return (
      <form className="search-auto">
        <div className="input" style={animateInput}>
          <input ref="searchAuto"
                 placeholder={placeholder}
                 maxLength="20"
                 autoComplete="off"
                 onFocus={this.inputFocus.bind(this)}
                 onBlur={this.inputBlur.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>
            <i className="ion ion-search"></i>
          </button>
        </div>
        <div className="cancel jacinth" style={animateCancel}>关闭</div>
        {this.renderSuggestion()}
      </form>
    )
  }
}

SearchAuto.propTypes = {
  placeholder: PropTypes.string,
  todo: PropTypes.func.isRequired,
}