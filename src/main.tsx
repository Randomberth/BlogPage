import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About.tsx';
import Home from './pages/Home/index.ts';
import Blogs from './pages/Blogs/index.ts';
import Contact from './pages/contact/index.ts';
import Services from './pages/services/index.ts';

const router = createBrowserRouter([
  {
    path: "/BlogPage",
    element: <App/>,
    children:[
      {
        path:'/BlogPage',
        element: <Home/>
      },
      {
        path:'/BlogPage/blogs',
        element: <Blogs/>
      },
      {
        path:'/BlogPage/about',
        element: <About/>
      },
      {
        path:'/BlogPage/contact',
        element: <Contact/>
      },
      {
        path:'/BlogPage/services',
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
