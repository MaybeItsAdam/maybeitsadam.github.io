import{a as D,t as L}from"../chunks/disclose-version.CIozeill.js";import"../chunks/legacy.DsPB_jT1.js";import{ak as Q,X as j,h as b,ac as S,ad as ee,F as ae,ai as W,an as te,ao as O,ab as R,a0 as T,ap as N,aq as Z,Z as z,ar as re,D as X,as as ne,at as se,ah as le,au as ie,$ as fe,a7 as ve,ae as oe,a2 as ue,W as ce,A as Y,av as de,aw as he,ax as pe,a9 as _e,w as me,k as ge,t as $,x as xe,o as q,e as I,s as G,p as B,l as H,m as k}from"../chunks/runtime.DrY0v0QI.js";import{e as ye,s as Ee}from"../chunks/render.DuxDhBBu.js";import{s as F}from"../chunks/attributes.CC8A7YEE.js";import{i as be}from"../chunks/lifecycle.WqkpxeUJ.js";import{p as we}from"../chunks/props.CyoV07bV.js";import{o as Ie}from"../chunks/index-client.zzT89o0z.js";function Te(s,e){return e}function Ae(s,e,a,l){for(var o=[],v=e.length,f=0;f<v;f++)se(e[f].e,o,!0);var p=v>0&&o.length===0&&a!==null;if(p){var h=a.parentNode;le(h),h.append(a),l.clear(),E(s,e[0].prev,e[v-1].next)}ie(o,()=>{for(var u=0;u<v;u++){var _=e[u];p||(l.delete(_.k),E(s,_.prev,_.next)),fe(_.e,!p)}})}function Ne(s,e,a,l,o,v=null){var f=s,p={flags:e,items:new Map,first:null};{var h=s;f=b?S(ve(h)):h.appendChild(Q())}b&&ee();var u=null,_=!1;j(()=>{var t=a(),c=ae(t)?t:t==null?[]:W(t),r=c.length;if(_&&r===0)return;_=r===0;let n=!1;if(b){var d=f.data===te;d!==(r===0)&&(f=O(),S(f),R(!1),n=!0)}if(b){for(var g=null,x,i=0;i<r;i++){if(T.nodeType===8&&T.data===oe){f=T,n=!0,R(!1);break}var m=c[i],A=l(m,i);x=J(T,p,g,null,m,A,i,o,e),p.items.set(A,x),g=x}r>0&&S(O())}if(!b){var w=ue;ke(c,p,f,o,e,(w.f&N)!==0,l)}v!==null&&(r===0?u?Z(u):u=z(()=>v(f)):u!==null&&re(u,()=>{u=null})),n&&R(!0),a()}),b&&(f=T)}function ke(s,e,a,l,o,v,f,p){var h=s.length,u=e.items,_=e.first,t=_,c,r=null,n=[],d=[],g,x,i,m;for(m=0;m<h;m+=1){if(g=s[m],x=f(g,m),i=u.get(x),i===void 0){var A=t?t.e.nodes_start:a;r=J(A,e,r,r===null?e.first:r.next,g,x,m,l,o),u.set(x,r),n=[],d=[],t=r.next;continue}if(Me(i,g,m),i.e.f&N&&Z(i.e),i!==t){if(c!==void 0&&c.has(i)){if(n.length<d.length){var w=d[0],y;r=w.prev;var V=n[0],M=n[n.length-1];for(y=0;y<n.length;y+=1)U(n[y],w,a);for(y=0;y<d.length;y+=1)c.delete(d[y]);E(e,V.prev,M.next),E(e,r,V),E(e,M,w),t=w,r=M,m-=1,n=[],d=[]}else c.delete(i),U(i,t,a),E(e,i.prev,i.next),E(e,i,r===null?e.first:r.next),E(e,r,i),r=i;continue}for(n=[],d=[];t!==null&&t.k!==x;)(v||!(t.e.f&N))&&(c??(c=new Set)).add(t),d.push(t),t=t.next;if(t===null)continue;i=t}n.push(i),r=i,t=i.next}if(t!==null||c!==void 0){for(var C=c===void 0?[]:W(c);t!==null;)(v||!(t.e.f&N))&&C.push(t),t=t.next;var K=C.length;if(K>0){var P=h===0?a:null;Ae(e,C,P,u)}}X.first=e.first&&e.first.e,X.last=r&&r.e}function Me(s,e,a,l){ne(s.v,e),s.i=a}function J(s,e,a,l,o,v,f,p,h,u){var _=(h&he)!==0,t=(h&pe)===0,c=_?t?ce(o):Y(o):o,r=h&de?Y(f):f,n={i:r,v:c,k:v,a:null,e:null,prev:a,next:l};try{return n.e=z(()=>p(s,c,r),b),n.e.prev=a&&a.e,n.e.next=l&&l.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),l!==null&&(l.prev=n,l.e.prev=n.e),n}finally{}}function U(s,e,a){for(var l=s.next?s.next.e.nodes_start:a,o=e?e.e.nodes_start:a,v=s.e.nodes_start;v!==l;){var f=_e(v);o.before(v),v=f}}function E(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Ce=L('<div class="mover svelte-75l13p"> </div>'),Se=L('<div id="cwrapper" class="svelte-75l13p"></div> <button>Start Shifting</button>',1);function Re(s,e){me(e,!1);let a,l=B(),o=we(e,"finalName",8,"");const v=async r=>(a=(await(await fetch("/names.txt")).text()).split(`
`),[...a].sort(()=>Math.random()-.5).slice(0,r));Ie(async()=>{q(l,await v(3)),I(l).push(o())});let f=0,p=B(0),h;function u(){h=setInterval(()=>{f<I(l).length?(f++,q(p,I(p)-f)):clearInterval(h)},800)}be();var _=Se(),t=ge(_);Ne(t,5,()=>I(l),Te,(r,n)=>{var d=Ce(),g=H(d,!0);k(d),$(()=>{F(d,"style",`--shift: ${I(p)??""}ch`),Ee(g,I(n))}),D(r,d)}),k(t);var c=G(t,2);$(()=>F(t,"style",`--chwidth: ${o().length??""}ch`)),ye("click",c,u),D(s,_),xe()}var De=L('<div id="main" class="svelte-849105"><p class="svelte-849105">MaybeIts<!></p></div>');function Be(s){var e=De(),a=H(e),l=G(H(a));Re(l,{finalName:"Adam"}),k(a),k(e),D(s,e)}export{Be as component};
