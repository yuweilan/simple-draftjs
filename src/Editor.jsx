import React, { Component, PropTypes } from 'react';
import { injectProps } from 'relpers';
import classnames from 'classnames';
import {
  EditorState,
  RichUtils,
  Entity,
  AtomicBlockUtils,
} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { autobind } from 'core-decorators';
import { stateToHTML } from 'draft-js-export-html';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { stateFromHTML } from 'draft-js-import-html';
import linkDecorator from './decorators/linkDecorator';
import Media from './components/Media';
import CustomControls from './components/CustomControls';
import EditorButtonActions from './components/EditorButtonActions';
import getPlaceholderStyle from './utils/getPlaceholderStyle';
import defaultControls from './constants/defaultControls';


const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];

class PlatziEditor extends Component {

  static propTypes = {
    getContentAction: PropTypes.func,
    hideButtonAction: PropTypes.func,
    showButtons: PropTypes.bool,
    showSecondButton: PropTypes.bool,
    placeholder: PropTypes.string,
    isDetail: PropTypes.bool,
    export: PropTypes.oneOf(['markdown', 'html']),
    messages: PropTypes.object,
    controls: PropTypes.array,
  };

  static defaultProps = {
    showButtons: true,
    markdown: false,
    isDetail: false,
    export: 'html',
    messages: {
      buttons: {
        send: 'Send',
        cancel: 'Cancel',
      }
    },
    controls: defaultControls,
  };

  state = {
    editorState: this.getInitialEditorState(),
    urlValue: '',
    showUrlInput: false,
    addingMedia: false,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  /**
   * Change editor state
   * @param  {Object} editorState
   */
  onChange(editorState) {
    if (this.props.inactive) {
      return;
    }
    this.setState({
      editorState,
    });
    // send html content to the parent component
    if (!this.props.isDetail) {
      this.props.getContentAction(
        this.props.export === 'markdown'
          ? this.getMarkdown()
          : this.getHtml()
      );
    }
  }

  /**
   * Change url state when change input text
   * @param  {Event} e Click event
   */
  @autobind
  onChangeUrl(e) {
    this.setState({
      urlValue: e.target.value,
    });
  }

  /**
   * When user clicked image icon open url input
   * @param  {Event} e Click event
   */
  @autobind
  onAddMedia(e) {
    e.preventDefault();
    const {addingMedia} = this.state;
    this.setState({
      showUrlInput: !addingMedia ? true : false,
      addingMedia: !addingMedia,
    }, () => {
      setTimeout(() => this.state.addingMedia ?
        this.refs.url.focus()
        :
        this.refs.editor.focus(),
      0);
    });
  }

  /**
   * Add selected text for link
   * @param  {Event} e
   */
  @autobind
  onPromptForLink(e) {
    e.preventDefault();
    const {editorState} = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.setState({
        showUrlInput: true,
        urlValue: '',
      }, () => {
        setTimeout(() => this.refs.url.focus(), 0);
      });
    }
  }

