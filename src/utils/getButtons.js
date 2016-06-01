import Immutable from 'immutable';
import objectAssign from 'object-assign';


const options = Immutable.Map({
  'bold': {label: 'B', style: 'BOLD', classname: 'bold', type: 'inline'},
  'italic': {label: 'I', style: 'ITALIC', classname: 'italic', type: 'inline'},
  'underline': {label: 'U', style: 'UNDERLINE', classname: 'underline', type: 'inline'},
  'h1': {label: 'H1', style: 'header-one', classname: 'h1', type: 'block'},
  'h2': {label: 'H2', style: 'header-two', classname: 'h2', type: 'block'},
  'h3': {label: 'H3', style: 'header-tree', classname: 'h3', type: 'block'},
  'h4': {label: 'H4', style: 'header-four', classname: 'h4', type: 'block'},
  'unordered-list': {label: 'List', style: 'unordered-list-item', classname: 'list', type: 'block'},
  'ordered-list': {label: 'Ordered List', style: 'ordered-list-item', classname: 'ordered-list', type: 'block'},
  'image': {label: 'Image', style: 'IMAGE', classname: 'image', type: 'image'},
  'link': {label: 'Link', style: 'LINK', classname: 'link', type: 'link'},
  'unlink': {label: 'Unlink', style: 'UNLINK', classname: 'unlink', type: 'unlink'},
  'code': {label: '>_', style: 'code-block', classname: 'code', type: 'block'},
  'blockquote': {label: 'Blockquote', style: 'blockquote', classname: 'code', type: 'block'},
  'separator': {type: 'separator'},
});

const getControl = (action) =>
  objectAssign(
    {},
    action,
    options.get(action.name.trim())
);


export default arrayOptions =>
  arrayOptions
  .map(action => getControl(action))
  .filter(action =>
    ((typeof action !== 'undefined') && action !== {})
  );

