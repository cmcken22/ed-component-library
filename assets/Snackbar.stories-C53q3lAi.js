import{j as d}from"./jsx-runtime-Du8NFWEI.js";import{B as S}from"./Button-d43TxtP-.js";import{e as f,a as y}from"./ThemeWrapper-BDVUGYr3.js";const b=(a,s)=>{var t;let r="";for(const e in s.args){if(e==="message")continue;const n=s.args[e];if(typeof n=="function")r+=`  ${e}={() => {}}
`;else if(typeof n=="object"){const k=JSON.stringify(n,null,2).replace(/\n/g,`
  `);r+=`  ${e}={${k}}
`}else typeof n=="boolean"?r+=`  ${e}={${n.toString()}}
`:typeof n=="number"?r+=`  ${e}={${n.toString()}}
`:r+=`  ${e}="${n}"
`}return`enqueueSnackbar("${(t=s==null?void 0:s.args)==null?void 0:t.message}", {
${r}});`},$={title:"Example/Snackbar",component:f,parameters:{layout:"centered",docs:{description:{component:"The Snackbar is dependent on the SnackbarProvider. You must wrap your app in the SnackbarProvider"}}},args:{message:"This is a success message",variant:"success",persist:!1,preventDuplicate:!1,anchorOrigin:{vertical:"top",horizontal:"right"},hideIcon:!1,autoHideDuration:3e3,transitionDuration:250,width:"100%"},argTypes:{variant:{options:["success","warning","error","info"],control:{type:"radio"}}}},o={render:a=>d.jsx(y,{...a}),parameters:{docs:{source:{language:"tsx",transform:b}}}},c={render:a=>d.jsx(S,{onClick:()=>{f(a.message,{...a})},children:"Click Me"}),parameters:{docs:{source:{language:"tsx",transform:(a,s)=>{const{args:r}=s,t={...r};delete t.message;let e="";e+="<Button",e+=`
 onClick={() => {`,e+=`
   enqueueSnackbar("${r.message}", {`;for(const n in t)e+=`
     ${n}: ${JSON.stringify(r[n])},`;return e+=`
   });`,e+=`
 }`,e+=`
>`,e+=`
 Click Me`,e+=`
</Button>`,e}}}}};var i,u,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // @ts-ignore
  render: args => <Snackbar {...args} />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: enqueueSnackbarCodeSnippet
      }
    }
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,p,m;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  // @ts-ignore
  render: args => <Button onClick={() => {
    // @ts-ignore
    enqueueSnackbar(args.message, {
      ...args
    });
  }}>
      Click Me
    </Button>,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: (_, storyContext) => {
          const {
            args
          } = storyContext;
          const params = {
            ...args
          };
          delete params.message;
          let res = "";
          res += "<Button";
          res += \`\\n onClick={() => {\`;
          res += \`\\n   enqueueSnackbar("\${args.message}", {\`;
          for (const key in params) {
            res += \`\\n     \${key}: \${JSON.stringify(args[key])},\`;
          }
          res += \`\\n   });\`;
          res += \`\\n }\`;
          res += \`\\n>\`;
          res += \`\\n Click Me\`;
          res += \`\\n</Button>\`;
          return res;
        }
      }
    }
  }
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const C=["Default","Play"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Play:c,__namedExportsOrder:C,default:$},Symbol.toStringTag,{value:"Module"}));export{o as D,B as S};
