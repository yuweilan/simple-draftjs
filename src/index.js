import React from 'react';
import { render } from 'react-dom';
// import Editor from './Editor.jsx'
//
import Editor from './Editor.jsx';

const content = `<br><br><span><h3>Grupo en Facebook<br></h3><span><br>Cuando estamos rodeados de personas que <strong>piensan, comparten y destacan</strong> con su talento, irremediablemente empezaremos a hacer lo mismo.<br><br>Crecer como comunidad es uno de los retos más grandes que tenemos como plataforma. Sabemos que cuando un estudiante mejora, el resto también lo hará.&nbsp;<br><br>Es por ello que&nbsp;te invitamos a formar&nbsp;parte de nuestro grupo exclusivo&nbsp;en Facebook.&nbsp;<br><br>Déjanos&nbsp;<strong>tu correo en los comentarios</strong>&nbsp;para enviarte la invitación.<br><br></span></span>Eres genial, nunca lo dudes.<br><br>Pero para desarrollar tus mejores habilidades debes&nbsp;estar conectado <strong>mucho más</strong> con el ecosistema, para ayudarnos entre nosotros y crear mayor tracción en conjunto.<span><br><br><br><img alt="pikachu" src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035"/><br><h3>Comunidad Platzi<br></h3><img alt="pikachu" src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035"/><br>Recuerda que nos reunimos&nbsp;TODOS&nbsp;los lunes en&nbsp;<a rel="nofollow" target="_blank" href="https://platzi.com/clases/comunidad-platzi/">Comunidad Platzi</a>, nuestro stream principal.&nbsp;<br><br></span><span>Es dirigido por&nbsp;<a rel="nofollow" target="_blank" href="https://twitter.com/maldeadora">Nicole Chapaval</a>&nbsp;y por estudiantes destacados.&nbsp;<br></span><br>Finalmente, te recomendamos unirte&nbsp;a <a rel="nofollow" target="_blank" href="http://soyplatzi.herokuapp.com/">nuestro canal de Slack.</a><br><br><span>En serio.&nbsp;Este es <strong>SU</strong> espacio.<br><br>Siéntanse seguros de participar.<br><span><br>Confíen en que los&nbsp;ayudaremos a alcanzar su mejor versión profesional, a través de nuestra plataforma y comunidad.<br><br><strong>Asuman que SON el futuro de de nuestros ecosistemas.&nbsp;</strong><br><br>Juguemos al más alto nivel.<br><br></span></span>Bienvenidos.<br><br><br>`;

const content2 = `<a rel="nofollow" target="_blank" href="https://twitter.com/abracarioca">Anna Heim</a>&nbsp;and I'm one of the members of Team Platzi.&nbsp;<img alt="pikachu" src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035"/><p>hola este es u p</p><br><br>In this free masterclass in English, David Kadavy will tell you how he managed to build a&nbsp;6-figure online business on his own,&nbsp;and how you could do the same.<br><br><h3>When does the masterclass start?</h3><br><strong>Update: The class will be broadcast live&nbsp;on December 17th 2015 from 12pm PT.</strong><br><br><h3>Who will be our teacher?</h3><br><a rel="nofollow" target="_blank" href="https://twitter.com/kadavy">David Kadavy</a> is the&nbsp;author of best-selling book "Design for Hackers."&nbsp;He blogged his way to a book deal, and managed to grow his own distribution list from 5,000 subscribers to 30,000 quality subscribers in only two weeks.<br><br><figure><img alt="" src="https://static.platzi.com/media/teachers/kadavy.jpg"></figure><br><br><h3>What will we will study?</h3>- Define your project <br>- Design a unique product <br>- Build a strong following <br>- Boost your creativity <br>- Evaluate potential ideas <br>- Sharpen your concept <br>- Monetize your efforts <br>- Minimize your investment <br>- Decide what you should blog about (and why it doesn't matter) <br>- Master email marketing <br>- Build an audience with explosive blog posts <br>- Go from blog to business <br>- Discover growth and life hacks <br>- Stay sane and productive<br>-&nbsp;Succeed as a solo entrepreneur&nbsp;<br><h3>Share and comment</h3>While you are watching the class, you can start threads asking questions or sharing your notes in our discussion area:<br><br><img alt="" src="http://l4c.me/fullsize/find1-1424122211.png"><br><br><br>Keep in mind that a recording will be available very soon after the class. Still, we encourage you to follow it live to participate in the interaction.&nbsp;<br><br><strong>Enjoy!</strong><br>`;

const content3 = {"entityMap":{"0":{"type":"IMAGE","mutability":"IMMUTABLE","data":{"src":"https://media.licdn.com/media/p/3/005/0b1/0eb/3c893e3.png"}}},"blocks":[{"key":"8bo5u","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"key":"5racg","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}]},{"key":"dnvq5","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[]}]};

render(
  <Editor
    getContentAction={printHTML}
    hideButtonAction={closeEditor}
    placeholder={"do somenthing!"}
    defaultHTML={content2}
    createFromRaw
    raw={content3}
    focus
  />,
  document.getElementById('root')
);

function printHTML(content, raw) {

  //console.log("func ok", content.toString());
  console.log(content);
  console.log(JSON.stringify(raw));
  //console.log(JSON.parse(JSON.stringify(raw)));
}

function closeEditor() {
  console.log("close");
}
