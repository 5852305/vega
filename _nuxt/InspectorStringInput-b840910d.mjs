import l from"./VStringInput-4ef7453d.mjs";import r from"./InspectorInputBase-80050303.mjs";import{a as u,o as s,c as p,e as i,i as c,m}from"./entry-d823e272.mjs";const b=u({__name:"InspectorStringInput",props:{label:null,value:null},emits:["input"],setup(t,{emit:n}){function a(e){n("input",e)}return(e,_)=>{const o=l;return s(),p(r,{label:t.label},{default:i(()=>[c(o,m(e.$attrs,{value:t.value,onInput:a}),null,16,["value"])]),_:1},8,["label"])}}});export{b as default};