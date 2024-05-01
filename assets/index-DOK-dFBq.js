const $=i=>"  ".repeat(i),l=(i,f)=>(c,a)=>{const{map:r,indent:o=1}=f||{map:{},indent:1};let n="";for(const e in a.args){const t=a.args[e];if(r&&r[e]){const s=typeof r[e]=="function"?r[e](t):r[e];n+=`${$(o)}${e}={${s}}
`;continue}if(typeof t=="function")n+=`${$(o)}${e}={() => {}}
`;else if(typeof t=="object"){if(t instanceof Date){n+=`${$(o)}${e}={new Date("${t.toISOString()}")}
`;continue}const s=JSON.stringify(t,null,2).replace(/\n/g,`
  `);n+=`${$(o)}${e}={${s}}
`}else typeof t=="boolean"?n+=`${$(o)}${e}={${t.toString()}}
`:typeof t=="number"?n+=`${$(o)}${e}={${t.toString()}}
`:n+=`${$(o)}${e}="${t}"
`}return`<${i}
${n}/>`};export{l as s};
