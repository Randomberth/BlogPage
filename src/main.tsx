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
    path: "https://Randomberth.github.io/BlogPage/",
    element: <App/>,
    children:[
      {
        path:'https://Randomberth.github.io/BlogPage/',
        element: <Home/>
      },
      {
        path:'https://Randomberth.github.io/BlogPage/blogs',
        element: <Blogs/>
      },
      {
        path:'https://Randomberth.github.io/BlogPage/about',
        element: <About/>
      },
      {
        path:'https://Randomberth.github.io/BlogPage/contact',
        element: <Contact/>
      },
      {
        path:'https://Randomberth.github.io/BlogPage/services',
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
