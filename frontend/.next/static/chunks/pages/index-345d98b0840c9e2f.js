(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6993)}])},6825:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(7677)._(n(6540)).default.createContext({})},8721:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},6085:(e,t,n)=>{"use strict";var r=n(7836);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return _},defaultHead:function(){return h}});let s=n(7677),i=n(544),o=n(4848),u=i._(n(6540)),a=s._(n(5076)),c=n(6825),l=n(1215),d=n(8721);function h(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7679);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(h(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return s=>{let i=!0,o=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){o=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=s.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let s=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:s})})}let _=function(e){let{children:t}=e,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(l.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5076:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(6540),s=r.useLayoutEffect,i=r.useEffect;function o(e){let{headManager:t,reduceComponentsToState:n}=e;function o(){if(t&&t.mountedInstances){let s=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(s,e))}}return s(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),s(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},2532:(e,t,n)=>{"use strict";var r=n(7836);n(9750);var s=n(6540),i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(s),o=void 0!==r&&r.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,i=void 0===s?o:s;c(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a=document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var l=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return d[r]||(d[r]="jsx-"+l(e+"-"+n)),d[r]}function f(e,t){var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,i=void 0!==s&&s;this._sheet=r||new a({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var s=h(r,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return f(s,e)}):[f(s,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=s.createContext(null);m.displayName="StyleSheetContext";var _=i.default.useInsertionEffect||i.default.useLayoutEffect,y=new p;function v(e){var t=y||s.useContext(m);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=v},5703:(e,t,n)=>{"use strict";e.exports=n(2532).style},6993:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(4848),s=n(5703),i=n.n(s);n(6540);var o=n(3368),u=n.n(o),a=n(1106),c=n.n(a);let l=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{className:"jsx-4b7f388c59fca7d0",children:"CJS iCoins - Home"}),(0,r.jsx)("meta",{name:"description",content:"Buy virtual gifts that trigger commands in Minecraft.",className:"jsx-4b7f388c59fca7d0"})]}),(0,r.jsxs)("div",{className:"jsx-4b7f388c59fca7d0 container",children:[(0,r.jsx)("h1",{className:"jsx-4b7f388c59fca7d0",children:"Welcome to CJS iCoins"}),(0,r.jsx)("p",{className:"jsx-4b7f388c59fca7d0",children:"Purchase coins and use them to trigger events in Minecraft!"}),(0,r.jsxs)("div",{className:"jsx-4b7f388c59fca7d0 buttons",children:[(0,r.jsx)(c(),{href:"https://hostengland.co.uk/login",children:(0,r.jsx)("button",{className:"jsx-4b7f388c59fca7d0",children:"Login"})}),(0,r.jsx)(c(),{href:"https://hostengland.co.uk/register",children:(0,r.jsx)("button",{className:"jsx-4b7f388c59fca7d0",children:"Register"})})]})]}),(0,r.jsx)(i(),{id:"4b7f388c59fca7d0",children:".container.jsx-4b7f388c59fca7d0{text-align:center;padding:50px}h1.jsx-4b7f388c59fca7d0{color:#0070f3}.buttons.jsx-4b7f388c59fca7d0{margin-top:20px}button.jsx-4b7f388c59fca7d0{padding:10px 20px;margin:10px;border:none;background-color:#0070f3;color:white;cursor:pointer;font-size:16px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}button.jsx-4b7f388c59fca7d0:hover{background-color:#005bb5}"})]})},9750:()=>{},3368:(e,t,n)=>{e.exports=n(6085)}},e=>{var t=t=>e(e.s=t);e.O(0,[106,636,593,792],()=>t(7276)),_N_E=e.O()}]);