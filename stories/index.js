import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import VoicePlayerDemo from './VoicePlayerDemo'

storiesOf('VoicePlayer', module)
  .add('', () => (
    <VoicePlayerDemo action={action} />
  ))

