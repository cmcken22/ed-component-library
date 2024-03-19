const s=r=>(i,n)=>{let t="";for(const o in n.args){const e=n.args[o];if(typeof e=="function")t+=`  ${o}={() => {}}
`;else if(typeof e=="object"){if(e instanceof Date){t+=`  ${o}={new Date("${e.toISOString()}")}
`;continue}const a=JSON.stringify(e,null,2).replace(/\n/g,`
  `);t+=`  ${o}={${a}}
`}else typeof e=="boolean"?t+=`  ${o}={${e.toString()}}
`:typeof e=="number"?t+=`  ${o}={${e.toString()}}
`:t+=`  ${o}="${e}"
`}return`<${r}
${t}/>`};try{s.displayName="sourceCodeFormatter",s.__docgenInfo={description:"",displayName:"sourceCodeFormatter",props:{}}}catch{}export{s};
