(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(1),n=a(0);const i=Object(s.createContext)(),l=e=>{let{children:t}=e;const[a,c]=Object(s.useState)("light");Object(s.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches?"dark":"light"),e.addEventListener("change",(e=>{c(e.matches?"dark":"light")}))}),[]);return Object(n.jsx)(i.Provider,{value:[{themeName:a,toggleTheme:()=>{const e="dark"===a?"light":"dark";localStorage.setItem("themeName",e),c(e)}}],children:t})},r={homepage:"https://marciukaitis.github.io/",title:"Portfolio"},o={name:"Micaela",role:"Full Stack Developer",description:" En b\xfasqueda de mi primera oportunidad en el mundo del desarrollo de software.",resume:"https://docs.google.com/document/d/1gyvottuN1XU4h7Yt9_C-rtYitRqCXRIzxZEplqc9Onw/edit?tab=t.0",social:{linkedin:"https://www.linkedin.com/in/micaela-marciukaitis-870025152/",github:"https://github.com/Marciukaitis"}},d=[{name:"FrontEnd",description:"Una aplicaci\xf3n que realiza consultas a una API de dentistas, integrando validaciones y manejo de errores. Incluye una funcionalidad de destacados, en el cual se evitan los duplicados y con la opci\xf3n de poder eliminarlos. Existe la opci\xf3n de alternar entre modo claro y oscuro para preferencias del usuario. ",stack:["CSS","JavaScript","React"],sourceCode:"https://github.com/Marciukaitis/Dentistas-React",livePreview:"https://fe-3-final-gamma.vercel.app/"},{name:"To Do List",description:"Se trata de una aplicaci\xf3n de tareas, que incluye un proceso de registro (sign up) y un inicio de sesi\xf3n (login) con sus respectivas validaciones. En ella, los usuarios pueden registrar diversas actividades que desean realizar. Estas tareas permanecen pendientes hasta que sean completadas.",stack:["HTML 5","CSS","JavaScript"],sourceCode:"https://github.com/Marciukaitis/To-Do",livePreview:"https://to-do-ebon-eta.vercel.app/signup.html"},{name:"BackEnd",description:"La aplicaci\xf3n consiste en un sistema que gestiona las operaciones de un CRUD con el correspondiente control de errores, estando conectada a una base de datos. Adem\xe1s, incluye la implementaci\xf3n de pruebas unitarias para garantizar el correcto funcionamiento de sus funcionalidades.",stack:["Java","SpringBoot","CSS","JavaScript"],sourceCode:"https://github.com/Marciukaitis/Dentist-Java"}],j=["Java","HTML","CSS","JavaScript","React","SpringBoot","Postman","SQL","Git","CI/CD","AWS","Dise\xf1o UX/UI","Scrum","Design Thinking"],b="micaelamarciukaitis@gmail.com";var u=a(8),h=a.n(u),m=a(12),p=a.n(m),O=a(14),x=a.n(O),v=a(13),k=a.n(v),g=a(16),f=a.n(g),N=a(15),_=a.n(N);a(25);var C=()=>{const{social:e}=o,[{themeName:t,toggleTheme:a}]=Object(s.useContext)(i),[c,l]=Object(s.useState)(!1),r=()=>l(!c);return Object(n.jsxs)("nav",{className:"center nav",children:[Object(n.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[Object(n.jsx)("div",{className:"social",children:e&&Object(n.jsxs)(n.Fragment,{children:[e.github&&Object(n.jsx)("a",{href:e.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(h.a,{})}),e.linkedin&&Object(n.jsx)("a",{href:e.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(p.a,{})})]})}),d.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#projects",onClick:r,className:"link link--nav",children:"Proyectos"})}):null,j.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#skills",onClick:r,className:"link link--nav",children:"Skills"})}):null,b?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#contact",onClick:r,className:"link link--nav",children:"Contacto"})}):null]}),Object(n.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===t?Object(n.jsx)(k.a,{}):Object(n.jsx)(x.a,{})}),Object(n.jsx)("button",{type:"button",onClick:r,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(n.jsx)(_.a,{}):Object(n.jsx)(f.a,{})})]})};a(29);var S=()=>{const{homepage:e,title:t}=r;return Object(n.jsxs)("header",{className:"header center",children:[Object(n.jsx)("h3",{children:e?Object(n.jsx)("a",{href:e,className:"link",children:t}):t}),Object(n.jsx)(C,{})]})};a(30);var w=()=>{const{name:e,role:t,description:a,resume:c}=o;return Object(n.jsxs)("div",{className:"about center",children:[e&&Object(n.jsxs)("h1",{children:["Hola, soy ",Object(n.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(n.jsxs)("h2",{className:"about__role",children:[" ",t,"."]}),Object(n.jsx)("p",{className:"about__desc",children:a&&a}),Object(n.jsx)("div",{className:"about__contact center",children:c&&Object(n.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Curriculum Vitae"})})})]})},y=a(6),E=a.n(y),M=a(17),P=a.n(M);a(32);var D=e=>{let{project:t}=e;return Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(n.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(n.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(n.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(h.a,{})}),t.livePreview&&Object(n.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(P.a,{})})]})};a(33);var J=()=>d.length?Object(n.jsxs)("section",{id:"projects",className:"section projects",children:[Object(n.jsx)("h2",{className:"section__title",children:"Proyectos"}),Object(n.jsx)("div",{className:"projects__grid",children:d.map((e=>Object(n.jsx)(D,{project:e},E()())))})]}):null;a(34);var q=()=>j.length?Object(n.jsxs)("section",{className:"section skills",id:"skills",children:[Object(n.jsx)("h2",{className:"section__title",children:"Skills"}),Object(n.jsx)("ul",{className:"skills__list",children:j.map((e=>Object(n.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())))})]}):null,L=a(18),I=a.n(L);a(35);var T=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(n.jsx)("div",{className:"scroll-top",children:Object(n.jsx)("a",{href:"#top","aria-label":"top",children:Object(n.jsx)(I.a,{fontSize:"large"})})}):null};a(36);var R=()=>b?Object(n.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(n.jsx)("h2",{className:"section__title",children:"Contacto"}),Object(n.jsx)("a",{href:"mailto:".concat(b),children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Cont\xe1ctame"})})]}):null;a(37);var z=()=>Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{children:"Created by Micaela Marciukaitis"})});a(38);var U=()=>{const[{themeName:e}]=Object(s.useContext)(i);return Object(n.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(n.jsx)(S,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(J,{}),Object(n.jsx)(q,{}),Object(n.jsx)(R,{})]}),Object(n.jsx)(T,{}),Object(n.jsx)(z,{})]})};a(39);Object(c.render)(Object(n.jsx)(l,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4f767a8f.chunk.js.map