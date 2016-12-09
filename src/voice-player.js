import { Component } from 'react'
import { defaultTo } from 'ramda'

class VoicePlayer extends Component {
  buildSpeech = () => {
    let speech = new SpeechSynthesisUtterance()

    speech.text = defaultTo('', this.props.text)
    speech.volume = defaultTo(1, this.props.volume)
    speech.rate = defaultTo(1, this.props.rate)
    speech.pitch = defaultTo(1, this.props.pitch)
    speech.lang = defaultTo('en-UK', this.props.lang)

    return speech
  }

  componentWillMount () {
    if ('speechSynthesis' in window) {
      this.speech = this.buildSpeech()
    }
  }

  componentDidMount () {
    const events = [
      { name: 'start', action: this.props.onStart },
      { name: 'end', action: this.props.onEnd },
      { name: 'error', action: this.props.onError },
      { name: 'pause', action: this.props.onPause },
      { name: 'resume', action: this.props.onResume }
    ]

    events.forEach(e => {
      this.speech.addEventListener(e.name, e.action)
    })

    window.speechSynthesis.speak(this.speech)
  }

  render () {
    return null
  }
}

export default VoicePlayer