  /**
   * Remove Link of selection
   * @param  {Event} e clik
   */
  @autobind
  onRemoveLink(e) {
    e.preventDefault();
    const {editorState} = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.setState({
        editorState: RichUtils.toggleLink(editorState, selection, null),
      });
    }
  }

  /**
   * Create entity when link is confirmed
   * @param  {[type]} e Click or keydown enter
   */
  @autobind
  onConfirmLink(e) {
    e.preventDefault();
    const {urlValue, editorState} = this.state;
    if (urlValue !== '') {
      const entityKey = Entity.create('LINK', 'MUTABLE', {url: urlValue});
      this.setState({
        editorState: RichUtils.toggleLink(
          editorState,
          editorState.getSelection(),
          entityKey
        ),
        urlValue: '',
        showUrlInput: false,
      }, () => {
        setTimeout(() => this.refs.editor.focus(), 0);
      });
    }
  }

  /**
   * Create image entity
   * @param  {Event} e Keyup event
   */
  @autobind
  onConfirmAddMedia(e) {
    e.preventDefault();
    const {urlValue, editorState} = this.state;
    const validateImage = /\.(jpg|jpeg|png)$/.test(urlValue);
    if (!urlValue !== '' && validateImage) {
      const entityKey = Entity.create('IMAGE', 'IMMUTABLE', {src: urlValue});
      this.setState({
        editorState: AtomicBlockUtils.insertAtomicBlock(
          editorState,
          entityKey,
          ' '
        ),
        urlValue: '',
        showUrlInput: false,
        addingMedia: false,
      }, () => {
        setTimeout(() => this.refs.editor.focus(), 0);
      });
    }
  }

  /**
   * Send submit when in input press enter (and hide box)
   * @param  {Envent} e Keydown event
   */
  @autobind
  onLinkInputKeyDown(e) {
    if (e.which === 13) {
      if (this.state.addingMedia) {
        this.onConfirmAddMedia(e);
      } else {
        this.onConfirmLink(e);
      }
      // hide box when a link is submited
      this.setState({
        showUrlInput: false,
      });
    }
  }

  /**
   * Call prop action for return content to parent
   * @param  {Event} e click
   */
  @autobind
  onSendResponse(e) {
    e.preventDefault();
    const {
      getContentAction,
      hideButtonAction,
      showSecondButton,
    } = this.props;
    getContentAction(
      this.props.export === 'markdown'
        ? this.getMarkdown()
        : this.getHtml()
    );
    if (showSecondButton) {
      hideButtonAction();
    }
    this.resetEditor();
  }

  /**
   * Call prop function that close editor
   * @param  {Event} e Click event
   */
  @autobind
  onHideEditor(e) {
    e.preventDefault();
    this.props.hideButtonAction();
  }


  /**
   * Add custom css class for block selected
   * @param  {Object}
   * @return {String}  CSS Class
   */
  @autobind
  getBlockStyle(block) {
    switch (block.getType()) {
    case 'blockquote' : return 'RichEditor-blockquote';
    default: return null;
    }
  }

  /**
   * ger media component
   * @param  {Object} block
   * @return {[type]}   Media block
   */
  getMediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  }

  /**
   * Render url input if showURLInput is true
   * @return {Component}
   */
  @autobind
  renderUrlInput() {
    const {showUrlInput} = this.state;
    if (!showUrlInput) return null;
    return (
      <div className="RichEditor-linkBox">
      <span>URL</span>
        <input
          className="RichEditor-linkInput"
          onChange={this.onChangeUrl.bind(this)}
          onKeyDown={this.onLinkInputKeyDown.bind(this)}
          ref="url"
          type="text"
        />
      </div>
    );
  }


  @injectProps
  render({inactive = false, inactiveStyle, classInactive, placeholder, showSecondButton, showButtons, messages, controls}) {
    const {editorState} = this.state;
    const cssStyle = (inactiveStyle) ? inactiveStyle : {
      background: '#ddd',
      color: '#ccc',
      cursor: 'wait',
    };
    const style = (inactive) ? cssStyle : null;
    return (
      <div>
        <section className="RichEditor-root">
          <header className="RichEditor-header">
            <CustomControls
              editorState={editorState}
              controls={controls}
              onAddMedia={this.onAddMedia.bind(this)}
              onToggleInline={this.toggleInlineStyle.bind(this)}
              onToggleBlock={this.toggleBlockType.bind(this)}
              onAddLink={this.onPromptForLink.bind(this)}
              onRemoveLink={this.onRemoveLink.bind(this)}
            />
          </header>
          {this.renderUrlInput()}
          <section
            className={`${getPlaceholderStyle(editorState)} ${classInactive}`}
            style={style}
          >
          <Editor
            blockStyleFn={this.getBlockStyle}
            blockRendererFn={this.getMediaBlockRenderer}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
            onChange={this.onChange}
            placeholder={placeholder ? placeholder : ''}
            ref="editor"
            spellCheck={true}
            plugins={plugins}
          />
          </section>
        </section>
        {
          (showButtons && (this.getHtml() !== '<p><br/></p>')) ?
          <EditorButtonActions
            hasHideEditorButton={showSecondButton}
            messages={messages}
            onSendResponse={this.onSendResponse.bind(this)}
            onHideEditor={this.onHideEditor.bind(this)}
          />
          :
          null
        }

      </div>
    );
  }

  /**
   * Toggle block action used in editor for inline text
   * @param  {Object} inlineStyle
   */
  @autobind
  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  /**
   * Toggle block action used for editor for text block selected
   * @param  {Object} blockType
   */
  @autobind
  toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  @autobind
  handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  /**
   * Convert content state to HTML
   * @return {String} result HTML of editor
   */
  @autobind
  getHtml() {
    const { editorState } = this.state;
    return this.urlify(stateToHTML(editorState.getCurrentContent()));
  }

  /**
   * Convert content state to Markdown
   * @return {String} Markdown with the content of the editor
   */
  @autobind
  getMarkdown() {
    const { editorState } = this.state;
    return stateToMarkdown(editorState.getCurrentContent());
  }

  /**
   * Change editor state to empty
   */
  @autobind
  resetEditor() {
    this.setState({
      editorState: EditorState.createEmpty(linkDecorator),
    });
  }

  @autobind
  getInitialEditorState() {
    const { defaultHTML } = this.props;
    if (defaultHTML) {
      const content = stateFromHTML(defaultHTML);
      return EditorState
      .createWithContent(content, linkDecorator);
    }
    return EditorState.createEmpty(linkDecorator);
  }

  @autobind
  urlify(text) {
    const urlRegex = /((\S*)\.([a-z]{2,5}))/gi;
    return text.replace(urlRegex, (url) => {
      const finalUrl = ((url.replace('<p>','')).replace('</p>', ''));
        return `<a href="${finalUrl}" target="_blank">${finalUrl}</a> `;
    });
  }
}

export default PlatziEditor;
