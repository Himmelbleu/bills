import{D as p,C as v}from"./index-EUGKxjDX.js";import{d as V,n as h,f as B,c as a,F as _,g as x,u as A,a as d,r as w,o as n,b as f,w as y,e as C}from"./index-0nfVqFLt.js";const F=d("div",{class:"mb-5"},[d("div",null,"收支统计"),d("div",{class:"text-0.8rem text-text-secondary"},"统计相同收支总金额")],-1),I={class:"mt-4 f-c-b flex-wrap"},O={class:"mb-4 flex-basis-33.33% max-w-33.33%"},R={class:"mt-4 f-c-b flex-wrap"},T={class:"mb-4 flex-basis-33.33% max-w-33.33%"},Y=V({__name:"Infographic",async setup(L){let t,r;const g=([t,r]=h(()=>p.create()),t=await t,r(),t),E=([t,r]=h(()=>p.get(g,v.VIEW_DATE,"0")),t=await t,r(),t),k=B(([t,r]=h(()=>p.get(g,v.RECORD,E.Y)),t=await t,r(),t));function D(o){const e={};for(const c in o.items)if(o.items.hasOwnProperty(c)){const i=o.items[c];i.balance&&i.balance.forEach(u=>{const{type:l,text:s}=u;e[l]||(e[l]={}),e[l][s]||(e[l][s]=[]),e[l][s].push(u)})}return e}const N=D(k.value);function b(o){if(!o.length)return 0;let e=0;return o.forEach(c=>e+=Number(c.cost)),e}return(o,e)=>{const c=w("el-tag"),i=w("el-statistic");return n(),a("div",null,[F,(n(!0),a(_,null,x(A(N),(u,l)=>(n(),a("div",null,[l==="支"?(n(),a(_,{key:0},[f(c,{type:"danger"},{default:y(()=>[C("支出统计")]),_:1}),d("div",I,[(n(!0),a(_,null,x(u,(s,m)=>(n(),a("div",O,[f(i,{title:m+" ("+s.length+")",value:b(s)},null,8,["title","value"])]))),256))])],64)):(n(),a(_,{key:1},[f(c,{type:"success"},{default:y(()=>[C("收入统计")]),_:1}),d("div",R,[(n(!0),a(_,null,x(u,(s,m)=>(n(),a("div",T,[f(i,{title:m+" ("+s.length+")",value:b(s)},null,8,["title","value"])]))),256))])],64))]))),256))])}}});export{Y as default};
