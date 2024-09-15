import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout/layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
//import Github from './Components/Github/Github.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
 // {githubInfoLoader}from './Components/Github/Github.jsx'
// const router= createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path: 'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>

//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
       path='Github'
       element={<Github />} 
      loader = {githubInfoLoader
      }
      />
    </Route> 
  )
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider   router={router}/>
  </StrictMode>,
)


