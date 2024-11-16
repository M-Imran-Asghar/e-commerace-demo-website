import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default Layout