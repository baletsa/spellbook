import React from 'react';
import { render } from 'react-dom';

/* Provider is a component that can pass stores (or other stuff) using React's context mechanism to child components. This is useful if you have things that you don't want to pass through multiple layers of components explicitly. */
import { Provider } from 'mobx-react';

// import strict mode for mobx
import { useStrict } from 'mobx';

// import our application
import App from './app.js';

useStrict(true);

const app = document.getElementById('app');
