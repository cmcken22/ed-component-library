# ed-component-library

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
