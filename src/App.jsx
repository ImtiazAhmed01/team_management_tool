import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Home/>
      <Outlet></Outlet>
    </>
  )
}

export default App
