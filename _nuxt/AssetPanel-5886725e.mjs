import b from"./AssetListItemBase-c8e5555b.mjs";import I from"./AssetInspectorModal-0a27dd65.mjs";import{u as B}from"./useTimeline-65fbef88.mjs";import{u as M}from"./useDragAndDrop-b9747276.mjs";import{s as P}from"./index-b8d97233.mjs";import{g as T}from"./getIsElectron-dd460f76.mjs";import{k as V,a as $,r as u,E as j,o as i,f as l,h as F,F as c,G as L,u as N,i as p,H as S}from"./entry-d823e272.mjs";import"./VIcons-f6d178ce.mjs";import"./mdi-00233b2d.mjs";import"./VStringInput-4ef7453d.mjs";import"./VModal-3e9851d8.mjs";const z=["id","onClick","onMousedown"],G=$({__name:"AssetPanel",setup(H){const{assets:t,addAsset:d,removeAsset:m}=B(),{startDad:f}=M(),_=T;function v(e){var o;e.preventDefault();const s=(o=e.dataTransfer)==null?void 0:o.files[0];!s||d({id:P.uuid(),name:s.name,path:(_()?"file:":"")+s.path,type:k(g(s.name))})}function g(e){return e.split(".").pop()||""}function k(e){switch(e){case"jpg":case"jpeg":case"png":case"gif":return"Image";case"mp4":case"webm":case"ogg":return"Video";case"mp3":case"wav":return"Audio";default:return"unknown"}}function A(e){e.preventDefault()}function y(e,s){f(e,"assets",s,`asset-list-item-${s}`)}function x(e){t.value.selectedAssets=[e]}function D(e){return t.value.selectedAssets.includes(e)}const a=u(null),w=()=>{var e;(e=a.value)==null||e.focus()};j(()=>{var e;(e=a.value)==null||e.addEventListener("keydown",s=>{s.key==="x"&&t.value.selectedAssets.length>0&&m(t.value.selectedAssets[0])})});const r=u(!1);return(e,s)=>{const o=b,C=I;return i(),l(c,null,[F("div",{ref_key:"el",ref:a,style:{height:"100%"},tabindex:"0",onClick:w,onDrop:v,onDragover:A},[(i(!0),l(c,null,L(N(t).assets,(n,h)=>(i(),l("div",{id:`asset-list-item-${n.id}`,key:h,class:"asset-list-item",style:S({backgroundColor:D(n)?"#333":"black"}),onClick:()=>x(n),onMousedown:E=>y(E,n.id)},[p(o,{asset:n,onClickDots:s[0]||(s[0]=()=>r.value=!0)},null,8,["asset"])],44,z))),128))],544),p(C,{"is-open":r.value,onClose:s[1]||(s[1]=()=>r.value=!1)},null,8,["is-open"])],64)}}});var ee=V(G,[["__scopeId","data-v-88d25060"]]);export{ee as default};