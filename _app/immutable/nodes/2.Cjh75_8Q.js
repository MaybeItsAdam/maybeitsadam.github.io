import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{B as $,D as j,j as I,C as M,A as ee,i as ae,a6 as X,a8 as te,a9 as L,a1 as R,z as A,aa as k,ab as G,F as K,ac as re,e as O,ad as ne,ae as se,a5 as le,af as ie,H as fe,x as oe,a2 as ve,V as ue,ag as ce,s as Y,ah as de,ai as he,aj as _e,$ as pe,I as me,ak as q,t as z,J as ge,c as F,d as T,p as S,r as b,l as xe}from"../chunks/runtime.BmcNLohr.js";import{a as D,t as B}from"../chunks/template.BPhrwbx5.js";import{s as ye}from"../chunks/render.DLfciXMx.js";import{s as J}from"../chunks/attributes.DNHNlNjO.js";import{p as P}from"../chunks/proxy.BiZJ-NS_.js";import{o as Ee}from"../chunks/index-client.C6x6MtUQ.js";function Ie(s,e){return e}function we(s,e,a,l){for(var c=[],v=e.length,f=0;f<v;f++)se(e[f].e,c,!0);var h=v>0&&c.length===0&&a!==null;if(h){var d=a.parentNode;le(d),d.append(a),l.clear(),y(s,e[0].prev,e[v-1].next)}ie(c,()=>{for(var u=0;u<v;u++){var _=e[u];h||(l.delete(_.k),y(s,_.prev,_.next)),fe(_.e,!h)}})}function Te(s,e,a,l,c,v=null){var f=s,h={flags:e,items:new Map,first:null};{var d=s;f=I?M(oe(d)):d.appendChild($())}I&&ee();var u=null,_=!1;j(()=>{var t=a(),o=ae(t)?t:t==null?[]:X(t),r=o.length;if(_&&r===0)return;_=r===0;let n=!1;if(I){var p=f.data===te;p!==(r===0)&&(f=L(),M(f),R(!1),n=!0)}if(I){for(var E=null,g,i=0;i<r;i++){if(A.nodeType===8&&A.data===ve){f=A,n=!0,R(!1);break}var m=o[i],N=l(m,i);g=Q(A,h,E,null,m,N,i,c,e),h.items.set(N,g),E=g}r>0&&M(L())}if(!I){var w=ue;Ae(o,h,f,c,e,(w.f&k)!==0,l)}v!==null&&(r===0?u?G(u):u=K(()=>v(f)):u!==null&&re(u,()=>{u=null})),n&&R(!0),a()}),I&&(f=A)}function Ae(s,e,a,l,c,v,f,h){var d=s.length,u=e.items,_=e.first,t=_,o,r=null,n=[],p=[],E,g,i,m;for(m=0;m<d;m+=1){if(E=s[m],g=f(E,m),i=u.get(g),i===void 0){var N=t?t.e.nodes_start:a;r=Q(N,e,r,r===null?e.first:r.next,E,g,m,l,c),u.set(g,r),n=[],p=[],t=r.next;continue}if(Ne(i,E,m),i.e.f&k&&G(i.e),i!==t){if(o!==void 0&&o.has(i)){if(n.length<p.length){var w=p[0],x;r=w.prev;var V=n[0],C=n[n.length-1];for(x=0;x<n.length;x+=1)U(n[x],w,a);for(x=0;x<p.length;x+=1)o.delete(p[x]);y(e,V.prev,C.next),y(e,r,V),y(e,C,w),t=w,r=C,m-=1,n=[],p=[]}else o.delete(i),U(i,t,a),y(e,i.prev,i.next),y(e,i,r===null?e.first:r.next),y(e,r,i),r=i;continue}for(n=[],p=[];t!==null&&t.k!==g;)(v||!(t.e.f&k))&&(o??(o=new Set)).add(t),p.push(t),t=t.next;if(t===null)continue;i=t}n.push(i),r=i,t=i.next}if(t!==null||o!==void 0){for(var H=o===void 0?[]:X(o);t!==null;)(v||!(t.e.f&k))&&H.push(t),t=t.next;var W=H.length;if(W>0){var Z=d===0?a:null;we(e,H,Z,u)}}O.first=e.first&&e.first.e,O.last=r&&r.e}function Ne(s,e,a,l){ne(s.v,e),s.i=a}function Q(s,e,a,l,c,v,f,h,d,u){var _=(d&he)!==0,t=(d&_e)===0,o=_?t?ce(c):Y(c):c,r=d&de?Y(f):f,n={i:r,v:o,k:v,a:null,e:null,prev:a,next:l};try{return n.e=K(()=>h(s,o,r),I),n.e.prev=a&&a.e,n.e.next=l&&l.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),l!==null&&(l.prev=n,l.e.prev=n.e),n}finally{}}function U(s,e,a){for(var l=s.next?s.next.e.nodes_start:a,c=e?e.e.nodes_start:a,v=s.e.nodes_start;v!==l;){var f=pe(v);c.before(v),v=f}}function y(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var ke=B('<div class="mover svelte-6o8o88"> </div>'),be=B('<div id="cwrapper" class="svelte-6o8o88"></div>');function Ce(s,e){me(e,!0);let a,l=q(P([]));const c=async o=>(a=(await(await fetch("/names.txt")).text()).split(`
`),[...a].sort(()=>Math.random()-.5).slice(0,o));Ee(async()=>{F(l,P(await c(3))),T(l).push(e.finalName),await u(),_()});let v=0,f=q(0),h,d;async function u(){return new Promise(o=>{setTimeout(()=>{const r=document.querySelector(".mover");r?d=r.getBoundingClientRect().height:d=0,o()},0)})}function _(){h=setInterval(()=>{v<T(l).length-1?(F(f,T(f)-d),v++):clearInterval(h)},800)}var t=be();Te(t,21,()=>T(l),Ie,(o,r)=>{var n=ke(),p=S(n,!0);b(n),z(()=>{J(n,"style",`--shift: ${T(f)??""}px`),ye(p,T(r))}),D(o,n)}),b(t),z(()=>J(t,"style",`--chwidth: ${e.finalName.length??""}ch`)),D(s,t),ge()}var He=B('<div id="main" class="svelte-u8knyk"><p class="svelte-u8knyk">MaybeIts<!></p></div>');function Ye(s){var e=He(),a=S(e),l=xe(S(a));Ce(l,{finalName:"Andy"}),b(a),b(e),D(s,e)}export{Ye as component};
