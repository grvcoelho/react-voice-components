import React, { Component } from 'react'
import VoicePlayer from '../lib/VoicePlayer.js'

class VoicePlayerDemo extends Component {
  state = {
    play: false,
    pause: false,
    text: 'Welcome to the jungle! We got fun and games'
  }

  handleTextChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  onEnd = () => {
    this.setState({ play: false })
    this.props.action('end')()
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ play: true })}>Play</button>
        <button onClick={() => this.setState({ pause: true })}>Pause</button>
        <button onClick={() => this.setState({ pause: false })}>Resume</button>

        <input value={this.state.text} onChange={this.handleTextChange} />

        {this.state.play && (
          <VoicePlayer
            play
            pause={this.state.pause}
            text={this.state.text}
            onPause={this.props.action('pause')}
            onResume={this.props.action('resume')}
            onStart={this.props.action('start')}
            onEnd={this.onEnd}
          />
        )}
      </div>
    )
  }
}

export default VoicePlayerDemo

