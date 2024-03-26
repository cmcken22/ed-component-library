import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as u}from"./index-B_pG5fU1.js";import{T as g}from"./Typography-CPNth6VQ.js";import{u as d}from"./index-DPNVsBv0.js";import{G as n}from"./Grid-DnB74UY1.js";import{s as y}from"./index-8HRI1sDn.js";import{P as f}from"./Paper-DQSmW7aV.js";import{B as i}from"./Box-GI0gEbLE.js";import"./index-Dl6G-zuu.js";import"./Typography-DbM4VYj_.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Typography-SP3Ztg2T.js";import"./useTheme-BpUgHZka.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./styled-Dq_uxqGx.js";const h=y(f)(({theme:r})=>({backgroundColor:r.palette.charcoal[10],...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary})),m=r=>{const s=d();return t.jsx(n.Item,{...r,children:t.jsx(h,{children:Object.keys(r).map((o,e)=>t.jsxs("span",{style:{color:s===o?"green":"black",fontWeight:s===o?"bold":"normal"},children:[o,"=",r[o],e<Object.keys(r).length-1?",":null," "]},o))})})},D={title:"Example/Grid/Grid",component:n,subcomponents:{GridItem:n.Item},parameters:{layout:"fullscreen",docs:{source:{transform:u("Grid")}}},tags:["autodocs"],argTypes:{spacing:{control:{type:"text"}},columnSpacing:{control:{type:"text"}},rowSpacing:{control:{type:"text"}},columns:{control:{type:"number"}}}},a={render:r=>{const s=d(),o=Array.from({length:r==null?void 0:r.columns},(e,x)=>x+1);return t.jsxs(i,{children:[t.jsxs(g,{variant:"h5",sx:{m:1},children:["Breakpoint: ",s]}),t.jsx(n,{...r,children:o==null?void 0:o.map(e=>t.jsx(n.Item,{xs:1,children:t.jsx(i,{sx:{backgroundColor:"rgba(255, 0, 255, 0.4)",textAlign:"center"},children:e})},`grid-item--${e}`))}),t.jsxs(n,{...r,children:[t.jsx(m,{xs:12,sm:8,md:6,lg:4,xl:10}),t.jsx(m,{xs:12,sm:4,md:6,lg:8,xl:2})]})]})},args:{...n.defaultProps}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const $=["Default"];export{a as Default,$ as __namedExportsOrder,D as default};
