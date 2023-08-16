import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Device from './features/Device';

const App = () => {
  return (
    <div>
      <Provider store={store}>
          <Device />
      </Provider>
    </div>
  )
}

export default App;