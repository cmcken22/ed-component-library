import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as o}from"./index-_byTH_QA.js";import{M as p,f as a}from"./index-Bael7egz.js";import"./index-Dl6G-zuu.js";import"./iframe-Q53ijsFR.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-D1_ZHIBm.js";import"./index-Bw8VTzHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-CXd072mJ.js";import"./lodash-BR7ZO34U.js";import"./index-DrFu-skq.js";const m=`# ed-component-library

<br />
<br />
## Getting Started

- Install the repo

\`\`\`js
npm i @cmckenna/ed-component-library
\`\`\`

- Wrap your app in the \`ThemeWrapper\` and the \`SnackbarProvider\`
- Don't forget to import the styles as well.

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeWrapper, SnackbarProvider } from "@cmckenna/ed-component-library";
import "@cmckenna/ed-component-library/dist/index.css"; // <-- important to load css for fonts

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeWrapper>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </ThemeWrapper>
);
\`\`\`

<br/>
<br/>
## Documentation
- For full documentation please check out the Storybook instance deployed on github pages
- [https://cmcken22.github.io/ed-component-library](https://cmcken22.github.io/ed-component-library)
`;function r(t){return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Read Me"}),`
`,n.jsx(a,{children:m})]})}function g(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r()}export{g as default};
