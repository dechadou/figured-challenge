!function(t){function e(e){for(var a,i,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)i=r[d],o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(l&&l(e);f.length;)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=function(t){return i.p+"version/1567974608445/js/"+t+".js"}(t),s=function(e){r.onerror=r.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}o[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:r})},12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var r=this.webpackJsonp=this.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([193,"vendors"]),n()}({1:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return i});var a={PRODUCTION:"production",DEVELOPMENT:"development",STAGING:"staging",LOCAL:"local"},o={LOCALE:"locale",API:"api"},s={LOCALE_ENABLED:"locale-enabled",LOCALE_ROUTING_ENABLED:"locale-routing-enabled",STATIC_ROOT:"static-root",PUBLIC_PATH:"public-path",VERSIONED_STATIC_ROOT:"versioned-static-root"},i={DEFAULT_LOCALE:"default-locale",AVAILABLE_LOCALES:"available-locales",PERSIST_QUERY_PARAMS:"persist-query-params"}},117:function(t,e,n){"use strict";var a=n(71),o=n.n(a);e.default=o.a},118:function(t,e,n){"use strict";var a=n(72),o=n.n(a);e.default=o.a},119:function(t,e,n){"use strict";var a=n(73),o=n.n(a);e.default=o.a},120:function(t,e,n){"use strict";var a=n(74),o=n.n(a);e.default=o.a},121:function(t,e,n){"use strict";var a=n(75),o=n.n(a);e.default=o.a},122:function(t,e,n){"use strict";var a=n(76),o=n.n(a);e.default=o.a},125:function(t,e,n){"use strict";var a=n(77),o=n.n(a);e.default=o.a},126:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[this.$style.app]},[e("router-view")],1)},o=[];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},127:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.$style.post]},[t.edit?t._e():n("div",[n("h1",{staticClass:"mt-4",model:{value:t.postTitle,callback:function(e){t.postTitle=e},expression:"postTitle"}},[t._v(t._s(t.postTitle))]),t._v(" "),n("p",[t._v("Posted on "+t._s(t.post.created_at))]),t._v(" "),t.admin?t._e():n("p",{staticClass:"lead",model:{value:t.postBody,callback:function(e){t.postBody=e},expression:"postBody"}},[t._v(t._s(t.postBody))])]),t._v(" "),n("div",{staticClass:"row",class:{"bg-light p-4":t.edit}},[n("div",{staticClass:"col-12"},[t.edit&&t.admin?n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",[t._v("_id: "+t._s(t.postId))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postTitle,expression:"postTitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.postTitle},on:{input:function(e){e.target.composing||(t.postTitle=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Body")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postBody,expression:"postBody"}],staticClass:"form-control",attrs:{rows:10},domProps:{value:t.postBody},on:{input:function(e){e.target.composing||(t.postBody=e.target.value)}}},[t._v(t._s(t.post.body))])]),t._v(" "),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isPublished,expression:"isPublished"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"},domProps:{checked:Array.isArray(t.isPublished)?t._i(t.isPublished,"")>-1:t.isPublished},on:{change:function(e){var n=t.isPublished,a=e.target,o=!!a.checked;if(Array.isArray(n)){var s=t._i(n,"");a.checked?s<0&&(t.isPublished=n.concat([""])):s>-1&&(t.isPublished=n.slice(0,s).concat(n.slice(s+1)))}else t.isPublished=o}}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v("\n                            Published\n                        ")])])])]):t._e(),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t.admin?n("div",{staticClass:"btn-group"},[t.edit?t._e():n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.edit=!0}}},[t._v("Edit")]),t._v(" "),t.edit?n("button",{staticClass:"btn btn-secondary",on:{click:function(e){t.edit=!1}}},[t._v("Cancel")]):t._e(),t._v(" "),t.edit?n("button",{staticClass:"btn btn-primary",on:{click:t.postEdit}},[t._v("Save")]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:t.postDelete}},[t._v("Delete")])]):t._e()])])])]),t._v(" "),n("hr")])},o=[];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},128:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark",class:[t.$style.nav]},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Figured Blog")]),t._v(" "),n("div",{staticClass:"btn-group",attrs:{role:"group"}},[["home"].indexOf(t.$route.name)>-1?n("router-link",{attrs:{to:"/admin"}},[n("button",{staticClass:"btn btn-primary"},[t._v("\n                    Admin\n                ")])]):t._e(),t._v(" "),["admin"].indexOf(t.$route.name)>-1?n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"btn btn-primary"},[t._v("Return Home")])]):t._e(),t._v(" "),["admin"].indexOf(t.$route.name)>-1?n("router-link",{attrs:{to:"/logout"}},[n("button",{staticClass:"btn btn-primary"},[t._v("Logout")])]):t._e()],1)],1)])},o=[];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},129:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[this.$style.homePage]},[e("Nav"),this._v(" "),e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},this._l(this.posts.data,function(t){return e("Post",{key:t.id,staticClass:"mb-5",attrs:{data:t,admin:!1}})}),1)])])],1)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"mb-5"},[this._v("Figured Blog")])])])}];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},13:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s});var a={},o=function(t,e){a[t]=e},s=function(t){return a[t]}},130:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.$style.login]},[n("Nav"),t._v(" "),n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"form-group"},[n("label",[t._v("Email address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email","aria-describedby":"emailHelpBlock"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Email address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password","aria-describedby":"passwordHelpBlock"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(2)]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])])],1)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[this._v("Login")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelpBlock"}},[this._v("\n                    Email is "),e("b",[this._v("test@test.com")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[this._v("\n                    Password is "),e("b",[this._v("password")])])}];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},131:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.$style.admin]},[n("Nav"),t._v(" "),n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn btn-lg btn-primary",on:{click:function(e){t.create=!0}}},[t._v("Create new post")])])]),t._v(" "),t.create?n("div",{staticClass:"row bg-light p-4"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postTitle,expression:"postTitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.postTitle},on:{input:function(e){e.target.composing||(t.postTitle=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Body")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postBody,expression:"postBody"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.postBody},on:{input:function(e){e.target.composing||(t.postBody=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isPublished,expression:"isPublished"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"},domProps:{checked:Array.isArray(t.isPublished)?t._i(t.isPublished,"")>-1:t.isPublished},on:{change:function(e){var n=t.isPublished,a=e.target,o=!!a.checked;if(Array.isArray(n)){var s=t._i(n,"");a.checked?s<0&&(t.isPublished=n.concat([""])):s>-1&&(t.isPublished=n.slice(0,s).concat(n.slice(s+1)))}else t.isPublished=o}}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v("\n                        Published\n                    ")])]),t._v(" "),n("div",{staticClass:"form-group mt-4"},[n("button",{staticClass:"btn btn-primary",on:{click:t.postCreate}},[t._v("Save")]),t._v(" "),n("button",{staticClass:"btn btn-warning",on:{click:function(e){t.create=!1}}},[t._v("Cancel")])])])]):t._e(),t._v(" "),t.create?t._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},t._l(t.posts.data,function(e,a){return n("Post",{key:e.id,staticClass:"mb-5",attrs:{data:e,admin:!0},on:{"delete-row":function(e){return t.removeRow(a)}}})}),1)])])],1)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"mb-5"},[this._v("Admin Area")])])])}];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},132:function(t,e,n){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("span",{class:[this.$style.icon],domProps:{innerHTML:this._s(this.icon)}})},o=[];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},14:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o});var a="gateway",o="configManager"},184:function(t,e,n){"use strict";(function(t){var a=n(132),o=n(79),s=n(117),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/component/Icon/Icon.vue",e.a=u.exports}).call(this,n(44)(t))},185:function(t,e,n){"use strict";(function(t){var a=n(127),o=n(81),s=n(118),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/component/Post/Post.vue",e.a=u.exports}).call(this,n(44)(t))},186:function(t,e,n){"use strict";(function(t){var a=n(128),o=n(80),s=n(119),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/component/Nav/Nav.vue",e.a=u.exports}).call(this,n(44)(t))},187:function(t,e,n){"use strict";(function(t){var a=n(129),o=n(84),s=n(120),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/page/HomePage/HomePage.vue",e.a=u.exports}).call(this,n(44)(t))},189:function(t,e,n){"use strict";(function(t){var a=n(131),o=n(83),s=n(121),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/page/Admin/Admin.vue",e.a=u.exports}).call(this,n(44)(t))},190:function(t,e,n){"use strict";(function(t){var a=n(130),o=n(82),s=n(122),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/page/Login/Login.vue",e.a=u.exports}).call(this,n(44)(t))},192:function(t,e,n){"use strict";(function(t){var a=n(126),o=n(78),s=n(125),i=n(16),r={},c=!1;t.hot,t.hot;var u=Object(i.a)(o.a,a.a,a.b,!1,function(t){c||(r.$style=s.default.locals||s.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return r.$style}}))},null,null);u.options.__file="src/App/App.vue",e.a=u.exports}).call(this,n(44)(t))},193:function(t,e,n){n(194),t.exports=n(367)},194:function(t,e,n){"use strict";n.r(e);n(195),n(197),n(198),n(201),n(202),n(137),n(96),n(205),n(206),n(208),n(209),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(242),n(244),n(145),n(146),n(147),n(245),n(246),n(149),n(247),n(248),n(152),n(153),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(155),n(257),n(159),n(260),n(261),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(160),n(275),n(277),n(278),n(279),n(280),n(281),n(282),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(163),n(166),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(170),n(171),n(321);e.default={}},24:function(t,e,n){"use strict";var a,o,s,i=n(188),r=n.n(i),c=n(5),u=n.n(c),l=n(54),d=n.n(l),f=n(34),p=n(55),v=n.n(p),h=n(13),m=n(14);!function(){var t=new v.a;t.init(f.a.config,f.a.environment),Object(h.b)(m.a,t)}();var b=Object(h.a)(m.a).getURL("api"),g={namespaced:!0,state:{posts:[],isLoaded:!1},getters:(a={},u()(a,"isLoaded",function(t){return t.isLoaded}),u()(a,"getPosts",function(t){return t.posts}),a),mutations:(o={},u()(o,"addPosts",function(t,e){t.posts=e}),u()(o,"addNew",function(t,e){t.posts=[].concat(r()(t.posts),[e.data])}),u()(o,"isLoaded",function(t,e){t.isLoaded=e}),o),actions:(s={},u()(s,"fetchPosts",function(t){var e=t.commit;d.a.get(b+"posts").then(function(t){200===t.status&&(e("addPosts",t.data),e("isLoaded",1))})}),u()(s,"addPost",function(t,e){var n=t.commit;t.dispatch;n("addNew",e)}),s)};n.d(e,"b",function(){return _}),n.d(e,"a",function(){return P});var _={IS_LOADED:"".concat("post","/").concat("isLoaded"),GET_POSTS:"".concat("post","/").concat("getPosts")},P={FETCH_POSTS:"".concat("post","/").concat("fetchPosts"),ADD_POST:"".concat("post","/").concat("addPost")};e.c=g},324:function(t,e){!function(e){var n="Modernizr"in e,a=e.Modernizr;!function(t,e,n){function a(t,e){return typeof t===e}var o=[],s={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout(function(){e(n[t])},0)},addTest:function(t,e,n){o.push({name:t,fn:e,options:n})},addAsyncTest:function(t){o.push({name:null,fn:t})}},i=function(){};i.prototype=s,i=new i;var r=[],c=e.documentElement,u="svg"===c.nodeName.toLowerCase();(function(){var t,e,n,s,c,u;for(var l in o)if(o.hasOwnProperty(l)){if(t=[],(e=o[l]).name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(s=a(e.fn,"function")?e.fn():e.fn,c=0;c<t.length;c++)1===(u=t[c].split(".")).length?i[u[0]]=s:(!i[u[0]]||i[u[0]]instanceof Boolean||(i[u[0]]=new Boolean(i[u[0]])),i[u[0]][u[1]]=s),r.push((s?"":"no-")+u.join("-"))}})(),function(t){var e=c.className,n=i._config.classPrefix||"";if(u&&(e=e.baseVal),i._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(a,"$1"+n+"js$2")}i._config.enableClasses&&(e+=" "+n+t.join(" "+n),u?c.className.baseVal=e:c.className=e)}(r),delete s.addTest,delete s.addAsyncTest;for(var l=0;l<i._q.length;l++)i._q[l]();t.Modernizr=i}(e,document),t.exports=e.Modernizr,n?e.Modernizr=a:delete e.Modernizr}(window)},325:function(t,e,n){},330:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=330},34:function(t,e,n){"use strict";var a,o,s,i=n(5),r=n.n(i),c=n(1),u={environments:(a={},r()(a,c.a.PRODUCTION,{variables:{},urls:r()({},c.c.API,"http://localhost:8080/api/")}),r()(a,c.a.STAGING,{extends:c.a.PRODUCTION,variables:{},urls:{}}),r()(a,c.a.DEVELOPMENT,{extends:c.a.STAGING,variables:{},urls:{}}),r()(a,c.a.LOCAL,{extends:c.a.DEVELOPMENT,variables:{},urls:r()({},c.c.API,"http://localhost:8080/api/")}),a),variables:(o={},r()(o,c.d.LOCALE_ENABLED,!1),r()(o,c.d.LOCALE_ROUTING_ENABLED,!1),r()(o,c.d.VERSIONED_STATIC_ROOT,(window.webpackPublicPath||"/")+"version/1567974608445/static/"),r()(o,c.d.STATIC_ROOT,(window.webpackPublicPath||"/")+""),r()(o,c.d.PUBLIC_PATH,window.webpackPublicPath||"/"),o),urls:r()({},c.c.API,"".concat("/","api/")),properties:(s={},r()(s,c.b.DEFAULT_LOCALE,"en-gb"),r()(s,c.b.AVAILABLE_LOCALES,["en-gb","en-us"]),r()(s,c.b.PERSIST_QUERY_PARAMS,[]),s)},l=c.a.PRODUCTION;switch(document.location.host.split(":").shift()){case"localhost":l=c.a.LOCAL;break;default:l=c.a.PRODUCTION}e.a={config:u,environment:l}},365:function(t,e,n){var a={"./en-gb.json":[368,0]};function o(t){if(!n.o(a,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=a[t],o=e[0];return n.e(e[1]).then(function(){return n.t(o,3)})}o.keys=function(){return Object.keys(a)},o.id=365,t.exports=o},367:function(t,e,n){"use strict";n.r(e);n(324);var a=n(17),o=n(85),s=n.n(o),i=n(183);n(325);n(88).a.sensibleDefaults=!1;var r={},c={Icon:n(184).a,Post:n(185).a,Nav:n(186).a},u=n(123),l=n(1),d=n(13),f=n(14),p=function(){var t=Object(d.a)(f.a),e=t.getProperty(l.b.AVAILABLE_LOCALES).map(function(t){return"string"===typeof t?{code:t,urlPrefix:t,translationKey:t}:t}),n={persistent:!1,defaultCode:t.getProperty(l.b.DEFAULT_LOCALE),languages:e};return{localeEnabled:t.getVariable(l.d.LOCALE_ENABLED),localeRoutingEnabled:t.getVariable(l.d.LOCALE_ROUTING_ENABLED),config:n}},v=n(187).a,h=n(189).a,m=n(190).a,b={HOME:"home",ADMIN:"admin",LOGIN:"login",LOGOUT:"logout"},g=[{path:"/",component:v,name:b.HOME},{path:"/login",component:m,name:b.LOGIN},{path:"/logout",component:m,name:b.LOGOUT},{path:"/admin",component:h,name:b.ADMIN}];a.a.use(u.a);var _=null,P=function(){if(!_){var t=p(),e=Object(d.a)(f.a),n=t.localeEnabled&&t.localeRoutingEnabled?Object(o.routeParser)(g,e.getProperty(l.b.DEFAULT_LOCALE)):g.concat({path:"*",redirect:"/"});(_=new u.a({mode:"history",routes:n,base:e.getVariable(l.d.PUBLIC_PATH)})).beforeEach(function(t,n,a){var o=e.getProperty(l.b.PERSIST_QUERY_PARAMS),s=!1,i=Object.assign({},t.query);o&&o.length>0&&o.forEach(function(t){"undefined"!==typeof n.query[t]&&"undefined"===typeof i[t]&&(i[t]=n.query[t],s=!0)});var r=["/login"].includes(t.path),c=!["/login","/"].includes(t.path),u=localStorage.getItem("accessToken");return c&&!u?a("/login"):r&&u?a("/admin"):void(s?a({path:t.path,query:i}):a())})}return _},y=n(11),O=n(86).b,C=n(24),E=n(124),T=n.n(E),A=n(191),L=n.n(A),w=n(34);var S=n(55),I=n.n(S),k={login:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})};return fetch(j+"login",n).then(D).then(function(t){t.token&&localStorage.setItem("accessToken",t.token)})},logout:x,createPost:function(t,e,n){return N.apply(this,arguments)},editPost:function(t,e,n,a){var o={method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("accessToken"),"Content-Type":"application/json"},body:JSON.stringify({title:e,body:n,is_published:a,_method:"PUT"})};return fetch(j+"posts/"+t,o).then(D).then(function(t){return t}).catch(function(t){console.log(t)})},deletePost:function(t){var e={method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("accessToken"),"Content-Type":"application/json"}};return fetch(j+"posts/"+t,e).then(D).then(function(t){return t}).catch(function(t){console.log(t)})}};!function(){var t=new I.a;t.init(w.a.config,w.a.environment),Object(d.b)(f.a,t)}();var j=Object(d.a)(f.a).getURL("api");function N(){return(N=L()(T.a.mark(function t(e,n,a){var o,s;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("accessToken"),"Content-Type":"application/json"},body:JSON.stringify({title:e,body:n,is_published:a})},s=j+"posts",t.abrupt("return",fetch(s,o).then(D).then(function(t){return t}).catch(function(t){console.log(t)}));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function x(){localStorage.removeItem("accessToken")}function D(t){return t.text().then(function(e){var n=e&&JSON.parse(e);if(!t.ok){401===t.status&&(x(),location.reload(!0));var a=n&&n.message||t.statusText;return Promise.reject(a)}return n})}var $={status:{loggedIn:!1,submitted:!1},user:{user:JSON.parse(localStorage.getItem("user"))},api:{fetch:{inProgress:!1,completed:!1,success:!1,error:!1},data:{}}},R={SET_API_DATA_FETCH_IN_PROGRESS:function(t){t.api.fetch.inProgress=!0,t.api.fetch.completed=!1,t.api.fetch.success=!1,t.api.fetch.error=!1,t.api.data={}},SET_API_DATA_FETCH_SUCCESS:function(t,e){t.api.fetch.inProgress=!1,t.api.fetch.completed=!0,t.api.fetch.success=!0,t.api.fetch.error=!1,t.api.data=e},SET_API_DATA_FETCH_ERROR:function(t,e){t.api.fetch.inProgress=!1,t.api.fetch.completed=!0,t.api.fetch.success=!1,t.api.fetch.error=!0,t.api.data=e},loginRequest:function(t,e){t.status={submitted:!0,loggingIn:!0},t.user=e},loginSuccess:function(t,e){t.status={submitted:!1,loggedIn:!0},t.user=e},loginFailure:function(t){$.status={submitted:!1,loggedIn:!1,message:"\xa1Ups!"},$.user=null},logout:function(t){t.status={submitted:!1},t.user=null},formResponse:function(t,e){t.api.data=e}},B={namespaced:!0,state:$,actions:{login:function(t,e){t.dispatch;var n=t.commit,a=e.username,o=e.password;n("loginRequest",{username:a}),k.login(a,o).then(function(t){n("loginSuccess",t),P().push("/admin")},function(t){n("loginFailure",t)})},logout:function(t){var e=t.commit;k.logout(),e("logout")},createPost:function(t,e){var n=t.commit,a=e.postTitle,o=e.postBody,s=e.isPublished;k.createPost(a,o,s).then(function(t){n("formResponse",t)})},editPost:function(t,e){t.commit;var n=e.postId,a=e.postTitle,o=e.postBody,s=e.isPublished;k.editPost(n,a,o,s)},deletePost:function(t,e){t.commit;var n=e.postId;k.deletePost(n)}},mutations:R,getter:{API_DATA:function(t){return t.api.data}}},U={app:O,post:C.c,account:B};a.a.use(y.a);var M,G=null,H=function(){return G||(G=new y.a.Store({modules:U,strict:!1})),G},V=n(54),F=n.n(V),q=n(87),z=n.n(q),J={install:function(t,e){Object.keys(e).forEach(function(n){t.prototype[n]?console.error("Skipping ".concat(n,". ").concat(n," already exists on the Vue prototype")):Object.defineProperty(t.prototype,n,{get:function(){return e[n]}})})}},Q=n(10),Y=n.n(Q),K=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Y()({},n,e);return t.replace(/:(\w+)/g,function(t,e){return"undefined"!==typeof a[e]?a[e]||"":t}).replace(/\/:(\w+\?+)/g,function(){return""}).replace(/\?/g,function(){return""}).replace(/:(\w+)/g,function(t,e){throw new Error('Param "'.concat(e,'" is missing in params'),a)})},X={ID:"id",SLUG:"slug"},W=[],Z={isLoaded:function(t){return W.includes(t)},setLoadCallback:function(t){M=t},getTranslation:function(t){var e=t.translationKey,a=t.code;return n(365)("./".concat(e,".json")).then(function(t){return W.push(a),M&&setTimeout(function(){M(a)}),t})}},tt=n(59),et=function(t){return new Promise(function(e){Z.isLoaded(t.getters.currentLanguage.code)?e():Z.setLoadCallback(function(n){n===t.getters.currentLanguage.code&&e()})})},nt=function(t){!function(){var t=Object(d.a)(f.a),e=Object.keys(tt.b).reduce(function(t,e){return t[e]=tt.b[e].replace(/'/g,""),t},{});a.a.use(J,{$config:t,$gateway:Object(d.a)(f.b),$http:F.a,$versionRoot:t.getVariable(l.d.VERSIONED_STATIC_ROOT),$staticRoot:t.getVariable(l.d.STATIC_ROOT),URLNames:l.c,PropertyNames:l.b,VariableNames:l.d,RouteNames:b,Params:X,createPath:K,$deviceStateTracker:new z.a({mediaQueries:e,deviceState:tt.a,showStateIndicator:!1}),DeviceState:tt.a})}();var e=Object(d.a)(f.a);return Promise.all([e.getVariable(l.d.LOCALE_ENABLED)?et(t):Promise.resolve(),Promise.resolve()])},at=function(){var t=new I.a;t.init(w.a.config,w.a.environment);var e=V.create({baseURL:t.getURL(l.c.API),headers:{Accept:"application/json"},responseType:"json"});e.interceptors.response.use(function(t){return function(t){return t&&t.data&&"undefined"!==typeof t.data.data?Y()({},t,t.data):t}(t)},function(t){throw function(t){if(t&&t.response&&t.response.data&&t.response.data.error){var e=Y()({config:t.config},t.response,t.response.data);return delete e.data,e}return t}(t)}),Object(d.b)(f.a,t),Object(d.b)(f.b,e)},ot=n(192).a,st={};n(366);Object.keys(st).forEach(function(t){return a.a.filter(t,st[t])}),Object.keys(r).forEach(function(t){return a.a.directive(t,r[t])}),Object.keys(c).forEach(function(t){return a.a.component(t,c[t])}),at(),window.webpackPublicPath&&(n.p=window.webpackPublicPath);var it=P(),rt=H(),ct=p();ct.localeEnabled&&(a.a.use(s.a,{store:rt,router:ct.localeRoutingEnabled?it:null,config:ct.config,proxy:Z}),a.a.initI18nManager()),Object(i.sync)(rt,it);var ut=new a.a({router:it,store:rt,render:function(t){return t(ot)}});nt(rt).then(function(){ut.$mount("#app")})},59:function(t){t.exports={b:{XSMALL:"(max-width: 479px)",SMALL:"(min-width: 480px)",MEDIUM:"(min-width: 768px)",LARGE:"(min-width: 1024px)"},a:{XSMALL:0,SMALL:1,MEDIUM:2,LARGE:3}}},71:function(t,e,n){t.exports={icon:"icon-2IkghMD"}},72:function(t,e,n){},73:function(t,e,n){t.exports={nav:"nav-2MDOSun"}},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";var a=n(10),o=n.n(a),s=n(87),i=n(11),r=n(86),c={name:"App",computed:o()({},Object(i.e)({deviceState:function(t){return t.app.deviceState}})),created:function(){this.$deviceStateTracker.addEventListener(s.DeviceStateEvent.STATE_UPDATE,this.handleDeviceStateUpdate),this.setDeviceState(this.$deviceStateTracker.currentState)},methods:o()({},Object(i.d)({setDeviceState:r.a}),{handleDeviceStateUpdate:function(t){this.setDeviceState(t.data.state)}})};e.a=c},79:function(t,e,n){"use strict";var a=n(88),o=n(330),s={name:"Icon",props:{name:a.a.string.isRequired},computed:{icon:function(){return o("./".concat(this.name,".svg"))}}};e.a=s},80:function(t,e,n){"use strict";e.a={name:"Nav"}},81:function(t,e,n){"use strict";var a=n(10),o=n.n(a),s=n(11),i={name:"Post",props:["data","admin"],data:function(){return{post:{},edit:!1,postTitle:"",postBody:"",postId:null,isPublished:null}},created:function(){this.getPost()},methods:o()({},Object(s.b)("account",["editPost","deletePost"]),{getPost:function(){this.post=this.data,this.postTitle=this.data.title,this.postBody=this.data.body,this.isPublished=parseInt(this.data.is_published),this.postId=this.data.id},postEdit:function(){this.edit=!1;var t=this.postId,e=this.postTitle,n=this.postBody,a=this.isPublished;this.editPost({postId:t,postTitle:e,postBody:n,isPublished:a})},postDelete:function(){var t=this.postId;this.deletePost({postId:t}),this.$emit("delete-row")}})};e.a=i},82:function(t,e,n){"use strict";var a=n(10),o=n.n(a),s=n(11),i={name:"Login",data:function(){return{username:"",password:"",submitted:!1,account:this.$store.state.account}},computed:o()({},Object(s.e)("account",["status"])),created:function(){this.logout()},methods:o()({},Object(s.b)("account",["login","logout"]),{handleSubmit:function(t){this.submitted=!0;var e=this.username,n=this.password;e&&n&&this.login({username:e,password:n})}})};e.a=i},83:function(t,e,n){"use strict";var a=n(10),o=n.n(a),s=n(11),i=n(24),r={name:"Admin",data:function(){return{loaded:!1,postTitle:"",postBody:"",isPublished:1,create:!1}},computed:o()({},Object(s.e)("account",["formResponse"]),Object(s.c)({posts:i.b.GET_POSTS,isLoaded:i.b.IS_LOADED})),methods:o()({},Object(s.b)({fetchPosts:i.a.FETCH_POSTS,addPost:i.a.ADD_POST}),Object(s.b)("account",["createPost"]),{removeRow:function(t){this.posts.data.splice(t,1)},postCreate:function(){var t=this,e=this.postTitle,n=this.postBody,a=this.isPublished;this.createPost({postTitle:e,postBody:n,isPublished:a}).then(function(){t.fetchPosts(),t.create=!1})}}),created:function(){this.fetchPosts()}};e.a=r},84:function(t,e,n){"use strict";var a=n(10),o=n.n(a),s=n(11),i=n(24),r={name:"HomePage",data:function(){return{loaded:!1}},computed:o()({},Object(s.c)({posts:i.b.GET_POSTS,isLoaded:i.b.IS_LOADED})),methods:o()({},Object(s.b)({fetchPosts:i.a.FETCH_POSTS})),created:function(){this.fetchPosts()}};e.a=r},86:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(5),o=n.n(a),s="".concat("app","/setDeviceState");e.b={state:{deviceState:null},getters:{},mutations:o()({},s,function(t,e){t.deviceState=e}),actions:{}}}});