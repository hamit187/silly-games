import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/silly-games"><Provider store={store}><App /></Provider></BrowserRouter>
);