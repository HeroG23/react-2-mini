import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const {fontColor, fontFamily, fontSize} = this.props
    return (
      <div className="textContainer">
        <textarea 
          style={ { color: fontColor, fontFamily: fontFamily, fontSize } }
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='This is where your text will be!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}