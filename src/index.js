import React from 'react'
import ReactDOM from 'react-dom'
import VoicePlayer from './voice-player'

ReactDOM.render(
  <VoicePlayer
    text="Welcome to React Voice Components! Please turn off the lights before leaving"
    lang="en-us"
    onEnd={() => alert('finished')}
  />,
  document.getElementById('root')
)
