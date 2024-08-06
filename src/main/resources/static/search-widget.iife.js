var SearchWidget=function(g){var Dt;"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,tt=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),ft=new WeakMap;let mt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ft.set(e,t))}return t}toString(){return this.cssText}};const Vt=i=>new mt(typeof i=="string"?i:i+"",void 0,et),W=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new mt(e,i,et)},Kt=(i,t)=>{if(tt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=B.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},gt=tt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ft,defineProperty:qt,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Zt,getPrototypeOf:Qt}=Object,$=globalThis,_t=$.trustedTypes,Xt=_t?_t.emptyScript:"",it=$.reactiveElementPolyfillSupport,P=(i,t)=>i,Y={toAttribute(i,t){switch(t){case Boolean:i=i?Xt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},st=(i,t)=>!Ft(i,t),$t={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:st};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&qt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=Gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const a=r==null?void 0:r.call(this);o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$t}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Jt(e),...Zt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(gt(r))}else t!==void 0&&e.push(gt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:Y).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:Y;this._$Em=r,this[r]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??st)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[P("elementProperties")]=new Map,x[P("finalized")]=new Map,it==null||it({ReactiveElement:x}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,V=j.trustedTypes,bt=V?V.createPolicy("lit-html",{createHTML:i=>i}):void 0,yt="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,vt="?"+b,te=`<${vt}>`,A=document,M=()=>A.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",At=Array.isArray,ee=i=>At(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",rt=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,St=/>/g,w=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,xt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,ie=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),S=ie(1),_=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Ct=new WeakMap,E=A.createTreeWalker(A,129);function kt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const se=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":"",n=N;for(let a=0;a<e;a++){const l=i[a];let h,p,c=-1,f=0;for(;f<l.length&&(n.lastIndex=f,p=n.exec(l),p!==null);)f=n.lastIndex,n===N?p[1]==="!--"?n=wt:p[1]!==void 0?n=St:p[2]!==void 0?(Tt.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=w):p[3]!==void 0&&(n=w):n===w?p[0]===">"?(n=r??N,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?w:p[3]==='"'?xt:Et):n===xt||n===Et?n=w:n===wt||n===St?n=N:(n=w,r=void 0);const m=n===w&&i[a+1].startsWith("/>")?" ":"";o+=n===N?l+te:c>=0?(s.push(h),l.slice(0,c)+yt+l.slice(c)+b+m):l+b+(c===-2?a:m)}return[kt(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[h,p]=se(t,e);if(this.el=I.createElement(h,s),E.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=E.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(yt)){const f=p[n++],m=r.getAttribute(c).split(b),U=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:U[2],strings:m,ctor:U[1]==="."?oe:U[1]==="?"?ne:U[1]==="@"?ae:K}),r.removeAttribute(c)}else c.startsWith(b)&&(l.push({type:6,index:o}),r.removeAttribute(c));if(Tt.test(r.tagName)){const c=r.textContent.split(b),f=c.length-1;if(f>0){r.textContent=V?V.emptyScript:"";for(let m=0;m<f;m++)r.append(c[m],M()),E.nextNode(),l.push({type:2,index:++o});r.append(c[f],M())}}}else if(r.nodeType===8)if(r.data===vt)l.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(b,c+1))!==-1;)l.push({type:7,index:o}),c+=b.length-1}o++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function T(i,t,e=i,s){var n,a;if(t===_)return t;let r=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=R(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=T(i,r._$AS(i,t.values),r,s)),t}class re{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??A).importNode(e,!0);E.currentNode=r;let o=E.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new H(o,o.nextSibling,this,t):l.type===1?h=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(h=new le(o,this,t)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(o=E.nextNode(),n++)}return E.currentNode=A,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),R(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ee(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(kt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const n=new re(r,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new I(t)),e}k(t){At(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new H(this.S(M()),this.S(M()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=T(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==_,n&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=T(this,a[s+l],e,l),h===_&&(h=this._$AH[l]),n||(n=!R(h)||h!==this._$AH[l]),h===d?t=d:t!==d&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!r&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class oe extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class ne extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ae extends K{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===_)return;const s=this._$AH,r=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class le{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const ot=j.litHtmlPolyfillSupport;ot==null||ot(I,H),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.1.2");const ce=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new H(t.insertBefore(M(),o),o,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ce(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _}};C._$litElement$=!0,C.finalized=!0,(Dt=globalThis.litElementHydrateSupport)==null||Dt.call(globalThis,{LitElement:C});const nt=globalThis.litElementPolyfillSupport;nt==null||nt({LitElement:C}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:st},de=(i=he,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,i)},init(a){return a!==void 0&&this.P(n,void 0,i),a}}}if(s==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,i)}}throw Error("Unsupported decorator location: "+s)};function k(i){return(t,e)=>typeof e=="object"?de(i,t,e):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(i){return k({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},q=i=>(...t)=>({_$litDirective$:i,values:t});let G=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=q(class extends G{constructor(i){var t;if(super(i),i.type!==F.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var s,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(n?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return _}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const r of e)(s=r._$AO)==null||s.call(r,t,!1),z(r,t);return!0},J=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Ut=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),ge(t)}};function fe(i){this._$AN!==void 0?(J(this),this._$AM=i,Ut(this)):this._$AM=i}function me(i,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)z(s[o],!1),J(s[o]);else s!=null&&(z(s,!1),J(s));else z(this,i)}const ge=i=>{i.type==F.CHILD&&(i._$AP??(i._$AP=me),i._$AQ??(i._$AQ=fe))};class _e extends G{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Ut(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),e&&(z(this,t),J(this))}setValue(t){if(ue(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=()=>new be;class be{}const lt=new WeakMap,ye=q(class extends _e{render(i){return d}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),d}rt(i){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=lt.get(t);e===void 0&&(e=new WeakMap,lt.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=lt.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends G{constructor(t){if(super(t),this.it=d,t.type!==F.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ct.directiveName="unsafeHTML",ct.resultType=1;const Pt=q(ct);var ve=typeof global=="object"&&global&&global.Object===Object&&global;const Ae=ve;var we=typeof self=="object"&&self&&self.Object===Object&&self,Se=Ae||we||Function("return this")();const jt=Se;var Ee=jt.Symbol;const Z=Ee;var Mt=Object.prototype,xe=Mt.hasOwnProperty,Te=Mt.toString,L=Z?Z.toStringTag:void 0;function Ce(i){var t=xe.call(i,L),e=i[L];try{i[L]=void 0;var s=!0}catch{}var r=Te.call(i);return s&&(t?i[L]=e:delete i[L]),r}var ke=Object.prototype,Oe=ke.toString;function Ue(i){return Oe.call(i)}var Pe="[object Null]",je="[object Undefined]",Rt=Z?Z.toStringTag:void 0;function Me(i){return i==null?i===void 0?je:Pe:Rt&&Rt in Object(i)?Ce(i):Ue(i)}function Re(i){return i!=null&&typeof i=="object"}var Ne="[object Symbol]";function Ie(i){return typeof i=="symbol"||Re(i)&&Me(i)==Ne}var He=/\s/;function ze(i){for(var t=i.length;t--&&He.test(i.charAt(t)););return t}var Le=/^\s+/;function De(i){return i&&i.slice(0,ze(i)+1).replace(Le,"")}function ht(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var Nt=0/0,Be=/^[-+]0x[0-9a-f]+$/i,We=/^0b[01]+$/i,Ye=/^0o[0-7]+$/i,Ve=parseInt;function It(i){if(typeof i=="number")return i;if(Ie(i))return Nt;if(ht(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=ht(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=De(i);var e=We.test(i);return e||Ye.test(i)?Ve(i.slice(2),e?2:8):Be.test(i)?Nt:+i}var Ke=function(){return jt.Date.now()};const dt=Ke;var Fe="Expected a function",qe=Math.max,Ge=Math.min;function Je(i,t,e){var s,r,o,n,a,l,h=0,p=!1,c=!1,f=!0;if(typeof i!="function")throw new TypeError(Fe);t=It(t)||0,ht(e)&&(p=!!e.leading,c="maxWait"in e,o=c?qe(It(e.maxWait)||0,t):o,f="trailing"in e?!!e.trailing:f);function m(u){var v=s,D=r;return s=r=void 0,h=u,n=i.apply(D,v),n}function U(u){return h=u,a=setTimeout(X,t),p?m(u):n}function ti(u){var v=u-l,D=u-h,Yt=t-v;return c?Ge(Yt,o-D):Yt}function Bt(u){var v=u-l,D=u-h;return l===void 0||v>=t||v<0||c&&D>=o}function X(){var u=dt();if(Bt(u))return Wt(u);a=setTimeout(X,ti(u))}function Wt(u){return a=void 0,f&&s?m(u):(s=r=void 0,n)}function ei(){a!==void 0&&clearTimeout(a),h=0,s=l=r=a=void 0}function ii(){return a===void 0?n:Wt(dt())}function ut(){var u=dt(),v=Bt(u);if(s=arguments,r=this,l=u,v){if(a===void 0)return U(l);if(c)return clearTimeout(a),a=setTimeout(X,t),m(l)}return a===void 0&&(a=setTimeout(X,t)),n}return ut.cancel=ei,ut.flush=ii,ut}const Ht=W`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  :host {
    font-size: var(--halo-search-widget-base-font-size, 1rem);
    font-family: var(
      --base-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Helvetica Neue,
      Arial,
      Noto Sans,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      Segoe UI Symbol,
      'Noto Color Emoji'
    );
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-feature-settings: normal;
    font-variation-settings: normal;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
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
`,zt=W`
  :host {
    --base-font-size: var(--halo-search-widget-base-font-size, 1rem);
    --base-border-radius: var(--halo-search-widget-base-border-radius, 0.4em);
    --base-font-family: var(
      --halo-search-widget-base-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Helvetica Neue,
      Arial,
      Noto Sans,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      Segoe UI Symbol,
      'Noto Color Emoji'
    );
    --color-modal-layer: var(
      --halo-search-widget-color-modal-layer,
      rgb(107 114 128 / 0.75)
    );
    --color-modal-content-bg: var(
      --halo-search-widget-color-modal-content-bg,
      #fff
    );
    --color-form-input-bg: var(--halo-search-widget-color-form-input-bg, #fff);
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
  }
`;var O=globalThis&&globalThis.__decorate||function(i,t,e,s){var r=arguments.length,o=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let y=class extends C{constructor(){super(),this.baseUrl="",this.options={},this.loading=!1,this.selectedIndex=0,this.inputRef=$e(),this.fetchHits=Je(async t=>{const e={...this.options,highlightPostTag:"</mark>",highlightPreTag:"<mark>",keyword:t,limit:20},r=await(await fetch("/apis/api.halo.run/v1alpha1/indices/-/search",{headers:{"Content-Type":"application/json"},body:JSON.stringify(e),method:"post"})).json();this.searchResult=r,this.loading=!1},300),this.handleKeydown=t=>{var r,o,n,a;const{key:e,ctrlKey:s}=t;if((e==="ArrowUp"||e==="k"&&s)&&(this.selectedIndex=Math.max(0,this.selectedIndex-1),t.preventDefault()),(e==="ArrowDown"||e==="j"&&s)&&(this.selectedIndex=Math.min(((o=(r=this.searchResult)==null?void 0:r.hits)==null?void 0:o.length)||0,this.selectedIndex+1),t.preventDefault()),e==="Enter"){const l=(a=(n=this.searchResult)==null?void 0:n.hits)==null?void 0:a[this.selectedIndex-1];l&&this.handleOpenLink(l)}},this.addEventListener("keydown",this.handleKeydown)}render(){var t,e,s,r;return S`
      <div class="search-form__input">
        <input
          @input="${this.onInput}"
          placeholder="输入关键词以搜索"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${ye(this.inputRef)}
        />
      </div>
      <div class="search-form__result">
        ${!this.loading&&((e=(t=this.searchResult)==null?void 0:t.hits)==null?void 0:e.length)===0?S`<div class="search-form__empty">
              <span>没有搜索结果</span>
            </div>`:""}
        ${this.loading?S`<div class="search-form__loading"><span>搜索中...</span></div>`:S`
              <ul class="search-form__result-wrapper" role="list">
                ${(r=(s=this.searchResult)==null?void 0:s.hits)==null?void 0:r.map((o,n)=>S`<li @click="${()=>this.handleOpenLink(o)}">
                      <div
                        class="${pe({"search-form__result-item":!0,selected:n===this.selectedIndex-1})}"
                      >
                        <h2 class="search-form__result-item-title">
                          ${Pt(o.title)}
                        </h2>
                        <p class="search-form__result-item-content">
                          ${Pt(o.content)}
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
    `}firstUpdated(t){var e;super.firstUpdated(t),(e=this.inputRef.value)==null||e.focus()}onInput(t){const s=t.target.value;if(this.selectedIndex=0,s===""){this.searchResult=void 0;return}this.loading=!0,this.fetchHits(s)}handleOpenLink(t){window.location.href=t.permalink}};y.styles=[zt,Ht,W`
      .search-form__input {
        border-bottom-width: 1px;
        border-color: var(--color-form-divider);
        padding: 0.625em 1em;
        position: sticky;
        top: 0;
        background-color: var(--color-form-input-bg);
      }

      .search-form__input input {
        width: 100%;
        padding: 0.25em 0px;
        outline: 2px solid transparent;
        outline-offset: 2px;
        border: none;
        font-size: 1em;
        line-height: 1.5em;
        background-color: var(--color-form-input-bg);
        color: var(--color-form-input);
      }

      .search-form__input input::placeholder {
        color: var(--color-form-input-placeholder);
      }

      .search-form__result {
        padding: 0.625em 0.5em;
      }

      .search-form__empty,
      .search-form__loading {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875em;
        line-height: 1.25em;
        color: var(--color-result-empty);
      }

      .search-form__result-wrapper {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: 0.25em;
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
        gap: 0.25em;
        border-radius: 0.375em;
        background-color: var(--color-result-item-bg);
        padding: 0.5em 0.625em;
      }

      .search-form__result-item:hover,
      .search-form__result-item.selected {
        background-color: var(--color-result-item-hover-bg);
      }

      .search-form__result-item-title {
        font-size: 0.875em;
        line-height: 1.25em;
        font-weight: 600;
        padding: 0;
        margin: 0;
        color: var(--color-result-item-title);
      }

      .search-form__result-item-content {
        font-size: 0.75em;
        line-height: 1em;
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
        padding: 0.625em 1em;
        display: flex;
        justify-content: flex-end;
      }

      .search-form__commands-item {
        display: inline-flex;
        align-items: center;
        margin-left: 1.25em;
      }

      .search-form__commands-item span {
        font-size: 0.75em;
        line-height: 1em;
        color: var(--color-command-kbd-item);
      }

      .search-form__commands-item kbd {
        color: var(--color-command-kbd-item);
        font-size: 10px;
        text-align: center;
        padding: 0.125em 0.3em;
        border-width: 1px;
        border-radius: 0.25em;
        border-color: var(--color-command-kbd-border);
        min-width: 1.25em;
        margin-left: 0.3em;
        box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
      }
    `],O([k({type:String})],y.prototype,"baseUrl",void 0),O([k({type:Object})],y.prototype,"options",void 0),O([at()],y.prototype,"searchResult",void 0),O([at()],y.prototype,"loading",void 0),O([at()],y.prototype,"selectedIndex",void 0),y=O([Ot("search-form")],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt="important",Ze=" !"+Lt,Qe=q(class extends G{constructor(i){var t;if(super(i),i.type!==F.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const r=t[s];if(r!=null){this.ft.add(s);const o=typeof r=="string"&&r.endsWith(Ze);s.includes("-")||o?e.setProperty(s,o?r.slice(0,-11):r,o?Lt:""):e[s]=r}}return _}});var Q=globalThis&&globalThis.__decorate||function(i,t,e,s){var r=arguments.length,o=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};g.SearchModal=class extends C{constructor(){super(...arguments),this.open=!1,this.baseUrl="",this.options={},this.handleKeydown=t=>{const{key:e}=t;e==="Escape"&&(this.close(),t.preventDefault())}}render(){return S`<div
      class="modal__wrapper"
      style="${Qe({display:this.open?"flex":"none"})}"
    >
      <div class="modal__layer" @click="${this.close}"></div>
      <div class="modal__content">
        ${this.open?S`<search-form
              .baseUrl=${this.baseUrl}
              .options=${this.options}
            ></search-form>`:""}
      </div>
    </div>`}close(){this.open=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeydown),super.disconnectedCallback()}},g.SearchModal.styles=[zt,Ht,W`
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
        padding-top: 2.5em;
        padding-bottom: 2.5em;
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
        border-radius: var(--base-border-radius);
        background-color: var(--color-modal-content-bg);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: calc(100vw - 20px);
        max-height: calc(100vh - 5em);
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
    `],Q([k({type:Boolean})],g.SearchModal.prototype,"open",void 0),Q([k({type:String})],g.SearchModal.prototype,"baseUrl",void 0),Q([k({type:Object})],g.SearchModal.prototype,"options",void 0),g.SearchModal=Q([Ot("search-modal")],g.SearchModal);const si="",pt=document.createElement("search-modal");document.body.append(pt);function Xe(i){pt.options=i,pt.open=!0}return g.open=Xe,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),g}({});
