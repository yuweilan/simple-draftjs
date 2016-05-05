Simple Draft-js
=====================

Minimal wysiwyg rich editor using draftjs (Rich editor framework for React).

### Install
```
npm i -S simple-draftjs
```

### How to use?
```javascript
import React from 'react';
import { render } from 'react-dom';
import Editor from 'simple-draftjs';

render(
  <Editor
    getContentAction={getContent}
    hideButtonAction={closeEditor}
    placeholder={"write somenthing!"}
  />,
  document.getElementById('root')
);

function getContent(content) {
  console.log(content);
}

function closeEditor() {
  console.log("close");
}
```

### How to Run?

```
npm install
npm start
open http://localhost:3002
```
#### Contribute: https://github.com/jhta/simple-draftjs

### Dependencies

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)
* [draft-js](https://facebook.github.io/draft-js)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
