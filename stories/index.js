import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import VoicePlayerDemo from './VoicePlayerDemo'
import VoiceRecognitionDemo from './VoiceRecognitionDemo'

storiesOf('VoicePlayer', module)
  .add('', () => (
    <VoicePlayerDemo action={action} />
  ))

storiesOf('VoiceRecognition', module)
  .add('', () => (
    <VoiceRecognitionDemo action={action} />
  ))

