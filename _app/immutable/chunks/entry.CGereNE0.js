var Wt=t=>{throw TypeError(t)};var Ce=(t,e,n)=>e.has(t)||Wt("Cannot "+n);var b=(t,e,n)=>(Ce(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{_ as Rt,aD as Oe,aC as C,e as O,o as N,aB as Ne}from"./runtime.DrY0v0QI.js";import{a as je,b as P}from"./paths.DKdnnmpq.js";import{o as Yt}from"./index-client.zzT89o0z.js";new URL("sveltekit-internal://");function $e(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function De(t){return t.split("%25").map(decodeURI).join("%25")}function Be(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function It({href:t}){return t.split("#")[0]}function Fe(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));e();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ve="/__data.json",qe=".html__data.json";function Ge(t){return t.endsWith(".html")?t.replace(/\.html$/,qe):t.replace(/\/$/,"")+Ve}function Me(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function He(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ie=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(Ot(t)),ie(t,e));const Y=new Map;function Ke(t,e){const n=Ot(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=He(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function We(t,e,n){if(Y.size>0){const r=Ot(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function Ot(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Me(...a)}"]`}return r}const Ye=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ze(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Xe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ut(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const h=Ye.exec(c),[,d,y,u,g]=h;return e.push({name:u,matcher:g,optional:!!d,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":d?"([^/]*)?":"([^/]+?)"}return Ut(c)}).join("")}).join("")}/?$`),params:e}}function Je(t){return!/^\([^)]+\)$/.test(t)}function Xe(t){return t.slice(1).split("/").filter(Je)}function Ze(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=e[s+1],d=a[s+1];h&&!h.rest&&h.optional&&d&&c.chained&&(i=0),!h&&!d&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Qe({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,h]])=>{const{pattern:d,params:y}=ze(s),u={id:s,exec:g=>{const f=d.exec(g);if(f)return Ze(f,y,r)},errors:[1,...h||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function ce(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function zt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const F=[];function Nt(t,e=Rt){let n=null;const r=new Set;function a(s){if(Oe(t,s)&&(t=s,n)){const c=!F.length;for(const l of r)l[1](),F.push(l,t);if(c){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function o(s){a(s(t))}function i(s,c=Rt){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||Rt),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}const tn="1735223051461",le="sveltekit:snapshot",fe="sveltekit:scroll",ue="sveltekit:states",en="sveltekit:pageurl",G="sveltekit:history",J="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function he(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function jt(){return{x:pageXOffset,y:pageYOffset}}function V(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Jt={...ut,"":ut.hover};function de(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function pe(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=de(t)}}function xt(t,e,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,o=!r||!!a||vt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ft&&t.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function ht(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=V(s,"preload-code")),a===null&&(a=V(s,"preload-data")),e===null&&(e=V(s,"keepfocus")),n===null&&(n=V(s,"noscroll")),o===null&&(o=V(s,"reload")),i===null&&(i=V(s,"replacestate")),s=de(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Jt[r??"off"],preload_data:Jt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Xt(t){const e=Nt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const ge={v:()=>{}};function nn(){const{set:t,subscribe:e}=Nt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${je}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==tn;return i&&(t(!0),ge.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Zt(t){const e=an(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function an(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=rn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const on=-1,sn=-2,cn=-3,ln=-4,fn=-5,un=-6;function hn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===on)return;if(o===cn)return NaN;if(o===ln)return 1/0;if(o===fn)return-1/0;if(o===un)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const h=new Set;r[o]=h;for(let u=1;u<s.length;u+=1)h.add(a(s[u]));break;case"Map":const d=new Map;r[o]=d;for(let u=1;u<s.length;u+=2)d.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=Zt(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Zt(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const h=s[l];h!==sn&&(c[l]=a(h))}}else{const c={};r[o]=c;for(const l in s){const h=s[l];c[l]=a(h)}}return r[o]}return a(0)}const me=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...me];const dn=new Set([...me]);[...dn];function pn(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ye{constructor(e,n){this.status=e,this.location=n}}class $t extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const gn="x-sveltekit-invalidated",mn="x-sveltekit-trailing-slash";function dt(t){return t instanceof bt||t instanceof $t?t.status:500}function yn(t){return t instanceof $t?t.text:"Internal Error"}let A,X,Lt;const _n=Yt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Yt.toString());var tt,et,nt,rt,at,ot,st,it,ae,ct,oe,lt,se;_n?(A={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Lt={current:!1}):(A=new(ae=class{constructor(){x(this,tt,C({}));x(this,et,C(null));x(this,nt,C(null));x(this,rt,C({}));x(this,at,C({id:null}));x(this,ot,C({}));x(this,st,C(-1));x(this,it,C(new URL("https://example.com")))}get data(){return O(b(this,tt))}set data(e){N(b(this,tt),e)}get form(){return O(b(this,et))}set form(e){N(b(this,et),e)}get error(){return O(b(this,nt))}set error(e){N(b(this,nt),e)}get params(){return O(b(this,rt))}set params(e){N(b(this,rt),e)}get route(){return O(b(this,at))}set route(e){N(b(this,at),e)}get state(){return O(b(this,ot))}set state(e){N(b(this,ot),e)}get status(){return O(b(this,st))}set status(e){N(b(this,st),e)}get url(){return O(b(this,it))}set url(e){N(b(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ae),X=new(oe=class{constructor(){x(this,ct,C(null))}get current(){return O(b(this,ct))}set current(e){N(b(this,ct),e)}},ct=new WeakMap,oe),Lt=new(se=class{constructor(){x(this,lt,C(!1))}get current(){return O(b(this,lt))}set current(e){N(b(this,lt),e)}},lt=new WeakMap,se),ge.v=()=>Lt.current=!0);function wn(t){Object.assign(A,t)}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),B=ce(fe)??{},Z=ce(le)??{},$={url:Xt({}),page:Xt({}),navigating:Nt(null),updated:nn()};function Dt(t){B[t]=jt()}function bn(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function _e(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function Qt(){}let At,Pt,pt,j,Ct,S;const we=[],gt=[];let L=null;const ve=[],An=[];let q=[],_={branch:[],error:null,url:null},Bt=!1,mt=!1,te=!0,Q=!1,K=!1,be=!1,Ft=!1,Vt,U,T,yt;const z=new Set;async function Bn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),S=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),At=Qe(t),j=document.documentElement,Ct=e,Pt=t.nodes[0],pt=t.nodes[1],Pt(),pt(),U=(i=history.state)==null?void 0:i[G],T=(s=history.state)==null?void 0:s[J],U||(U=T=Date.now(),history.replaceState({...history.state,[G]:U,[J]:T},""));const r=B[U];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Tn(Ct,n):Un(location.href,{replaceState:!0}),Ln()}function kn(){we.length=0,Ft=!1}function Ae(t){gt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=gt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function ke(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=gt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function ee(){Dt(U),zt(fe,B),Ae(T),zt(le,Z)}async function Se(t,e,n,r){return W({type:"goto",url:he(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ft=!0)}})}async function Sn(t){if(t.id!==(L==null?void 0:L.id)){const e={};z.add(e),L={id:t.id,token:e,promise:Re({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Tt(t){const e=At.find(n=>n.exec(Ie(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Ee(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(A,t.props.page),Vt=new S.root({target:e,props:{...t.props,stores:$,components:gt},hydrate:n,sync:!1}),ke(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};q.forEach(i=>i(a)),mt=!0}function _t({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=$e(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:pn(n).map(u=>u.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},h=!A,d=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(h=!0),g&&(l={...l,...g.data},h&&(c.props[`data_${d}`]=l),d+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==A.form||h)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:h?l:A.data}),c}async function qt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var h,d,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((h=l.universal)!=null&&h.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Fe(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},S.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const R=new URL(k,n);return s&&u(R.href),R.origin===n.origin&&(k=R.href.slice(n.origin.length)),mt?We(k,R.href,p):Ke(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(d=l.universal)!=null&&d.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function ne(t,e,n,r,a,o){if(Ft)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(we.some(s=>s(new URL(i))))return!0;return!1}function Gt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function En(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function re({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:A,constructors:[]}}}async function Re({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return z.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let h=null;const d=_.url?t!==wt(_.url):!1,y=_.route?a.id!==_.route.id:!1,u=En(_.url,n);let g=!1;const f=l.map((m,v)=>{var D;const E=_.branch[v],I=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||ne(g,y,d,u,(D=E.server)==null?void 0:D.uses,r));return I&&(g=!0),I});if(f.some(Boolean)){try{h=await Te(n,f)}catch(m){const v=await M(m,{url:n,params:r,route:{id:t}});return z.has(o)?re({error:v,url:n,params:r,route:a}):kt({status:dt(m),error:v,url:n,route:a})}if(h.type==="redirect")return h}const p=h==null?void 0:h.nodes;let k=!1;const R=l.map(async(m,v)=>{var St;if(!m)return;const E=_.branch[v],I=p==null?void 0:p[v];if((!I||I.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!ne(k,y,d,u,(St=E.universal)==null?void 0:St.uses,r))return E;if(k=!0,(I==null?void 0:I.type)==="error")throw I;return qt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Kt;const Ht={};for(let Et=0;Et<v;Et+=1)Object.assign(Ht,(Kt=await R[Et])==null?void 0:Kt.data);return Ht},server_data_node:Gt(I===void 0&&m[0]?{type:"skip"}:I??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of R)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await R[m])}catch(v){if(v instanceof ye)return{type:"redirect",location:v.location};if(z.has(o))return re({error:await M(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let E=dt(v),I;if(p!=null&&p.includes(v))E=v.status??E,I=v.error;else if(v instanceof bt)I=v.body;else{if(await $.updated.check())return await _e(),await H(n);I=await M(v,{params:r,url:n,route:{id:a.id}})}const D=await Rn(m,w,i);return D?_t({url:n,params:r,branch:w.slice(0,D.idx).concat(D.node),status:E,error:I,route:a}):await Le(n,{id:a.id},I,E)}else w.push(void 0);return _t({url:n,params:r,branch:w,status:200,error:null,route:a,form:e?void 0:null})}async function Rn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function kt({status:t,error:e,url:n,route:r}){const a={};let o=null;if(S.server_loads[0]===0)try{const l=await Te(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Bt)&&await H(n)}const s=await qt({loader:Pt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Gt(o)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return _t({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Mt(t,e){if(!t||vt(t,P,S.hash))return;let n;try{if(n=S.hooks.reroute({url:new URL(t)})??t,typeof n=="string"){const a=new URL(t);S.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=Ie(n);for(const a of At){const o=a.exec(r);if(o)return{id:wt(t),invalidating:e,route:a,params:Be(o),url:t}}}function Ie(t){return De(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(P.length))||"/"}function wt(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ue({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Pe(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Q||ve.forEach(s=>s(i)),a?null:o}async function W({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Qt,block:h=Qt}){const d=Mt(e,!1),y=Ue({url:e,type:t,delta:n==null?void 0:n.delta,intent:d});if(!y){h();return}const u=U,g=T;l(),Q=!0,mt&&$.navigating.set(X.current=y.navigation),yt=c;let f=d&&await Re(d);if(!f){if(vt(e,P,S.hash))return await H(e);f=await Le(e,{id:null},await M(new $t(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(d==null?void 0:d.url)||e,yt!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await kt({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Se(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await _e(),await H(e));if(kn(),Dt(u),Ae(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const w=o?0:1,m={[G]:U+=w,[J]:T+=w,[ue]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||bn(U,T)}if(L=null,f.props.page.state=i,mt){_=f.state,f.props.page&&(f.props.page.url=e);const w=(await Promise.all(An.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){q=q.filter(v=>!w.includes(v))};w.push(m),q.push(...w)}Vt.$set(f.props),wn(f.props.page),be=!0}else Ee(f,Ct,!1);const{activeElement:p}=document;await Ne();const k=n?n.scroll:a?jt():null;if(te){const w=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==p&&document.activeElement!==document.body;!r&&!R&&xn(),te=!0,f.props.page&&Object.assign(A,f.props.page),Q=!1,t==="popstate"&&ke(T),y.fulfil(void 0),q.forEach(w=>w(y.navigation)),$.navigating.set(X.current=null)}async function Le(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!Bt?await kt({status:r,error:n,url:t,route:e}):await H(t)}function In(){let t;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Tt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=pe(o,j);if(!s)return;const{url:c,external:l,download:h}=xt(s,P,S.hash);if(l||h)return;const d=ht(s),y=c&&wt(_.url)===wt(c);if(!d.reload&&!y)if(i<=d.preload_data){const u=Mt(c,!1);u&&Sn(u)}else i<=d.preload_code&&Tt(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=xt(o,P,S.hash);if(s||c)continue;const l=ht(o);l.reload||(l.preload_code===ut.viewport&&n.observe(o),l.preload_code===ut.eager&&Tt(i))}}q.push(a),a()}function M(t,e){if(t instanceof bt)return t.body;const n=dt(t),r=yn(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Un(t,e={}){return t=new URL(he(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Se(t,e,0)}function Ln(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ee(),!Q){const a=Pe(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ve.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ee()}),(e=navigator.connection)!=null&&e.saveData||In(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=pe(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=xt(r,P,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[h,d]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===It(location);if(o||c.reload&&(!y||!d)){Ue({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(d!==void 0&&y){const[,u]=_.url.href.split("#");if(u===d){if(n.preventDefault(),d===""||d==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(d));g&&(g.scrollIntoView(),g.focus())}return}if(K=!0,Dt(U),t(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(s,P,!1))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),d=a==null?void 0:a.getAttribute("name");d&&h.append(d,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(h).toString(),W({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(yt={},a===U)return;const o=B[a],i=n.state[ue]??{},s=new URL(n.state[en]??location.href),c=n.state[J],l=It(location)===It(_.url);if(c===T&&(be||l)){t(s),B[U]=jt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A.state=i,Vt.$set({page:A})),U=a;return}const d=a-U;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:d},accept:()=>{U=a,T=c},block:()=>{history.go(-d)},nav_token:yt})}else if(!K){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[G]:++U,[J]:T},"",location.href)):S.hash&&_.url.hash===location.hash&&W({type:"goto",url:_.url})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){_.url=A.url=n,$.page.set({data:A.data,error:A.error,form:A.form,params:A.params,route:A.route,state:A.state,status:A.status,url:n}),$.page.notify()}}async function Tn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Bt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Mt(c,!1)||{});let l,h=!0;try{const d=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=xe(p.uses)),qt({loader:S.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let R=0;R<f;R+=1)Object.assign(k,(await d[R]).data);return k},server_data_node:Gt(p)})}),y=await Promise.all(d),u=At.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=_t({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(d){if(d instanceof ye){await H(new URL(d.location,location.href));return}l=await kt({status:dt(d),error:await M(d,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",h=!1}l.props.page&&(l.props.page.state={}),Ee(l,t,h)}async function Te(t,e){var a;const n=new URL(t);n.pathname=Ge(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(mn,"1"),n.searchParams.append(gn,e.map(o=>o?"1":"0").join(""));const r=await ie(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new bt(r.status,o)}return new Promise(async o=>{var d;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return hn(y,{...S.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let h="";for(;;){const{done:y,value:u}=await s.read();if(y&&!h)break;for(h+=!u&&h?`
`:c.decode(u,{stream:!0});;){const g=h.indexOf(`
`);if(g===-1)break;const f=JSON.parse(h.slice(0,g));if(h=h.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(d=f.nodes)==null||d.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=xe(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:R}=f,w=i.get(p);i.delete(p),R?w.reject(l(R)):w.fulfil(l(k))}}}})}function xe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function xn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Pe(t,e,n,r){var c,l;let a,o;const i=new Promise((h,d)=>{a=h,o=d});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{Bn as a,A as p,$ as s,Lt as u};
