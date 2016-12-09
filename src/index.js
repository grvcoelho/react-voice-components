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

        <VoicePlayer
          play={this.state.play}
          pause={this.state.pause}
          text="Welcome to the jungle! We got fun and games"
          onPause={() => console.info('pause')}
          onResume={() => console.info('resume')}
          onStart={() => console.info('start')}
          onEnd={() => console.info('end')}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
)

