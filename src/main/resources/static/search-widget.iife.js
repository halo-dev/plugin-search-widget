var SearchWidget=function($){var zt;"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,X=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),ut=new WeakMap;let ft=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ut.set(e,t))}return t}toString(){return this.cssText}};const Wt=i=>new ft(typeof i=="string"?i:i+"",void 0,Y),tt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new ft(e,i,Y)},Gt=(i,t)=>{if(X)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),n=D.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},mt=X?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Wt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:Kt,getOwnPropertyDescriptor:Ft,getOwnPropertyNames:qt,getOwnPropertySymbols:Jt,getPrototypeOf:Zt}=Object,_=globalThis,$t=_.trustedTypes,Qt=$t?$t.emptyScript:"",et=_.reactiveElementPolyfillSupport,P=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},it=(i,t)=>!Vt(i,t),gt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Kt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){const{get:n,set:r}=Ft(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const a=n==null?void 0:n.call(this);r.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gt}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...qt(e),...Jt(e)];for(const n of s)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(mt(n))}else t!==void 0&&e.push(mt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var r;const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:B;this._$Em=n,this[n]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s,n=!1,r){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??it)(n?r:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(e)):this._$ET()}catch(n){throw t=!1,this._$ET(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[P("elementProperties")]=new Map,x[P("finalized")]=new Map,et==null||et({ReactiveElement:x}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,W=U.trustedTypes,_t=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,yt="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+y,Xt=`<${bt}>`,v=document,O=()=>v.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",vt=Array.isArray,Yt=i=>vt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",st=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,St=/>/g,A=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Et=/"/g,xt=/^(?:script|style|textarea|title)$/i,te=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),S=te(1),g=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Tt=new WeakMap,w=v.createTreeWalker(v,129);function Ct(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(t):t}const ee=(i,t)=>{const e=i.length-1,s=[];let n,r=t===2?"<svg>":"",o=M;for(let a=0;a<e;a++){const l=i[a];let c,p,h=-1,f=0;for(;f<l.length&&(o.lastIndex=f,p=o.exec(l),p!==null);)f=o.lastIndex,o===M?p[1]==="!--"?o=At:p[1]!==void 0?o=St:p[2]!==void 0?(xt.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=A):p[3]!==void 0&&(o=A):o===A?p[0]===">"?(o=n??M,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?A:p[3]==='"'?Et:wt):o===Et||o===wt?o=A:o===At||o===St?o=M:(o=A,n=void 0);const m=o===A&&i[a+1].startsWith("/>")?" ":"";r+=o===M?l+Xt:h>=0?(s.push(c),l.slice(0,h)+yt+l.slice(h)+y+m):l+y+(h===-2?a:m)}return[Ct(i,r+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[c,p]=ee(t,e);if(this.el=N.createElement(c,s),w.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=w.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(yt)){const f=p[o++],m=n.getAttribute(h).split(y),k=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:k[2],strings:m,ctor:k[1]==="."?se:k[1]==="?"?ne:k[1]==="@"?re:G}),n.removeAttribute(h)}else h.startsWith(y)&&(l.push({type:6,index:r}),n.removeAttribute(h));if(xt.test(n.tagName)){const h=n.textContent.split(y),f=h.length-1;if(f>0){n.textContent=W?W.emptyScript:"";for(let m=0;m<f;m++)n.append(h[m],O()),w.nextNode(),l.push({type:2,index:++r});n.append(h[f],O())}}}else if(n.nodeType===8)if(n.data===bt)l.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:r}),h+=y.length-1}r++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function T(i,t,e=i,s){var o,a;if(t===g)return t;let n=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=j(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=n:e._$Cl=n),n!==void 0&&(t=T(i,n._$AS(i,t.values),n,s)),t}class ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=((t==null?void 0:t.creationScope)??v).importNode(e,!0);w.currentNode=n;let r=w.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new I(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new oe(r,this,t)),this._$AV.push(c),l=s[++a]}o!==(l==null?void 0:l.index)&&(r=w.nextNode(),o++)}return w.currentNode=v,n}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),j(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==g&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Yt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(v.createTextNode(t)),this._$AH=t}g(t){var r;const{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(Ct(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(e);else{const o=new ie(n,this),a=o.u(this.options);o.p(e),this.$(a),this._$AH=o}}_$AC(t){let e=Tt.get(t.strings);return e===void 0&&Tt.set(t.strings,e=new N(t)),e}T(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const r of t)n===e.length?e.push(s=new I(this.k(O()),this.k(O()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=T(this,t,e,0),o=!j(t)||t!==this._$AH&&t!==g,o&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=T(this,a[s+l],e,l),c===g&&(c=this._$AH[l]),o||(o=!j(c)||c!==this._$AH[l]),c===d?t=d:t!==d&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class se extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class ne extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class re extends G{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===g)return;const s=this._$AH,n=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==d&&(s===d||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class oe{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const nt=U.litHtmlPolyfillSupport;nt==null||nt(N,I),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.0.0");const ae=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let n=s._$litPart$;if(n===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=n=new I(t.insertBefore(O(),r),r,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return g}};C._$litElement$=!0,C.finalized=!0,(zt=globalThis.litElementHydrateSupport)==null||zt.call(globalThis,{LitElement:C});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:C}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:it},he=(i=le,t,e)=>{const{kind:s,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.C(o,void 0,i),a}}}if(s==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+s)};function V(i){return(t,e)=>typeof e=="object"?he(i,t,e):((s,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(n,r):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(i){return V({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F=i=>(...t)=>({_$litDirective$:i,values:t});let q=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(s=n._$AO)==null||s.call(n,t,!1),R(n,t);return!0},J=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Pt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),ue(t)}};function de(i){this._$AN!==void 0?(J(this),this._$AM=i,Pt(this)):this._$AM=i}function pe(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)R(s[r],!1),J(s[r]);else s!=null&&(R(s,!1),J(s));else R(this,i)}const ue=i=>{i.type==K.CHILD&&(i._$AP??(i._$AP=pe),i._$AQ??(i._$AQ=de))};class fe extends q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Pt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),e&&(R(this,t),J(this))}setValue(t){if(ce(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=()=>new $e;class $e{}const at=new WeakMap,ge=F(class extends fe{render(i){return d}update(i,[t]){var s;const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=(s=i.options)==null?void 0:s.host,this.ot(this.lt=i.element)),d}ot(i){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=at.get(t);e===void 0&&(e=new WeakMap,at.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){var i,t;return typeof this.G=="function"?(i=at.get(this.ct??globalThis))==null?void 0:i.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var _e=typeof global=="object"&&global&&global.Object===Object&&global;const ye=_e;var be=typeof self=="object"&&self&&self.Object===Object&&self,ve=ye||be||Function("return this")();const Ut=ve;var Ae=Ut.Symbol;const Z=Ae;var Ot=Object.prototype,Se=Ot.hasOwnProperty,we=Ot.toString,H=Z?Z.toStringTag:void 0;function Ee(i){var t=Se.call(i,H),e=i[H];try{i[H]=void 0;var s=!0}catch{}var n=we.call(i);return s&&(t?i[H]=e:delete i[H]),n}var xe=Object.prototype,Te=xe.toString;function Ce(i){return Te.call(i)}var ke="[object Null]",Pe="[object Undefined]",jt=Z?Z.toStringTag:void 0;function Ue(i){return i==null?i===void 0?Pe:ke:jt&&jt in Object(i)?Ee(i):Ce(i)}function Oe(i){return i!=null&&typeof i=="object"}var je="[object Symbol]";function Me(i){return typeof i=="symbol"||Oe(i)&&Ue(i)==je}var Ne=/\s/;function Ie(i){for(var t=i.length;t--&&Ne.test(i.charAt(t)););return t}var Re=/^\s+/;function He(i){return i&&i.slice(0,Ie(i)+1).replace(Re,"")}function lt(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var Mt=0/0,ze=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,De=/^0o[0-7]+$/i,Be=parseInt;function Nt(i){if(typeof i=="number")return i;if(Me(i))return Mt;if(lt(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=lt(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=He(i);var e=Le.test(i);return e||De.test(i)?Be(i.slice(2),e?2:8):ze.test(i)?Mt:+i}var We=function(){return Ut.Date.now()};const ht=We;var Ge="Expected a function",Ve=Math.max,Ke=Math.min;function Fe(i,t,e){var s,n,r,o,a,l,c=0,p=!1,h=!1,f=!0;if(typeof i!="function")throw new TypeError(Ge);t=Nt(t)||0,lt(e)&&(p=!!e.leading,h="maxWait"in e,r=h?Ve(Nt(e.maxWait)||0,t):r,f="trailing"in e?!!e.trailing:f);function m(u){var b=s,L=n;return s=n=void 0,c=u,o=i.apply(L,b),o}function k(u){return c=u,a=setTimeout(Q,t),p?m(u):o}function Ye(u){var b=u-l,L=u-c,Bt=t-b;return h?Ke(Bt,r-L):Bt}function Lt(u){var b=u-l,L=u-c;return l===void 0||b>=t||b<0||h&&L>=r}function Q(){var u=ht();if(Lt(u))return Dt(u);a=setTimeout(Q,Ye(u))}function Dt(u){return a=void 0,f&&s?m(u):(s=n=void 0,o)}function ti(){a!==void 0&&clearTimeout(a),c=0,s=l=n=a=void 0}function ei(){return a===void 0?o:Dt(ht())}function pt(){var u=ht(),b=Lt(u);if(s=arguments,n=this,l=u,b){if(a===void 0)return k(l);if(h)return clearTimeout(a),a=setTimeout(Q,t),m(l)}return a===void 0&&(a=setTimeout(Q,t)),o}return pt.cancel=ti,pt.flush=ei,pt}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends q{constructor(t){if(super(t),this.et=d,t.type!==K.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.vt=void 0,this.et=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ct.directiveName="unsafeHTML",ct.resultType=1;const It=F(ct);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=F(class extends q{constructor(i){var t;if(super(i),i.type!==K.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var s,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((s=this.st)!=null&&s.has(r))&&this.it.add(r);return this.render(t)}const e=i.element.classList;for(const r of this.it)r in t||(e.remove(r),this.it.delete(r));for(const r in t){const o=!!t[r];o===this.it.has(r)||(n=this.st)!=null&&n.has(r)||(o?(e.add(r),this.it.add(r)):(e.remove(r),this.it.delete(r)))}return g}}),Je=tt`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';
    font-feature-settings: normal;
    font-variation-settings: normal;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }
