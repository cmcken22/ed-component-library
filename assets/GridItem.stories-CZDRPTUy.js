import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as i}from"./index-LwjjZM6p.js";import{u as d}from"./index-BtqKrAAV.js";import{a as p,G as s}from"./Grid-MFrIJdd4.js";import{s as u}from"./styled-BR12ND4t.js";import{P as g}from"./Paper-BuJzcfCq.js";import"./index-Dl6G-zuu.js";import"./useTheme-Clx4k-ij.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-DfBNxlIc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DCk6V8kG.js";import"./styled-amVfSIae.js";import"./isMuiElement-DAcuSkv2.js";const y=u(g)(({theme:r})=>({backgroundColor:r.palette.charcoal[10],...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary})),W={title:"Example/Grid/Grid Item",component:p,parameters:{layout:"fullscreen",docs:{source:{transform:i("Grid.Item")}}},tags:["autodocs"],argTypes:{xs:{control:{type:"number"}},sm:{control:{type:"number"}},md:{control:{type:"number"}},lg:{control:{type:"number"}},xl:{control:{type:"number"}}}},o={render:r=>{const n=d();return t.jsx(s,{children:t.jsx(s.Item,{...r,children:t.jsx(y,{children:Object.keys(r).map((e,c)=>t.jsxs("span",{style:{color:n===e?"green":"black",fontWeight:n===e?"bold":"normal"},children:[e,"=",r[e],c<Object.keys(r).length-1?",":null," "]},e))})})})},args:{...p.defaultProps,xs:12,sm:8,md:6,lg:4,xl:3}};var a,m,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const bp = useBreakPoint();
    return <Grid>
        <Grid.Item {...args}>
          <Item>
            {Object.keys(args).map((key, i) => <span key={key} style={{
            color: bp === key ? "green" : "black",
            fontWeight: bp === key ? "bold" : "normal"
          }}>
                {key}={args[key]}
                {i < Object.keys(args).length - 1 ? "," : null}
                &nbsp;
              </span>)}
          </Item>
        </Grid.Item>
      </Grid>;
  },
  args: {
    ...GridItem.defaultProps,
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4,
    xl: 3
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,W as default};
