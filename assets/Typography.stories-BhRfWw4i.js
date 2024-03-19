import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{a as e,b as r}from"./Typography-CwlVby8-.js";import{T as s}from"./Typography-CWG-RrY2.js";import{B as m}from"./Box-Cx2AHcqC.js";import"./index-Dl6G-zuu.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Typography-D13k7nS0.js";import"./styled-BHqtc5H1.js";const S={title:"Example/Typography",component:s,parameters:{layout:"centered"},tags:["autodocs"]},b=[{label:"H1",variant:e.h1},{label:"H2",variant:e.h2},{label:"H3",variant:e.h3},{label:"H4",variant:e.h4},{label:"H5",variant:e.h5},{label:"Body r",variant:e.bodyR},{label:"Body r (bold)",variant:e.bodyR,fontWeight:r.bold},{label:"Body s",variant:e.bodyS},{label:"Body s (bold)",variant:e.bodyS,fontWeight:r.bold},{label:"Body xs",variant:e.bodyXS},{label:"Body xs (bold)",variant:e.bodyXS,fontWeight:r.bold},{label:"Error Messages / Fields",variant:e.errorMessage},{label:"Button",variant:e.button},{label:"Field Label",variant:e.fieldLabel}],t={render:()=>a.jsx(a.Fragment,{children:b.map((n,d)=>a.jsx(m,{sx:{mb:2},children:a.jsxs(s,{variant:n.variant,fontWeight:n.fontWeight,children:['The font here is "',n.label,'"']},d)}))}),args:{variant:e.bodyR,children:"Sample Text",preventTextSelection:!1}};var o,l,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const B=["Sample"];export{t as Sample,B as __namedExportsOrder,S as default};
