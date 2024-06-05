import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM without '/client'
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Capital "R" in React */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode> 
);

reportWebVitals();
