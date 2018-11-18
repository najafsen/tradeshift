import '@tradeshift/tradeshift-ui/ts.css'
import '@tradeshift/tradeshift-ui/ts.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

declare var ts: any;

ts.ui.ready(() => {
    ReactDOM.render(<App/>, document.querySelector('#root'));
});
