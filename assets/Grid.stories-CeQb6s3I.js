import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as u}from"./index-B_pG5fU1.js";import{T as g}from"./Typography-ClegP6xv.js";import{u as d}from"./index-_OcG2YHj.js";import{G as o}from"./Grid-BJJaesu6.js";import{s as y}from"./index-DFf-bhEl.js";import{P as f}from"./Paper-CXsvuMT9.js";import{B as i}from"./Box-DPTDcbim.js";import"./index-Dl6G-zuu.js";import"./Typography-BGHga1vv.js";import"./createTheme-DtgTEXL7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Typography-C8COxrag.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./styled-DlwMyq9x.js";const h=y(f)(({theme:r})=>({backgroundColor:r.palette.charcoal[10],...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary})),m=r=>{const s=d();return t.jsx(o.Item,{...r,children:t.jsx(h,{children:Object.keys(r).map((n,e)=>t.jsxs("span",{style:{color:s===n?"green":"black",fontWeight:s===n?"bold":"normal"},children:[n,"=",r[n],e<Object.keys(r).length-1?",":null," "]},n))})})},v={title:"Example/Grid/Grid",component:o,subcomponents:{GridItem:o.Item},parameters:{layout:"fullscreen",docs:{source:{transform:u("Grid")}}},tags:["autodocs"],argTypes:{spacing:{control:{type:"text"}},columnSpacing:{control:{type:"text"}},rowSpacing:{control:{type:"text"}},columns:{control:{type:"number"}}}},a={render:r=>{const s=d(),n=Array.from({length:r==null?void 0:r.columns},(e,x)=>x+1);return t.jsxs(i,{children:[t.jsxs(g,{variant:"h5",sx:{m:1},children:["Breakpoint: ",s]}),t.jsx(o,{...r,children:n==null?void 0:n.map(e=>t.jsx(o.Item,{xs:1,children:t.jsx(i,{sx:{backgroundColor:"rgba(255, 0, 255, 0.4)",textAlign:"center"},children:e})},`grid-item--${e}`))}),t.jsxs(o,{...r,children:[t.jsx(m,{xs:12,sm:8,md:6,lg:4,xl:10}),t.jsx(m,{xs:12,sm:4,md:6,lg:8,xl:2})]})]})},args:{...o.defaultProps}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const bp = useBreakPoint();
    const arr = Array.from({
      length: args?.columns
    }, (_, i) => i + 1);
    return <Box>
        <Typography variant="h5" sx={{
        m: 1
      }}>
          Breakpoint: {bp}
        </Typography>
        <Grid {...args}>
          {arr?.map(i => <Grid.Item key={\`grid-item--\${i}\`} xs={1}>
              <Box sx={{
            backgroundColor: "rgba(255, 0, 255, 0.4)",
            textAlign: "center"
          }}>
                {i}
              </Box>
            </Grid.Item>)}
        </Grid>
        <Grid {...args}>
          <RenderGridItem xs={12} sm={8} md={6} lg={4} xl={10} />
          <RenderGridItem xs={12} sm={4} md={6} lg={8} xl={2} />
        </Grid>
      </Box>;
  },
  args: {
    ...Grid.defaultProps
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,v as default};
