'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Editor = require('./Editor.jsx');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = '<br><br><span><h3>Grupo en Facebook<br></h3><span><br>Cuando estamos rodeados de personas que <strong>piensan, comparten y destacan</strong> con su talento, irremediablemente empezaremos a hacer lo mismo.<br><br>Crecer como comunidad es uno de los retos más grandes que tenemos como plataforma. Sabemos que cuando un estudiante mejora, el resto también lo hará.&nbsp;<br><br>Es por ello que&nbsp;te invitamos a formar&nbsp;parte de nuestro grupo exclusivo&nbsp;en Facebook.&nbsp;<br><br>Déjanos&nbsp;<strong>tu correo en los comentarios</strong>&nbsp;para enviarte la invitación.<br><br></span></span>Eres genial, nunca lo dudes.<br><br>Pero para desarrollar tus mejores habilidades debes&nbsp;estar conectado <strong>mucho más</strong> con el ecosistema, para ayudarnos entre nosotros y crear mayor tracción en conjunto.<span><br><br><br><img alt="pikachu" src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035"/><br><h3>Comunidad Platzi<br></h3><br>Recuerda que nos reunimos&nbsp;TODOS&nbsp;los lunes en&nbsp;<a rel="nofollow" target="_blank" href="https://platzi.com/clases/comunidad-platzi/">Comunidad Platzi</a>, nuestro stream principal.&nbsp;<br><br></span><span>Es dirigido por&nbsp;<a rel="nofollow" target="_blank" href="https://twitter.com/maldeadora">Nicole Chapaval</a>&nbsp;y por estudiantes destacados.&nbsp;<br></span><br>Finalmente, te recomendamos unirte&nbsp;a <a rel="nofollow" target="_blank" href="http://soyplatzi.herokuapp.com/">nuestro canal de Slack.</a><br><br><span>En serio.&nbsp;Este es <strong>SU</strong> espacio.<br><br>Siéntanse seguros de participar.<br><span><br>Confíen en que los&nbsp;ayudaremos a alcanzar su mejor versión profesional, a través de nuestra plataforma y comunidad.<br><br><strong>Asuman que SON el futuro de de nuestros ecosistemas.&nbsp;</strong><br><br>Juguemos al más alto nivel.<br><br></span></span>Bienvenidos.<br><br><br>';
// import Editor from './Editor.jsx'


var content2 = '<p>hola esta es una prueba</p>\n<p><br/></p>\n<p><img src="http://tocaboca.com/wp-content/uploads/2014/11/toca-boo-icon-300x300.png"/></p>\n<p><br/></p>\n<p>fsdfdsfds</p>\n<p><br/></p>\n<p><img src="http://tocaboca.com/wp-content/uploads/2014/11/toca-boo-icon-300x300.png"/></p>\n<p><br/></p>"';

(0, _reactDom.render)(_react2.default.createElement(_Editor2.default, {
  getContentAction: printHTML,
  hideButtonAction: closeEditor,
  placeholder: "do somenthing!",
  defaultHTML: content2,
  focus: true
}), document.getElementById('root'));

function printHTML(content) {
  console.log("func ok", content.toString());
}

function closeEditor() {
  console.log("close");
}