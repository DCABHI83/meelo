import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './UI/Header'
import Footer from './UI/Footer'
const App = () => {
  return (
   <>
   <HashRouter>

<Routes>
<Header/>

<Route path='/' element = {<Home/>}/>
<Route path='/contact' element = {<Contact/>}/>
<Route path='/portfolio' element = {<Portfolio/>}/>
<Route path='/project' element = {<Projects/>}/>
<Route path='/about' element = {<About/>}/>

<Footer/>

</Routes>

   </HashRouter>
   
   </>
  )
}

export default App
