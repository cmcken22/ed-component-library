import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as i}from"./index-DlyO01os.js";import{u as d}from"./index-B-KJ_PcS.js";import{a as p,G as s}from"./Grid-B4zpdVWP.js";import{s as u}from"./index-DGPhUUWW.js";import{P as g}from"./Paper-DFVa8SY2.js";import"./index-Dl6G-zuu.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./testIds-BFSb8VRo.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./styled-CE3BHGdM.js";const y=u(g)(({theme:r})=>({backgroundColor:r.palette.charcoal[10],...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary})),C={title:"Example/Grid/Grid Item",component:p,parameters:{layout:"fullscreen",docs:{source:{transform:i("Grid.Item")}}},tags:["autodocs"],argTypes:{xs:{control:{type:"number"}},sm:{control:{type:"number"}},md:{control:{type:"number"}},lg:{control:{type:"number"}},xl:{control:{type:"number"}}}},n={render:r=>{const o=d();return t.jsx(s,{children:t.jsx(s.Item,{...r,children:t.jsx(y,{children:Object.keys(r).map((e,c)=>t.jsxs("span",{style:{color:o===e?"green":"black",fontWeight:o===e?"bold":"normal"},children:[e,"=",r[e],c<Object.keys(r).length-1?",":null," "]},e))})})})},args:{...p.defaultProps,xs:12,sm:8,md:6,lg:4,xl:3}};var a,m,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,C as default};
