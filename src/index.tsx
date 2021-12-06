import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import Loader from './Components/Loader'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={'loading...'}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);