`;var z=globalThis&&globalThis.__decorate||function(i,t,e,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let E=class extends C{constructor(){super(),this.baseUrl="",this.hits=[],this.loading=!1,this.selectedIndex=0,this.inputRef=me(),this.fetchHits=Fe(async t=>{const s=await(await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/indices/post?keyword=${t}&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C/mark%3E`)).json();this.hits=s.hits||[],this.loading=!1},300),this.handleKeydown=t=>{const{key:e,ctrlKey:s}=t;if((e==="ArrowUp"||e==="k"&&s)&&(this.selectedIndex=Math.max(0,this.selectedIndex-1),t.preventDefault()),(e==="ArrowDown"||e==="j"&&s)&&(this.selectedIndex=Math.min(this.hits.length,this.selectedIndex+1),t.preventDefault()),e==="Enter"){const n=this.hits[this.selectedIndex-1];n&&this.handleOpenLink(n)}},this.addEventListener("keydown",this.handleKeydown)}render(){return S`
      <div class="search-form__input">
        <input
          @input="${this.onInput}"
          placeholder="输入关键词以搜索"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${ge(this.inputRef)}
        />
      </div>
      <div class="search-form__result">
        ${!this.loading&&this.hits.length===0?S`<div class="search-form__empty">
              <span>没有搜索结果</span>
            </div>`:""}
        ${this.loading?S`<div class="search-form__loading"><span>搜索中...</span></div>`:S`
              <ul class="search-form__result-wrapper" role="list">
                ${this.hits.map((t,e)=>S`<li @click="${()=>this.handleOpenLink(t)}">
                      <div
                        class="${qe({"search-form__result-item":!0,selected:e===this.selectedIndex-1})}"
                      >
                        <h2 class="search-form__result-item-title">
                          ${It(t.title)}
                        </h2>
                        <p class="search-form__result-item-content">
                          ${It(t.content)}
                        </p>
                      </div>
                    </li>`)}
              </ul>
            `}
      </div>
      <div class="search-form__commands">
        <div class="search-form__commands-item">
          <span>选择</span>
          <kbd> ↑ </kbd>
          <kbd> ↓ </kbd>
        </div>

        <div class="search-form__commands-item">
          <span>确认</span>
          <kbd> Enter </kbd>
        </div>

        <div class="search-form__commands-item">
          <span>关闭</span>
          <kbd> Esc </kbd>
        </div>
      </div>
    `}firstUpdated(t){var e;super.firstUpdated(t),(e=this.inputRef.value)==null||e.focus()}onInput(t){const s=t.target.value;if(this.selectedIndex=0,s===""){this.hits=[];return}this.loading=!0,this.fetchHits(s)}handleOpenLink(t){window.location.href=t.permalink}};E.styles=[Je,tt`
      :host * {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
          'Noto Color Emoji';
        font-feature-settings: normal;
        font-variation-settings: normal;
      }

      .search-form__input {
        border-bottom-width: 1px;
        border-color: rgb(243 244 246);
        padding: 0.625rem 1rem;
        position: sticky;
        top: 0;
        background-color: #fff;
      }

      .search-form__input input {
        width: 100%;
        padding: 0.25rem 0px;
        outline: 2px solid transparent;
        outline-offset: 2px;
        border: none;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .search-form__result {
        padding: 0.625rem 0.5rem;
      }

      .search-form__empty,
      .search-form__loading {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(107 114 128);
      }

      .search-form__result-wrapper {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: 0.25rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .search-form__result-wrapper li {
        cursor: pointer;
      }

      .search-form__result-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        border-radius: 0.375rem;
        background-color: rgb(249 250 251);
        padding: 0.5rem 0.625rem;
      }

      .search-form__result-item:hover,
      .search-form__result-item.selected {
        background-color: rgb(243 244 246);
      }

      .search-form__result-item-title {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        padding: 0;
        margin: 0;
      }

      .search-form__result-item-content {
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(75 85 99);
        padding: 0;
        margin: 0;
      }

      .search-form__commands {
        border-top-width: 1px;
        border-color: rgb(243 244 246);
        padding: 0.625rem 1rem;
        display: flex;
        justify-content: flex-end;
      }

      .search-form__commands-item {
        display: inline-flex;
        align-items: center;
        margin-left: 1.25rem;
      }

      .search-form__commands-item span {
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(75 85 99);
      }

      .search-form__commands-item kbd {
        color: rgb(75 85 99);
        font-size: 10px;
        text-align: center;
        padding: 0.125rem 0.3rem;
        border-width: 1px;
        border-radius: 0.25rem;
        min-width: 1.25rem;
        margin-left: 0.3rem;
        box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
      }
    `],z([V({type:String})],E.prototype,"baseUrl",void 0),z([ot()],E.prototype,"hits",void 0),z([ot()],E.prototype,"loading",void 0),z([ot()],E.prototype,"selectedIndex",void 0),E=z([kt("search-form")],E);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt="important",Ze=" !"+Rt,Qe=F(class extends q{constructor(i){var t;if(super(i),i.type!==K.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const s of this.ut)t[s]==null&&(this.ut.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const n=t[s];if(n!=null){this.ut.add(s);const r=typeof n=="string"&&n.endsWith(Ze);s.includes("-")||r?e.setProperty(s,r?n.slice(0,-11):n,r?Rt:""):e[s]=n}}return g}});var dt=globalThis&&globalThis.__decorate||function(i,t,e,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};$.SearchModal=class extends C{constructor(){super(...arguments),this.open=!1,this.baseUrl="",this.handleKeydown=t=>{const{key:e}=t;e==="Escape"&&(this.close(),t.preventDefault())}}render(){return S`<div
      class="modal__wrapper"
      style="${Qe({display:this.open?"flex":"none"})}"
    >
      <div class="modal__layer" @click="${this.close}"></div>
      <div class="modal__content">
        ${this.open?S`<search-form baseUrl=${this.baseUrl}></search-form>`:""}
      </div>
    </div>`}close(){this.open=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeydown),super.disconnectedCallback()}},$.SearchModal.styles=tt`
    .modal__wrapper {
      position: fixed;
      left: 0px;
      top: 0px;
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
      z-index: 999;
    }

    .modal__layer {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      flex: none;
      background-color: rgb(107 114 128 / 0.75);
      animation: fadeIn 0.15s both;
    }

    .modal__content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-radius: 5px;
      background-color: #fff;
      width: calc(100vw - 20px);
      max-height: calc(100vh - 5rem);
      max-width: 650px;
      overflow: auto;
      animation: fadeInUp 0.3s both;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 10%, 0);
      }

      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `,dt([V({type:Boolean})],$.SearchModal.prototype,"open",void 0),dt([V({type:String})],$.SearchModal.prototype,"baseUrl",void 0),$.SearchModal=dt([kt("search-modal")],$.SearchModal);const Ht=document.createElement("search-modal");document.body.append(Ht);function Xe(){Ht.open=!0}return $.open=Xe,Object.defineProperty($,Symbol.toStringTag,{value:"Module"}),$}({});
