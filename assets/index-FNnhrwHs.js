function c(t,n){t=t.replace("#","");const o=parseInt(t.substring(0,2),16),e=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16);return`rgba(${o}, ${e}, ${r}, ${n})`}const i=t=>n=>!t.includes(n),u=t=>(n,o)=>{let e="";for(const r in o.args){const s=o.args[r];if(typeof s=="function")e+=`  ${r}={() => {}}
`;else if(typeof s=="object"){const a=JSON.stringify(s,null,2).replace(/\n/g,`
  `);e+=`  ${r}={${a}}
`}else typeof s=="boolean"?e+=`  ${r}={${s.toString()}}
`:typeof s=="number"?e+=`  ${r}={${s.toString()}}
`:e+=`  ${r}="${s}"
`}return`<${t}
${e}/>`};export{i as a,c as h,u as s};
