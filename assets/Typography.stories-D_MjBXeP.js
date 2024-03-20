import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{a as e,b as n}from"./Typography-ZX8UCtO5.js";import{T as s}from"./Typography-Dp_zQvbO.js";import{B as m}from"./Box-BTk9yL7d.js";import"./index-Dl6G-zuu.js";import"./createTheme-DCk6V8kG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-DfBNxlIc.js";import"./Typography-Ck0EBljP.js";import"./styled-BR12ND4t.js";const B={title:"Example/Typography",component:s,parameters:{layout:"centered"},tags:["autodocs"]},b=[{label:"H1",variant:e.h1},{label:"H2",variant:e.h2},{label:"H3",variant:e.h3},{label:"H4",variant:e.h4},{label:"H5",variant:e.h5},{label:"Body r",variant:e.bodyR},{label:"Body r (bold)",variant:e.bodyR,fontWeight:n.bold},{label:"Body s",variant:e.bodyS},{label:"Body s (bold)",variant:e.bodyS,fontWeight:n.bold},{label:"Body xs",variant:e.bodyXS},{label:"Body xs (bold)",variant:e.bodyXS,fontWeight:n.bold},{label:"Error Messages / Fields",variant:e.errorMessage},{label:"Button",variant:e.button},{label:"Field Label",variant:e.fieldLabel}],t={render:()=>a.jsx(a.Fragment,{children:b.map((r,d)=>a.jsx(m,{sx:{mb:2},children:a.jsxs(s,{variant:r.variant,fontWeight:r.fontWeight,children:['The font here is "',r.label,'"']},d)}))}),args:{variant:e.bodyR,children:"Sample Text",preventTextSelection:!1}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <>
      {items.map((item, index) => <Box sx={{
      mb: 2
    }}>
          <Typography key={index} variant={item.variant} fontWeight={item.fontWeight}>
            The font here is "{item.label}"
          </Typography>
        </Box>)}
    </>,
  args: {
    variant: FONT_VARIANT.bodyR,
    children: "Sample Text",
    // fontWeight?: FontWeight;
    // fontStyle?: FontStyle;
    // className?: string;
    // color?: string;
    // fontSize?: string;
    preventTextSelection: false
    // sx?: any;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const W=["Sample"];export{t as Sample,W as __namedExportsOrder,B as default};
