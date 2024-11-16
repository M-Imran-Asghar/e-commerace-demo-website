import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './components/login/Login'
import Watches from './components/watches/Watches'
import MainSection from './components/heroSection/MainSection'
import AddToCart from './components/AddToCart/AddToCart'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<MainSection/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/watches' element={<Watches/>}/>
      <Route path='/addtoCart' element={<AddToCart/>}/>
    </Route>
  )
)

function App() {
 

  return (
    
      <RouterProvider router={router} />
   
  )
}

export default App
