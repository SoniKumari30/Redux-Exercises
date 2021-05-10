import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// the provider component will make the store available to all the component
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
//import { increment } from '.actions/countAction'
const store = configureStore()
//console.log('redux initial state', store.getStore())

//console.log('redux initial state', store.getState())

ReactDOM.render(<App />,
  document.getElementById('root')
);