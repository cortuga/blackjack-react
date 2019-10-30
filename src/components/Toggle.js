import React, { Component } from "react"

export default class Toggle extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on //Off until toggled on.
    })
  }

  render() {
    return <div>{this.state.on && <h2>Toggled!</h2>}</div>
  }
}
