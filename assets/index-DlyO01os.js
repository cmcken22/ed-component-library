const a=n=>"  ".repeat(n),f=({args:n,map:s,indent:r})=>{let o="";for(const e in n){const t=n[e];if(s&&s[e]){const c=typeof s[e]=="function"?s[e](t):s[e];o+=`${a(r)}${e}={${c}}
`;continue}if(typeof t=="function")o+=`${a(r)}${e}={() => {}}
`;else if(typeof t=="object"){if(t instanceof Date){o+=`${a(r)}${e}={new Date("${t.toISOString()}")}
`;continue}const c=JSON.stringify(t,null,2).replace(/\n/g,`
  `);o+=`${a(r)}${e}={${c}}
`}else typeof t=="boolean"?o+=`${a(r)}${e}={${t.toString()}}
`:typeof t=="number"?o+=`${a(r)}${e}={${t.toString()}}
`:o+=`${a(r)}${e}="${t}"
`}return o},$=(n,s)=>(r,o)=>{const{map:e,indent:t=1}=s||{map:{},indent:1},c=f({args:o.args,map:e,indent:t});return`<${n}
${c}/>`};try{f.displayName="formatArgs",f.__docgenInfo={description:"",displayName:"formatArgs",props:{}}}catch{}export{f,$ as s};
