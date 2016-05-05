import React from 'react';
import { render } from 'react-dom';
// import Editor from './Editor.jsx'
import Editor from './Editor.jsx';

const controls = [
'bold',
'italic',
'underline',
'separator',
'unordered-list',
'separator',
'image',
'link',
'unlink',
'separator',
'code'
];

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