Simple Draft-js
=====================

Minimal wysiwyg rich editor using draftjs (Rich editor framework for React).

## Demo
http://platzidev.github.io/simple-draftjs/
## Install
```
npm i -S simple-draftjs
```

## How to use?
```javascript
import React from 'react';
import { render } from 'react-dom';
import Editor from 'simple-draftjs';

const buttons = [
  { name: 'bold' },
  { name: 'italic' },
  { name: 'underline' },
  { name: 'separator' },
  { name: 'unordered-list' },
  { name: 'separator' },
  { name: 'image' },
  { name: 'link' },
  { name: 'unlink' },
  { name: 'separator' },
  { name: 'code' },
];

/** optional css icons:
const buttons = [
  { name: 'bold' },
  { name: 'italic' },
  { name: 'underline' },
  { name: 'separator' },
  { name: 'unordered-list', icon: 'icon-list' },
  { name: 'separator' },
  { name: 'image', icon: 'icon-image'},
  { name: 'link', icon: 'icon-link'},
  { name: 'unlink', icon: 'icon-unlink' },
  { name: 'separator' },
  { name: 'code', , icon: 'icon-code' },
];
**/


render(
  <Editor
    getContentAction={printHTML}
    hideButtonAction={closeEditor}
    placeholder={"do somenthing!"}
    controls={controls}
  />,
  document.getElementById('root')
);

function printHTML(content) {
  console.log("func ok");
}

function closeEditor() {
  console.log("close");
}
```

## Options
Options should be set via props


|Option (prop) |type|description|required|
|----|----|----|----|
|**getContentAction**|function|callback that return html or markdown content when "send" button is clicked or the state change|*|
|**placeholder**|string|Placeholder for empty editor|-|
|**controls**|array|list of elements to show as button options|-|
|**export**|stirng|Format for return. options: HTML, Markdown|-|
|**messages**|Object|text for buttons|-|
|**inactive**|boolean|block editor if it is true|-|
|**inactiveStyle**|object|CSS React object for inactive state|-|
|**hideButtonAction**|func|callback for 'cancel' button click event| -|


#### getContentAction (required)
[function] callback that return html or markdown content when "send" button is clicked or the state change
```javascript
function getContent(content) {
    console.log("html content", content); // <p>something</p>
}
<Editor getContentAction={getContent} />
```

#### placeholder (optional)
[string] placeholder.

#### controls (optional)
[array] list of elements to show as button options
Note: separator is the line for serparate items "|"
```javascript
export default [
  { name: 'bold' },
  { name: 'italic' },
  { name: 'underline' },
  { name: 'separator' },
  { name: 'unordered-list' },
  { name: 'separator' },
  { name: 'image' },
  { name: 'link' },
  { name: 'unlink' },
  { name: 'separator' },
  { name: 'code' },
];

<Editor controls={controls} />
```
#### export (optional)
[option: "html", "markdown"]
default: "html"

### messages (optional)
default:
```
messages: {
  buttons: {
    send: 'Send',
    cancel: 'Cancel',
  }
},
```

### How to Run?

```
npm install
npm start
open http://localhost:3002
```
### Contribute: https://github.com/jhta/simple-draftjs

### Dependencies

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)
* [draft-js](https://facebook.github.io/draft-js)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
