(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__1mJeN",input:"card_add_form_input__1s9KG",textarea:"card_add_form_textarea__3OTfu",select:"card_add_form_select__2br_K",button:"card_add_form_button__3PkX4",fileInput:"card_add_form_fileInput__R7REj"}},12:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2xQD4",input:"card_edit_form_input__uur0a",textarea:"card_edit_form_textarea__1-v1B",select:"card_edit_form_select__V3wH9",button:"card_edit_form_button__3Jpk4",fileInput:"card_edit_form_fileInput__3mXDK"}},15:function(e,t,a){e.exports={makerFOrange:"#eb732e",makerFGreen:"#74f94c",makerGreen:"#385461",makerBlack:"black",makerWhite:"white",mediaQuery:"62rem",header:"header_header__v9FKw",title:"header_title__1DXxp",loginHead:"header_loginHead__1xlof",earth:"header_earth__245Qe",logout:"header_logout__1MXam"}},16:function(e,t,a){e.exports={makerFYellow2:"#f2fd54",makerBlack:"black",makerWhite:"white",login:"login_login__19aQM",list:"login_list__17HtO",item:"login_item__3A1Lj",button:"login_button__Fi6x4"}},17:function(e,t,a){e.exports={makerFGreen:"#74f94c",makerFYellow:"#e6ed5a",makerFYellow2:"#f2fd54",makerSky:"#51b2ea",makerBlue:"#4176f4",makerLightGrey:"#c6cdd9",container:"image_file_input_container__3Eqtx",input:"image_file_input_input__1K4NM",button:"image_file_input_button__3E8sw",grey:"image_file_input_grey__68AiQ",yellow:"image_file_input_yellow__115BO",loading:"image_file_input_loading__3OwEa",spin:"image_file_input_spin__1K71y"}},24:function(e,t,a){e.exports={makerBlack:"black",preview:"preview_preview__3lr-V",title:"preview_title__3zLS1",cards:"preview_cards__1KzyC"}},29:function(e,t,a){e.exports={makerFOrange:"#eb732e",makerFGreen:"#74f94c",makerBlack:"black",makerGreen:"#385461",footer:"footer_footer__1lZIc",title:"footer_title__pkoUs"}},32:function(e,t,a){e.exports={makerBlack:"black",makerLightGrey:"#c6cdd9",editor:"editor_editor__1nHIK",title:"editor_title__21REx"}},33:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1Jsum",container:"maker_container__25Mis"}},37:function(e,t,a){e.exports={makerBlack:"black",app:"app_app__cewju"}},39:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",makerBlack:"black",button:"button_button__3_GL1"}},45:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(2),r=a.n(c),i=a(36),s=a.n(i),l=(a(45),a(40)),o=a(5),u=a(37),d=a.n(u),m=a(29),j=a.n(m),f=a(1),_=Object(c.memo)((function(){return Object(f.jsx)("footer",{className:j.a.footer,children:Object(f.jsx)("p",{className:j.a.title,children:"Business Card Maker"})})})),b=a(15),p=a.n(b),h=Object(c.memo)((function(e){var t=e.onLogout,a=e.loginHead;return Object(f.jsxs)("header",{className:p.a.header,children:[t&&Object(f.jsx)("button",{className:p.a.logout,onClick:t,children:"Logout"}),a?Object(f.jsx)("h1",{className:"".concat(p.a.title," ").concat(p.a.loginHead),children:"Business Card"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{className:p.a.earth,src:"images/earth.png",alt:"earth"}),Object(f.jsx)("h1",{className:p.a.title,children:"Business Card"})]})]})})),O=a(16),x=a.n(O),k=function(e){var t=e.authService,a=Object(o.f)(),n=function(e){a.push({pathname:"/maker",state:{id:e}})},r=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.uid)}))})),Object(f.jsxs)("section",{className:x.a.login,children:[Object(f.jsx)(h,{loginHead:!0}),Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("ul",{className:x.a.list,children:[Object(f.jsx)("li",{className:x.a.item,children:Object(f.jsx)("button",{className:x.a.button,onClick:r,children:"Google"})}),Object(f.jsx)("li",{className:x.a.item,children:Object(f.jsx)("button",{className:x.a.button,onClick:r,children:"Github"})})]})]}),Object(f.jsx)(_,{})]})},g=a(13),v=a(39),N=a.n(v),y=Object(c.memo)((function(e){var t=e.name,a=e.onClick;return Object(f.jsx)("button",{className:N.a.button,onClick:a,children:t})})),C=a(11),w=a.n(C),R=Object(c.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(c.useRef)(),r=Object(c.useRef)(),i=Object(c.useRef)(),s=Object(c.useRef)(),l=Object(c.useRef)(),o=Object(c.useRef)(),u=Object(c.useRef)(),d=Object(c.useState)({fileName:null,fileURL:null}),m=Object(g.a)(d,2),j=m[0],_=m[1];return Object(f.jsxs)("form",{ref:n,className:w.a.form,children:[Object(f.jsx)("input",{ref:r,className:w.a.input,type:"text",name:"name",placeholder:"Name"}),Object(f.jsx)("input",{ref:i,className:w.a.input,type:"text",name:"company",placeholder:"Company"}),Object(f.jsxs)("select",{ref:s,className:w.a.select,name:"theme",placeholder:"Theme",children:[Object(f.jsx)("option",{placeholder:"light",children:"light"}),Object(f.jsx)("option",{placeholder:"dark",children:"dark"})]}),Object(f.jsx)("input",{ref:l,className:w.a.input,type:"text",name:"title",placeholder:"Title"}),Object(f.jsx)("input",{ref:o,className:w.a.input,type:"text",name:"email",placeholder:"Email"}),Object(f.jsx)("textarea",{ref:u,className:w.a.textarea,name:"message",placeholder:"Message"}),Object(f.jsx)("div",{className:w.a.fileInput,children:Object(f.jsx)(t,{name:j.fileName,onFileChange:function(e){console.log(e),_({fileName:e.name,fileURL:e.url})}})}),Object(f.jsx)(y,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:r.current.value||"",company:i.current.value||"",theme:s.current.value,title:l.current.value||"",email:o.current.value||"",message:u.current.value||"",fileName:j.fileName||"",fileURL:j.fileURL||""};n.current.reset(),_({fileName:null,fileURL:null}),a(t)}})]})})),F=a(22),I=a(12),B=a.n(I),G=function(e){var t=e.FileInput,a=e.card,r=e.updateCard,i=e.deleteCard,s=Object(c.useRef)(),l=Object(c.useRef)(),o=Object(c.useRef)(),u=Object(c.useRef)(),d=Object(c.useRef)(),m=Object(c.useRef)(),j=a.name,_=a.company,b=a.title,p=a.email,h=a.message,O=a.theme,x=a.fileName,k=function(e){null!=e.currentTarget&&(e.preventDefault(),r(Object(n.a)(Object(n.a)({},a),{},Object(F.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(f.jsxs)("form",{className:B.a.form,children:[Object(f.jsx)("input",{className:B.a.input,type:"text",name:"name",ref:s,value:j,onChange:k}),Object(f.jsx)("input",{className:B.a.input,type:"text",name:"company",ref:l,value:_,onChange:k}),Object(f.jsxs)("select",{className:B.a.select,name:"theme",ref:o,value:O,onChange:k,children:[Object(f.jsx)("option",{value:"light",children:"light"}),Object(f.jsx)("option",{value:"dark",children:"dark"})]}),Object(f.jsx)("input",{className:B.a.input,type:"text",name:"title",ref:u,value:b,onChange:k}),Object(f.jsx)("input",{className:B.a.input,type:"text",name:"email",ref:d,value:p,onChange:k}),Object(f.jsx)("textarea",{className:B.a.textarea,name:"message",ref:m,value:h,onChange:k}),Object(f.jsx)("div",{className:B.a.fileInput,children:Object(f.jsx)(t,{name:x,onFileChange:function(e){r(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(f.jsx)(y,{name:"Delete",onClick:function(){i(a)}})]})},L=a(32),S=a.n(L),E=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,c=e.updateCard,r=e.deleteCard;return Object(f.jsxs)("section",{className:S.a.editor,children:[Object(f.jsx)("h1",{className:S.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(f.jsx)(G,{FileInput:t,card:a[e],updateCard:c,deleteCard:r},e)})),Object(f.jsx)(R,{FileInput:t,onAdd:n})]})},A=a(9),U=a.n(A);function M(e){switch(e){case"dark":return U.a.dark;case"light":return U.a.light;default:throw new Error("unknown theme: ".concat(e))}}var D=Object(c.memo)((function(e){var t=e.card,a=t.name,n=t.company,c=t.title,r=t.email,i=t.message,s=t.theme,l=t.fileURL||"images/default_logo.png";return Object(f.jsxs)("li",{className:"".concat(U.a.card," ").concat(M(s)),children:[Object(f.jsx)("img",{className:U.a.avatar,src:l,alt:"profile"}),Object(f.jsxs)("div",{className:U.a.info,children:[Object(f.jsx)("h1",{className:U.a.name,children:a}),Object(f.jsx)("p",{className:U.a.company,children:n}),Object(f.jsx)("p",{className:U.a.title,children:c}),Object(f.jsx)("p",{className:U.a.email,children:r}),Object(f.jsx)("p",{className:U.a.message,children:i})]})]})})),W=a(24),H=a.n(W),K=function(e){var t=e.cards;return Object(f.jsxs)("section",{className:H.a.preview,children:[Object(f.jsx)("h1",{className:H.a.title,children:"Card Preview"}),Object(f.jsx)("ul",{className:H.a.cards,children:Object.keys(t).map((function(e){return Object(f.jsx)(D,{card:t[e]},e)}))})]})},P=a(33),Q=a.n(P),T=function(e){var t,a=e.FileInput,r=e.authService,i=e.cardRepository,s=Object(o.f)(),l=null===s||void 0===s||null===(t=s.location)||void 0===t?void 0:t.state,u=Object(c.useState)({}),d=Object(g.a)(u,2),m=d[0],j=d[1],b=Object(c.useState)(l&&l.id),p=Object(g.a)(b,2),O=p[0],x=p[1],k=Object(c.useCallback)((function(){r.logout()}),[r]);Object(c.useEffect)((function(){if(O){var e=i.syncCards(O,(function(e){j(e)}));return function(){return e()}}}),[O,i]),Object(c.useEffect)((function(){r.onAuthChange((function(e){e?x(e.uid):s.push("/business_card_maker")}))}),[r,O,s]);var v=function(e){j((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(O,e)};return Object(f.jsxs)("section",{className:Q.a.maker,children:[Object(f.jsx)(h,{onLogout:k}),Object(f.jsxs)("div",{className:Q.a.container,children:[Object(f.jsx)(E,{FileInput:a,cards:m,addCard:v,updateCard:v,deleteCard:function(e){j((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(O,e)}}),Object(f.jsx)(K,{cards:m})]}),Object(f.jsx)(_,{})]})};var Y=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(f.jsx)("div",{className:d.a.app,children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/business_card_maker",children:Object(f.jsx)(k,{authService:a})}),Object(f.jsx)(o.a,{path:"/maker",children:Object(f.jsx)(T,{FileInput:t,authService:a,cardRepository:n})})]})})})},z=a(18),J=a(19),X=a(25),V=(a(51),a(53),X.a.initializeApp({apiKey:"AIzaSyCNk5to2smVRQYQBpY3bkM7oIqMBbE6b0U",authDomain:"business-card-maker-e208a.firebaseapp.com",databaseURL:"https://business-card-maker-e208a-default-rtdb.firebaseio.com",projectId:"business-card-maker-e208a"})),q=V.auth(),Z=V.database(),$=new X.a.auth.GoogleAuthProvider,ee=new X.a.auth.GithubAuthProvider,te=function(){function e(){Object(z.a)(this,e)}return Object(J.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return q.signInWithPopup(t)}},{key:"logout",value:function(){q.signOut()}},{key:"onAuthChange",value:function(e){q.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return $;case"Github":return ee;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),ae=a(20),ne=a.n(ae),ce=a(23),re=function(){function e(){Object(z.a)(this,e)}return Object(J.a)(e,[{key:"upload",value:function(){var e=Object(ce.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","e0lvxv96"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dczgrcjnn/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ie=a(17),se=a.n(ie),le=Object(c.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,r=Object(c.useState)(!1),i=Object(g.a)(r,2),s=i[0],l=i[1],o=Object(c.useRef)(),u=function(){var e=Object(ce.a)(ne.a.mark((function e(a){var c;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),console.log(a.target.files[0]),e.next=4,t.upload(a.target.files[0]);case 4:c=e.sent,l(!1),n({name:c.original_filename,url:c.url});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:se.a.container,children:[Object(f.jsx)("input",{ref:o,className:se.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!s&&Object(f.jsx)("button",{className:"".concat(se.a.button," ").concat(a?se.a.yellow:se.a.grey),onClick:function(e){e.preventDefault(),o.current.click()},children:a||"No File"}),s&&Object(f.jsx)("div",{className:se.a.loading})]})})),oe=function(){function e(){Object(z.a)(this,e)}return Object(J.a)(e,[{key:"syncCards",value:function(e,t){var a=Z.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){Z.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){Z.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),ue=new te,de=new re,me=new oe,je=Object(c.memo)((function(e){return Object(f.jsx)(le,Object(n.a)(Object(n.a)({},e),{},{imageUploader:de}))}));s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Y,{authService:ue,FileInput:je,cardRepository:me})}),document.getElementById("root"))},9:function(e,t,a){e.exports={makerFYellow:"#e6ed5a",makerFGreen:"#74f94c",makerBlack:"black",makerWhite:"white",makerShadow:"rgba(217, 217, 217, 1)",makerWheat:"wheat",card:"card_card__1py-W",dark:"card_dark__1FdRe",light:"card_light__1Cc6G",avatar:"card_avatar__33lzN",info:"card_info__2Fslj",name:"card_name__31aE7",company:"card_company__3UM9t",title:"card_title__25_dG",email:"card_email__3uHYI",message:"card_message__2dRnZ"}}},[[58,1,2]]]);
//# sourceMappingURL=main.4fb2a3b7.chunk.js.map