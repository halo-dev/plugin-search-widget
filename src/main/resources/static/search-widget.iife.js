var SearchWidget=function(g){var Lt;"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,Q=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ct=new WeakMap;let dt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(e,t))}return t}toString(){return this.cssText}};const Wt=s=>new dt(typeof s=="string"?s:s+"",void 0,X),ut=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new dt(e,s,X)},Gt=(s,t)=>{if(Q)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=z.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}},pt=Q?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Wt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:Kt,getOwnPropertyDescriptor:Ft,getOwnPropertyNames:qt,getOwnPropertySymbols:Jt,getPrototypeOf:Zt}=Object,y=globalThis,ft=y.trustedTypes,Qt=ft?ft.emptyScript:"",Y=y.reactiveElementPolyfillSupport,O=(s,t)=>s,D={toAttribute(s,t){switch(t){case Boolean:s=s?Qt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},tt=(s,t)=>!Vt(s,t),$t={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Kt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=Ft(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const a=n==null?void 0:n.call(this);r.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$t}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,i=[...qt(e),...Jt(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(pt(n))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var r;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:D;this._$Em=n,this[n]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??tt)(n?r:this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(e)):this._$ET()}catch(n){throw t=!1,this._$ET(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[O("elementProperties")]=new Map,w[O("finalized")]=new Map,Y==null||Y({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,B=U.trustedTypes,mt=B?B.createPolicy("lit-html",{createHTML:s=>s}):void 0,gt="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,yt="?"+_,Xt=`<${yt}>`,b=document,M=()=>b.createComment(""),k=s=>s===null||typeof s!="object"&&typeof s!="function",_t=Array.isArray,Yt=s=>_t(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",et=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,bt=/>/g,A=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,St=/"/g,Et=/^(?:script|style|textarea|title)$/i,te=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),S=te(1),m=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),wt=new WeakMap,E=b.createTreeWalker(b,129);function Tt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}const ee=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=j;for(let a=0;a<e;a++){const h=s[a];let c,u,l=-1,f=0;for(;f<h.length&&(o.lastIndex=f,u=o.exec(h),u!==null);)f=o.lastIndex,o===j?u[1]==="!--"?o=vt:u[1]!==void 0?o=bt:u[2]!==void 0?(Et.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=n??j,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?A:u[3]==='"'?St:At):o===St||o===At?o=A:o===vt||o===bt?o=j:(o=A,n=void 0);const $=o===A&&s[a+1].startsWith("/>")?" ":"";r+=o===j?h+Xt:l>=0?(i.push(c),h.slice(0,l)+gt+h.slice(l)+_+$):h+_+(l===-2?a:$)}return[Tt(s,r+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[c,u]=ee(t,e);if(this.el=N.createElement(c,i),E.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=E.nextNode())!==null&&h.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const l of n.getAttributeNames())if(l.endsWith(gt)){const f=u[o++],$=n.getAttribute(l).split(_),P=/([.?@])?(.*)/.exec(f);h.push({type:1,index:r,name:P[2],strings:$,ctor:P[1]==="."?ie:P[1]==="?"?ne:P[1]==="@"?re:W}),n.removeAttribute(l)}else l.startsWith(_)&&(h.push({type:6,index:r}),n.removeAttribute(l));if(Et.test(n.tagName)){const l=n.textContent.split(_),f=l.length-1;if(f>0){n.textContent=B?B.emptyScript:"";for(let $=0;$<f;$++)n.append(l[$],M()),E.nextNode(),h.push({type:2,index:++r});n.append(l[f],M())}}}else if(n.nodeType===8)if(n.data===yt)h.push({type:2,index:r});else{let l=-1;for(;(l=n.data.indexOf(_,l+1))!==-1;)h.push({type:7,index:r}),l+=_.length-1}r++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function T(s,t,e=s,i){var o,a;if(t===m)return t;let n=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=k(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=T(s,n._$AS(s,t.values),n,i)),t}class se{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??b).importNode(e,!0);E.currentNode=n;let r=E.nextNode(),o=0,a=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new I(r,r.nextSibling,this,t):h.type===1?c=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(c=new oe(r,this,t)),this._$AV.push(c),h=i[++a]}o!==(h==null?void 0:h.index)&&(r=E.nextNode(),o++)}return E.currentNode=b,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),k(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==m&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Yt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var r;const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(Tt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(e);else{const o=new se(n,this),a=o.u(this.options);o.p(e),this.$(a),this._$AH=o}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new N(t)),e}T(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new I(this.k(M()),this.k(M()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=T(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const a=t;let h,c;for(t=r[0],h=0;h<r.length-1;h++)c=T(this,a[i+h],e,h),c===m&&(c=this._$AH[h]),o||(o=!k(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+r[h+1]),this._$AH[h]=c}o&&!n&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ie extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class ne extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class re extends W{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===m)return;const i=this._$AH,n=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class oe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const st=U.litHtmlPolyfillSupport;st==null||st(N,I),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.0.0");const ae=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=n=new I(t.insertBefore(M(),r),r,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let x=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return m}};x._$litElement$=!0,x.finalized=!0,(Lt=globalThis.litElementHydrateSupport)==null||Lt.call(globalThis,{LitElement:x});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:x}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:tt},le=(s=he,t,e)=>{const{kind:i,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,s)},init(a){return a!==void 0&&this.C(o,void 0,s),a}}}if(i==="setter"){const{name:o}=e;return function(a){const h=this[o];t.call(this,a),this.requestUpdate(o,h,s)}}throw Error("Unsupported decorator location: "+i)};function Ct(s){return(t,e)=>typeof e=="object"?le(s,t,e):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(s){return Ct({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},V=s=>(...t)=>({_$litDirective$:s,values:t});let K=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(s,t)=>{var i;const e=s._$AN;if(e===void 0)return!1;for(const n of e)(i=n._$AO)==null||i.call(n,t,!1),R(n,t);return!0},F=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Pt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),pe(t)}};function de(s){this._$AN!==void 0?(F(this),this._$AM=s,Pt(this)):this._$AM=s}function ue(s,t=!1,e=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let r=e;r<i.length;r++)R(i[r],!1),F(i[r]);else i!=null&&(R(i,!1),F(i));else R(this,s)}const pe=s=>{s.type==G.CHILD&&(s._$AP??(s._$AP=ue),s._$AQ??(s._$AQ=de))};class fe extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Pt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),e&&(R(this,t),F(this))}setValue(t){if(ce(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=()=>new me;class me{}const rt=new WeakMap,ge=V(class extends fe{render(s){return d}update(s,[t]){var i;const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=(i=s.options)==null?void 0:i.host,this.ot(this.lt=s.element)),d}ot(s){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=rt.get(t);e===void 0&&(e=new WeakMap,rt.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ct,s)}else this.G.value=s}get rt(){var s,t;return typeof this.G=="function"?(s=rt.get(this.ct??globalThis))==null?void 0:s.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ye=typeof global=="object"&&global&&global.Object===Object&&global;const _e=ye;var ve=typeof self=="object"&&self&&self.Object===Object&&self,be=_e||ve||Function("return this")();const Ot=be;var Ae=Ot.Symbol;const q=Ae;var Ut=Object.prototype,Se=Ut.hasOwnProperty,Ee=Ut.toString,H=q?q.toStringTag:void 0;function we(s){var t=Se.call(s,H),e=s[H];try{s[H]=void 0;var i=!0}catch{}var n=Ee.call(s);return i&&(t?s[H]=e:delete s[H]),n}var Te=Object.prototype,xe=Te.toString;function Ce(s){return xe.call(s)}var Pe="[object Null]",Oe="[object Undefined]",Mt=q?q.toStringTag:void 0;function Ue(s){return s==null?s===void 0?Oe:Pe:Mt&&Mt in Object(s)?we(s):Ce(s)}function Me(s){return s!=null&&typeof s=="object"}var ke="[object Symbol]";function je(s){return typeof s=="symbol"||Me(s)&&Ue(s)==ke}var Ne=/\s/;function Ie(s){for(var t=s.length;t--&&Ne.test(s.charAt(t)););return t}var Re=/^\s+/;function He(s){return s&&s.slice(0,Ie(s)+1).replace(Re,"")}function ot(s){var t=typeof s;return s!=null&&(t=="object"||t=="function")}var kt=0/0,Le=/^[-+]0x[0-9a-f]+$/i,ze=/^0b[01]+$/i,De=/^0o[0-7]+$/i,Be=parseInt;function jt(s){if(typeof s=="number")return s;if(je(s))return kt;if(ot(s)){var t=typeof s.valueOf=="function"?s.valueOf():s;s=ot(t)?t+"":t}if(typeof s!="string")return s===0?s:+s;s=He(s);var e=ze.test(s);return e||De.test(s)?Be(s.slice(2),e?2:8):Le.test(s)?kt:+s}var We=function(){return Ot.Date.now()};const at=We;var Ge="Expected a function",Ve=Math.max,Ke=Math.min;function Fe(s,t,e){var i,n,r,o,a,h,c=0,u=!1,l=!1,f=!0;if(typeof s!="function")throw new TypeError(Ge);t=jt(t)||0,ot(e)&&(u=!!e.leading,l="maxWait"in e,r=l?Ve(jt(e.maxWait)||0,t):r,f="trailing"in e?!!e.trailing:f);function $(p){var v=i,L=n;return i=n=void 0,c=p,o=s.apply(L,v),o}function P(p){return c=p,a=setTimeout(Z,t),u?$(p):o}function Xe(p){var v=p-h,L=p-c,Bt=t-v;return l?Ke(Bt,r-L):Bt}function zt(p){var v=p-h,L=p-c;return h===void 0||v>=t||v<0||l&&L>=r}function Z(){var p=at();if(zt(p))return Dt(p);a=setTimeout(Z,Xe(p))}function Dt(p){return a=void 0,f&&i?$(p):(i=n=void 0,o)}function Ye(){a!==void 0&&clearTimeout(a),c=0,i=h=n=a=void 0}function ts(){return a===void 0?o:Dt(at())}function lt(){var p=at(),v=zt(p);if(i=arguments,n=this,h=p,v){if(a===void 0)return P(h);if(l)return clearTimeout(a),a=setTimeout(Z,t),$(h)}return a===void 0&&(a=setTimeout(Z,t)),o}return lt.cancel=Ye,lt.flush=ts,lt}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht=class extends K{constructor(t){if(super(t),this.et=d,t.type!==G.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.vt=void 0,this.et=t;if(t===m)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ht.directiveName="unsafeHTML",ht.resultType=1;const Nt=V(ht);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=V(class extends K{constructor(s){var t;if(super(s),s.type!==G.ATTRIBUTE||s.name!=="class"||((t=s.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var i,n;if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((i=this.st)!=null&&i.has(r))&&this.it.add(r);return this.render(t)}const e=s.element.classList;for(const r of this.it)r in t||(e.remove(r),this.it.delete(r));for(const r in t){const o=!!t[r];o===this.it.has(r)||(n=this.st)!=null&&n.has(r)||(o?(e.add(r),this.it.add(r)):(e.remove(r),this.it.delete(r)))}return m}});var J=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let C=class extends x{constructor(){super(),this.hits=[],this.loading=!1,this.selectedIndex=0,this.inputRef=$e(),this.fetchHits=Fe(async t=>{const i=await(await fetch(`https://ryanc.cc/apis/api.halo.run/v1alpha1/indices/post?keyword=${t}&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C/mark%3E`)).json();this.hits=i.hits||[],this.loading=!1},300),this.handleKeydown=t=>{const{key:e,ctrlKey:i}=t;if((e==="ArrowUp"||e==="k"&&i)&&(this.selectedIndex=Math.max(0,this.selectedIndex-1),t.preventDefault()),(e==="ArrowDown"||e==="j"&&i)&&(this.selectedIndex=Math.min(this.hits.length,this.selectedIndex+1),t.preventDefault()),e==="Enter"){const n=this.hits[this.selectedIndex];n&&this.handleOpenLink(n)}},this.addEventListener("keydown",this.handleKeydown)}render(){return S`
      <div class="search-input">
        <input
          @input="${this.onInput}"
          placeholder="输入关键词以搜索"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${ge(this.inputRef)}
        />
      </div>
      <div class="search-result">
        ${!this.loading&&this.hits.length===0?S`<div class="search-empty">
              <span>没有搜索结果</span>
            </div>`:""}
        ${this.loading?S`<div class="search-loading"><span>搜索中...</span></div>`:S`
              <ul class="search-result-wrapper" role="list">
                ${this.hits.map((t,e)=>S`<li @click="${()=>this.handleOpenLink(t)}">
                      <div
                        class="${qe({"search-result-item":!0,selected:e===this.selectedIndex-1})}"
                      >
                        <h2 class="search-result-item-title">
                          ${Nt(t.title)}
                        </h2>
                        <p class="search-result-item-content">
                          ${Nt(t.content)}
                        </p>
                      </div>
                    </li>`)}
              </ul>
            `}
      </div>
    `}firstUpdated(t){var e;super.firstUpdated(t),(e=this.inputRef.value)==null||e.focus()}onInput(t){const i=t.target.value;if(this.selectedIndex=0,i===""){this.hits=[];return}this.loading=!0,this.fetchHits(i)}handleOpenLink(t){window.location.href=t.permalink}};C.styles=ut`
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

    .search-input {
      border-bottom-width: 1px;
      border-color: rgb(243 244 246);
      padding: 0.625rem 1rem;
      position: sticky;
      top: 0;
      background-color: #fff;
    }

    .search-input input {
      width: 100%;
      padding: 0.25rem 0px;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border: none;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .search-result {
      padding: 0.625rem 0.5rem;
    }

    .search-empty,
    .search-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgb(107 114 128);
    }

    .search-result-wrapper {
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

    .search-result-wrapper li {
      cursor: pointer;
    }

    .search-result-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      border-radius: 0.375rem;
      background-color: rgb(249 250 251);
      padding: 0.5rem 0.625rem;
    }

    .search-result-item:hover,
    .search-result-item.selected {
      background-color: rgb(243 244 246);
    }

    .search-result-item-title {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
    }

    .search-result-item-content {
      font-size: 0.75rem;
      line-height: 1rem;
      color: rgb(75 85 99);
      padding: 0;
      margin: 0;
    }
  `,J([nt()],C.prototype,"hits",void 0),J([nt()],C.prototype,"loading",void 0),J([nt()],C.prototype,"selectedIndex",void 0),C=J([xt("search-form")],C);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It="important",Je=" !"+It,Ze=V(class extends K{constructor(s){var t;if(super(s),s.type!==G.ATTRIBUTE||s.name!=="style"||((t=s.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const i of this.ut)t[i]==null&&(this.ut.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const n=t[i];if(n!=null){this.ut.add(i);const r=typeof n=="string"&&n.endsWith(Je);i.includes("-")||r?e.setProperty(i,r?n.slice(0,-11):n,r?It:""):e[i]=n}}return m}});var Rt=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};g.SearchModal=class extends x{constructor(){super(...arguments),this.open=!1,this.handleKeydown=t=>{const{key:e}=t;e==="Escape"&&(this.close(),t.preventDefault())}}render(){return S`<div
      class="modal-wrapper"
      style="${Ze({display:this.open?"flex":"none"})}"
    >
      <div class="modal-layer" @click="${this.close}"></div>
      <div class="modal-content">
        ${this.open?S`<search-form></search-form>`:""}
      </div>
    </div>`}close(){this.open=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeydown),super.disconnectedCallback()}},g.SearchModal.styles=ut`
    .modal-wrapper {
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

    .modal-layer {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      flex: none;
      background-color: rgb(107 114 128 / 0.75);
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.15s;
    }

    .modal-content {
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
    }
  `,Rt([Ct({type:Boolean})],g.SearchModal.prototype,"open",void 0),g.SearchModal=Rt([xt("search-modal")],g.SearchModal);const Ht=document.createElement("search-modal");document.body.append(Ht);function Qe(){Ht.open=!0}return g.open=Qe,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),g}({});
