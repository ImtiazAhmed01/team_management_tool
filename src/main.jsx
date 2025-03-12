import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/SignUp/Signup.jsx';
import Login from './components/LogIn/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
