import{j as c}from"./jsx-runtime-Du8NFWEI.js";import{c as R}from"./index-DfBNxlIc.js";import{r as i}from"./index-Dl6G-zuu.js";import{a as V}from"./Icon.types-D_4oR35k.js";import{r as G}from"./index-D1_ZHIBm.js";import{l as F}from"./lodash-BR7ZO34U.js";import{c as U,b as H,s as $,r as D,n as J,e as K,h as N,i as Q}from"./styled-BR12ND4t.js";import{B as C}from"./Box-BTk9yL7d.js";import{a as u,d as B,_ as X}from"./createTheme-DCk6V8kG.js";import{_ as p}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{B as Y}from"./ButtonBase-Dgt99m_m.js";function Z(o){return H("MuiButton",o)}const w=U("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),I=w,oo=i.createContext({}),ao=oo,ro=i.createContext(void 0),eo=ro,no=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],io=o=>{const{color:a,disableElevation:r,fullWidth:t,size:n,variant:s,classes:l}=o,f={root:["root",s,`${s}${u(a)}`,`size${u(n)}`,`${s}Size${u(n)}`,`color${u(a)}`,r&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${u(n)}`],endIcon:["icon","endIcon",`iconSize${u(n)}`]},e=Q(f,Z,l);return p({},l,e)},L=o=>p({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),to=$(Y,{shouldForwardProp:o=>D(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],a[`${r.variant}${u(r.color)}`],a[`size${u(r.size)}`],a[`${r.variant}Size${u(r.size)}`],r.color==="inherit"&&a.colorInherit,r.disableElevation&&a.disableElevation,r.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var r,t;const n=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],s=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return p({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":p({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:B(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:B(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:B(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":p({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${I.focusVisible}`]:p({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${I.disabled}`]:p({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${B(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(r=(t=o.palette).getContrastText)==null?void 0:r.call(t,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:n,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${I.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${I.disabled}`]:{boxShadow:"none"}}),so=$("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.startIcon,a[`iconSize${u(r.size)}`]]}})(({ownerState:o})=>p({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},L(o))),lo=$("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.endIcon,a[`iconSize${u(r.size)}`]]}})(({ownerState:o})=>p({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},L(o))),co=i.forwardRef(function(a,r){const t=i.useContext(ao),n=i.useContext(eo),s=J(t,a),l=K({props:s,name:"MuiButton"}),{children:f,color:e="primary",component:x="button",className:g,disabled:m=!1,disableElevation:v=!1,disableFocusRipple:d=!1,endIcon:h,focusVisibleClassName:k,fullWidth:W=!1,size:j="medium",startIcon:E,type:P,variant:q="text"}=l,M=X(l,no),z=p({},l,{color:e,component:x,disabled:m,disableElevation:v,disableFocusRipple:d,fullWidth:W,size:j,type:P,variant:q}),b=io(z),T=E&&c.jsx(so,{className:b.startIcon,ownerState:z,children:E}),A=h&&c.jsx(lo,{className:b.endIcon,ownerState:z,children:h}),O=n||"";return c.jsxs(to,p({ownerState:z,className:N(t.className,b.root,g,O),component:x,disabled:m,focusRipple:!d,focusVisibleClassName:N(b.focusVisible,k),ref:r,type:P},M,{classes:b,children:[T,f,A]}))}),uo=co,po="Button",y="Button",vo=o=>{const[a,r]=i.useState(o),[t,n]=i.useState(o);function s(l){F.isEqual(a,l)||(n(a),r(l))}return[t,a,s]},fo=$(C,{shouldForwardProp:o=>o!=="color",slot:"root"})(({color:o})=>({height:"calc(100% + 2px)",width:"calc(100% + 2px)",position:"absolute",top:-1,left:-1,zIndex:-1,background:"inherit",borderRadius:"inherit",...o&&{".loading-indicator":{"--borderColor":o}}})),S=({buttonRef:o,loading:a,color:r})=>{const[t,n,s]=vo(!1),[l,f]=i.useState(!1),[e,x]=i.useState({top:0,left:0,width:0,height:0}),g=i.useRef([]);i.useEffect(()=>{s(a)},[a]),i.useEffect(()=>{!n&&t&&(f(!0),setTimeout(()=>{f(!1)},500))},[n,t]);const m=i.useCallback(()=>{if(!(o!=null&&o.current))return null;const{top:v,left:d,width:h,height:k}=o.current.getBoundingClientRect();return x({top:v,left:d,width:h,height:k})},[x]);return i.useEffect(()=>{if(!(o!=null&&o.current))return null;const v=new ResizeObserver(()=>m());v.observe(o==null?void 0:o.current),g.current.push(v);const d=new ResizeObserver(()=>m());d.observe(window.document.body),g.current.push(d),m()},[]),i.useEffect(()=>()=>{if(!g.current.length)return;g.current.forEach(d=>d.disconnect()),g.current=[]},[]),!a&&!n&&!l?null:G.createPortal(c.jsx(fo,{className:"loading-indicator__wrapper",color:r,sx:{top:(e==null?void 0:e.top)-1,left:(e==null?void 0:e.left)-1,width:(e==null?void 0:e.width)+2,height:(e==null?void 0:e.height)+2},children:c.jsx(C,{className:R("loading-indicator",{"loading-indicator--active":n,"loading-indicator--complete":l}),sx:{background:"inherit",borderRadius:"inherit"}})}),document.body)};S.defaultProps={color:"#ffffff"};try{LoadingIndicator.displayName="LoadingIndicator",LoadingIndicator.__docgenInfo={description:"",displayName:"LoadingIndicator",props:{buttonRef:{defaultValue:null,description:"",name:"buttonRef",required:!1,type:{name:"any"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#ffffff"},description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const _=({id:o,className:a,children:r,onClick:t,color:n="primary",variant:s="contained",disabled:l,iconLeft:f,iconRight:e,loading:x,onHover:g,sx:m})=>{const v=i.useRef(null),d=i.useCallback(()=>{t&&t()},[t]);return c.jsx(C,{children:c.jsxs(uo,{id:o,className:R(y,{[`${y}--${s}`]:s,[`${y}--loading`]:x,[a]:a}),"data-testid":po,ref:v,onClick:d,variant:s,color:n,disabled:l,disableTouchRipple:!0,onMouseEnter:g,sx:m,children:[c.jsx(S,{buttonRef:v,loading:x}),f&&c.jsx(C,{mr:1,children:c.jsx(V,{icon:f,className:`${y}__icon-left`,height:"16px",width:"16px"})}),r,e&&c.jsx(C,{ml:1,children:c.jsx(V,{icon:e,className:`${y}__icon-right`,height:"16px",width:"16px"})})]})})};_.defaultProps={variant:"contained",color:"primary",disabled:!1,onHover:()=>{},loading:!0};try{_.displayName="Button",_.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"link"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:'"AddComment" | "Add" | "Attachment" | "BarGraphDown" | "BarGraphUp" | "Bookmark" | "BuildingV2" | "Building" | "Calendar" | "Categories" | "Checkmark" | "Close1" | "Close" | ... 99 more ... | FC<...>'}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:'"AddComment" | "Add" | "Attachment" | "BarGraphDown" | "BarGraphUp" | "Bookmark" | "BuildingV2" | "Building" | "Calendar" | "Categories" | "Checkmark" | "Close1" | "Close" | ... 99 more ... | FC<...>'}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!1,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}export{_ as B,uo as a};
