(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(0),i=n(16),l=n(3),a=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/philipmak.github.io",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===r&&a.a.initialize(j);var o=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},b=n(5),u=n(22),h=[{index:!0,label:"Philip Mak",path:"/"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"}],d=n(1),O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,165,7))})),m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,onClick:function(){return i(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(m,{})]})},x=(n(32),function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("/philipmak.github.io","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Philip Mak"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:pmak0116@gmail.com",children:"pmak0116@gmail.com"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I'm Philip. I like building things. I am a ",Object(d.jsx)("a",{href:"https://rutgers.edu/",children:"Rutgers University"})," graduate, Freehold Boro CS Alumni, and current work at ",Object(d.jsx)("a",{href:"https://facebook.com",children:"Facebook"}),". Before Facebook I was at ",Object(d.jsx)("a",{href:"https://citi.com",children:"Citi"}),"."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]})]})}),f=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(f,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Philip Mak",defaultTitle:"Philip Mak",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(x,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Philip Mak's personal website."};t.a=k},32:function(e,t,n){"use strict";n(0);var c=n(26),i=n(27),l=n(28),a=n(29),s=n(30),r=n(31),j=[{link:"https://github.com/philip-g-mak",label:"Github",icon:i.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/fill_up_with_philip/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/philipgmak",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:pmak0116@gmail.com",label:"Email",icon:r.faEnvelope}],o=n(1);t.a=function(){return Object(o.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.link,children:Object(o.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),l=n(15),a=n(5),s=n(3),r=n(20),j=(n(45),n(1)),o=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,162))})),b=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,166))})),u=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,163))})),h=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,164))})),d=function(){return Object(j.jsx)(a.a,{basename:"/philipmak.github.io",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(s.a,{exact:!0,path:"/about",component:o}),Object(j.jsx)(s.a,{exact:!0,path:"/contact",component:b}),Object(j.jsx)(s.a,{component:h,status:404})]})})})},O=function(){return Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(l.hydrate)(Object(j.jsx)(O,{}),m):Object(l.render)(Object(j.jsx)(O,{}),m)}},[[46,1,3]]]);
//# sourceMappingURL=main.a53c9c58.chunk.js.map