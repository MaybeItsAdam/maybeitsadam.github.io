const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B5Kf2bKa.js","../chunks/disclose-version.ulh6QoYP.js","../chunks/runtime.BRvL9thQ.js","../chunks/paths.AlTh5Xtc.js","../nodes/1.IJTzuNJl.js","../chunks/legacy.KIUwV9DS.js","../chunks/render.BErUxwr0.js","../chunks/entry.BO0SpzlZ.js","../chunks/index-client.Du4GyaPu.js","../nodes/2.DY8xiDfE.js","../assets/2.BR12QaSX.css","../nodes/3.m8JP81o7.js","../nodes/4.Cgg7OaRE.js"])))=>i.map(i=>d[i]);
var re=t=>{throw TypeError(t)};var ae=(t,e,s)=>e.has(t)||re("Cannot "+s);var P=(t,e,s)=>(ae(t,e,"read from private field"),s?s.call(t):e.get(t)),M=(t,e,s)=>e.has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),G=(t,e,s,d)=>(ae(t,e,"write to private field"),d?d.call(t,s):e.set(t,s),s);import{a1 as B,a2 as ye,a3 as be,a4 as x,a5 as Ee,a as w,a6 as K,a7 as R,g as y,H as $,a8 as Pe,q as Re,L as we,o as F,T as oe,h as de,E as _e,a9 as Oe,aa as Se,S as Ie,R as ne,ab as se,i as p,ac as ee,p as ve,ad as Te,ae as Ae,d as te,J as Le,af as xe,ag as De,ah as Ce,ai as Ne,aj as ke,ak as qe,F as ie,al as je,l as Be,am as Fe,an as Ue,ao as he,C as U,ap as Ve,aq as me,ar as Ye,as as He,K as Ke,w as Me,y as Ge,u as Ze,at as ze,f as Y,x as Je,au as Z,s as We,c as Qe,r as Xe,t as $e}from"../chunks/runtime.BRvL9thQ.js";import{h as pe,m as et,u as tt,s as rt}from"../chunks/render.BErUxwr0.js";import{a as N,t as ge,c as z,d as at}from"../chunks/disclose-version.ulh6QoYP.js";import{o as nt}from"../chunks/index-client.Du4GyaPu.js";function D(t,e=null,s){if(typeof t!="object"||t===null||B in t)return t;const d=Re(t);if(d!==ye&&d!==be)return t;var a=new Map,c=we(t),f=x(0);c&&a.set("length",x(t.length));var i;return new Proxy(t,{defineProperty(l,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Ee();var o=a.get(r);return o===void 0?(o=x(n.value),a.set(r,o)):w(o,D(n.value,i)),!0},deleteProperty(l,r){var n=a.get(r);if(n===void 0)r in l&&a.set(r,x(R));else{if(c&&typeof r=="string"){var o=a.get("length"),u=Number(r);Number.isInteger(u)&&u<o.v&&w(o,u)}w(n,R),fe(f)}return!0},get(l,r,n){var h;if(r===B)return t;var o=a.get(r),u=r in l;if(o===void 0&&(!u||(h=K(l,r))!=null&&h.writable)&&(o=x(D(u?l[r]:R,i)),a.set(r,o)),o!==void 0){var _=y(o);return _===R?void 0:_}return Reflect.get(l,r,n)},getOwnPropertyDescriptor(l,r){var n=Reflect.getOwnPropertyDescriptor(l,r);if(n&&"value"in n){var o=a.get(r);o&&(n.value=y(o))}else if(n===void 0){var u=a.get(r),_=u==null?void 0:u.v;if(u!==void 0&&_!==R)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return n},has(l,r){var _;if(r===B)return!0;var n=a.get(r),o=n!==void 0&&n.v!==R||Reflect.has(l,r);if(n!==void 0||$!==null&&(!o||(_=K(l,r))!=null&&_.writable)){n===void 0&&(n=x(o?D(l[r],i):R),a.set(r,n));var u=y(n);if(u===R)return!1}return o},set(l,r,n,o){var E;var u=a.get(r),_=r in l;if(c&&r==="length")for(var h=n;h<u.v;h+=1){var v=a.get(h+"");v!==void 0?w(v,R):h in l&&(v=x(R),a.set(h+"",v))}u===void 0?(!_||(E=K(l,r))!=null&&E.writable)&&(u=x(void 0),w(u,D(n,i)),a.set(r,u)):(_=u.v!==R,w(u,D(n,i)));var m=Reflect.getOwnPropertyDescriptor(l,r);if(m!=null&&m.set&&m.set.call(o,n),!_){if(c&&typeof r=="string"){var S=a.get("length"),I=Number(r);Number.isInteger(I)&&I>=S.v&&w(S,I+1)}fe(f)}return!0},ownKeys(l){y(f);var r=Reflect.ownKeys(l).filter(u=>{var _=a.get(u);return _===void 0||_.v!==R});for(var[n,o]of a)o.v!==R&&!(n in l)&&r.push(n);return r},setPrototypeOf(){Pe()}})}function fe(t,e=1){w(t,t.v+e)}function J(t,e,s=!1){F&&oe();var d=t,a=null,c=null,f=R,i=s?_e:0,l=!1;const r=(o,u=!0)=>{l=!0,n(u,o)},n=(o,u)=>{if(f===(f=o))return;let _=!1;if(F){const h=d.data===Oe;!!f===h&&(d=Se(),Ie(d),ne(!1),_=!0)}f?(a?se(a):u&&(a=p(()=>u(d))),c&&ee(c,()=>{c=null})):(c?se(c):u&&(c=p(()=>u(d))),a&&ee(a,()=>{a=null})),_&&ne(!0)};de(()=>{l=!1,e(r),l||n(null,null)},i),F&&(d=ve)}function W(t,e,s){F&&oe();var d=t,a,c;de(()=>{a!==(a=e())&&(c&&(ee(c),c=null),a&&(c=p(()=>s(d,a))))},_e),F&&(d=ve)}function ue(t,e){return t===e||(t==null?void 0:t[B])===e}function Q(t={},e,s,d){return Te(()=>{var a,c;return Ae(()=>{a=c,c=[],te(()=>{t!==s(...c)&&(e(t,...c),a&&ue(s(...a),t)&&e(null,...a))})}),()=>{Le(()=>{c&&ue(s(...c),t)&&e(null,...c)})}}),t}let H=!1;function st(t){var e=H;try{return H=!1,[t(),H]}finally{H=e}}function le(t){for(var e=$,s=$;e!==null&&!(e.f&(ke|qe));)e=e.parent;try{return ie(e),t()}finally{ie(s)}}function X(t,e,s,d){var k;var a=(s&je)!==0,c=!Be||(s&Fe)!==0,f=(s&Ue)!==0,i=(s&Ye)!==0,l=!1,r;f?[r,l]=st(()=>t[e]):r=t[e];var n=B in t||he in t,o=((k=K(t,e))==null?void 0:k.set)??(n&&f&&e in t?g=>t[e]=g:void 0),u=d,_=!0,h=!1,v=()=>(h=!0,_&&(_=!1,i?u=te(d):u=d),u);r===void 0&&d!==void 0&&(o&&c&&xe(),r=v(),o&&o(r));var m;if(c)m=()=>{var g=t[e];return g===void 0?v():(_=!0,h=!1,g)};else{var S=le(()=>(a?U:Ve)(()=>t[e]));S.f|=De,m=()=>{var g=y(S);return g!==void 0&&(u=void 0),g===void 0?u:g}}if(!(s&Ce))return m;if(o){var I=t.$$legacy;return function(g,L){return arguments.length>0?((!c||!L||I||l)&&o(L?m():g),g):m()}}var E=!1,T=!1,b=me(r),C=le(()=>U(()=>{var g=m(),L=y(b);return E?(E=!1,T=!0,L):(T=!1,b.v=g)}));return a||(C.equals=Ne),function(g,L){if(arguments.length>0){const q=L?y(C):c&&f?D(g):g;return C.equals(q)||(E=!0,w(b,q),h&&u!==void 0&&(u=q),te(()=>y(C))),g}return y(C)}}function it(t){return class extends ft{constructor(e){super({component:t,...e})}}}var A,O;class ft{constructor(e){M(this,A);M(this,O);var c;var s=new Map,d=(f,i)=>{var l=me(i);return s.set(f,l),l};const a=new Proxy({...e.props||{},$$events:{}},{get(f,i){return y(s.get(i)??d(i,Reflect.get(f,i)))},has(f,i){return i===he?!0:(y(s.get(i)??d(i,Reflect.get(f,i))),Reflect.has(f,i))},set(f,i,l){return w(s.get(i)??d(i,l),l),Reflect.set(f,i,l)}});G(this,O,(e.hydrate?pe:et)(e.component,{target:e.target,anchor:e.anchor,props:a,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&He(),G(this,A,a.$$events);for(const f of Object.keys(P(this,O)))f==="$set"||f==="$destroy"||f==="$on"||Ke(this,f,{get(){return P(this,O)[f]},set(i){P(this,O)[f]=i},enumerable:!0});P(this,O).$set=f=>{Object.assign(a,f)},P(this,O).$destroy=()=>{tt(P(this,O))}}$set(e){P(this,O).$set(e)}$on(e,s){P(this,A)[e]=P(this,A)[e]||[];const d=(...a)=>s.call(this,...a);return P(this,A)[e].push(d),()=>{P(this,A)[e]=P(this,A)[e].filter(a=>a!==d)}}$destroy(){P(this,O).$destroy()}}A=new WeakMap,O=new WeakMap;const ut="modulepreload",lt=function(t,e){return new URL(t,e).href},ce={},j=function(e,s,d){let a=Promise.resolve();if(s&&s.length>0){const f=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(s.map(r=>{if(r=lt(r,d),r in ce)return;ce[r]=!0;const n=r.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(!!d)for(let h=f.length-1;h>=0;h--){const v=f[h];if(v.href===r&&(!n||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const _=document.createElement("link");if(_.rel=n?"stylesheet":ut,n||(_.as="script"),_.crossOrigin="",_.href=r,l&&_.setAttribute("nonce",l),document.head.appendChild(_),n)return new Promise((h,v)=>{_.addEventListener("load",h),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function c(f){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=f,window.dispatchEvent(i),!i.defaultPrevented)throw f}return a.then(f=>{for(const i of f||[])i.status==="rejected"&&c(i.reason);return e().catch(c)})},Et={};var ct=ge('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ot=ge("<!> <!>",1);function dt(t,e){Me(e,!0);let s=X(e,"components",23,()=>[]),d=X(e,"data_0",3,null),a=X(e,"data_1",3,null);Ge(()=>e.stores.page.set(e.page)),Ze(()=>{e.stores,e.page,e.constructors,s(),e.form,d(),a(),e.stores.page.notify()});let c=Z(!1),f=Z(!1),i=Z(null);nt(()=>{const v=e.stores.page.subscribe(()=>{y(c)&&(w(f,!0),ze().then(()=>{w(i,D(document.title||"untitled page"))}))});return w(c,!0),v});const l=U(()=>e.constructors[1]);var r=ot(),n=Y(r);{var o=v=>{var m=z();const S=U(()=>e.constructors[0]);var I=Y(m);W(I,()=>y(S),(E,T)=>{Q(T(E,{get data(){return d()},get form(){return e.form},children:(b,C)=>{var k=z(),g=Y(k);W(g,()=>y(l),(L,q)=>{Q(q(L,{get data(){return a()},get form(){return e.form}}),V=>s()[1]=V,()=>{var V;return(V=s())==null?void 0:V[1]})}),N(b,k)},$$slots:{default:!0}}),b=>s()[0]=b,()=>{var b;return(b=s())==null?void 0:b[0]})}),N(v,m)},u=v=>{var m=z();const S=U(()=>e.constructors[0]);var I=Y(m);W(I,()=>y(S),(E,T)=>{Q(T(E,{get data(){return d()},get form(){return e.form}}),b=>s()[0]=b,()=>{var b;return(b=s())==null?void 0:b[0]})}),N(v,m)};J(n,v=>{e.constructors[1]?v(o):v(u,!1)})}var _=We(n,2);{var h=v=>{var m=ct(),S=Qe(m);{var I=E=>{var T=at();$e(()=>rt(T,y(i))),N(E,T)};J(S,E=>{y(f)&&E(I)})}Xe(m),N(v,m)};J(_,v=>{y(c)&&v(h)})}N(t,r),Je()}const Pt=it(dt),Rt=[()=>j(()=>import("../nodes/0.B5Kf2bKa.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>j(()=>import("../nodes/1.IJTzuNJl.js"),__vite__mapDeps([4,1,2,5,6,7,3,8]),import.meta.url),()=>j(()=>import("../nodes/2.DY8xiDfE.js"),__vite__mapDeps([9,1,2,5,10]),import.meta.url),()=>j(()=>import("../nodes/3.m8JP81o7.js"),__vite__mapDeps([11,1,2,5]),import.meta.url),()=>j(()=>import("../nodes/4.Cgg7OaRE.js"),__vite__mapDeps([12,1,2,5,6]),import.meta.url)],wt=[],Ot={"/":[2],"/projects":[3],"/scrap":[4]},_t={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},vt=Object.fromEntries(Object.entries(_t.transport).map(([t,e])=>[t,e.decode])),St=!1,It=(t,e)=>vt[t](e);export{It as decode,vt as decoders,Ot as dictionary,St as hash,_t as hooks,Et as matchers,Rt as nodes,Pt as root,wt as server_loads};