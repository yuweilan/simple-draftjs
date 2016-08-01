import React from 'react';
import { render } from 'react-dom';
// import Editor from './Editor.jsx'
import Editor from './Editor.jsx';

render(
  <Editor
    getContentAction={printHTML}
    hideButtonAction={closeEditor}
    placeholder={"do somenthing!"}
    defaultHTML="<p>hello world</p> <br /> <b>text</b><i>italic</i>"
    focus
  />,
  document.getElementById('root')
);

function printHTML(content) {
  console.log("func ok", content);
}

function closeEditor() {
  console.log("close");
}
