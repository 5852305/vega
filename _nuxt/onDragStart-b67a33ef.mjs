function m(o,r,i){const e={x:o.clientX,y:o.clientY};let n=e;const s=t=>{const v={x:t.clientX-n.x,y:t.clientY-n.y};n={x:t.clientX,y:t.clientY},r(v,t,{x:t.clientX-e.x,y:t.clientY-e.y})};window.addEventListener("mousemove",s);const c=t=>{i&&i(t),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",c)};window.addEventListener("mouseup",c)}export{m as o};