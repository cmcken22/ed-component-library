import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as m,c as v}from"./index-8HRI1sDn.js";import{r as x}from"./index-Dl6G-zuu.js";import{I as i,a as y}from"./Icon.types-Bg_FxVn4.js";import{T as d}from"./Typography-CPNth6VQ.js";import{h}from"./index-DPNVsBv0.js";import{B as V}from"./Box-GI0gEbLE.js";const w=m(V,{shouldForwardProp:e=>e!=="type"&&e!=="iconPosition",slot:"root"})(({theme:e,type:r,iconPosition:t})=>{const n={positive:e.palette.success.dark,negative:e.palette.error.dark,warning:e.palette.warning.dark,pending:e.palette.primary[70],neutral:e.palette.charcoal[80]};return{width:"fit-content",display:"flex",flexDirection:t==="right"?"row-reverse":"row",alignItems:"center",borderRadius:"16px",paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),background:h(n[r],.2),gap:e.spacing(.5),".icon-wrapper":{color:n[r]},".MuiTypography-root":{color:n[r]}}}),s=({id:e,type:r,text:t,hideIcon:n,className:l,iconPosition:c,onClick:p,onHover:f,children:o,sx:g})=>{const u=x.useMemo(()=>r==="positive"?i.Success:r==="negative"?i.Error:r==="warning"?i.WarningV2:r==="pending"?i.MoreActionsHorizontal:r==="neutral"?i.Undetermined:"",[r]);return a.jsxs(w,{id:e,className:v("chip",{[l]:l}),type:r,iconPosition:c,onClick:p,onMouseEnter:f,sx:{cursor:p?"pointer":"default",...g},"data-testid":"chip","data-chip-type":r,children:[!n&&u&&a.jsx(y,{icon:u,height:"14px",width:"14px"}),typeof o=="string"?a.jsx(d,{preventTextSelection:!0,variant:"bodyXS",children:o}):a.jsx(a.Fragment,{children:o}),t&&!o&&a.jsx(d,{preventTextSelection:!0,variant:"bodyXS",children:t})]})};s.defaultProps={type:"neutral",hideIcon:!1,iconPosition:"left"};try{s.displayName="Chip",s.__docgenInfo={description:"",displayName:"Chip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"warning"'},{value:'"pending"'},{value:'"neutral"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},hideIcon:{defaultValue:null,description:"",name:"hideIcon",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!1,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}export{s as C};
