(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var c,i,o=n(0),r=n.n(o),a=n(12),s=n.n(a),d=n(10),l=n(30),b=n(31),j=n(38),u=n(37),O=n(15),h=n(3),x=n(13),f=n(14),p=Object(f.a)(c||(c=Object(x.a)(["\n\n  html, body {  \n    height: 100%; \n    width: 100%;  \n    margin: 0;  \n    padding: 0; \n  }     \n  body {\n    background-color: #f6f6f6;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n  }\n\n"]))),m=f.b.nav(i||(i=Object(x.a)(["\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.05);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  width: 100%;\n  z-index: 1;\n  box-sizing: border-box;\n  ul {\n    flex-direction: row;\n    display: flex;\n    gap: 0.5rem;\n    list-style: none;\n  }\n"]))),y=n(1),g=function(){return Object(y.jsxs)(m,{children:[Object(y.jsx)("h1",{className:"logo",children:"Bookstore CMS"}),Object(y.jsx)("ul",{children:[{id:1,path:"/",text:"BOOKS"},{id:2,path:"/category",text:"CATEGORIES"}].map((function(e){return Object(y.jsx)("li",{children:Object(y.jsx)(O.b,{to:e.path,className:"link",activeClassName:"active-link",exact:!0,children:e.text})},e.id)}))})]})},v=n(18),k=n(19),B=n(17),S=n(25),w=n(26),C=n.n(w),N="bookStore/books/ADD_BOOK",A="bookStore/books/REMOVE_BOOK",D=[{id:"1",title:"Harry Potter and the Chamber of Secrets",category:"Fiction"},{id:"2",title:"Jurassic Park",category:"Science Fiction"}],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return[].concat(Object(v.a)(e),[t.payload]);case A:return e.filter((function(e){return e.id!==t.id}));default:return e}},E=[{id:1,name:"tech"},{id:2,name:"business"},{id:3,name:"science"},{id:4,name:"health"},{id:5,name:"entertainment"},{id:6,name:"sports"},{id:7,name:"travel"},{id:8,name:"food"}],P=function(e){var t=Object(d.b)(),n=Object(o.useState)({id:C()(),title:"",category:""}),c=Object(k.a)(n,2),i=c[0],r=c[1],a=function(e){r(Object(S.a)(Object(S.a)({},i),{},Object(B.a)({},e.target.name,e.target.value)))};return Object(y.jsxs)("div",{className:"add-book",children:[Object(y.jsx)("h1",{children:"Add Book"}),Object(y.jsxs)("form",{onSubmit:function(n){var c=e.handdleNewBook;n.preventDefault(),c(i),t({type:N,payload:i}),r({id:C()(),title:"",category:""})},children:[Object(y.jsx)("input",{value:i.title,name:"title",placeholder:"Add a title book",onChange:function(e){return a(e)}}),Object(y.jsxs)("select",{name:"category",defaultValue:"category",onChange:function(e){return a(e)},children:[Object(y.jsx)("option",{value:"category",disabled:!0,children:"Category"}),E.map((function(e){return Object(y.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(y.jsx)("button",{type:"submit",children:"ADD BOOK"})]})]})},F=function(e){var t=Object(d.b)(),n=e.books,c=e.propsRemoveBook,i=function(e){c(e),t(function(e){return{type:A,id:e}}(e))};return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Books Display"}),Object(y.jsx)("ul",{children:n.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("li",{children:[e.title," ",e.category]}),Object(y.jsx)("button",{type:"button",onClick:function(){return i(e.id)},children:"Remove"})]},e.id)}))})]})},H=function(){var e=Object(o.useState)([{id:"1",title:"Harry Potter and the Chamber of Secrets",category:"Fiction"},{id:"2",title:"Jurassic Park",category:"Science Fiction"}]),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Books"}),Object(y.jsx)(F,{books:n,propsRemoveBook:function(e){c(n.filter((function(t){return t.id!==e})))}}),Object(y.jsx)(P,{handdleNewBook:function(e){var t=e.title,i=void 0===t?"":t,o=e.category,r=void 0===o?"":o,a=e.id;c([].concat(Object(v.a)(n),[{title:i,category:r,id:a}]))}})]})},J=function(){return Object(y.jsx)("div",{className:"categories",children:Object(y.jsx)("h3",{children:"Under construcciont"})})},K=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(O.a,{children:[Object(y.jsx)(p,{}),Object(y.jsx)(g,{}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{path:"/",exact:!0,children:Object(y.jsx)(H,{})}),Object(y.jsx)(h.a,{path:"/category",children:Object(y.jsx)(J,{})})]})]})}}]),n}(r.a.PureComponent),z=n(20),M=n(36),I=n.n(M),V=Object(z.b)({booksReducer:R}),_=Object(z.c)(V,Object(z.a)(I.a));s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(d.a,{store:_,children:Object(y.jsx)(K,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2d18d04c.chunk.js.map