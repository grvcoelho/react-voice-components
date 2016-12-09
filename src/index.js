import React from 'react'
import ReactDOM from 'react-dom'
import VoicePlayer from './voice-player'

class Demo extends React.Component {
  state = {
    play: true,
    pause: false
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ play: true })}>Play</button>
        <button onClick={() => this.setState({ pause: true })}>Pause</button>
        <button onClick={() => this.setState({ pause: false })}>Resume</button>
        <button onClick={() => this.setState({ cancel: true })}>Resume</button>

        <VoicePlayer
          text="Welcome to React Voice Components! Please turn off the lights before leaving"
          lang="en-us"
          play={this.state.play}
          pause={this.state.pause}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
)
