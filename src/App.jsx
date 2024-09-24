import { Link, Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar'

function App() {

  return (
    <>
    <div className="container">
      <NavBar />
      <div className="about"><Outlet /></div> 
      <div className="footer"></div>
    </div>
    </>
  )
}

export default App
