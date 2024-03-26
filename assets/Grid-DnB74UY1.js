import{j as q}from"./jsx-runtime-Du8NFWEI.js";import{u as ue,h as de,i as fe,m as pe,j as me,b as ge,s as he,f as be,c as L}from"./index-8HRI1sDn.js";import{s as U}from"./index-DPNVsBv0.js";import{_ as v}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{b as ye,_ as ve}from"./createTheme-B78KyuB4.js";import{r as g}from"./index-Dl6G-zuu.js";import{s as we}from"./styled-Dq_uxqGx.js";import{i as xe}from"./Paper-DQSmW7aV.js";const Ge=(e,t)=>e.filter(n=>t.includes(n)),h=(e,t,n)=>{const i=e.keys[0];Array.isArray(t)?t.forEach((s,r)=>{n((a,o)=>{r<=e.keys.length-1&&(r===0?Object.assign(a,o):a[e.up(e.keys[r])]=o)},s)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:Ge(e.keys,Object.keys(t))).forEach(r=>{if(e.keys.indexOf(r)!==-1){const a=t[r];a!==void 0&&n((o,u)=>{i===r?Object.assign(o,u):o[e.up(r)]=u},a)}}):(typeof t=="number"||typeof t=="string")&&n((s,r)=>{Object.assign(s,r)},t)};function d(e){return e?`Level${e}`:""}function w(e){return e.unstable_level>0&&e.container}function F(e){return function(n){return`var(--Grid-${n}Spacing${d(e.unstable_level)})`}}function T(e){return function(n){return e.unstable_level===0?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${d(e.unstable_level-1)})`}}function k(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${d(e.unstable_level-1)})`}const _e=({theme:e,ownerState:t})=>{const n=F(t),i={};return h(e.breakpoints,t.gridSize,(s,r)=>{let a={};r===!0&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),r==="auto"&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof r=="number"&&(a={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${r} / ${k(t)}${w(t)?` + ${n("column")}`:""})`}),s(i,a)}),i},$e=({theme:e,ownerState:t})=>{const n={};return h(e.breakpoints,t.gridOffset,(i,s)=>{let r={};s==="auto"&&(r={marginLeft:"auto"}),typeof s=="number"&&(r={marginLeft:s===0?"0px":`calc(100% * ${s} / ${k(t)})`}),i(n,r)}),n},Se=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=w(t)?{[`--Grid-columns${d(t.unstable_level)}`]:k(t)}:{"--Grid-columns":12};return h(e.breakpoints,t.columns,(i,s)=>{i(n,{[`--Grid-columns${d(t.unstable_level)}`]:s})}),n},Ie=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=T(t),i=w(t)?{[`--Grid-rowSpacing${d(t.unstable_level)}`]:n("row")}:{};return h(e.breakpoints,t.rowSpacing,(s,r)=>{var a;s(i,{[`--Grid-rowSpacing${d(t.unstable_level)}`]:typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r)})}),i},qe=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=T(t),i=w(t)?{[`--Grid-columnSpacing${d(t.unstable_level)}`]:n("column")}:{};return h(e.breakpoints,t.columnSpacing,(s,r)=>{var a;s(i,{[`--Grid-columnSpacing${d(t.unstable_level)}`]:typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r)})}),i},Oe=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return h(e.breakpoints,t.direction,(i,s)=>{i(n,{flexDirection:s})}),n},je=({ownerState:e})=>{const t=F(e),n=T(e);return v({minWidth:0,boxSizing:"border-box"},e.container&&v({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||w(e))&&v({padding:`calc(${n("row")} / 2) calc(${n("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${n("row")} 0px 0px ${n("column")}`}))},Ne=e=>{const t=[];return Object.entries(e).forEach(([n,i])=>{i!==!1&&i!==void 0&&t.push(`grid-${n}-${String(i)}`)}),t},Ee=(e,t="xs")=>{function n(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(n(e))return[`spacing-${t}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([s,r])=>{n(r)&&i.push(`spacing-${s}-${String(r)}`)}),i}return[]},Ve=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,n])=>`direction-${t}-${n}`):[`direction-xs-${String(e)}`],Pe=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],Ce=ye(),Te=we("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function ke(e){return pe({props:e,name:"MuiGrid",defaultTheme:Ce})}function ze(e={}){const{createStyledComponent:t=Te,useThemeProps:n=ke,componentName:i="MuiGrid"}=e,s=g.createContext(void 0),r=(u,l)=>{const{container:p,direction:x,spacing:G,wrap:b,gridSize:_}=u,$={root:["root",p&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ve(x),...Ne(_),...p?Ee(G,l.breakpoints.keys[0]):[]]};return me($,S=>ge(i,S),{})},a=t(Se,qe,Ie,_e,Oe,je,$e),o=g.forwardRef(function(l,p){var x,G,b,_,$,S,z,D;const N=ue(),H=n(l),E=de(H),I=g.useContext(s),{className:J,children:Q,columns:X=12,container:Y=!1,component:Z="div",direction:ee="row",wrap:te="wrap",spacing:V=0,rowSpacing:ne=V,columnSpacing:re=V,disableEqualOverflow:M,unstable_level:f=0}=E,ie=ve(E,Pe);let y=M;f&&M!==void 0&&(y=l.disableEqualOverflow);const R={},A={},B={};Object.entries(ie).forEach(([c,m])=>{N.breakpoints.values[c]!==void 0?R[c]=m:N.breakpoints.values[c.replace("Offset","")]!==void 0?A[c.replace("Offset","")]=m:B[c]=m});const se=(x=l.columns)!=null?x:f?void 0:X,ae=(G=l.spacing)!=null?G:f?void 0:V,oe=(b=(_=l.rowSpacing)!=null?_:l.spacing)!=null?b:f?void 0:ne,le=($=(S=l.columnSpacing)!=null?S:l.spacing)!=null?$:f?void 0:re,W=v({},E,{level:f,columns:se,container:Y,direction:ee,wrap:te,spacing:ae,rowSpacing:oe,columnSpacing:le,gridSize:R,gridOffset:A,disableEqualOverflow:(z=(D=y)!=null?D:I)!=null?z:!1,parentDisableEqualOverflow:I}),ce=r(W,N);let P=q.jsx(a,v({ref:p,as:Z,ownerState:W,className:fe(ce.root,J)},B,{children:g.Children.map(Q,c=>{if(g.isValidElement(c)&&xe(c,["Grid"])){var m;return g.cloneElement(c,{unstable_level:(m=c.props.unstable_level)!=null?m:f+1})}return c})}));return y!==void 0&&y!==(I??!1)&&(P=q.jsx(s.Provider,{value:y,children:P})),P});return o.muiName="Grid",o}const De=ze({createStyledComponent:he("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>be({props:e,name:"MuiGrid2"})}),K=De,O=({id:e,className:t,xs:n,sm:i,md:s,lg:r,xl:a,sx:o,children:u})=>q.jsx(K,{id:e,className:L("Grid__item",{[t]:t}),sx:o,xs:n,sm:i,md:s,lg:r,xl:a,children:u});O.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1};try{O.displayName="GridItem",O.__docgenInfo={description:"",displayName:"GridItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},xs:{defaultValue:null,description:"If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for all the screen sizes with the lowest priority.",name:"xs",required:!1,type:{name:'number | boolean | "auto"'}},sm:{defaultValue:null,description:"f a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.",name:"sm",required:!1,type:{name:'number | boolean | "auto"'}},md:{defaultValue:null,description:"If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",name:"md",required:!1,type:{name:'number | boolean | "auto"'}},lg:{defaultValue:null,description:"If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.",name:"lg",required:!1,type:{name:'number | boolean | "auto"'}},xl:{defaultValue:null,description:"If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the xl breakpoint and wider screens if not overridden.",name:"xl",required:!1,type:{name:'number | boolean | "auto"'}}}}}catch{}const C=e=>{if(e!==void 0)return Array.isArray(e)||typeof e=="object"?e:U(e)},j=({id:e,className:t,sx:n,children:i,gutter:s,columns:r,spacing:a,columnSpacing:o,rowSpacing:u,direction:l,wrap:p})=>q.jsx(K,{id:e,className:L("Grid",{[t]:t}),sx:{...n,padding:`0 ${U(s)}`},container:!0,columns:r,spacing:C(a),columnSpacing:C(o),rowSpacing:C(u),direction:l,wrap:p,children:i});j.defaultProps={gutter:0,columns:12,spacing:8,direction:"row",wrap:"wrap"};j.Item=O;try{j.displayName="Grid",j.__docgenInfo={description:"",displayName:"Grid",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},gutter:{defaultValue:null,description:"The gutter of the grid. This adds padding to the left and right of the grid.",name:"gutter",required:!1,type:{name:"string | number"}},columns:{defaultValue:null,description:"Defines the horizontal space between the type item components. It overrides the value of the spacing prop.",name:"columns",required:!1,type:{name:"number"}},spacing:{defaultValue:null,description:"The spacing between the columns.",name:"spacing",required:!1,type:{name:"string | number | object | (string | number)[]"}},columnSpacing:{defaultValue:null,description:"The spacing between the columns.",name:"columnSpacing",required:!1,type:{name:"string | number | object | (string | number)[]"}},rowSpacing:{defaultValue:null,description:"Defines the vertical space between the type item components. It overrides the value of the spacing prop.",name:"rowSpacing",required:!1,type:{name:"string | number | object | (string | number)[]"}},direction:{defaultValue:null,description:"Defines the flex-direction style property. It is applied for all screen sizes.",name:"direction",required:!1,type:{name:'object | "row" | "column-reverse" | "column" | "row-reverse" | ("row" | "column-reverse" | "column" | "row-reverse")[]'}},wrap:{defaultValue:null,description:"Defines the flex-wrap style property. It's applied for all screen sizes.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}}}}}catch{}export{j as G,O as a};
