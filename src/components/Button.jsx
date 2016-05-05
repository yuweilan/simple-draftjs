import React, { Component, PropTypes } from 'react';
import { autobind } from 'core-decorators';
import { injectProps } from 'relpers';
import classnames from 'classnames';

class Button extends Component {

  static propTypes = {
    action: PropTypes.func,
    style: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    receiveStyle: PropTypes.bool.isRequired,
  };

  /**
   * Add of remove action and style if editor is using or not
   * @param  {Event} e Click Event
   */
  @autobind
  onToggle(e) {
    e.preventDefault();
    const { action, style, receiveStyle } = this.props;
    if (receiveStyle) {
      action(style);
    } else {
      action(e);
    }
  }

  /**
   * select css class if button is active or not
   * @param  {Boolean} options.active If button is actived
   * @return {String}  css class
   */
  @autobind
  @injectProps
  getCssClass({active}) {
    return classnames(
      'RichEditor-styleButton',
      {'RichEditor-activeButton': active}
    );
  }

  @autobind
  @injectProps
  renderIcon({icon, classname, label}) {
    if (!icon && !classname) return null;
    if (icon) return <span className={icon} />;
    if (classname)  return <span className={classname}>{label}</span>;
  }

  /**
   * Render button
   * @param  {String} options.label TextLabel for button
   * @return {Component}
   */
  render() {
    return (
      <div className={this.getCssClass()} onMouseDown={this.onToggle.bind(this)}>
        {this.renderIcon()}
      </div>
    );
  }
}

export default Button;
