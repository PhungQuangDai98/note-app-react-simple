(this.webpackJsonpnote=this.webpackJsonpnote||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),o=n.n(i),s=(n(16),n(11)),r=n(8),d=n(10),l=n.n(d),u=(n(6),n(3)),j=n(7),b=n(0),f=function(e){var t=e.activeNote,n=e.onUpdateNotes,a=function(e,a){var c;n(Object(j.a)(Object(j.a)({},t),{},(c={},Object(u.a)(c,e,a),Object(u.a)(c,"lastModified",Date.now()),c)))};return t?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"app-main",children:Object(b.jsxs)("div",{className:"app-main-note-edit",children:[Object(b.jsx)("input",{type:"text",id:"title",name:"title",autoFocus:!0,value:t.title,onChange:function(e){return a(e.target.name,e.target.value)}}),Object(b.jsx)("textarea",{id:"body",name:"body",value:t.body,onChange:function(e){return a(e.target.name,e.target.value)},onKeyDown:function(e){if("Tab"===e.key){e.preventDefault();var t=e.target.selectionStart,n=e.target.selectionEnd;console.log({start:t,end:n}),console.log(e.target.value),e.target.value=e.target.value.substring(0,t)+"\t"+e.target.value.substring(n),a("body",e.target.value),e.target.selectionStart=e.target.selectionEnd=t+1}}})]})})}):Object(b.jsx)("div",{className:"no-active-note",children:"No Note Selected"})},v=function(e){var t=e.notes,n=e.onAddNote,a=e.onDeleteNote,c=e.activeNote,i=e.setActiveNote;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"app-sidebar",children:[Object(b.jsxs)("div",{className:"app-sidebar-header",children:[Object(b.jsx)("h1",{children:"Notes"}),Object(b.jsx)("button",{onClick:n,children:"Add"})]}),Object(b.jsx)("div",{className:"app-sidebar-notes",children:t.sort((function(e,t){return t.lastModified-e.lastModified})).map((function(e){return Object(b.jsxs)("div",{className:"app-sidebar-note ".concat(e.id===c&&"active"),onClick:function(){i(e.id)},children:[Object(b.jsxs)("div",{className:"sidebar-note-title",children:[Object(b.jsx)("strong",{children:e.title}),Object(b.jsx)("button",{onClick:function(){return a(e.id)},children:"Delete"})]}),Object(b.jsx)("p",{children:e.body.length<=50?e.body:e.body.substr(0,50)+"..."}),Object(b.jsxs)("small",{children:["Last modified: ",new Date(e.lastModified).toLocaleString()]})]},e.id)}))})]})})};var O=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("notes-app-react"))||[]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),o=Object(r.a)(i,2),d=o[0],u=o[1];return Object(a.useEffect)((function(){localStorage.setItem("notes-app-react",JSON.stringify(n))}),[n]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{notes:n,onAddNote:function(){var e={id:l()(),title:"Untitled Note",body:"",lastModified:Date.now()};u(e.id),c((function(t){return[].concat(Object(s.a)(t),[e])}))},onDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},activeNote:d,setActiveNote:u}),Object(b.jsx)(f,{activeNote:n.find((function(e){return e.id===d})),onUpdateNotes:function(e){var t=n.map((function(t){return t.id===d?e:t}));c(t)}})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};document.title="Notes App",o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()},6:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.640602d4.chunk.js.map