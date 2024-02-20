var SearchWidget=function(g){var Ht;"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,X=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),mt=new WeakMap;let ft=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&mt.set(e,t))}return t}toString(){return this.cssText}};const Wt=i=>new ft(typeof i=="string"?i:i+"",void 0,Y),tt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new ft(e,i,Y)},Gt=(i,t)=>{if(X)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=D.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},pt=X?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Wt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:Kt,getOwnPropertyDescriptor:Ft,getOwnPropertyNames:qt,getOwnPropertySymbols:Jt,getPrototypeOf:Zt}=Object,_=globalThis,gt=_.trustedTypes,Qt=gt?gt.emptyScript:"",et=_.reactiveElementPolyfillSupport,P=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},it=(i,t)=>!Vt(i,t),$t={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Kt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=Ft(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$t}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,r=[...qt(e),...Jt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(pt(s))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:B).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:B;this._$Em=s,this[s]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r,s=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??it)(s?o:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$ES)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[P("elementProperties")]=new Map,x[P("finalized")]=new Map,et==null||et({ReactiveElement:x}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,W=U.trustedTypes,_t=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,vt="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+v,Xt=`<${bt}>`,y=document,O=()=>y.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",yt=Array.isArray,Yt=i=>yt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",rt=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,wt=/>/g,A=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Et=/"/g,xt=/^(?:script|style|textarea|title)$/i,te=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),w=te(1),$=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Tt=new WeakMap,S=y.createTreeWalker(y,129);function kt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(t):t}const ee=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":"",n=M;for(let a=0;a<e;a++){const l=i[a];let c,u,h=-1,f=0;for(;f<l.length&&(n.lastIndex=f,u=n.exec(l),u!==null);)f=n.lastIndex,n===M?u[1]==="!--"?n=At:u[1]!==void 0?n=wt:u[2]!==void 0?(xt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=A):u[3]!==void 0&&(n=A):n===A?u[0]===">"?(n=s??M,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?A:u[3]==='"'?Et:St):n===Et||n===St?n=A:n===At||n===wt?n=M:(n=A,s=void 0);const p=n===A&&i[a+1].startsWith("/>")?" ":"";o+=n===M?l+Xt:h>=0?(r.push(c),l.slice(0,h)+vt+l.slice(h)+v+p):l+v+(h===-2?a:p)}return[kt(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),r]};class z{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[c,u]=ee(t,e);if(this.el=z.createElement(c,r),S.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=S.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(vt)){const f=u[n++],p=s.getAttribute(h).split(v),C=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:C[2],strings:p,ctor:C[1]==="."?re:C[1]==="?"?se:C[1]==="@"?oe:G}),s.removeAttribute(h)}else h.startsWith(v)&&(l.push({type:6,index:o}),s.removeAttribute(h));if(xt.test(s.tagName)){const h=s.textContent.split(v),f=h.length-1;if(f>0){s.textContent=W?W.emptyScript:"";for(let p=0;p<f;p++)s.append(h[p],O()),S.nextNode(),l.push({type:2,index:++o});s.append(h[f],O())}}}else if(s.nodeType===8)if(s.data===bt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(v,h+1))!==-1;)l.push({type:7,index:o}),h+=v.length-1}o++}}static createElement(t,e){const r=y.createElement("template");return r.innerHTML=t,r}}function T(i,t,e=i,r){var n,a;if(t===$)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=j(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=T(i,s._$AS(i,t.values),s,r)),t}class ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??y).importNode(e,!0);S.currentNode=s;let o=S.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new N(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new ne(o,this,t)),this._$AV.push(c),l=r[++a]}n!==(l==null?void 0:l.index)&&(o=S.nextNode(),n++)}return S.currentNode=y,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),j(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==$&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Yt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=z.createElement(kt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new ie(s,this),a=n.u(this.options);n.p(e),this.$(a),this._$AH=n}}_$AC(t){let e=Tt.get(t.strings);return e===void 0&&Tt.set(t.strings,e=new z(t)),e}T(t){yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new N(this.k(O()),this.k(O()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=T(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==$,n&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=T(this,a[r+l],e,l),c===$&&(c=this._$AH[l]),n||(n=!j(c)||c!==this._$AH[l]),c===d?t=d:t!==d&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class re extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class se extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class oe extends G{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===$)return;const r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ne{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const st=U.litHtmlPolyfillSupport;st==null||st(z,N),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.0.0");const ae=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new N(t.insertBefore(O(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return $}};k._$litElement$=!0,k.finalized=!0,(Ht=globalThis.litElementHydrateSupport)==null||Ht.call(globalThis,{LitElement:k});const ot=globalThis.litElementPolyfillSupport;ot==null||ot({LitElement:k}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:it},he=(i=le,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,i)},init(a){return a!==void 0&&this.C(n,void 0,i),a}}}if(r==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,i)}}throw Error("Unsupported decorator location: "+r)};function V(i){return(t,e)=>typeof e=="object"?he(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(i){return V({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F=i=>(...t)=>({_$litDirective$:i,values:t});let q=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=(i,t)=>{var r;const e=i._$AN;if(e===void 0)return!1;for(const s of e)(r=s._$AO)==null||r.call(s,t,!1),I(s,t);return!0},J=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Pt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),me(t)}};function de(i){this._$AN!==void 0?(J(this),this._$AM=i,Pt(this)):this._$AM=i}function ue(i,t=!1,e=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=e;o<r.length;o++)I(r[o],!1),J(r[o]);else r!=null&&(I(r,!1),J(r));else I(this,i)}const me=i=>{i.type==K.CHILD&&(i._$AP??(i._$AP=ue),i._$AQ??(i._$AQ=de))};class fe extends q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Pt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),e&&(I(this,t),J(this))}setValue(t){if(ce(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=()=>new ge;class ge{}const at=new WeakMap,$e=F(class extends fe{render(i){return d}update(i,[t]){var r;const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=(r=i.options)==null?void 0:r.host,this.ot(this.lt=i.element)),d}ot(i){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=at.get(t);e===void 0&&(e=new WeakMap,at.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){var i,t;return typeof this.G=="function"?(i=at.get(this.ct??globalThis))==null?void 0:i.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var _e=typeof global=="object"&&global&&global.Object===Object&&global;const ve=_e;var be=typeof self=="object"&&self&&self.Object===Object&&self,ye=ve||be||Function("return this")();const Ut=ye;var Ae=Ut.Symbol;const Z=Ae;var Ot=Object.prototype,we=Ot.hasOwnProperty,Se=Ot.toString,R=Z?Z.toStringTag:void 0;function Ee(i){var t=we.call(i,R),e=i[R];try{i[R]=void 0;var r=!0}catch{}var s=Se.call(i);return r&&(t?i[R]=e:delete i[R]),s}var xe=Object.prototype,Te=xe.toString;function ke(i){return Te.call(i)}var Ce="[object Null]",Pe="[object Undefined]",jt=Z?Z.toStringTag:void 0;function Ue(i){return i==null?i===void 0?Pe:Ce:jt&&jt in Object(i)?Ee(i):ke(i)}function Oe(i){return i!=null&&typeof i=="object"}var je="[object Symbol]";function Me(i){return typeof i=="symbol"||Oe(i)&&Ue(i)==je}var ze=/\s/;function Ne(i){for(var t=i.length;t--&&ze.test(i.charAt(t)););return t}var Ie=/^\s+/;function Re(i){return i&&i.slice(0,Ne(i)+1).replace(Ie,"")}function lt(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var Mt=0/0,He=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,De=/^0o[0-7]+$/i,Be=parseInt;function zt(i){if(typeof i=="number")return i;if(Me(i))return Mt;if(lt(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=lt(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=Re(i);var e=Le.test(i);return e||De.test(i)?Be(i.slice(2),e?2:8):He.test(i)?Mt:+i}var We=function(){return Ut.Date.now()};const ht=We;var Ge="Expected a function",Ve=Math.max,Ke=Math.min;function Fe(i,t,e){var r,s,o,n,a,l,c=0,u=!1,h=!1,f=!0;if(typeof i!="function")throw new TypeError(Ge);t=zt(t)||0,lt(e)&&(u=!!e.leading,h="maxWait"in e,o=h?Ve(zt(e.maxWait)||0,t):o,f="trailing"in e?!!e.trailing:f);function p(m){var b=r,L=s;return r=s=void 0,c=m,n=i.apply(L,b),n}function C(m){return c=m,a=setTimeout(Q,t),u?p(m):n}function Ye(m){var b=m-l,L=m-c,Bt=t-b;return h?Ke(Bt,o-L):Bt}function Lt(m){var b=m-l,L=m-c;return l===void 0||b>=t||b<0||h&&L>=o}function Q(){var m=ht();if(Lt(m))return Dt(m);a=setTimeout(Q,Ye(m))}function Dt(m){return a=void 0,f&&r?p(m):(r=s=void 0,n)}function ti(){a!==void 0&&clearTimeout(a),c=0,r=l=s=a=void 0}function ei(){return a===void 0?n:Dt(ht())}function ut(){var m=ht(),b=Lt(m);if(r=arguments,s=this,l=m,b){if(a===void 0)return C(l);if(h)return clearTimeout(a),a=setTimeout(Q,t),p(l)}return a===void 0&&(a=setTimeout(Q,t)),n}return ut.cancel=ti,ut.flush=ei,ut}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends q{constructor(t){if(super(t),this.et=d,t.type!==K.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.vt=void 0,this.et=t;if(t===$)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ct.directiveName="unsafeHTML",ct.resultType=1;const Nt=F(ct);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=F(class extends q{constructor(i){var t;if(super(i),i.type!==K.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var r,s;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.it)o in t||(e.remove(o),this.it.delete(o));for(const o in t){const n=!!t[o];n===this.it.has(o)||(s=this.st)!=null&&s.has(o)||(n?(e.add(o),this.it.add(o)):(e.remove(o),this.it.delete(o)))}return $}}),Je=tt`
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
`;var H=globalThis&&globalThis.__decorate||function(i,t,e,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o};let E=class extends k{constructor(){super(),this.baseUrl="",this.hits=[],this.loading=!1,this.selectedIndex=0,this.inputRef=pe(),this.fetchHits=Fe(async t=>{const r=await(await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/indices/post?keyword=${t}&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C/mark%3E`)).json();this.hits=r.hits||[],this.loading=!1},300),this.handleKeydown=t=>{const{key:e,ctrlKey:r}=t;if((e==="ArrowUp"||e==="k"&&r)&&(this.selectedIndex=Math.max(0,this.selectedIndex-1),t.preventDefault()),(e==="ArrowDown"||e==="j"&&r)&&(this.selectedIndex=Math.min(this.hits.length,this.selectedIndex+1),t.preventDefault()),e==="Enter"){const s=this.hits[this.selectedIndex-1];s&&this.handleOpenLink(s)}},this.addEventListener("keydown",this.handleKeydown)}render(){return w`
      <div class="search-form__input">
        <input
          @input="${this.onInput}"
          placeholder="输入关键词以搜索"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${$e(this.inputRef)}
        />
      </div>
      <div class="search-form__result">
        ${!this.loading&&this.hits.length===0?w`<div class="search-form__empty">
              <span>没有搜索结果</span>
            </div>`:""}
        ${this.loading?w`<div class="search-form__loading"><span>搜索中...</span></div>`:w`
              <ul class="search-form__result-wrapper" role="list">
                ${this.hits.map((t,e)=>w`<li @click="${()=>this.handleOpenLink(t)}">
                      <div
                        class="${qe({"search-form__result-item":!0,selected:e===this.selectedIndex-1})}"
                      >
                        <h2 class="search-form__result-item-title">
                          ${Nt(t.title)}
                        </h2>
                        <p class="search-form__result-item-content">
                          ${Nt(t.content)}
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
    `}firstUpdated(t){var e;super.firstUpdated(t),(e=this.inputRef.value)==null||e.focus()}onInput(t){const r=t.target.value;if(this.selectedIndex=0,r===""){this.hits=[];return}this.loading=!0,this.fetchHits(r)}handleOpenLink(t){window.location.href=t.permalink}};E.styles=[Je,tt`
      :host {
          --color-form-input-bg: var(
                  --halo-search-widget-color-form-input-bg,
                  #fff
          );
          --color-form-input: var(--halo-search-widget-color-form-input, #333);
          --color-form-input-placeholder: var(
                  --halo-search-widget-color-form-input-placeholder,
                  rgb(107 114 128)
          );
          --color-form-divider: var(
                  --halo-search-widget-color-form-divider,
                  rgb(243 244 246)
          );
          --color-result-empty: var(
                  --halo-search-widget-color-result-empty,
                  rgb(107 114 128)
          );
          --color-result-item-bg: var(
                  --halo-search-widget-color-result-item-bg,
                  rgb(249 250 251)
          );
          --color-result-item-hover-bg: var(
                  --halo-search-widget-color-result-item-hover-bg,
                  rgb(243 244 246)
          );
          --color-result-item-title: var(
                  --halo-search-widget-color-result-item-title,
                  #333
          );
          --color-result-item-content: var(
                  --halo-search-widget-color-result-item-content,
                  rgb(75, 85, 99)
          );
          --color-command-kbd-item: var(
                  --halo-search-widget-color-command-kbd-item,
                  #333
          );
          --color-command-kbd-border: var(
                  --halo-search-widget-color-command-kbd-border,
                  #e5e7eb
          );
          --font-size-search-form-input: var(
                  --halo-search-widget-font-size-search-form-input,
                  1rem
          );
          --line-height-search-form-input: var(
                  --halo-search-widget-line-height-search-form-input,
                  1.5rem
          );
          --font-size-search-form-result-item-title: var(
                  --halo-search-widget-font-size-search-form-result-item-title,
                  0.875rem
          );
          --line-height-search-form-result-item-title: var(
                  --halo-search-widget-line-height-search-form-result-item-title,
                  1.25rem
          );
          --font-size-search-form-result-item-content: var(
                  --halo-search-widget-font-size-search-form-result-item-content,
                  0.75rem
          );
          --line-height-search-form-result-item-content: var(
                  --halo-search-widget-line-height-search-form-result-item-content,
                  1rem
          );
          --font-size-search-form-empty: var(
                  --halo-search-widget-font-size-search-form-empty,
                  0.875rem
          );
          --line-height-search-form-empty: var(
                  --halo-search-widget-line-height-search-form-empty,
                  1.25rem
          );
          --font-size-search-form-loading: var(
                  --halo-search-widget-font-size-search-form-loading,
                  0.875rem
          );
          --line-height-search-form-loading: var(
                  --halo-search-widget-line-height-search-form-loading,
                  1.25rem
          );
          --font-size-search-form-commands-item: var(
                  --halo-search-widget-font-size-search-form-commands-item,
                  0.75rem
          );
          --line-height-search-form-commands-item: var(
                  --halo-search-widget-line-height-search-commands-item,
                  1rem
          );
        --font-size-search-form-commands-item-kbd: var(
                  --halo-search-widget-font-size-search-form-commands-item-kbd,
                  10px
        );
        --min-width-search-form-commands-item-kbd: var(
                  --halo-search-widget-min-width-search-commands-item-kbd,
                  1.25rem
        );
          --font-family-custom-sreach-form: var(
                  --halo-search-widget-font-family-search-form,
                  custom-font
          );
      }

      :host * {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
        font-family: var(--font-family-custom-sreach-form), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
          'Noto Color Emoji';
        font-feature-settings: normal;
        font-variation-settings: normal;
      }

      .search-form__input {
        border-bottom-width: 1px;
        border-color: var(--color-form-divider);
        padding: 0.625rem 1rem;
        position: sticky;
        top: 0;
        background-color: var(--color-form-input-bg);
      }

      .search-form__input input {
        width: 100%;
        padding: 0.25rem 0px;
        outline: 2px solid transparent;
        outline-offset: 2px;
        border: none;
        font-size: var(--font-size-search-form-input);
        line-height: var(--line-height-search-form-input);
        background-color: var(--color-form-input-bg);
        color: var(--color-form-input);
      }

      .search-form__input input::placeholder {
        color: var(--color-form-input-placeholder);
      }

      .search-form__result {
        padding: 0.625rem 0.5rem;
      }

      .search-form__empty,
      .search-form__loading {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-search-form-empty);
        line-height: var(--line-height-search-form-empty);
        color: var(--color-result-empty);
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
        background-color: var(--color-result-item-bg);
        padding: 0.5rem 0.625rem;
      }

      .search-form__result-item:hover,
      .search-form__result-item.selected {
        background-color: var(--color-result-item-hover-bg);
      }

      .search-form__result-item-title {
        font-size: var(--font-size-search-form-result-item-title);
        line-height: var(--line-height-search-form-result-item-title);
        font-weight: 600;
        padding: 0;
        margin: 0;
        color: var(--color-result-item-title);
      }

      .search-form__result-item-content {
        font-size: var(--font-size-search-form-result-item-content);
        line-height: var(--line-height-search-form-result-item-content);
        color: var(--color-result-item-content);
        padding: 0;
        margin: 0;
      }

      .search-form__result-item-content img {
        width: 50%;
      }

      .search-form__commands {
        border-top-width: 1px;
        border-color: var(--color-form-divider);
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
        font-size: var(--font-size-search-form-commands-item);
        line-height: var(--line-height-search-form-commands-item);
        color: var(--color-command-kbd-item);
      }

      .search-form__commands-item kbd {
        color: var(--color-command-kbd-item);
        font-size: var(--font-size-search-form-commands-item-kbd);
        text-align: center;
        padding: 0.125rem 0.3rem;
        border-width: 1px;
        border-radius: 0.25rem;
        border-color: var(--color-command-kbd-border);
        min-width: var(--min-width-search-form-commands-item-kbd);
        margin-left: 0.3rem;
        box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
      }
    `],H([V({type:String})],E.prototype,"baseUrl",void 0),H([nt()],E.prototype,"hits",void 0),H([nt()],E.prototype,"loading",void 0),H([nt()],E.prototype,"selectedIndex",void 0),E=H([Ct("search-form")],E);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It="important",Ze=" !"+It,Qe=F(class extends q{constructor(i){var t;if(super(i),i.type!==K.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const r=i[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const r of this.ut)t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const s=t[r];if(s!=null){this.ut.add(r);const o=typeof s=="string"&&s.endsWith(Ze);r.includes("-")||o?e.setProperty(r,o?s.slice(0,-11):s,o?It:""):e[r]=s}}return $}});var dt=globalThis&&globalThis.__decorate||function(i,t,e,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o};g.SearchModal=class extends k{constructor(){super(...arguments),this.open=!1,this.baseUrl="",this.handleKeydown=t=>{const{key:e}=t;e==="Escape"&&(this.close(),t.preventDefault())}}render(){return w`<div
      class="modal__wrapper"
      style="${Qe({display:this.open?"flex":"none"})}"
    >
      <div class="modal__layer" @click="${this.close}"></div>
      <div class="modal__content">
        ${this.open?w`<search-form baseUrl=${this.baseUrl}></search-form>`:""}
      </div>
    </div>`}close(){this.open=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeydown),super.disconnectedCallback()}},g.SearchModal.styles=tt`
    :host {
      --color-modal-layer: var(
        --halo-search-widget-color-modal-layer,
        rgb(107 114 128 / 0.75)
      );
      --color-modal-content-bg: var(
        --halo-search-widget-color-modal-content-bg,
        #fff
      );
    }

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
      background-color: var(--color-modal-layer);
      animation: fadeIn 0.15s both;
    }

    .modal__content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-radius: 5px;
      background-color: var(--color-modal-content-bg);
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
  `,dt([V({type:Boolean})],g.SearchModal.prototype,"open",void 0),dt([V({type:String})],g.SearchModal.prototype,"baseUrl",void 0),g.SearchModal=dt([Ct("search-modal")],g.SearchModal);const ii="",Rt=document.createElement("search-modal");document.body.append(Rt);function Xe(){Rt.open=!0}return g.open=Xe,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),g}({});
