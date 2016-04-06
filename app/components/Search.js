import React, { Component, PropTypes } from 'react'

export default class Search extends Component {

  constructor(props) {
    super(props)
  }

  /**
   * search to do
   * [bind props func]
   */
  handleClick(e) {
    e.preventDefault()
    if (this.refs.search.value) {
      this.props.todo(this.refs.search.value)
    }
  }

  render() {
    const {placeholder} = this.props
    return (
      <form className="search">
        <input ref="search" placeholder={placeholder} />
        <button onClick={this.handleClick.bind(this)}><i className="ion ion-search"></i></button>
      </form>
    )
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  todo: PropTypes.func.isRequired,
}