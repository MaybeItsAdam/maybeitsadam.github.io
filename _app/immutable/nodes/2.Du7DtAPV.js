import{a as y,t as N}from"../chunks/disclose-version.6_pHQPI1.js";import"../chunks/legacy.CuSCFMZk.js";import{p as A,t as R,q as k,g as c,k as r,i as s,j as n,m as x,s as T}from"../chunks/runtime.d-aAl1Zd.js";import{s as j}from"../chunks/render.Dr3QhQJy.js";import{i as q}from"../chunks/lifecycle.VMwrGAyE.js";import{p as w}from"../chunks/props.y1MJm4mB.js";import{o as C}from"../chunks/index-client.CohRjbOw.js";function I(t,a,e){if(e){if(t.classList.contains(a))return;t.classList.add(a)}else{if(!t.classList.contains(a))return;t.classList.remove(a)}}var P=N('<span class="carousel svelte-1amw9gy"><span class="mask svelte-1amw9gy"><span class="text svelte-1amw9gy"> </span></span></span>');function Q(t,a){A(a,!1);let e=w(a,"finalName",8,""),o=w(a,"numRandomNames",8,3),m=[],l=x(""),i=x(!1),u=[];async function h(){m=(await(await fetch("names.txt")).text()).split(`
`).filter(b=>b.trim())}function _(){return Array(o()).fill(0).map(()=>m[Math.floor(Math.random()*m.length)])}async function L(){if(!c(i)){r(i,!0),u=_();for(const d of u)r(l,d),await new Promise(g=>setTimeout(g,500));r(l,e()),r(i,!1)}}C(async()=>{await h(),L()}),q();var p=P(),v=s(p),f=s(v),M=s(f,!0);n(f),n(v),n(p),R(()=>{I(f,"animate",c(i)),j(M,c(l)||e())}),y(t,p),k()}var z=N('<div id="main" class="svelte-849105"><p class="svelte-849105">MaybeIts<!></p></div>');function K(t){var a=z(),e=s(a),o=T(s(e));Q(o,{finalName:"Adam"}),n(e),n(a),y(t,a)}export{K as component};
