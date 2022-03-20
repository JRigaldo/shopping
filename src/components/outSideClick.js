import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * Component that alerts if you click outside of it
 */
export default class outSideClick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false
    }
    // console.log(this.props)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // alert("You clicked outside of me!")
      this.setState({ focus: !this.state.focus })
      this.props.callback(this.state.focus)
      // console.log("test 2", this.state.focus)
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} focus={this.props.focus}>
        {this.props.children}
      </div>
    )
  }
}

outSideClick.propTypes = {
  children: PropTypes.element.isRequired
}
