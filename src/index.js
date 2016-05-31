import React from 'react';
import { render } from 'react-dom';
// import Editor from './Editor.jsx'
import Editor from './Editor.jsx';

render(
  <Editor
    getContentAction={printHTML}
    hideButtonAction={closeEditor}
    placeholder={"do somenthing!"}
    defaultHTML="<h1>hello world</h1> <br /> <b>text</b><i>italic</i>"
  />,
  document.getElementById('root')
);

function printHTML(content) {
  console.log("func ok");
}

function closeEditor() {
  console.log("close");
}