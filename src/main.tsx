import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import About from './pages/about/About.tsx';
import Home from './pages/Home/index.ts';
import Blogs from './pages/Blogs/index.ts';
import Contact from './pages/contact/index.ts';
import Services from './pages/services/index.ts';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/blogs',
        element: <Blogs/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/services',
        element: <Services/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
