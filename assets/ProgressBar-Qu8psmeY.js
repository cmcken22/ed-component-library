import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{a as F,g as O,l as k,s as x,m as N,u as U,b as E,d as K,c as X}from"./index-Bm4I-j5O.js";import{r as v}from"./index-Dl6G-zuu.js";import{s as G,a as y,c as H}from"./index-CYSaZ1-Z.js";import{T as _}from"./Typography-Br6reEa4.js";import{u as J}from"./index-C3QW2DIj.js";import{a as B}from"./Typography-BoXyf5oC.js";import{a as l,_ as Q,l as Y,f as Z}from"./createTheme-B65QLLQ5.js";import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{u as S}from"./index-DL8WKete.js";import{B as j}from"./Box-BmeHL9xr.js";function rr(r){return O("MuiLinearProgress",r)}const er=F("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),I=er,ar=["className","color","value","valueBuffer","variant"];let h=r=>r,V,R,M,T,z,w;const $=4,or=k(V||(V=h`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),tr=k(R||(R=h`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),nr=k(M||(M=h`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),ir=r=>{const{classes:e,variant:a,color:o}=r,t={root:["root",`color${l(o)}`,a],dashed:["dashed",`dashedColor${l(o)}`],bar1:["bar",`barColor${l(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${l(o)}`,a==="buffer"&&`color${l(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return K(t,rr,e)},L=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?Y(r.palette[e].main,.62):Z(r.palette[e].main,.5),sr=x("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${l(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>g({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:L(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),lr=x("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${l(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=L(e,r.color);return g({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},N(T||(T=h`
    animation: ${0} 3s infinite linear;
  `),nr)),ur=x("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${l(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>g({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${$}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${$}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&N(z||(z=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),or)),dr=x("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${l(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>g({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:L(e,r.color),transition:`transform .${$}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&N(w||(w=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),tr)),cr=v.forwardRef(function(e,a){const o=U({props:e,name:"MuiLinearProgress"}),{className:t,color:p="primary",value:u,valueBuffer:f,variant:d="indeterminate"}=o,C=Q(o,ar),m=g({},o,{color:p,variant:d}),c=ir(m),P=S(),b={},s={bar1:{},bar2:{}};if((d==="determinate"||d==="buffer")&&u!==void 0){b["aria-valuenow"]=Math.round(u),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let i=u-100;P&&(i=-i),s.bar1.transform=`translateX(${i}%)`}if(d==="buffer"&&f!==void 0){let i=(f||0)-100;P&&(i=-i),s.bar2.transform=`translateX(${i}%)`}return n.jsxs(sr,g({className:E(c.root,t),ownerState:m,role:"progressbar"},b,{ref:a},C,{children:[d==="buffer"?n.jsx(lr,{className:c.dashed,ownerState:m}):null,n.jsx(ur,{className:c.bar1,ownerState:m,style:s.bar1}),d==="determinate"?null:n.jsx(dr,{className:c.bar2,ownerState:m,style:s.bar2})]}))}),fr=cr,mr=x(fr,{shouldForwardProp:G(["barColor","railColor","size"]),slot:"root"})(({theme:r,barColor:e,railColor:a,size:o})=>{var t;return{width:"100%",height:y(o),borderRadius:y(o),[`&.${I.colorPrimary}`]:{backgroundColor:a||((t=r.palette.charcoal)==null?void 0:t["10"])},[`& .${I.bar}`]:{backgroundColor:e,borderRadius:y(o)}}}),q=({id:r,className:e,sx:a,value:o,status:t,leftText:p,rightText:u,errorMessage:f,width:d,minWidth:C,fullWidth:m,color:c,railColor:P,size:b})=>{const s=J(),i=v.useMemo(()=>{if(o!==void 0)return t==="error"||t==="success"?100:H(o,0,100)},[o]),D=v.useMemo(()=>t==="error"?s.palette.danger.main:t==="success"||i>=100?s.palette.success.main:c||s.palette.warning.main,[s,t,i,c]),W=v.useMemo(()=>t==="error"||t==="success"?!1:o===void 0,[t,o]),A=v.useCallback(()=>t==="error"&&f?n.jsx(_,{className:"ProgressBar__errorMessage",variant:B.errorMessage,color:"error",children:f}):n.jsxs(n.Fragment,{children:[p&&n.jsx(_,{className:"ProgressBar__leftText",variant:B.errorMessage,color:"text.placeholder",children:p}),u&&n.jsx(_,{className:"ProgressBar__rightText",variant:B.errorMessage,color:"text.placeholder",children:u})]}),[t,f,p,u]);return n.jsxs(j,{id:r,className:X("ProgressBar",{[e]:e}),sx:{width:m?"100%":y(d),minWidth:y(C),display:"flex",flexDirection:"column",gap:.5,...a},"data-testid":"ProgressBar",children:[n.jsx(mr,{variant:W?"indeterminate":"determinate",value:i,barColor:D,railColor:P,size:b}),f&&t==="error"||p||u?n.jsx(j,{className:"ProgressBar__content",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:2},children:A()}):null]})};q.defaultProps={value:void 0,fullWidth:!0,leftText:"",rightText:"",minWidth:100,railColor:void 0,size:4};try{q.displayName="ProgressBar",q.__docgenInfo={description:"",displayName:"ProgressBar",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},value:{defaultValue:null,description:`The value of the progress bar. Should be between 0 and 100.
If not provided, the progress bar will be indeterminate.`,name:"value",required:!1,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},leftText:{defaultValue:null,description:"",name:"leftText",required:!1,type:{name:"string"}},rightText:{defaultValue:null,description:"",name:"rightText",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},railColor:{defaultValue:null,description:"",name:"railColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The height of the progress bar.",name:"size",required:!1,type:{name:"4"}}}}}catch{}export{q as P};
