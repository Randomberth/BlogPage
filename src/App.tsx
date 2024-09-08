import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'

function App() {

  return (
    <header>
      <NavBar/>
      <Outlet/>
    </header>
  )
}

export default App
