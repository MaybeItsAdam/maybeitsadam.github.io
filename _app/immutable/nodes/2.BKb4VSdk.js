import{a as d,t as x}from"../chunks/disclose-version.DZO4BPne.js";import"../chunks/legacy.DDWCGqTo.js";import{U as f,p as b,t as y,q as I,k as n,i,j as l,m as u,g as _,s as w}from"../chunks/runtime.B_IIoKt4.js";import{s as E}from"../chunks/render.BVahkrRR.js";import{i as M}from"../chunks/lifecycle.0AHK1gUb.js";import{o as T}from"../chunks/index-client.iFeqCXK4.js";function $(e,a){var s=e.__className,t=j(a);f&&e.className===t?e.__className=t:(s!==t||f&&e.className!==t)&&(a==null?e.removeAttribute("class"):e.className=t,e.__className=t)}function j(e){return e??""}var k=x('<div class="carousel-wrapper svelte-d7c07s"><div> </div></div>');function q(e,a){b(a,!1);let s=[],t=0,o=u(""),c=u(!1);function g(){n(c,!0),setTimeout(()=>{t=(t+1)%s.length,n(o,s[t]),n(c,!1)},1e3)}async function N(){try{s=(await(await fetch("/names.txt")).text()).split(`
`).map(v=>v.trim()).filter(v=>v),n(o,s[t])}catch(r){console.error("Error loading names:",r)}}T(()=>{N();const r=setInterval(g,2e3);return()=>clearInterval(r)}),M();var m=k(),p=i(m),h=i(p,!0);l(p),l(m),y(()=>{$(p,`name ${(_(c)?"name-exiting":"")??""} svelte-d7c07s`),E(h,_(o))}),d(e,m),I()}var A=x('<div id="main" class="svelte-849105"><p class="svelte-849105">MaybeIts<!></p></div>');function H(e){var a=A(),s=i(a),t=w(i(s));q(t,{}),l(s),l(a),d(e,a)}export{H as component};
