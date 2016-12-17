# react-voice-components

[![Build Status](https://travis-ci.org/grvcoelho/react-voice-components.svg?branch=master)](https://travis-ci.org/grvcoelho/react-voice-components)

Set of React components that use the Web Speech API to bring voice experience to React applications

## Install

Install the components using npm:

```sh
$ npm install --save react-voice-components
```

## Usage

1. Import components:

  ```javascript
  import { VoicePlayer } from 'react-voice-components'
  ```

2. Use it:

  ```jsx
  ReactDOM.render(
    <VoicePlayer
      play
      text="React voice player demonstration"
    />,
    document.getElementById('root')
  )
  ```

## API

### `<VoicePlayer />`

Provides you a simple DOM API to do speech synthesis (text to speech).

#### Options

| Property | Options   | Description                                           |
|----------|-----------|-------------------------------------------------------|
| play     | *boolean* | Specifies if the speech should be played when mounted. |
| pause    | *boolean* | Specifies if the speech should pause                  |
| text     | *string*  | Specifies the text that shall be spoken.              |
| lang     | `en-US`, `en-GB`, `es-ES`, `fr-FR`, `it-IT`, `de-DE`, `ja-JP`, `pt-BR`, `zh-CN` | Specifies the accent and language the speech will be spoken.

#### Event Callbacks

| Property | Description                                  |
|----------|----------------------------------------------|
| onStart  | Runs when the speech starts to be spoken.    |
| onEnd    | Runs when the speech completes to be spoken. |
| onPause  | Runs when te speech is paused.               |
| onResume | Runs when the speech is resumed.             |


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
