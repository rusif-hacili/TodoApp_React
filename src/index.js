import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import TodoList from './TodoApp/TodoList';
import TodoApp from './contexts/TodoApp';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoList  show={'all'}/>
      },

      {
        path: '/active',
        element: <TodoList show={'active'} />
      },

      {
        path: '/completed',
        element: <TodoList show={'completed'} />
      },

    ]
  }
]

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TodoApp>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
