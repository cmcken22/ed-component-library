const $=(i,o)=>(f,r)=>{let n="";for(const e in r.args){const t=r.args[e];if(o&&o[e]){n+=`  ${e}={${o[e]}}
`;continue}if(typeof t=="function")n+=`  ${e}={() => {}}
`;else if(typeof t=="object"){if(t instanceof Date){n+=`  ${e}={new Date("${t.toISOString()}")}
`;continue}const s=JSON.stringify(t,null,2).replace(/\n/g,`
  `);n+=`  ${e}={${s}}
`}else typeof t=="boolean"?n+=`  ${e}={${t.toString()}}
`:typeof t=="number"?n+=`  ${e}={${t.toString()}}
`:n+=`  ${e}="${t}"
`}return`<${i}
${n}/>`};export{$ as s};
