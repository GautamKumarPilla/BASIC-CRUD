import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store';

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