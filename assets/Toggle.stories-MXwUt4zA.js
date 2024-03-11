import{s as c,j as t}from"./styled-E6V2dxkg.js";import{c as k}from"./index-BpvXyOxN.js";import{r as s}from"./index-CBqU2yxZ.js";import{T as f}from"./Typography-BOwT3LmW.js";import{B as p}from"./Box-CW5E8zBp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-DMu__NgM.js";import"./Typography-CjUrGxKM.js";const C=c(p,{shouldForwardProp:e=>e!=="checked"&&e!=="labelPosition",slot:"root"})(({theme:e,checked:r,disabled:a,labelPosition:o})=>({cursor:a?"default":"pointer",display:"flex",flexDirection:o==="right"?"row-reverse":"row",gap:"8px",alignItems:"center",width:"fit-content","& .ToggleLabel":{webkitUserSelect:"none",msUserSelect:"none",userSelect:"none",color:a?e.palette.charcoal[60]:e.palette.charcoal[90]},...!a&&{"&:hover":{".ToggleWrapper":{borderColor:e.palette.primary.main,".ToggleText--OFF":{color:e.palette.primary.main},...!r&&{".ToggleIndicator":{background:e.palette.primary.main}}}}}})),S=c(p,{shouldForwardProp:e=>e!=="checked",slot:"root"})(({theme:e,checked:r,disabled:a})=>{let o=e.palette.charcoal.main;return r&&(o=e.palette.primary.main),a&&(o=e.palette.charcoal[30]),{cursor:a?"default":"pointer",position:"relative",width:"38px",height:"20px",borderRadius:"24px",border:`1px solid ${o}`,backgroundColor:r?o:"white",borderColor:o,display:"flex",alignItems:"center",transition:"all 0.2s ease",".ToggleText":{webkitUserSelect:"none",msUserSelect:"none",userSelect:"none"},...!a&&{"&:hover":{borderColor:e.palette.primary.main,".ToggleText--OFF":{color:e.palette.primary.main},...!r&&{".ToggleIndicator":{background:e.palette.primary.main}}}}}}),_=c(p,{shouldForwardProp:e=>e!=="checked",slot:"root"})(({theme:e,checked:r,disabled:a})=>{let o=r?"white":e.palette.charcoal.main;return a&&(o=r?"white":e.palette.charcoal[30]),{position:"absolute",width:"16px",height:"16px",background:o,borderRadius:"50%",left:r?"18px":"1px",transition:"all 0.2s ease"}}),v=c(p,{shouldForwardProp:e=>e!=="checked",slot:"root"})(()=>({height:"100%",width:"50%",display:"flex",justifyContent:"center",alignItems:"center"})),d=({checked:e,disabled:r,onChange:a,displayToggleText:o,label:g,labelPosition:y,sx:b})=>{const[n,u]=s.useState(e||!1),w=s.useCallback(l=>{console.log("__handleChange",l),!r&&(u(l),a&&a(l))},[u,a,r]),m=s.useCallback(l=>o?t.jsx(v,{sx:{pr:l==="OFF"?.3:0},children:t.jsx(f,{className:k("ToggleText",{[`ToggleText--${l}`]:l}),variant:"errorMessage",color:l==="OFF"?"charcoal.main":"white",fontSize:"8px",children:l})}):null,[o]),F=s.useCallback(()=>g?t.jsx(f,{className:"ToggleLabel",variant:"bodyS",children:g}):null,[g]);return t.jsxs(C,{disabled:r,checked:n,onClick:()=>w(!n),labelPosition:y,sx:b,children:[t.jsxs(S,{className:"ToggleWrapper",checked:n,disabled:r,children:[m("ON"),t.jsx(_,{className:"ToggleIndicator",checked:n,disabled:r}),m("OFF")]}),F()]})};try{d.displayName="Toggle",d.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}},displayToggleText:{defaultValue:{value:"false"},description:'Display the text "ON" and "OFF" inside the toggle',name:"displayToggleText",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const U={title:"Example/Toggle",component:d,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{displayToggleText:!1,label:"Toggle Label"}};var x,T,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    displayToggleText: false,
    label: "Toggle Label"
  }
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const R=["Sample"];export{i as Sample,R as __namedExportsOrder,U as default};
