import React, { Component } from 'react'
import VoiceRecognition from '../lib/VoiceRecognition.js'

class VoiceRecognitionDemo extends Component {
  state = {
    start: false,
    stop: false
  }

  onEnd = () => {
    this.setState({ start: false, stop: false })
    this.props.action('end')()
  }

  onResult = ({ finalTranscript }) => {
    const result = finalTranscript

    this.setState({ start: false })
    this.props.action('result')(finalTranscript)
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ start: true })}>start</button>
        <button onClick={() => this.setState({ stop: true })}>stop</button>

        {this.state.start && (
          <VoiceRecognition
            onStart={this.props.action('start')}
            onEnd={this.props.action('end')}
            onResult={this.onResult}
            continuous={true}
            lang="en-US"
            stop={this.state.stop}
          />
        )}
      </div>
    )
  }
}

export default VoiceRecognitionDemo

