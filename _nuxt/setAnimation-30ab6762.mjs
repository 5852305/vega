function f(e,t){for(let r=0;r<e.length;r++)if(Math.abs(e[r].time-t.time)<=1/60&&e[r].key===t.key)return e[r]={...t,time:e[r].time},e;return e.push(t),e.sort((r,u)=>r.time-u.time),e}export{f as s};
