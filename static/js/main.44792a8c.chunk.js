(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{85:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,b,d,s,l,j,p,h,u,x,g,O,f,m,w,y,v,k,z,E,S,C,_,A,R,B,D=t(0),P=t.n(D),T=t(18),K=t.n(T),H=t(11),I=t(41),U=t(42),V=t(52),G=t(50),L=t(19),M=t(5),N=t(2),J=t(3),q=Object(J.a)(o||(o=Object(N.a)(["\n\n  html, body {  \n    height: 100%; \n    width: 100%;  \n    margin: 0;  \n    padding: 0; \n  }     \n  body {\n    background-color: #f6f6f6;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    ul {\n      padding-left: 0;\n    }\n  }\n\n"]))),F="768px",Q="1200px",W=function(n,e,t){return"\n    display: flex;\n    flex-direction: ".concat(n,";\n    align-items: ").concat(e,";\n    justify-content: ").concat(t,";\n  ")},X={xs:"(min-width: ".concat("320px",")"),sm:"(min-width: ".concat(F,")"),lg:"(min-width: ".concat(Q,")")},Y=J.b.nav(r||(r=Object(N.a)(["\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.05);\n  ",";\n  padding: 0.5rem 2.5rem;\n  width: 100%;\n  z-index: 1;\n  box-sizing: border-box;\n  ul {\n    flex-direction: row;\n    display: flex;\n    gap: 0.5rem;\n    list-style: none;\n    align-items: center;\n    li {\n      font-size: 0.8rem;\n      font-weight: 700;\n      color: #121212;\n      a {\n        text-decoration: none;\n      }\n      a:hover, a:focus, a:active {\n        color: blue;\n      }\n\n    }\n  }\n"])),W("row","center","space-between")),Z=J.b.h1(c||(c=Object(N.a)(["\n  color: blue;\n  font-size: 28px;\n  font-weight: 700;\n"]))),$=J.b.div(i||(i=Object(N.a)(["\n  ",";\n  gap: 2rem;\n"])),W("row","center","flex-start")),nn=J.b.div(a||(a=Object(N.a)(["\n  border-radius: 50%;\n  border: 1px solid rgba(137, 196, 244, 1);\n  padding: 0.7rem;\n  box-sizing: border-box;\n"]))),en=Y,tn=t.p+"static/media/userIcon.fd522fcc.svg",on=t(1),rn=function(){return Object(on.jsxs)(en,{children:[Object(on.jsxs)($,{children:[Object(on.jsx)(Z,{children:"Bookstore CMS"}),Object(on.jsx)("ul",{children:[{id:1,path:"/",text:"BOOKS"},{id:2,path:"/category",text:"CATEGORIES"}].map((function(n){return Object(on.jsx)("li",{children:Object(on.jsx)(L.b,{to:n.path,exact:!0,children:n.text})},n.id)}))})]}),Object(on.jsx)(nn,{children:Object(on.jsx)("img",{src:tn,alt:"user icon"})})]})},cn=t(28),an=t.n(cn),bn=t(47),dn=t(17),sn=t.n(dn),ln="8EPqoHVpV2L7IeE6wrKn",jn="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi",pn="bookStore/books/ADD_BOOK",hn="bookStore/books/REMOVE_BOOK",un="bookStore/books/UPDATE_APP_ID",xn="bookStore/books/UPDATE_BOOKS",gn=function(n){return function(e){sn.a.delete("".concat(jn,"/apps/").concat(ln,"/books/").concat(n)).then((function(){e(function(n){return{type:hn,id:n}}(n))})).catch((function(n){console.log(n)}))}},On=function(){return function(n){try{sn.a.get("".concat(jn,"/apps/").concat(ln,"/books")).then((function(e){var t;n((t=e.data,{type:xn,payload:t}))})).catch((function(n){console.log(n)}))}catch(e){console.log(e)}}},fn=J.b.div(b||(b=Object(N.a)(["\n  ",";\n  background-color: #333;\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n"])),W("column","center","center")),mn=t(20),wn=t(14),yn=t(51),vn=t(15),kn=t.n(vn),zn=J.b.div(d||(d=Object(N.a)(["\n  width: 100%;\n  padding: 1rem 1rem;\n  box-sizing: border-box;\n"]))),En=J.b.li(s||(s=Object(N.a)(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0.5rem;\n  background-color: #fff;\n  list-style: none;\n  display: grid;\n  place-items: center;\n  @media "," {\n    grid-template-columns: 1fr;\n    grid-auto-rows: auto;\n  }\n  @media "," {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: auto;\n    column-gap: 1rem;\n  }\n  @media "," {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: auto;\n    column-gap: 6rem;\n  }\n"])),X.xs,X.sm,X.lg),Sn=J.b.div(l||(l=Object(N.a)(["\n  ",";\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n"])),W("column","flex-start","flex-start")),Cn=J.b.p(j||(j=Object(N.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  color: gray;\n  margin: 0;\n"]))),_n=J.b.p(p||(p=Object(N.a)(["\n  font-size: 24px;\n  font-weight: 800;\n  color: black;\n  margin: 0;\n"]))),An=J.b.p(h||(h=Object(N.a)(["\n  font-size: 17px;\n  font-weight: bold;\n  color: lightskyblue;\n  margin: 0;\n"]))),Rn=J.b.div(u||(u=Object(N.a)(["\n  ",";\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  padding-left: 0;\n  box-sizing: border-box;\n  gap: 0.5rem;\n"])),W("row","flex-start","flex-start")),Bn=J.b.button(x||(x=Object(N.a)(["\n  ",";\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem 0.1rem;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  color: lightskyblue;\n  font-size: 14px;\n  font-weight: bold;\n  &:hover {\n    color: red;\n  }\n"])),W("row","center","center")),Dn=Object(J.b)(Bn)(g||(g=Object(N.a)(["\n  padding: 0.5rem;\n  border-right: 1px solid rgba(228, 241, 254, 1);\n  border-left: 1px solid rgba(228, 241, 254, 1);\n"]))),Pn=J.b.div(O||(O=Object(N.a)(["\n  ",";\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  color: black;\n"])),W("row","center","center")),Tn=J.b.div(f||(f=Object(N.a)(["\n  position: relative;\n  width: 84px;\n  height: 68px;\n  margin: 5px;\n"]))),Kn=J.b.div(m||(m=Object(N.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 68px;\n  height: 68px;\n  border-radius: 100%;\n  border: 5px solid;\n"]))),Hn=Object(J.b)(Kn)(w||(w=Object(N.a)(["\n  border-color: transparent #e8e8e8 #e8e8e8 #e8e8e8;\n  transform: rotate(45deg);\n  z-index: 50;\n"]))),In=Object(J.b)(Kn)(y||(y=Object(N.a)(["\n  border-color: #0290ff #0290ff #0290ff transparent;\n  transform: rotate(45deg);\n  z-index: 100;\n"]))),Un=J.b.div(v||(v=Object(N.a)(["\n  ",";\n  span {\n    font-size: 26px;\n    font-weight: 400;\n    color: black;\n    margin: 0;\n  }\n  p {\n    font-size: 18px;\n    font-weight: 400;\n    color: gray;\n    margin: 0;\n  }\n"])),W("column","center","center")),Vn=J.b.div(k||(k=Object(N.a)(["\n  ",";\n  width: 100%;\n  height: 100%;\n  span {\n    font-size: 16px;\n    font-weight: 600;\n    color: #c3c3c3;\n  }\n  p {\n    font-size: 18px;\n    font-weight: 700;\n    color: gray;\n  }\n"])),W("column","center","center")),Gn=Object(J.b)(Bn)(z||(z=Object(N.a)(["\n  background-color: #0290ff;\n  transition: all 0.3s ease-in-out;\n  padding: 0;\n  width: 80%;\n  height: 0;\n  padding: 1rem;\n  border-radius: 5px;\n  &:hover {\n    padding: 1.1rem;\n    color: orange;\n  } \n"]))),Ln=En,Mn=J.b.div(E||(E=Object(N.a)(["\n  ",";\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  margin-bottom: 5rem;\n"])),W("column","flex-start","flex-start")),Nn=J.b.h1(S||(S=Object(N.a)(["\n  font-size: 2.5em;\n  color: gray;\n"]))),Jn=J.b.form(C||(C=Object(N.a)(["\n  ",";\n  width: 100%;\n  gap: 2rem;\n"])),W("row","flex-start","flex-start")),qn=J.b.input(_||(_=Object(N.a)(["\n  font-size: 20px;\n  padding: 0.8rem;\n  ::placeholder {\n    color: gray;\n    opacity: 0.8;\n  }\n"]))),Fn=Object(J.b)(qn)(A||(A=Object(N.a)(["\n  width: 50%;\n  \n"]))),Qn=J.b.select(R||(R=Object(N.a)(["\n  font-size: 20px;\n  padding: 0.8rem;\n  color: gray;\n  opacity: 0.8;\n  width: 30%;\n"]))),Wn=Object(J.b)(Bn)(B||(B=Object(N.a)(["\n  background-color: #0290ff;\n  transition: all 0.3s ease-in-out;\n  width: 20%;\n  height: 100%;\n  padding: 1rem;\n  border-radius: 5px;\n  &:hover {\n    padding: 1.1rem;\n    color: orange;\n  } \n"]))),Xn=[{id:1,name:"tech"},{id:2,name:"business"},{id:3,name:"science"},{id:4,name:"health"},{id:5,name:"entertainment"},{id:6,name:"sports"},{id:7,name:"travel"},{id:8,name:"food"}],Yn=function(){var n=Object(H.b)(),e=Object(D.useState)({item_id:kn()(),title:"",category:""}),t=Object(yn.a)(e,2),o=t[0],r=t[1],c=function(n){r(Object(wn.a)(Object(wn.a)({},o),{},Object(mn.a)({},n.target.name,n.target.value)))};return Object(on.jsxs)(Mn,{children:[Object(on.jsx)(Nn,{children:"Add new Book"}),Object(on.jsxs)(Jn,{onSubmit:function(e){var t;e.preventDefault(),n((t=o,function(){var n=Object(bn.a)(an.a.mark((function n(e){return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,sn.a.post("".concat(jn,"/apps/").concat(ln,"/books"),t);case 3:e({type:pn,payload:t}),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}())),r({item_id:kn()(),title:"",category:""})},children:[Object(on.jsx)(Fn,{value:o.title,name:"title",placeholder:"Book Title",onChange:function(n){return c(n)}}),Object(on.jsxs)(Qn,{name:"category",defaultValue:"category",onChange:function(n){return c(n)},children:[Object(on.jsx)("option",{value:"category",disabled:!0,children:"Category"}),Xn.map((function(n){return Object(on.jsx)("option",{value:n.name,children:n.name},n.id)}))]}),Object(on.jsx)(Wn,{type:"submit",children:"ADD BOOK"})]})]})},Zn=function(n){var e=Object(H.b)(),t=n.bookList;return Object(on.jsx)(zn,{children:Object(on.jsx)("ul",{children:t.map((function(n){return Object(on.jsxs)(Ln,{children:[Object(on.jsxs)(Sn,{children:[Object(on.jsx)(Cn,{children:n.category}),Object(on.jsx)(_n,{children:n.title}),Object(on.jsx)(An,{children:"Suzanne Collins"}),Object(on.jsxs)(Rn,{children:[Object(on.jsx)(Bn,{type:"button",children:"Comments"}),Object(on.jsx)(Dn,{type:"button",onClick:function(){return t=n.item_id,void e(gn(t));var t},children:"Remove"}),Object(on.jsx)(Bn,{type:"button",children:"Edit"})]})]}),Object(on.jsxs)(Pn,{children:[Object(on.jsxs)(Tn,{children:[Object(on.jsx)(Hn,{}),Object(on.jsx)(In,{})]}),Object(on.jsxs)(Un,{children:[Object(on.jsx)("span",{children:"64%"}),Object(on.jsx)("p",{children:"completed"})]})]}),Object(on.jsxs)(Vn,{children:[Object(on.jsx)("span",{children:"CURRENT CHAPTER"}),Object(on.jsx)("p",{children:"Chapter 1"}),Object(on.jsx)(Gn,{type:"button",children:"UPDATE PROGRESS"})]})]},n.item_id)}))})})},$n=function(){var n=Object(H.c)((function(n){return n})),e=Object(H.b)();Object(D.useEffect)((function(){e(On())}),[]);var t=n.booksReducer;return Object(on.jsxs)(fn,{children:[Object(on.jsx)(Zn,{bookList:t}),Object(on.jsx)(Yn,{})]})},ne=function(){return Object(on.jsx)("div",{className:"categories",children:Object(on.jsx)("h3",{children:"Under construcciont"})})},ee=function(n){Object(V.a)(t,n);var e=Object(G.a)(t);function t(){return Object(I.a)(this,t),e.apply(this,arguments)}return Object(U.a)(t,[{key:"render",value:function(){return Object(on.jsxs)(L.a,{children:[Object(on.jsx)(q,{}),Object(on.jsx)(rn,{}),Object(on.jsxs)(M.c,{children:[Object(on.jsx)(M.a,{path:"/",exact:!0,children:Object(on.jsx)($n,{})}),Object(on.jsx)(M.a,{path:"/category",children:Object(on.jsx)(ne,{})})]})]})}}]),t}(P.a.PureComponent),te=t(23),oe=t(48),re=t(49),ce=t.n(re),ie=t(22),ae=[{item_id:kn()(),title:"The Handmaid's Tale",category:"Fiction"},{item_id:kn()(),title:"Great Expectations",category:"Classics"}],be=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,e=arguments.length>1?arguments[1]:void 0,t=Object(ie.a)(n);switch(e.type){case pn:return t.push(e.payload),t;case hn:return t=t.filter((function(n){return n.item_id!==e.id}));case xn:var o=Object.keys(e.payload).map((function(n){return Object(wn.a)(Object(wn.a)({},e.payload[n][0]),{},{item_id:n})}));return t=[].concat(Object(ie.a)(t),Object(ie.a)(o));case un:default:return t}},de=Object(te.b)({booksReducer:be}),se=Object(te.c)(de,Object(te.a)(ce.a,oe.a));K.a.render(Object(on.jsx)(P.a.StrictMode,{children:Object(on.jsx)(H.a,{store:se,children:Object(on.jsx)(ee,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.44792a8c.chunk.js.map