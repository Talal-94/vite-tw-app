
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './pages/1.home/Home'
import Services from './pages/2.services/Services'
import Portfolio from './pages/3.portfolio/Portfolio'
import Contact from './pages/4.contact/Contact'

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route exact path = '/services' element = {<Services />} />
        <Route exact path = '/portfolio' element = {<Portfolio />} />
        <Route exact path = '/contact' element = {<Contact />} />
      </Routes>
      
    </Router>

  )
}

export default App
