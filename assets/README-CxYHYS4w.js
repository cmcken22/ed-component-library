import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as r}from"./index-_byTH_QA.js";import{M as a,d as i}from"./index-BT96blqN.js";import"./index-Dl6G-zuu.js";import"./iframe-CGCYt-rg.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-D1_ZHIBm.js";import"./index-Bw8VTzHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-CXd072mJ.js";import"./lodash-BR7ZO34U.js";import"./index-DrFu-skq.js";const s=`# ed-component-library

<br />
<br />
## About this repo

- This repo was built with [React 18](https://legacy.reactjs.org/blog/2022/03/29/react-v18.html) and [Material UI v5](https://mui.com/)
- The components are built on top of mui with theme overrides and logical enhancements

### Peer Dependencies

\`\`\`js
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "@emotion/react": "^11.11.3",
  "@emotion/styled": "^11.11.0",
  "@mui/x-date-pickers": "^6.19.6",
  "@mui/material": "^5.15.11"
}
\`\`\`

### Dependencies

\`\`\`js
{
  "@emotion/react": "^11.11.3",
  "@emotion/styled": "^11.11.0",
  "@mui/x-date-pickers": "^6.19.6",
  "@mui/material": "^5.15.11",
  "classnames": "^2.5.1",
  "dayjs": "^1.11.10",
  "lodash.debounce": "^4.0.8",
  "lodash.isequal": "^4.5.0",
  "notistack": "^3.0.1",
  "react-number-format": "^5.3.3",
  "use-lilius": "^2.0.4"
}
\`\`\`

- You may notice that some _dependencies_ are also _peerDependencies_
- This is because I want to install these packages for you when you install the repo
- They are also listed as _peerDependencies_ because I want to throw an error if you are using a different version
- If you absolutely need a different version than what is listed as a peer depdency than you will have to perform a peer depdency resolution or update the component library itself
- To mitigate this, the component library has been built with the latest versions at the time of writing (March 2024)
- **TLDR**
  - If you wish to install any _peerDependencies_ separate from the installation of this repo, make sure you are using the same versions
  - otherwise, you may encounter unexpected behaviour

<br />
<br />
## Getting Started

- Install the repo

\`\`\`js
npm i @cmckenna/ed-component-library
\`\`\`

- Wrap your app in the \`ThemeWrapper\` and the \`SnackbarProvider\`
- Import the css file
  - the css file will import the required google fonts and some basic styles

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
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Read Me"}),`
`,e.jsx(i,{children:s})]})}function M(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{M as default};
