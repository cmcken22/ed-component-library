import{j as f}from"./jsx-runtime-Du8NFWEI.js";import{B as k}from"./Button-C2iSgadE.js";import{e as d,S as $}from"./enqueueSnackbar-C13W9FJf.js";import"./index-Dl6G-zuu.js";import"./Typography-DjRGjSGD.js";import"./createTheme-Dc-CT_GP.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Icon-Cu7WjEzB.js";import"./index-FNnhrwHs.js";import"./palette-D0GmnfNO.js";import"./styled-DLEC8BOE.js";import"./Box-DP0gCcGq.js";import"./index-D1_ZHIBm.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-aX2SwWXP.js";import"./TransitionGroupContext-6TzUecMu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./Typography-DTRbJCHq.js";import"./Typography-QG6-VWOQ.js";const _={title:"Example/Snackbar",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:["success","warning","error","info"],control:{type:"radio"}}}},o={render:a=>f.jsx($,{...a}),parameters:{docs:{source:{language:"tsx",transform:(a,s)=>{var t;let r="";for(const e in s.args){if(e==="message")continue;const n=s.args[e];if(typeof n=="function")r+=`  ${e}={() => {}}
`;else if(typeof n=="object"){const y=JSON.stringify(n,null,2).replace(/\n/g,`
  `);r+=`  ${e}={${y}}
`}else typeof n=="boolean"?r+=`  ${e}={${n.toString()}}
`:typeof n=="number"?r+=`  ${e}={${n.toString()}}
`:r+=`  ${e}="${n}"
`}return`enqueueSnackbar("${(t=s==null?void 0:s.args)==null?void 0:t.message}", {
${r}});`}}}},args:{message:"This is a success message",variant:"success",persist:!1,preventDuplicate:!1,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3,transitionDuration:250}},i={render:a=>f.jsx(k,{onClick:()=>{d(a.message,{...a})},children:"Click Me"}),parameters:{docs:{source:{language:"tsx",transform:(a,s)=>{const{args:r}=s,t={...r};delete t.message;let e="";e+="<Button",e+=`
 onClick={() => {`,e+=`
   enqueueSnackbar("${r.message}", {`;for(const n in t)e+=`
     ${n}: ${JSON.stringify(r[n])},`;return e+=`
   });`,e+=`
 }`,e+=`
>`,e+=`
 Click Me`,e+=`
</Button>`,e}}}},args:{message:"This is a message",variant:"info",persist:!1,preventDuplicate:!1,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // @ts-ignore
  render: args => <Snackbar {...args} />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: (code: string, context: any) => {
          let args = "";
          for (const key in context.args) {
            if (key === "message") continue;
            const value = context.args[key];
            if (typeof value === "function") {
              args += \`  \${key}={() => {}}\\n\`;
            } else if (typeof value === "object") {
              const formattedValue = JSON.stringify(value, null, 2).replace(/\\n/g, "\\n  ");
              args += \`  \${key}={\${formattedValue}}\\n\`;
            } else if (typeof value === "boolean") {
              args += \`  \${key}={\${value.toString()}}\\n\`;
            } else if (typeof value === "number") {
              args += \`  \${key}={\${value.toString()}}\\n\`;
            } else {
              args += \`  \${key}="\${value}"\\n\`;
            }
          }
          return \`enqueueSnackbar("\${context?.args?.message}", {\\n\` + \`\${args}\` + \`});\`;
        }
      }
    }
  },
  // @ts-ignore
  args: {
    message: "This is a success message",
    variant: "success",
    persist: false,
    preventDuplicate: false,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    autoHideDuration: 3000,
    transitionDuration: 250
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,m,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        transform: (code, storyContext) => {
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
  },
  // @ts-ignore
  args: {
    message: "This is a message",
    variant: "info",
    persist: false,
    preventDuplicate: false,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    autoHideDuration: 2000
    // transitionDuration: 500,
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Default","Play"];export{o as Default,i as Play,w as __namedExportsOrder,_ as default};
