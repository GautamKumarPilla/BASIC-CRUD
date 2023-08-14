import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Form from './Form';
import Add from './features/Add';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/updateDevice/:id',
        element:<Form />
      },
      {
        path:'/addDevice',
        element:<Add />
      }
  ]
  }
])
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
