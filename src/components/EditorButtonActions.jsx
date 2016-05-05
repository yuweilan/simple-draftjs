import React from 'react';

export default ({showButtons, onSendResponse, onHideEditor, messages, hasHideEditorButton}) => {
  if (!showButtons) return null;
  return (
      <div className="RichEditor-actions">
        <button
          className="RichEditor-actionsButton btn-Sky"
          onClick={onSendResponse}
          >
          {messages.buttons.send || 'send'}
        </button>
        {
          hasHideEditorButton ?
          <p
            className="RichEditor-actionsButtonCancel"
            onClick={onHideEditor}
          >
          {messages.buttons.cancel || 'cancel'}
          </p>
          :
          null
        }
      </div>
    );
}