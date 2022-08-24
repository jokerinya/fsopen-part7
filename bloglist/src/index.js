// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// store
import { Provider } from 'react-redux';
import store from './store';
// others
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
