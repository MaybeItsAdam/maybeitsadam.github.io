var In=Array.isArray,On=Array.from,Cn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Pn=Array.prototype,Zt=Object.getPrototypeOf;const bn=()=>{};function Fn(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,j=8,lt=16,m=32,z=64,tt=128,I=256,G=512,h=1024,x=2048,H=4096,P=8192,b=16384,Wt=32768,Et=65536,qn=1<<17,Xt=1<<19,yt=1<<20,ct=Symbol("$state"),Mn=Symbol("legacy props");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ln(){throw new Error("https://svelte.dev/e/hydration_failed")}function Yn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Un(){W=!0}const Bn=1,Vn=2,Gn=16,Kn=1,$n=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,ln="[",an="[!",un="]",mt={},Qn=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function tr(t){return gt(at(t))}function on(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function nr(t,n=!1){return gt(on(t,n))}function gt(t){return o!==null&&o.f&y&&(T===null?mn([t]):T.push(t)),t}function rr(t,n){return o!==null&&it()&&o.f&(y|lt)&&(T===null||!T.includes(t))&&sn(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),At(t,x),it()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(g(u,x),Q(u)):A===null?gn([t]):A.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&x||!e&&a===u||(g(a,n),i&(h|I)&&(i&y?At(a,H):Q(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function er(t){D=t}let w;function q(t){if(t===null)throw xt(),mt;return w=t}function sr(){return q(O(w))}function lr(t){if(D){if(O(w)!==null)throw xt(),mt;w=t}}function ar(t=1){if(D){for(var n=t,r=w;n--;)r=O(r);w=r}}function ur(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=O(n);n.remove(),n=e}}var vt,Rt,St;function or(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,St=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function O(t){return St.call(t)}function ir(t,n){if(!D)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function fr(t,n){if(!D){var r=rt(t);return r instanceof Comment&&r.data===""?O(r):r}return w}function _r(t,n=1,r=!1){let e=D?w:t;for(var s;n--;)s=e,e=O(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function cr(t){t.textContent=""}function _n(t){var n=y|x;u===null?n|=I:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function vr(t){const n=_n(t);return n.equals=Tt,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):k(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function kt(t){var n,r=u;Z(cn(t));try{Dt(t),n=Ut(t)}finally{Z(r)}return n}function It(t){var n=kt(t),r=(S||t.f&I)&&t.deps!==null?H:h;g(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function ut(t){Dt(t),Y(t,0),g(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&o===null&&nn(),o!==null&&o.f&I&&tn(),ot&&Qt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{pt(!0),J(a),a.f|=Wt}catch(_){throw k(a),_}finally{pt(i)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!p&&!s&&e&&(l!==null&&vn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function pr(t){const n=F(j,null,!1);return g(n,h),n.teardown=t,n}function hr(t){Ot();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ct(t);return e}}function dr(t){return Ot(),pn(t)}function Er(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Ct(t){return F(dt,t,!1)}function pn(t){return F(j,t,!0)}function yr(t){return hn(t)}function hn(t,n=0){return F(j|lt|n,t,!0)}function wr(t,n=!0){return F(j|m,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}bt(t,n&&!r),Pt(t),Y(t,0),g(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];qt(t,r,!0),yn(r,()=>{k(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&m)!==0;qt(e,n,l?r:!1),e=s}}}function Tr(t){Mt(t,!0)}function Mt(t,n){if(t.f&P){U(t)&&J(t),t.f^=P;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&m)!==0;Mt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,et=[];function Lt(){K=!1;const t=et.slice();et=[],zt(t)}function mr(t){K||(K=!0,queueMicrotask(Lt)),et.push(t)}function wn(){K&&Lt()}const Yt=0,Tn=1;let B=!1,V=Yt,M=!1,L=null,C=!1,ot=!1;function pt(t){C=t}function ht(t){ot=t}let R=[],N=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let T=null;function mn(t){T=t}let v=null,E=0,A=null;function gn(t){A=t}let jt=1,S=!1,f=null;function Ht(){return++jt}function it(){return!W||f!==null&&f.l===null}function U(t){var a,i;var n=t.f;if(n&x)return!0;if(n&H){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(U(l)&&It(l),e&&u!==null&&!S&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!S)&&g(t,h)}return!1}function An(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw B=!1,t}function xn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(B){if(r===null&&(B=!1),xn(n))throw t;return}r!==null&&(B=!0);{An(t,n);return}}function Ut(t){var ft;var n=v,r=E,e=A,s=o,l=S,a=T,i=f,p=t.f;v=null,E=0,A=null,o=p&(m|z)?null:t,S=!C&&(p&I)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,A=e,o=s,S=l,T=a,f=i}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(g(n,H),n.f&(I|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function J(t){var n=t.f;if(!(n&b)){g(t,h);var r=u,e=f;u=t;try{n&lt?dn(t):bt(t),Pt(t),Nt(t);var s=Ut(t);t.teardown=typeof s=="function"?s:null,t.version=jt}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Bt(){if(N>1e3){N=0;try{rn()}catch(t){if(L!==null)X(t,L,null);else throw t}}N++}function Vt(t){var n=t.length;if(n!==0){Bt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Gt(s,l),Sn(l)}}finally{C=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|P)))try{U(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Dn(){if(M=!1,N>1001)return;const t=R;R=[],Vt(t),M||(N=0,L=null)}function Q(t){V===Yt&&(M||(M=!0,queueMicrotask(Dn))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|m)){if(!(r&h))return;n.f^=h}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&P))if(s&j){if(l)r.f^=h;else try{U(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Gt(p,n)}function Kt(t){var n=V,r=R;try{Bt();const s=[];V=Tn,R=s,M=!1,Vt(r);var e=t==null?void 0:t();return wn(),(R.length>0||s.length>0)&&Kt(),N=0,L=null,e}finally{V=n,R=r}}async function gr(){await Promise.resolve(),Kt()}function Ar(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=kt(t);return ut(t),e}if(o!==null){T!==null&&T.includes(t)&&en();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&m)&&A.includes(t)&&(g(u,x),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,U(l)&&It(l)),t.v}function xr(t){const n=o;try{return o=null,t()}finally{o=n}}const kn=~(x|H|h);function g(t,n){t.f=t.f&kn|n}function Rr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Sr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),$(l.reaction),Ct(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ln as $,u as A,Hn as B,Zt as C,In as D,Yn as E,Tt as F,m as G,Z as H,Kn as I,$n as J,zn as K,qn as L,Mn as M,vr as N,Wn as O,Zn as P,on as Q,z as R,ct as S,$ as T,Qn as U,o as V,pr as W,mr as X,Cn as Y,or as Z,rt as _,hr as a,O as a0,mt as a1,er as a2,q as a3,sr as a4,w as a5,un as a6,xt as a7,Ln as a8,cr as a9,gr as aA,tr as aB,Jt as aC,On as aa,Er as ab,nt as ac,wr as ad,D as ae,Xn as af,Jn as ag,hn as ah,Et as ai,bn as aj,k as ak,$t as al,an as am,ur as an,P as ao,Tr as ap,En as aq,fn as ar,qt as as,yn as at,Vn as au,Bn as av,Gn as aw,Ct as ax,pn as ay,Kt as az,xr as b,f as c,zt as d,Dr as e,_n as f,Ar as g,fr as h,ir as i,lr as j,rr as k,Un as l,nr as m,ar as n,W as o,Rr as p,Sr as q,Fn as r,_r as s,yr as t,dr as u,Nn as v,Pn as w,at as x,jn as y,_t as z};
