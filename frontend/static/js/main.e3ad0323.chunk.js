(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),o=n.n(s),i=n(7),r=(n(29),n(22)),l=n(2),u=n(3),p=n.p+"static/media/logo.bbe2a6ea.svg",j=n(0);var d=Object(u.h)((function(e){var t=e.setLoggedIn,n=e.history,a=e.loggedIn,s=Object(c.useState)(!1),o=Object(l.a)(s,2),r=o[0],d=o[1],h="header__burger-menu".concat(r?" header__burger-menu_opened":""),b="header__user-container header__user-container_mobile".concat(r?" header__user-container_opened":"");function m(){localStorage.removeItem("jwt"),localStorage.removeItem("email"),t(!1),n.push("/sign-in")}var _=Object(u.g)();return Object(j.jsxs)("header",{className:"header",children:[a&&Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)("span",{className:"header__user-email",children:localStorage.email}),Object(j.jsx)(i.b,{to:"/sign-in",className:"header__user-email",onClick:m,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("img",{src:p,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}),function(e){return"/"===e.pathname?Object(j.jsxs)("div",{className:"header__user-container",children:[Object(j.jsx)("span",{className:"header__user-email",children:localStorage.email}),Object(j.jsx)(i.b,{to:"/sign-in",className:"header__link",onClick:m,children:"\u0412\u044b\u0439\u0442\u0438"})]}):"/sign-in"===e.pathname?Object(j.jsx)(i.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}):"/sign-up"===e.pathname?Object(j.jsx)(i.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"}):void 0}(_),a&&Object(j.jsx)("div",{className:h,onClick:function(){d(!r)}})]})]})})),h=Object(c.createContext)();var b=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o=Object(c.useContext)(h),i=t.owner._id===o._id,r="element__btn-delete btn ".concat(i?"element__btn-delete_visible":"element__btn-delete_hidden"),l=t.likes.some((function(e){return e._id===o._id})),u="element__btn-like btn ".concat(l&&"element__btn-like_active");return Object(j.jsxs)("li",{className:"element",children:[Object(j.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)}}),Object(j.jsx)("button",{type:"button",className:r,onClick:function(){s(t)}}),Object(j.jsxs)("div",{className:"element__container",children:[Object(j.jsx)("h2",{className:"element__location",children:t.name}),Object(j.jsxs)("div",{className:"element__like-container",children:[Object(j.jsx)("button",{type:"button",className:u,onClick:function(){a(t)}}),Object(j.jsx)("span",{className:"element__like-counter",children:t.likes.length})]})]})]})};var m=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,s=e.cards,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=Object(c.useContext)(h);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(l.avatar,")")},onClick:t}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsxs)("div",{className:"profile__info-container",children:[Object(j.jsx)("h1",{className:"profile__full-name",children:l.name}),Object(j.jsx)("button",{type:"button",className:"profile__btn-edit btn",onClick:n})]}),Object(j.jsx)("p",{className:"profile__description",children:l.about})]}),Object(j.jsx)("button",{type:"button",className:"profile__btn-add btn",onClick:a})]}),Object(j.jsx)("section",{className:"elements",children:Object(j.jsx)("ul",{className:"elements__container",children:s.map((function(e){return Object(j.jsx)(b,{card:e,onCardClick:o,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var _=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};function f(e){var t=e.isOpen,n=e.onClose,c=e.children,a=e.name;return Object(j.jsxs)("div",{className:"popup popup_overlay_form popup_type_".concat(a).concat(t?" popup_opened":""),children:[Object(j.jsx)("div",{className:"popup__container",children:c}),Object(j.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:n})]})}function O(e){var t=e.isOpen,n=e.onClose,c=e.onSubmit,a=e.children,s=e.submit,o=e.name,i=e.title;return Object(j.jsx)(f,{isOpen:t,onClose:n,name:o,children:Object(j.jsxs)("form",{className:"popup__form popup__form_type_".concat(o),onSubmit:c,children:[Object(j.jsx)("h2",{className:"popup__title",children:i}),a,Object(j.jsx)("button",{type:"submit",className:"popup__button btn",children:s})]})})}var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=Object(c.useState)(""),o=Object(l.a)(s,2),i=o[0],r=o[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),d=p[0],b=p[1],m=Object(c.useContext)(h);return Object(c.useEffect)((function(){r(m.name),b(m.about)}),[m]),Object(j.jsxs)(O,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:d}).then((function(){n(),r(""),b("")}))},children:[Object(j.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:i||"",onChange:function(e){r(e.target.value)}}),Object(j.jsx)("span",{className:"popup__input-error"}),Object(j.jsx)("input",{type:"text",name:"about",className:"popup__input",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:d||"",onChange:function(e){b(e.target.value)}}),Object(j.jsx)("span",{className:"popup__input-error"})]})};var x=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=Object(c.useRef)();return Object(j.jsxs)(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value}).then((function(){n(),e.target.reset()}))},children:[Object(j.jsx)("input",{type:"url",name:"avatar",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,autoComplete:"off",ref:s}),Object(j.jsx)("span",{className:"popup__input-error"})]})};var v=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,s=Object(c.useState)(""),o=Object(l.a)(s,2),i=o[0],r=o[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),d=p[0],h=p[1];return Object(j.jsxs)(O,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,link:d}).then((function(){n(),r(""),h("")}))},children:[Object(j.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",autoComplete:"off",value:i||"",onChange:function(e){r(e.target.value)}}),Object(j.jsx)("span",{className:"popup__input-error"}),Object(j.jsx)("input",{type:"url",name:"link",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,autoComplete:"off",value:d||"",onChange:function(e){h(e.target.value)}}),Object(j.jsx)("span",{className:"popup__input-error"})]})};var C=function(e){var t=e.card,n=e.onClose;return Object(j.jsxs)("div",{className:"popup popup_overlay_image".concat(t?" popup_opened":""),children:[Object(j.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(j.jsx)("img",{className:"popup__image",src:t?t.link:"",alt:t?t.name:""}),Object(j.jsx)("p",{className:"popup__description",children:t?t.name:""})]}),Object(j.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:n})]})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onDeleteCard;return Object(j.jsx)(O,{name:"delete ",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(t).then((function(){return n()}))}})},k=n(20),y=n(21),S=new(function(){function e(t){var n=t.baseUrl,c=t.headers;Object(k.a)(this,e),this._baseUrl=n,this._headers=c}return Object(y.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"5e9e6ed0-2e3b-49ef-bceb-982a1b5626d9","Content-Type":"application/json"}}),I="https://auth.nomoreparties.co";var U=Object(u.h)((function(e){var t=e.handleLogin,n=e.history,a=Object(c.useState)(""),s=Object(l.a)(a,2),o=s[0],i=s[1],r=Object(c.useState)(""),u=Object(l.a)(r,2),p=u[0],d=u[1];function h(e){"email"===e.target.name?i(e.target.value):d(e.target.value)}return Object(j.jsxs)("div",{className:"sign",children:[Object(j.jsx)("h2",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("form",{className:"sign__form",onSubmit:function(e){e.preventDefault(),o&&p&&function(e,t){return fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).then((function(e){return e.token?(localStorage.setItem("jwt",e.token),e):void 0})).catch((function(e){return console.log(e)}))}(o,p).then((function(e){e.token&&(i(""),d(""),t(),n.push("/"))})).catch((function(e){return console.log(e)}))},children:[Object(j.jsx)("input",{className:"sign__input",type:"email",name:"email",placeholder:"Email",value:o||"",onChange:h}),Object(j.jsx)("input",{className:"sign__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:p||"",onChange:h}),Object(j.jsx)("button",{className:"sign__button btn",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}));var E=Object(u.h)((function(e){var t=e.setIsSuccessRegistration,n=e.setIsErrorRegistration,a=e.history,s=Object(c.useState)(""),o=Object(l.a)(s,2),r=o[0],u=o[1],p=Object(c.useState)(""),d=Object(l.a)(p,2),h=d[0],b=d[1];function m(e){"email"===e.target.name?u(e.target.value):b(e.target.value)}return Object(j.jsxs)("div",{className:"sign",children:[Object(j.jsx)("h2",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("form",{className:"sign__form",onSubmit:function(e){e.preventDefault(),h&&function(e,t){return fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e)}))}(r,h).then((function(e){e?(t(!0),a.push("/sign-in")):n(!0)})).catch((function(e){n(!0),console.log(e)}))},children:[Object(j.jsx)("input",{className:"sign__input",type:"email",name:"email",placeholder:"Email",value:r||"",onChange:m}),Object(j.jsx)("input",{className:"sign__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:h||"",onChange:m}),Object(j.jsx)("button",{className:"sign__button btn",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(j.jsx)(i.b,{to:"/sign-in",className:"sign__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})),L=n(23),P=n(24),T=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(j.jsx)(u.b,{children:function(){return n.loggedIn?Object(j.jsx)(t,Object(L.a)({},n)):Object(j.jsx)(u.a,{to:"./sign-in"})}})},D=n.p+"static/media/success.a9eb6caf.svg",R=n.p+"static/media/failed.d0f413bf.svg";function w(e){var t=e.isOpen,n=e.image,c=e.text,a=e.onClose;return Object(j.jsxs)("div",{className:"popup popup_overlay".concat(t?" popup_opened":""),children:[Object(j.jsxs)("div",{className:"popup__container popup__container_info",children:[Object(j.jsx)("div",{className:"popup__image-info",style:{backgroundImage:"url(".concat(n?D:R,")")}}),Object(j.jsx)("p",{className:"popup__text",children:c})]}),Object(j.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:a})]})}var A=Object(u.h)((function(e){var t=e.history,n=Object(c.useState)(!1),a=Object(l.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(!1),p=Object(l.a)(i,2),b=p[0],f=p[1],O=Object(c.useState)(!1),k=Object(l.a)(O,2),y=k[0],L=k[1],P=Object(c.useState)(null),D=Object(l.a)(P,2),R=D[0],A=D[1],J=Object(c.useState)(null),q=Object(l.a)(J,2),F=q[0],B=q[1],G=Object(c.useState)(!1),z=Object(l.a)(G,2),H=z[0],M=z[1],K=Object(c.useState)([]),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=Object(c.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(!1),se=Object(l.a)(ae,2),oe=se[0],ie=se[1];function re(){o(!1),f(!1),L(!1),A(!1),B(!1)}return Object(c.useEffect)((function(){return S.getUserInfo().then((function(e){return M(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){return S.getInitialCards().then((function(e){return W(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){var e,n=localStorage.getItem("jwt");n&&(e=n,fetch("".concat(I,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("email",e.data.email),e})).catch((function(e){return console.log(e)}))).then((function(e){e&&($(!0),t.push("/"))})).catch((function(e){localStorage.removeItem("jwt"),console.log(e)}))}),[]),Object(j.jsxs)(h.Provider,{value:H,children:[Object(j.jsx)(d,{loggedIn:Z,setLoggedIn:$}),Object(j.jsx)("main",{className:"content",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(T,{exact:!0,path:"/",loggedIn:Z,component:m,cards:V,onEditProfile:function(){o(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){L(!0)},onCardDelete:function(e){A(e)},onCardClick:B,onCardLike:function(e){e.likes.some((function(e){return e._id===H._id}))?S.dislike(e._id).then((function(t){return W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})):S.like(e._id).then((function(t){return W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(u.b,{path:"/sign-in",children:Object(j.jsx)(U,{handleLogin:function(){$(!0)}})}),Object(j.jsx)(u.b,{path:"/sign-up",children:Object(j.jsx)(E,{setIsSuccessRegistration:ie,setIsErrorRegistration:ce})})]})}),Object(j.jsx)(g,{isOpen:s,onClose:re,onUpdateUser:function(e){return S.setUserInfo(e).then((function(e){return M(e)})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(v,{isOpen:b,onClose:re,onAddPlace:function(e){return S.postCard(e).then((function(e){return W([e].concat(Object(r.a)(V)))})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(x,{isOpen:y,onClose:re,onUpdateAvatar:function(e){return S.setUserAvatar(e).then((function(e){return M(e)})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(N,{isOpen:R,onClose:re,onDeleteCard:function(e){return S.deleteCard(e._id).then((function(){return W(V.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(C,{card:F,onClose:re}),Object(j.jsx)(w,{text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",image:!0,isOpen:oe,onClose:function(){ie(!1),t.push("/sign-in")}}),Object(j.jsx)(w,{text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",image:!1,isOpen:ne,onClose:function(){ce(!1)}}),Object(j.jsx)(_,{})]})})),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(A,{})})}),document.getElementById("root")),J()}},[[36,1,2]]]);
//# sourceMappingURL=main.e3ad0323.chunk.js.map