import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{B as $,D as j,j as I,C as R,A as ee,i as ae,a6 as X,a8 as te,a9 as V,a1 as S,z as k,aa as b,ab as G,F as K,ac as re,e as L,ad as ne,ae as se,a5 as le,af as ie,H as fe,x as ve,a2 as ue,V as oe,ag as ce,s as O,ah as de,ai as he,aj as _e,$ as pe,I as me,ak as Y,t as q,J as ge,c as F,d as T,p as C,r as A,l as xe}from"../chunks/runtime.BmcNLohr.js";import{a as D,t as z}from"../chunks/template.BPhrwbx5.js";import{s as ye}from"../chunks/render.DLfciXMx.js";import{s as J}from"../chunks/attributes.DNHNlNjO.js";import{p as P}from"../chunks/proxy.BiZJ-NS_.js";import{o as Ee}from"../chunks/index-client.C6x6MtUQ.js";function Ie(s,e){return e}function we(s,e,a,l){for(var c=[],v=e.length,f=0;f<v;f++)se(e[f].e,c,!0);var _=v>0&&c.length===0&&a!==null;if(_){var d=a.parentNode;le(d),d.append(a),l.clear(),E(s,e[0].prev,e[v-1].next)}ie(c,()=>{for(var o=0;o<v;o++){var p=e[o];_||(l.delete(p.k),E(s,p.prev,p.next)),fe(p.e,!_)}})}function Te(s,e,a,l,c,v=null){var f=s,_={flags:e,items:new Map,first:null};{var d=s;f=I?R(ve(d)):d.appendChild($())}I&&ee();var o=null,p=!1;j(()=>{var t=a(),u=ae(t)?t:t==null?[]:X(t),r=u.length;if(p&&r===0)return;p=r===0;let n=!1;if(I){var h=f.data===te;h!==(r===0)&&(f=V(),R(f),S(!1),n=!0)}if(I){for(var g=null,x,i=0;i<r;i++){if(k.nodeType===8&&k.data===ue){f=k,n=!0,S(!1);break}var m=u[i],N=l(m,i);x=Q(k,_,g,null,m,N,i,c,e),_.items.set(N,x),g=x}r>0&&R(V())}if(!I){var w=oe;ke(u,_,f,c,e,(w.f&b)!==0,l)}v!==null&&(r===0?o?G(o):o=K(()=>v(f)):o!==null&&re(o,()=>{o=null})),n&&S(!0),a()}),I&&(f=k)}function ke(s,e,a,l,c,v,f,_){var d=s.length,o=e.items,p=e.first,t=p,u,r=null,n=[],h=[],g,x,i,m;for(m=0;m<d;m+=1){if(g=s[m],x=f(g,m),i=o.get(x),i===void 0){var N=t?t.e.nodes_start:a;r=Q(N,e,r,r===null?e.first:r.next,g,x,m,l,c),o.set(x,r),n=[],h=[],t=r.next;continue}if(Ae(i,g,m),i.e.f&b&&G(i.e),i!==t){if(u!==void 0&&u.has(i)){if(n.length<h.length){var w=h[0],y;r=w.prev;var B=n[0],H=n[n.length-1];for(y=0;y<n.length;y+=1)U(n[y],w,a);for(y=0;y<h.length;y+=1)u.delete(h[y]);E(e,B.prev,H.next),E(e,r,B),E(e,H,w),t=w,r=H,m-=1,n=[],h=[]}else u.delete(i),U(i,t,a),E(e,i.prev,i.next),E(e,i,r===null?e.first:r.next),E(e,r,i),r=i;continue}for(n=[],h=[];t!==null&&t.k!==x;)(v||!(t.e.f&b))&&(u??(u=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;i=t}n.push(i),r=i,t=i.next}if(t!==null||u!==void 0){for(var M=u===void 0?[]:X(u);t!==null;)(v||!(t.e.f&b))&&M.push(t),t=t.next;var W=M.length;if(W>0){var Z=d===0?a:null;we(e,M,Z,o)}}L.first=e.first&&e.first.e,L.last=r&&r.e}function Ae(s,e,a,l){ne(s.v,e),s.i=a}function Q(s,e,a,l,c,v,f,_,d,o){var p=(d&he)!==0,t=(d&_e)===0,u=p?t?ce(c):O(c):c,r=d&de?O(f):f,n={i:r,v:u,k:v,a:null,e:null,prev:a,next:l};try{return n.e=K(()=>_(s,u,r),I),n.e.prev=a&&a.e,n.e.next=l&&l.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),l!==null&&(l.prev=n,l.e.prev=n.e),n}finally{}}function U(s,e,a){for(var l=s.next?s.next.e.nodes_start:a,c=e?e.e.nodes_start:a,v=s.e.nodes_start;v!==l;){var f=pe(v);c.before(v),v=f}}function E(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Ne=z('<div class="mover svelte-1r5lhfz"> </div>'),be=z('<div id="mask" class="svelte-1r5lhfz"><div id="cwrapper" class="svelte-1r5lhfz"></div></div>');function Ce(s,e){me(e,!0);let a,l=Y(P([]));const c=async r=>(a=(await(await fetch("/names.txt")).text()).split(`
`),[...a].sort(()=>Math.random()-.5).slice(0,r));Ee(async()=>{F(l,P(await c(3))),T(l).push(e.finalName),await o(),p()});let v=0,f=Y(0),_,d;async function o(){return new Promise(r=>{setTimeout(()=>{const n=document.querySelector(".mover");n?d=n.getBoundingClientRect().height:d=0,r()},0)})}function p(){_=setInterval(()=>{v<T(l).length-1?(F(f,T(f)-d),v++):clearInterval(_)},800)}var t=be(),u=C(t);Te(u,21,()=>T(l),Ie,(r,n)=>{var h=Ne(),g=C(h,!0);A(h),q(()=>{J(h,"style",`--shift: ${T(f)??""}px`),ye(g,T(n))}),D(r,h)}),A(u),A(t),q(()=>J(u,"style",`--chwidth: ${e.finalName.length??""}ch`)),D(s,t),ge()}var He=z('<div id="main" class="svelte-u8knyk"><p class="svelte-u8knyk">MaybeIts<!></p></div>');function Oe(s){var e=He(),a=C(e),l=xe(C(a));Ce(l,{finalName:"Andy"}),A(a),A(e),D(s,e)}export{Oe as component};