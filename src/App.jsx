import React from "react"
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home/>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
