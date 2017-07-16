import React from 'react';
import './App.css';
import 'typeface-roboto';
import { create as createStore, history } from './store';
import { Root }  from './containers';

import "normalize.css";
import normalize from './races/schema';

const store = createStore();

const App = () => (
    <div className="App">
      <Root store={store} history={history} />
    </div>
);

export default App;
