import React from 'react';
import { render } from 'react-dom';
// import Editor from './Editor.jsx'
import Editor from './Editor.jsx';

render(
  <Editor
    getContentAction={printHTML}
    hideButtonAction={closeEditor}
    placeholder={"do somenthing!"}
  />,
  document.getElementById('root')
);

function printHTML(content) {
  console.log("func ok");
}

function closeEditor() {
  console.log("close");
}