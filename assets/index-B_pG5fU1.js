const $=r=>"  ".repeat(r),l=(r,a)=>(c,s)=>{const{map:i,indent:o=1}=a||{map:{},indent:1};let n="";for(const e in s.args){const t=s.args[e];if(i&&i[e]){n+=`${$(o)}${e}={${i[e]}}
`;continue}if(typeof t=="function")n+=`${$(o)}${e}={() => {}}
`;else if(typeof t=="object"){if(t instanceof Date){n+=`${$(o)}${e}={new Date("${t.toISOString()}")}
`;continue}const f=JSON.stringify(t,null,2).replace(/\n/g,`
  `);n+=`${$(o)}${e}={${f}}
`}else typeof t=="boolean"?n+=`${$(o)}${e}={${t.toString()}}
`:typeof t=="number"?n+=`${$(o)}${e}={${t.toString()}}
`:n+=`${$(o)}${e}="${t}"
`}return`<${r}
${n}/>`};export{l as s};
