import { Component } from 'react'
import { defaultTo } from 'ramda'

class VoicePlayer extends Component {
  constructor (props) {
    super(props)
  }

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
    window.speechSynthesis.speak(this.speech)
  }

  render () {
    return null
  }
}

export default VoicePlayer

