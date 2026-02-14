import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProjFilter from './pages/ProjFilter'
import AboutPage from './pages/AboutPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <AboutPage />
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
