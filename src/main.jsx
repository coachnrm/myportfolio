import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Work from './pages/Work'
import BmiCal from './pages/BmiCal.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/work",
    element: <Work />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/bmi",
    element: <BmiCal />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
