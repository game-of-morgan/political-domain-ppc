(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+wFs":function(e,t,n){},"/4kY":function(e,t,n){"use strict";var r=n("EH9Q"),o=n("q1tI"),a=n.n(o),i=n("qhky");function c(e){var t=e.description,n=e.lang,o=e.meta,c=e.title,u=r.data.site,s=t||u.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},"/8Fb":function(e,t,n){var r=n("XKFU"),o=n("UExd")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},1715:function(e,t,n){},"4IfK":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var r=n("q1tI"),o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.useIsomorphicLayoutEffect=o},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"PPC","description":"People\'s Party of Canada","author":"@game-of-morgan"}}}}')},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},HwYm:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB/UlEQVQoz13RS2gTQRjA8YmaqvWBbdX6bGkym2TznE3UQCmUQOPBF6WUIh5UPHgQLN7E7DYiXgVPXr3oQfEB4qk+LqWCoiI2hapRoR48FC2CiojC+J8wwurAj/l2vtlvv5kVrvJfo4EmLqe9ICoYxPfxHi9t7qrr+e3CjrTyx9GMefV3SRU0s6p2XNgXq+giuZn5AS7Z9TmMogPduIsrNnfONCK9em7ecXfsyZ/cnVATZn/VJNN/v0pcxCzF25ifoT+UczGTUn4yo2ofReniNr1dxD5J57eObzolqrptOH9ig9kYD710GlM2foFSKGeOOMnxRjneo++y79qCTDQ+S0cvSOfVFxmf+RXvSZuNU7iFe3iLXbaAubunuIlJzNNZnmLDUtUf/pS9Z3XK1d8cR5t5UcrHum/VmtaXMYR92Ngq5vlLiZ/DRwX7scXkcqrWw7E/iPKNTh3rGqO76zq+9cyd1GC3GGisNAUTIjTSnh/JlPyIPfLOf3LKj9r5PN3OisrX1T9kb0qUb3fyU57Q/bgpqMymZD5YkshNiNCdTWPQxE62HhH/DYr6FHhDx9OYy/DnReFCq6N1mWJtBdqxzM7LWY+ZXLbUWltr1iyTj9rTrE+poMAVdZjnQjmICJIHMIajKKMfFQzhmF0fwQA8HLKxMnG2WDvMfBB7ceQPw2rVVFua5x4AAAAASUVORK5CYII=","aspectRatio":2.1052631578947367,"src":"/static/2a13752876f7700439a3a5db5d0f8b4d/7e7e9/nav-logo.png","srcSet":"/static/2a13752876f7700439a3a5db5d0f8b4d/69585/nav-logo.png 200w,\\n/static/2a13752876f7700439a3a5db5d0f8b4d/7e7e9/nav-logo.png 225w","sizes":"(max-width: 225px) 100vw, 225px"}}}}]}}}')},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"PPC"}}}}')},OTAv:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=c;var r=n("q1tI"),o=n("4IfK"),a="undefined"!=typeof window;function i(e){var t=e.element,n=e.useWindow;if(!a)return{x:0,y:0};var r=(t?t.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:r.left,y:r.top}}function c(e,t,n,c,u){var s=(0,r.useRef)(i({useWindow:c})),l=null,f=function(){var t=i({element:n,useWindow:c});e({prevPos:s.current,currPos:t}),s.current=t,l=null};(0,o.useIsomorphicLayoutEffect)((function(){if(a){var e=function(){u?null===l&&(l=setTimeout(f,u)):f()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}}),t)}c.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),s=r.RegExp,l=s,f=s.prototype,d=/a/g,p=/a/g,h=new s(d)!==d;if(n("nh4g")&&(!h||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,s(d)!=d||s(p)==p||"/a/i"!=s(d,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),a=void 0===t;return!n&&r&&e.constructor===s&&a?e:o(h?new l(r&&!a?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&a?u.call(e):t),n?this:f,s)};for(var m=function(e){e in s||a(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},y=i(l),g=0;y.length>g;)m(y[g++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UExd:function(e,t,n){var r=n("nh4g"),o=n("DVgA"),a=n("aCFj"),i=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=a(t),u=o(c),s=u.length,l=0,f=[];s>l;)n=u[l++],r&&!i.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}}},WboA:function(e,t,n){e.exports={Logo:"Header-module--Logo--3Gaog",Header:"Header-module--Header--1_x3h",Floating:"Header-module--Floating--2WS3v",Sticky:"Header-module--Sticky--1InE4",slideInTop:"Header-module--slide-in-top--2doJX",StickyPlaceholder:"Header-module--StickyPlaceholder--105WG"}},Wbzz:function(e,t,n){"use strict";n("xfY5");var r=n("q1tI"),o=n.n(r),a=n("+ZDr"),i=n.n(a);n.d(t,"a",(function(){return i.a}));n("lw3w"),n("emEt").default.enqueue,o.a.createContext({})},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var d=t instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==n.getTime();var h=t instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==n.toString();var y=o(t);if((u=y.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!a.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=y[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},lTFH:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return r.useScrollPosition}});var r=n("OTAv")},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},pBi2:function(e,t,n){e.exports={Footer:"Footer-module--Footer--2UJjc"}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),d=n.n(f),p=n("q1tI"),h=n.n(p),m=n("MgzW"),y=n.n(m),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),A="cssText",E="href",O="http-equiv",S="innerHTML",C="itemprop",I="name",P="property",x="rel",j="src",N="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",F="encodeSpecialCharacters",R="onChangeClientState",H="titleTemplate",q=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),_=[T.NOSCRIPT,T.SCRIPT,T.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},B=function(e){var t=Z(e,T.TITLE),n=Z(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},J=function(e){return Z(e,R)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==S&&c!==A&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,o),ce(f,d);var p={baseTag:se(T.BASE,n),linkTags:se(T.LINK,a),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===S||n===A){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===A)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(T.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(b,o,r),link:de(T.LINK,a,r),meta:de(T.META,i,r),noscript:de(T.NOSCRIPT,c,r),script:de(T.SCRIPT,u,r),style:de(T.STYLE,s,r),title:de(T.TITLE,{title:f,titleAttributes:d},r)}},he=l()((function(e){return{baseTag:z([E,N],e),bodyAttributes:G(g,e),defer:Z(e,M),encode:Z(e,F),htmlAttributes:G(b,e),linkTags:Q(T.LINK,[x,E],e),metaTags:Q(T.META,[I,w,O,P,C],e),noscriptTags:Q(T.NOSCRIPT,[S],e),onChangeClientState:J(e),scriptTags:Q(T.SCRIPT,[j,S],e),styleTags:Q(T.STYLE,[A],e),title:B(e),titleAttributes:G(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),me=(o=he,i=a=function(e){function t(){return K(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case T.BODY:return W({},o,{bodyAttributes:W({},a)});case T.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},qncB:function(e,t,n){var r=n("XKFU"),o=n("vhPU"),a=n("eeVq"),i=n("/e88"),c="["+i+"]",u=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(e,t,n){var o={},c=a((function(){return!!i[e]()||"​"!="​"[e]()})),u=o[e]=c?t(f):i[e];n&&(o[n]=u),r(r.P+r.F*c,"String",o)},f=l.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(s,"")),e};e.exports=l},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),o=n.n(r),a=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},vxWP:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"nodes":[{"id":"f4badc4f-55cb-5192-8161-16abf78434d6","html":"<p>©  2020 PPC-Regina</p>"}]}}}')},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),o=n("aagx"),a=n("LZWt"),i=n("Xbzi"),c=n("apmT"),u=n("eeVq"),s=n("kJMx").f,l=n("EemH").f,f=n("hswa").f,d=n("qncB").trim,p=r.Number,h=p,m=p.prototype,y="Number"==a(n("Kuth")(m)),g="trim"in String.prototype,b=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,a=(t=g?t.trim():d(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var i,u=t.slice(2),s=0,l=u.length;s<l;s++)if((i=u.charCodeAt(s))<48||i>o)return NaN;return parseInt(u,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(y?u((function(){m.valueOf.call(n)})):"Number"!=a(n))?i(new h(b(t)),n,p):b(t)};for(var v,T=n("nh4g")?s(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)o(h,v=T[w])&&!o(p,v)&&f(p,v,l(h,v));p.prototype=m,m.constructor=p,n("KroJ")(r,"Number",p)}},yBb5:function(e,t,n){"use strict";var r=n("IRj2"),o=n("q1tI"),a=n.n(o),i=n("HwYm"),c=n("Wbzz"),u=n("TSYQ"),s=n.n(u),l=n("WboA"),f=n.n(l),d=(n("91GP"),n("pIFo"),n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb"),Object.entries({Home:"/",Meet_the_Candidates__Trevor_Wowk:"/meet-the-candidates/trevor-wowk",Meet_the_Candidates__John_Doe:"/meet-the-candidates/john-doe"}).reduce((function(e,t){var n,r,o,a=t[0],i=t[1],c=a.split("__"),u=c[0],s=c[1],l=u.replace(/_/g," ");if(!s)return Object.assign({},e,((o={})[l]=i,o));var f=s.replace(/_/g," ");return Object.assign({},e,((r={})[l]=Object.assign({},e[l],((n={})[f]=i,n)),r))}),{}),n("lTFH")),p=function(e){var t=e.siteTitle,n=e.floatingHeader,r=Object(o.useState)(!1),u=r[0],l=r[1],p=Object(o.useState)(!1),h=p[0],m=p[1];Object(d.useScrollPosition)((function(){if(!h){var e=window.pageYOffset,t=window.innerWidth<600,n=e>200&&!t;n!=u&&(m(!0),setTimeout((function(){m(!1)}),600)),l(n)}}));var y=i.data.allFile.edges[0].node.childImageSharp.fluid.src,g=s()(f.a.Header,u&&f.a.Sticky,n&&f.a.Floating);return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:g},a.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none",height:"100%"}},a.a.createElement("img",{src:""+y,alt:t,className:f.a.Logo}))),a.a.createElement("div",{className:f.a.StickyPlaceholder}))},h=n("vxWP"),m=n("pBi2"),y=n.n(m),g=function(){var e=h.data.allMarkdownRemark.nodes[0].html;return a.a.createElement("div",{className:y.a.Footer,dangerouslySetInnerHTML:{__html:e}})};n("1715"),n("+wFs"),t.a=function(e){var t=e.children,n=e.floatingHeader,o=void 0!==n&&n,i=r.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,{siteTitle:i.site.siteMetadata.title,floatingHeader:o}),a.a.createElement("main",null,t),a.a.createElement(g,null))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=9e9dd659317943c950a066019585738c2afaf083-c7fbcdcebda29c04cca8.js.map