import{j as d}from"./Typography-B9kEj_1_.js";import{r as u}from"./index-CBqU2yxZ.js";import{u as z}from"./useOnHover-BXjM-W-S.js";import{T as q}from"./Typography-Dkgn9EJp.js";import{s as V}from"./styled-rwD5gtOs.js";import{B as A}from"./Box-BFjoy81w.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DZp7yd2Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-LR_mAL0j.js";const C=V(A,{shouldForwardProp:e=>e!=="src",slot:"Root"})(({theme:e,src:r})=>({display:"flex",justifyContent:"center",alignItems:"center",height:"24px",width:"24px",borderRadius:"50%",backgroundColor:e.palette.secondary[10],backgroundImage:r?`url(${r})`:"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"})),n=({size:e,text:r,src:l,onHover:D,onClick:i,sx:_})=>{const j=z(D),k=u.useCallback(()=>e==="default"?{height:"32px",width:"32px"}:e==="large"?{height:"40px",width:"40px"}:e==="small"?{height:"24px",width:"24px"}:{height:e,width:e},[e]),J=u.useCallback(()=>e==="large"?"bodyR":e==="small"?"bodyXS":"bodyS",[e]);return d.jsx(C,{...j,onClick:i,src:l,sx:{...k(),cursor:i?"pointer":"default",..._},children:!l&&d.jsx(q,{variant:J(),color:"secondary.dark",preventTextSelection:!0,children:r})})};n.defaultProps={size:"default"};try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"large"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!1,type:{name:"(hovered: boolean) => void"}}}}}catch{}const L={title:"Example/Avatar",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio",options:["default","large","small"]}}}},t={args:{text:"JD",size:"default"}},a={args:{text:"JD",size:"small"}},s={args:{text:"JD",size:"large"}},o={args:{text:"JD",size:"default",src:"https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-4858.jpg?1643119143"}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "JD",
    size: "default"
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: "JD",
    size: "small"
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: "JD",
    size: "large"
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,S,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: "JD",
    size: "default",
    src: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-4858.jpg?1643119143"
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const N=["Default","Small","Large","WithImage"];export{t as Default,s as Large,a as Small,o as WithImage,N as __namedExportsOrder,L as default};
