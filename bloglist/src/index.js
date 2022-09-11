// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// store
import { Provider } from 'react-redux';
import store from './store';
// router
import { BrowserRouter as Router } from 'react-router-dom';
// others
import styled from 'styled-components';
import './index.css';
import App from './App';

const Page = styled.div`
    padding: 0 1rem;
    margin: 0;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Page>
                <App />
            </Page>
        </Router>
    </Provider>
);
