# ed-component-library

<br />
<br />
## About this repo

- This repo was built with [React 18](https://legacy.reactjs.org/blog/2022/03/29/react-v18.html) and [Material UI v5](https://mui.com/)
- The components are built on top of mui with theme overrides and logical enhancements

#### Peer Dependencies

```js
"@emotion/react": "^11.11.3",
"@emotion/styled": "^11.11.0",
"@mui/material": "^5.15.11",
"react": "^18.2.0",
"react-dom": "^18.2.0"
```

#### Dependencies

```js
"@emotion/react": "^11.11.3",
"@emotion/styled": "^11.11.0",
"@mui/material": "^5.15.11",
"@mui/x-date-pickers": "^6.19.6",
"classnames": "^2.5.1",
"dayjs": "^1.11.10",
"lodash.debounce": "^4.0.8",
"lodash.isequal": "^4.5.0",
"notistack": "^3.0.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-number-format": "^5.3.3",
"use-lilius": "^2.0.4"
```

<br />
<br />
## Getting Started

- Install the repo

```js
npm i @cmckenna/ed-component-library
```

- Wrap your app in the `ThemeWrapper` and the `SnackbarProvider`
- Don't forget to import the styles as well.

```jsx
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
```

<br/>
<br/>
## Documentation
- For full documentation please check out the Storybook instance deployed on github pages
- [https://cmcken22.github.io/ed-component-library](https://cmcken22.github.io/ed-component-library)
