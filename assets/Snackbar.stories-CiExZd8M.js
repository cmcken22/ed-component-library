import{j as d}from"./styled-ucQaTERo.js";import{B as k}from"./Button-Bqq15d2E.js";import{e as f,S as y}from"./enqueueSnackbar-BmbH_cmy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-DlFlw4dI.js";import"./index-BpvXyOxN.js";import"./Typography-BMnKtjAa.js";import"./index-DkvFToXR.js";import"./Box-BCwfq51s.js";import"./index-BtM5VmRH.js";import"./ButtonBase-BlZvthU4.js";import"./TransitionGroupContext-D_Kblpyy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./Typography-ymdnIRfC.js";import"./Typography-rKY_6Ojh.js";const E={title:"Example/Snackbar",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:["success","warning","error","info"],control:{type:"radio"}}}},a={render:r=>d.jsx(y,{...r}),parameters:{docs:{source:{language:"tsx",transform:(r,o)=>{const{args:e}=o;let s="";for(const n in e)n!=="message"&&(s+=`  ${n}: ${JSON.stringify(e[n])};
`);return`enqueueSnackbar("${e.message}", {
${s}});`}}}},args:{message:"This is a success message",variant:"success",persist:!1,preventDuplicate:!1,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3,transitionDuration:250}},t={render:r=>d.jsx(k,{onClick:()=>{f(r.message,{...r})},children:"Click Me"}),parameters:{docs:{source:{language:"tsx",transform:(r,o)=>{const{args:e}=o,s={...e};delete s.message;let n="";n+="<Button",n+=`
 onClick={() => {`,n+=`
   enqueueSnackbar("${e.message}", {`;for(const i in s)n+=`
     ${i}: ${JSON.stringify(e[i])},`;return n+=`
   });`,n+=`
 }`,n+=`
>`,n+=`
 Click Me`,n+=`
</Button>`,n}}}},args:{message:"This is a message",variant:"info",persist:!1,preventDuplicate:!1,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}};var c,g,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // @ts-ignore
  render: args => <Snackbar {...args} />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: (code, storyContext) => {
          const {
            args
          } = storyContext;
          let res = "";
          for (const key in args) {
            if (key === "message") continue;
            res += \`  \${key}: \${JSON.stringify(args[key])};\\n\`;
          }
          return \`enqueueSnackbar("\${args.message}", {\\n\${res}});\`;
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
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,p,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const P=["Default","Play"];export{a as Default,t as Play,P as __namedExportsOrder,E as default};
