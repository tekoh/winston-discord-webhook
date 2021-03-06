# Winston Discord Webhook 🍇

<p align="center">
  <a href="https://www.npmjs.com/package/winston-discord-webhook"><img src="https://nodei.co/npm/winston-discord-webhook.png?compact=true"></a><br>
  <a href="https://ko-fi.com/U7U4AEDXM"><img src = "https://ko-fi.com/img/githubbutton_sm.svg"></a>
</p>

![example code](https://i.imgur.com/XYajivW.png)

<hr>

### Options

| option         | required | type      | default | description                                               |
| -------------- | -------- | --------- | ------- | --------------------------------------------------------- |
| `webhook`      | yes      | `string`  | `null`  | The webhook URL given by discord                          |
| `useCodeblock` | no       | `boolean` | `false` | Should the log be automatically converted to a codeblock? |
| `interval`     | no       | `integer` | `2500`  | Time in milliseconds to send log queue to webhook         |
| `maxLength`    | no       | `integer` | `1500`  | Maximum length before chopping end off of string          |
