import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjFilter from './pages/ProjFilter'

function App() {
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
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/designs/:projId/",
      element: <ProjFilter />
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
