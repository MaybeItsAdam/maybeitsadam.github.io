import{a1 as b,K as E,a2 as A,D as R,a3 as M,a4 as P,a5 as W,F as Y,a6 as S,a7 as j,a8 as q,a9 as B,aa as m,ab as w,ac as O,ad as C,a0 as p,ae as $,af as F,ag as K,ah as Z,ai as x,aj as z,ak as G,Z as J,w as Q,h as L,x as U,c as X}from"./runtime.Cded0Fkq.js";import{b as rr}from"./disclose-version.CgdGVTYr.js";const ar=["touchstart","touchmove"];function tr(r){return ar.includes(r)}function er(r){var a=A,e=R;b(null),E(null);try{return r()}finally{b(a),E(e)}}const nr=new Set,k=new Set;function ir(r,a,e,o){function i(t){if(o.capture||y.call(a,t),!t.cancelBubble)return er(()=>e.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?P(()=>{a.addEventListener(r,i,o)}):a.addEventListener(r,i,o),i}function fr(r,a,e,o,i){var t={capture:o,passive:i},u=ir(r,a,e,t);(a===document.body||a===window||a===document)&&M(()=>{a.removeEventListener(r,u,t)})}function y(r){var D;var a=this,e=a.ownerDocument,o=r.type,i=((D=r.composedPath)==null?void 0:D.call(r))||[],t=i[0]||r.target,u=0,_=r.__root;if(_){var l=i.indexOf(_);if(l!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;l<=h&&(u=l)}if(t=i[u]||r.target,t!==a){W(r,"currentTarget",{configurable:!0,get(){return t||e}});var T=A,f=R;b(null),E(null);try{for(var n,s=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var d=t["__"+o];if(d!==void 0&&!t.disabled)if(Y(d)){var[V,...H]=d;V.apply(t,[r,...H])}else d.call(t,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||c===a||c===null)break;t=c}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=a,delete r.currentTarget,b(T),E(f)}}}function cr(r,a){var e=a==null?"":typeof a=="object"?a+"":a;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function sr(r,a){return I(r,a)}function lr(r,a){S(),a.intro=a.intro??!1;const e=a.target,o=L,i=p;try{for(var t=j(e);t&&(t.nodeType!==8||t.data!==q);)t=B(t);if(!t)throw m;w(!0),O(t),C();const u=I(r,{...a,anchor:t});if(p===null||p.nodeType!==8||p.data!==$)throw F(),m;return w(!1),u}catch(u){if(u===m)return a.recover===!1&&K(),S(),Z(e),w(!1),sr(r,a);throw u}finally{w(o),O(i)}}const v=new Map;function I(r,{target:a,anchor:e,props:o={},events:i,context:t,intro:u=!0}){S();var _=new Set,l=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var c=tr(s);a.addEventListener(s,y,{passive:c});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:c}),v.set(s,1)):v.set(s,d+1)}}};l(x(nr)),k.add(l);var h=void 0,T=z(()=>{var f=e??a.appendChild(G());return J(()=>{if(t){Q({});var n=X;n.c=t}i&&(o.$$events=i),L&&rr(f,null),h=r(f,o)||{},L&&(R.nodes_end=p),t&&U()}),()=>{var c;for(var n of _){a.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}k.delete(l),f!==e&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function dr(r,a){const e=N.get(r);return e?(N.delete(r),e(a)):Promise.resolve()}export{fr as e,lr as h,sr as m,cr as s,dr as u};
