function i(e,s){e=e.replace("#","");const o=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return`rgba(${o}, ${n}, ${r}, ${s})`}const $=e=>s=>!e.includes(s),c=e=>(s,o)=>{let n="";for(const r in o.args){const t=o.args[r];if(typeof t=="function")n+=`  ${r}={() => {}}
`;else if(typeof t=="object"){if(t instanceof Date){n+=`  ${r}={new Date("${t.toISOString()}")}
`;continue}const a=JSON.stringify(t,null,2).replace(/\n/g,`
  `);n+=`  ${r}={${a}}
`}else typeof t=="boolean"?n+=`  ${r}={${t.toString()}}
`:typeof t=="number"?n+=`  ${r}={${t.toString()}}
`:n+=`  ${r}="${t}"
`}return`<${e}
${n}/>`};export{$ as a,i as h,c as s};
