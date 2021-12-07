import React, {Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const loading = <div>loading...</div>

ReactDOM.render(
  <Suspense fallback={loading}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

