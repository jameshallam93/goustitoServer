(this.webpackJsonpgoustito=this.webpackJsonpgoustito||[]).push([[0],{42:function(e,t,r){},43:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},80:function(e,t,r){},81:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){},88:function(e,t,r){},93:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(25),a=r.n(c),s=r(7),i=r(19),o=r(45),u=r(46),l=r(21),p=r(8),j=["Breakfast","Lunch","Dinner","Snack"],d=10,b={recipes:[],resultsShown:{from:0,to:d},isLoading:!1},f={user:{username:null},recipes:[],loginError:{error:null}},h=r(4),O=r.n(h),x=r(10),m=r(13),v=r(18),g=r.n(v),E="&app_id=".concat("502b5108","&app_key=").concat("2dd316a833c66ab75a2fb3b70856053f","&from=0&to=99"),S=function(e,t){var r=function(e){var t=e.split(" ");return 1===t.length?t[0]:t.join("%20")}(e),n=function(e){if(0===e.length)return"";var t="";return e.forEach((function(e){t="".concat(t).concat(e,"+")})),t}(t),c="";return c="".concat("https://api.edamam.com/search","?q=").concat(r).concat(E),n&&(c="".concat(c,"&mealType=").concat(n)),c},y=function(e){var t=[];return e.hits.map((function(e){var r={id:e.recipe.uri,label:e.recipe.label,url:e.recipe.url,img:e.recipe.image,calories:e.recipe.calories,source:e.recipe.source,ingredients:e.recipe.ingredientLines,servings:e.recipe.yield};t.push(r)})),t},w="http://localhost:3001",I=function(e,t){return Object(m.a)(O.a.mark((function r(){var n,c,a;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=S(e,t),r.next=3,g.a.get(n);case 3:return c=r.sent,a=y(c.data),r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})))()},C=function(e){return Object(m.a)(O.a.mark((function t(){var r,n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(w,"/api/recipe/userRecipes/").concat(e),n=localStorage.getItem("token"),t.next=4,g.a.get(r,{headers:{authorization:"Bearer ".concat(n)}});case 4:return c=t.sent,t.abrupt("return",c.data);case 6:case"end":return t.stop()}}),t)})))()},k=function(e,t){return Object(m.a)(O.a.mark((function r(){var n,c,a;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(w,"/api/recipe/saveById"),c=localStorage.getItem("token"),r.next=4,g.a.post(n,{recipe:e,currentUser:t},{headers:{authorization:"Bearer ".concat(c)}});case 4:return a=r.sent,r.abrupt("return",a.data);case 6:case"end":return r.stop()}}),r)})))()},_=function(e,t){return Object(m.a)(O.a.mark((function r(){var n,c,a;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(w,"/api/recipe/deleteById"),c=localStorage.getItem("token"),r.next=4,g.a.post(n,{recipeId:e,currentUser:t},{headers:{authorization:"Bearer ".concat(c)}});case 4:return a=r.sent,r.abrupt("return",a.data);case 6:case"end":return r.stop()}}),r)})))()},R=O.a.mark(L),N=O.a.mark(U),T=O.a.mark(P);function L(e){var t;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.b)(I,e.payload.searchTerms,e.payload.mealTypes);case 2:return t=r.sent,r.next=5,Object(x.c)({type:"SET_RECIPES",payload:t});case 5:case"end":return r.stop()}}),R)}function U(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.b)(k,e.payload.recipe,e.payload.currentUser);case 2:return t.next=4,Object(x.c)({type:"SAVE_RECIPE",payload:{recipe:e.payload.recipe}});case 4:case"end":return t.stop()}}),N)}function P(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.b)(_,e.payload.recipeId,e.payload.currentUser);case 2:return t.next=4,Object(x.c)({type:"DELETE_RECIPE",payload:{recipeId:e.payload.recipeId}});case 4:case"end":return t.stop()}}),T)}var A=function(e){return Object(m.a)(O.a.mark((function t(){var r,n,c,a,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat("http://localhost:3001","/api/login"),t.next=4,g.a.post(r,e);case 4:return n=t.sent,c=n.data.token,a=n.data.expiry,s=n.data.username,localStorage.setItem("token",c),localStorage.setItem("token-expiry",a),localStorage.setItem("username",s),delete n.data.token,t.abrupt("return",n.data);case 15:throw t.prev=15,t.t0=t.catch(0),{e:t.t0};case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},D=O.a.mark(G),V=O.a.mark(B);function G(e){var t;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(x.b)(A,e.payload.credentials);case 3:return t=r.sent,r.next=6,Object(x.c)({type:"SET_USER_DETAILS",payload:{username:e.payload.credentials.username}});case 6:return r.next=8,Object(x.c)({type:"INIT_USER_RECIPES",payload:{recipes:t.recipes}});case 8:r.next=15;break;case 10:return r.prev=10,r.t0=r.catch(0),console.log(r.t0),r.next=15,Object(x.c)({type:"LOGIN_ERROR",payload:{error:r.t0.e.response.data}});case 15:case"end":return r.stop()}}),D,null,[[0,10]])}function B(e){var t,r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=Number((new Date).getTime()),!e.payload.sessionExpiry){n.next=9;break}if(!(t>e.payload.sessionExpiry)){n.next=9;break}return localStorage.removeItem("token"),localStorage.removeItem("username"),n.next=7,Object(x.c)({type:"CLEAR_USER_DETAILS"});case 7:return window.alert("Session has expired - please login again"),n.abrupt("return");case 9:if(!e.payload.loggedUser){n.next=17;break}return n.next=12,Object(x.c)({type:"SET_USER_DETAILS",payload:{username:e.payload.loggedUser}});case 12:return n.next=14,Object(x.b)(C,e.payload.loggedUser);case 14:return r=n.sent,n.next=17,Object(x.c)({type:"INIT_USER_RECIPES",payload:{recipes:r}});case 17:case"end":return n.stop()}}),V)}var H=O.a.mark(z),M=O.a.mark(J),W=O.a.mark(X),q=O.a.mark(Y),F=O.a.mark($);function z(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)("VALIDATE_SESSION_DETAILS",B);case 2:case"end":return e.stop()}}),H)}function J(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)("GET_RECIPES",L);case 2:case"end":return e.stop()}}),M)}function X(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)("SAVE_USER_RECIPE",U);case 2:return e.next=4,Object(x.d)("DELETE_USER_RECIPE",P);case 4:case"end":return e.stop()}}),W)}function Y(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)("ATTEMPT_LOGIN",G);case 2:case"end":return e.stop()}}),q)}function $(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)([J(),X(),Y(),z()]);case 2:case"end":return e.stop()}}),F)}var K=Object(u.a)(),Q=Object(i.combineReducers)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"SET_RECIPES":return Object(p.a)(Object(p.a)({},e),{},{recipes:[t.payload],resultsShown:{from:0,to:d},isLoading:!1});case"ADD_RECIPES":return Object(p.a)(Object(p.a)({},e),{},{recipes:[].concat(Object(l.a)(e.recipes),[t.payload.recipes])});case"SHOW_NEXT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{resultsShown:{from:e.resultsShown.from+d,to:e.resultsShown.to+d}});case"SHOW_PREVIOUS_PAGE":return Object(p.a)(Object(p.a)({},e),{},{resultsShown:{from:e.resultsShown.from-d,to:e.resultsShown.to-d}});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DETAILS":return Object(p.a)(Object(p.a)({},e),{},{user:{username:t.payload.username}});case"CLEAR_USER_DETAILS":return Object(p.a)(Object(p.a)({},e),{},{user:{username:null}});case"INIT_USER_RECIPES":return Object(p.a)(Object(p.a)({},e),{},{recipes:Object(l.a)(t.payload.recipes)});case"CLEAR_USER_RECIPES":return Object(p.a)(Object(p.a)({},e),{},{recipes:[]});case"SAVE_RECIPE":return Object(p.a)(Object(p.a)({},e),{},{recipes:[].concat(Object(l.a)(e.recipes),[t.payload.recipe])});case"DELETE_RECIPE":var r=e.recipes.filter((function(e){return e.id!==t.payload.recipeId}));return Object(p.a)(Object(p.a)({},e),{},{recipes:Object(l.a)(r)});case"LOGIN_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loginError:t.payload.error});default:return e}}}),Z=Object(i.createStore)(Q,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(K)));K.run($);var ee,te=r(20),re=r(11),ne=function(e,t){return{type:"GET_RECIPES",payload:{searchTerms:e,mealTypes:t}}},ce=function(e){return{type:"ATTEMPT_LOGIN",payload:{credentials:e}}},ae=function(){return{type:"SHOW_NEXT_PAGE"}},se=function(){return{type:"SHOW_PREVIOUS_PAGE"}},ie=function(e,t){window.scrollTo({top:0,behavior:"smooth"}),"next"===e&&t(ae()),"previous"===e&&t(se())},oe=(r(42),r(0)),ue=function(e){var t=e.label,r=e.onClick,n=e.hideOrShow;return Object(oe.jsx)("div",{children:Object(oe.jsx)("button",{className:"button ".concat(n&&n()),onClick:r,children:t})})},le=(r(75),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return 0===e.recipes.resultsShown.from})),r=Object(s.c)((function(e){return 100===e.recipes.resultsShown.to})),n=Object(s.c)((function(e){var t;return(null===(t=e.recipes.recipes)||void 0===t?void 0:t.length)>0}));return Object(oe.jsxs)("div",{className:"page-navigation",children:[Object(oe.jsx)(ue,{hideOrShow:function(){return"".concat((r||!n)&&"hide")},onClick:function(){return ie("next",e)},label:"next"}),Object(oe.jsx)(ue,{hideOrShow:function(){return"".concat(t&&"hide")},onClick:function(){return ie("previous",e)},label:"previous"})]})}),pe=r(9),je=(r(43),function(){return Object(oe.jsxs)("div",{className:"info",children:[Object(oe.jsx)("h1",{children:"Click the star to save a recipe to your bank"}),Object(oe.jsx)("p",{children:"Due to the limitations of the free api, only the first 100 results found can be scrolled through"})]})}),de=function(e){var t=Object(n.useState)(e),r=Object(pe.a)(t,2),c=r[0],a=r[1],s=Object(n.useCallback)((function(){return a(!c)}),[c]);return[c,s]},be=function(e){var t=e.ingredients;return Object(oe.jsx)("ul",{className:"ingredient-list",children:t.map((function(e){return Object(oe.jsx)("li",{children:e},e)}))})},fe=r(33),he=function(e){var t=e.onClick,r=e.isSaved;return Object(oe.jsx)("div",{onClick:t,className:"save-button-div",children:r?Object(oe.jsx)(fe.a,{}):Object(oe.jsx)(fe.b,{})})};r(76);!function(e){e[e.error=0]="error",e[e.message=1]="message"}(ee||(ee={}));var Oe=function(e){var t=e.notification;return null===t?null:Object(oe.jsx)("div",{className:"notification",children:Object(oe.jsx)("h1",{className:(null===t||void 0===t?void 0:t.type)===ee.message?"message":"error",children:t.message})})},xe=function(){var e=Object(n.useState)(null),t=Object(pe.a)(e,2),r=t[0],c=t[1];return[r,function(e){console.log(e),c(e),setTimeout((function(){return c(null)}),5e3)}]},me=(r(77),function(e){var t=e.recipe,r=Object(s.b)(),c=t.id,a=t.label,i=t.url,o=t.img,u=t.calories,l=t.source,p=t.ingredients,j=t.servings,d=Object(s.c)((function(e){return e.users.recipes})),b=Object(s.c)((function(e){return e.users.user.username})),f=de(!0),h=Object(pe.a)(f,2),O=h[0],x=h[1],m=de(!1),v=Object(pe.a)(m,2),g=v[0],E=v[1],S=xe(),y=Object(pe.a)(S,2),w=y[0],I=y[1];Object(n.useEffect)((function(){d.forEach((function(e){e.id!==c||E(!0)}))}),[]);return Object(oe.jsxs)("section",{className:"recipe",onClick:x,children:[Object(oe.jsx)("h1",{children:a}),Object(oe.jsx)(Oe,{notification:w}),Object(oe.jsx)(he,{onClick:function(e){if(e.stopPropagation(),b){if(g)return E(),r(function(e,t){return{type:"DELETE_USER_RECIPE",payload:{recipeId:e,currentUser:t}}}(c,b)),void I({type:ee.message,message:"Recipe deleted!"});E(),r(function(e,t){return{type:"SAVE_USER_RECIPE",payload:{recipe:e,currentUser:t}}}(t,b)),I({type:ee.message,message:"Recipe saved!"})}else I({type:ee.error,message:"Must be logged in to save recipes!"})},isSaved:g}),Object(oe.jsxs)("div",{className:"".concat(O&&"hide"),children:[Object(oe.jsx)(be,{ingredients:p}),Object(oe.jsxs)("p",{children:["Servings: ",j," "]}),Object(oe.jsxs)("p",{children:["Calories per serving: ",Math.floor(u/j)]})]}),Object(oe.jsx)("img",{src:o,alt:"food"}),Object(oe.jsx)("div",{}),Object(oe.jsx)("a",{href:i,children:l})]})}),ve=function(){var e=Object(n.useState)([]),t=Object(pe.a)(e,2),r=t[0],c=t[1],a=Object(s.c)((function(e){return e.recipes.recipes[0]})),i=Object(s.c)((function(e){return e.recipes.resultsShown}));return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.slice(i.from,i.to);c(e)}),[i,a]),Object(oe.jsxs)("section",{className:"recipe-list",children:[(null===r||void 0===r?void 0:r.length)>0&&Object(oe.jsx)(je,{}),Object(oe.jsx)("div",{}),Object(oe.jsx)("ul",{children:r&&r.map((function(e){return Object(oe.jsx)("li",{children:Object(oe.jsx)(me,{recipe:e})},e.id)}))})]})},ge=function(e){var t=Object(n.useState)(""),r=Object(pe.a)(t,2),c=r[0],a=r[1];return{type:e,value:c,onChange:function(e){a(e.target.value)}}},Ee=function(e){var t=e.label,r=e.handleCheckboxChange,c=Object(n.useState)(!1),a=Object(pe.a)(c,2),s=a[0],i=a[1];return Object(oe.jsx)("div",{className:"checkbox",children:Object(oe.jsxs)("label",{children:[Object(oe.jsx)("input",{type:"checkbox",value:t,checked:s,onChange:function(){i(!s),r(t)}}),t]})})},Se=function(e){var t=e.categories,r=e.handleCheckboxChange;return Object(oe.jsx)("div",{className:"checkbox-array",children:t.map((function(e){return Object(oe.jsx)(Ee,{label:e,handleCheckboxChange:r},e)}))})},ye=function(e){var t=e.hideOrShow;return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsx)("input",{type:"submit",className:"login-form-button ".concat(t&&t())})})},we=function(){var e=Object(s.b)(),t=ge("text"),r=Object(n.useState)([]),c=Object(pe.a)(r,2),a=c[0],i=c[1],o=function(){var r=Object(m.a)(O.a.mark((function r(n){return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.preventDefault(),e(ne(t.value,j));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(oe.jsxs)("form",{onSubmit:o,children:[Object(oe.jsx)("input",{className:"search-input",type:t.type,value:t.value,onChange:t.onChange,placeholder:"search recipes"}),Object(oe.jsx)(Se,{categories:j,handleCheckboxChange:function(e){if(a.includes(e)){var t=a.filter((function(t){return t!==e}));i(t)}else i([].concat(Object(l.a)(a),[e]))}}),Object(oe.jsx)(ye,{})]})},Ie=function(){return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)("h3",{children:"Search through over 2.3 million recipes from all over the web!"}),Object(oe.jsx)("p",{children:"Click on a recipe card to see the ingredients and calories!"}),Object(oe.jsx)("p",{children:"Click the link on the recipe card to visit the recipe page!"})]})},Ce=(r(78),function(){return Object(oe.jsxs)("section",{className:"search-bar",children:[Object(oe.jsx)(Ie,{}),Object(oe.jsx)(we,{})]})}),ke=r.p+"static/media/loading-icon.ffc3c7e1.gif",_e=(r(79),function(){return Object(s.c)((function(e){return e.recipes.isLoading}))?Object(oe.jsxs)("section",{className:"loading",children:[Object(oe.jsx)("h1",{children:"loading..."}),Object(oe.jsx)("img",{src:ke,alt:"loading"})]}):null}),Re=function(){return Object(oe.jsxs)("div",{className:"home",children:[Object(oe.jsx)(Ce,{}),Object(oe.jsx)(_e,{}),Object(oe.jsx)(ve,{}),Object(oe.jsx)(le,{})]})},Ne={numberRegex:/\d/g,specialRegex:/[\s~`!@#$\xa3%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g,usernameIsValid:function(e){return e.length>=6},passwordIsValid:function(e){return this.passwordLength(e)&&this.passwordContainsUpper(e)&&this.passwordContainsNumber(e)&&this.passwordContainsSpecial(e)},passwordLength:function(e){return e.length>=6},passwordContainsNumber:function(e){return this.numberRegex.test(e)},passwordContainsSpecial:function(e){return this.specialRegex.test(e)},passwordContainsUpper:function(e){var t=this,r=e.split(""),n=!1;return r.forEach((function(e){t.numberRegex.test(e)||t.specialRegex.test(e)||e===e.toUpperCase()&&(n=!0)})),n}},Te=(r(80),function(e){var t=e.username,r=e.password,c=e.setValidDetails;return Object(n.useEffect)((function(){Ne.usernameIsValid(t)&&Ne.passwordIsValid(r)?c(!0):c(!1)}),[t,r]),Object(oe.jsxs)("div",{className:"details-validator",children:[Object(oe.jsx)("p",{className:Ne.usernameIsValid(t)?"satisfied":"unsatisfied",children:"Username must be at least 6 characters"}),Object(oe.jsx)("p",{className:Ne.passwordLength(r)?"satisfied":"unsatisfied",children:"Password must be at least 6 characters"}),Object(oe.jsx)("p",{className:Ne.passwordContainsUpper(r)?"satisfied":"unsatisfied",children:"Password must contain uppercase letter"}),Object(oe.jsx)("p",{className:Ne.passwordContainsNumber(r)?"satisfied":"unsatisfied",children:"Password must contain a number"}),Object(oe.jsx)("p",{className:Ne.passwordContainsSpecial(r)?"satisfied":"unsatisfied",children:"Password must contain a special character"})]})}),Le=function(e){var t=e.heading,r=e.handleSubmit,c=e.requireValidation,a=ge("text"),s=ge("text"),i=Object(n.useState)(!1),o=Object(pe.a)(i,2),u=o[0],l=o[1];return Object(oe.jsxs)("div",{className:"user-details-form",children:[Object(oe.jsx)("h1",{children:t}),Object(oe.jsxs)("form",{onSubmit:function(e){return r(e,a.value,s.value)},children:[Object(oe.jsx)("input",{type:"text",value:a.value,onChange:a.onChange,placeholder:"username"}),Object(oe.jsx)("input",{type:"password",value:s.value,onChange:s.onChange,placeholder:"password"}),Object(oe.jsx)("div",{className:"spacer"}),Object(oe.jsx)(ye,{hideOrShow:function(){return!c||u?"show":"hide"}})]}),c&&Object(oe.jsx)(Te,{username:a.value,password:s.value,setValidDetails:l})]})},Ue=function(e,t){return{username:e,password:t}},Pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.users.user.username})),r=Object(s.c)((function(e){return e.users.loginError.error})),c=xe(),a=Object(pe.a)(c,2),i=a[0],o=a[1];Object(n.useEffect)((function(){t?o({type:ee.message,message:"".concat(t," logged in successfully")}):r&&o({type:ee.error,message:r})}),[t,r]);var u=function(){var t=Object(m.a)(O.a.mark((function t(r,n,c){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=Ue(n,c),e(ce(a)),t.abrupt("return");case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();return Object(oe.jsxs)("div",{className:"login-form",children:[Object(oe.jsx)(Oe,{notification:i}),Object(oe.jsx)(Le,{heading:"Login",handleSubmit:u,requireValidation:!1})]})},Ae=function(e){return Object(m.a)(O.a.mark((function t(){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat("http://localhost:3001","/api/user/signup"),t.prev=1,t.next=4,g.a.post(r,e);case 4:return n=t.sent,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(1),{e:t.t0};case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},De=function(e){var t=e.hidden,r=xe(),n=Object(pe.a)(r,2),c=n[0],a=n[1],s=function(){var e=Object(m.a)(O.a.mark((function e(t,r,n){var c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c=Ue(r,n),e.next=5,Ae(c);case 5:s=e.sent,a({type:ee.message,message:"".concat(s.data.username," signed up successfully!")}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a({type:ee.error,message:"".concat(e.t0.e.response.data.error)});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r,n){return e.apply(this,arguments)}}();return Object(oe.jsxs)("div",{className:"sign-up-form ".concat(t&&"hide"),children:[Object(oe.jsx)(Oe,{notification:c}),Object(oe.jsx)("p",{children:"N.B. This app is designed for demo purposes only - passwords are hashed, but it is STRONGLY recommended not to use existing passwords"}),Object(oe.jsx)(Le,{heading:"Signup",handleSubmit:s,requireValidation:!0})]})},Ve=(r(81),function(){var e=de(!0),t=Object(pe.a)(e,2),r=t[0],n=t[1];return Object(oe.jsxs)("section",{className:"login",children:[Object(oe.jsx)(Pe,{}),Object(oe.jsx)("div",{className:"spacer"}),Object(oe.jsx)(ue,{onClick:n,label:r?"Signup":"Hide Signup"}),Object(oe.jsx)(De,{hidden:r}),Object(oe.jsx)("div",{className:"spacer"})]})}),Ge=function(){var e=Object(s.c)((function(e){return e.users.user.username}));return Object(oe.jsx)("nav",{children:Object(oe.jsxs)("ul",{children:[Object(oe.jsx)("li",{children:Object(oe.jsx)(te.b,{to:"/",children:"RECIPES"})}),Object(oe.jsx)("li",{children:Object(oe.jsx)(te.b,{to:"/feed",children:"FEED"})}),Object(oe.jsx)("li",{children:e?Object(oe.jsx)(te.b,{to:"/vault",children:"".concat(e.toUpperCase(),"'S VAULT")}):Object(oe.jsx)(te.b,{to:"/login",children:"LOGIN"})})]})})},Be=(r(86),function(){return Object(oe.jsxs)("header",{children:[Object(oe.jsx)("h1",{children:"goustito"}),Object(oe.jsx)(Ge,{})]})}),He=(r(87),function(){var e=Object(s.b)(),t=Object(re.f)(),r=Object(s.c)((function(e){return e.users.recipes}));return Object(oe.jsxs)("section",{className:"user-vault",children:[Object(oe.jsx)(ue,{onClick:function(){localStorage.removeItem("token-expiry"),localStorage.removeItem("username"),e({type:"SET_USER_DETAILS",payload:{username:null}}),e({type:"CLEAR_USER_RECIPES"}),t.push("/")},label:"Logout"}),r.map((function(e){return Object(oe.jsx)(me,{recipe:e},e.id)}))]})}),Me=(r(88),function(){var e=Object(s.b)();return Object(n.useEffect)((function(){var t=window.localStorage.getItem("username"),r=Number(localStorage.getItem("token-expiry"));e(function(e,t){return{type:"VALIDATE_SESSION_DETAILS",payload:{loggedUser:e,sessionExpiry:t}}}(t,r))}),[]),Object(oe.jsx)("div",{className:"App",children:Object(oe.jsxs)(te.a,{children:[Object(oe.jsx)(Be,{}),Object(oe.jsx)("div",{className:"page-content",children:Object(oe.jsxs)(re.c,{children:[Object(oe.jsx)(re.a,{exact:!0,path:"/",children:Object(oe.jsx)(Re,{})}),Object(oe.jsx)(re.a,{path:"/feed",children:Object(oe.jsx)("h1",{children:"Feed"})}),Object(oe.jsx)(re.a,{path:"/login",children:Object(oe.jsx)(Ve,{})}),Object(oe.jsx)(re.a,{path:"/vault",children:Object(oe.jsx)(He,{})})]})})]})})});r(89).config(),a.a.render(Object(oe.jsx)(s.a,{store:Z,children:Object(oe.jsx)(Me,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.caf0fd8b.chunk.js.map