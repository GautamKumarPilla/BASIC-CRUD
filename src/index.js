import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import UpdateForm from './UpdateForm';
import CourseForm from './CourseForm';
import CForm from './CForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/course',
        element:<CForm></CForm>
      },
      {
        path:'/courseForm',
        element:<CourseForm></CourseForm>
      },
      {
        path:'/updateCourse/:id',
        element:<UpdateForm></UpdateForm>
      }
    ]}
])
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
