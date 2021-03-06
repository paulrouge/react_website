import React, {useState, useEffect} from 'react'
import Navbar from './shared/Nav'
import Dropdown from './shared/Nav/Dropdown'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Discord from './Discord'
import Footer from './shared/Footer'
import Rabbithole from './Rabbithole'
import './App.css';


function App() {
  // TOGGLE MENU
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // HIDE MENU WHEN SCREEN IS RESIZED
  useEffect(() => {
    
    if (window.screen.width >= 768){
      document.getElementById("logo").className = 'logo-post' }
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)}
      }
      window.addEventListener('resize', hideMenu);
      return () => {
        window.removeEventListener('resize', hideMenu);
      }
    }
  )


  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}  />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/discord' component={Discord}/>
        <Route path='/contact' component={Contact} />
        <Route path='/rabbithole' component={Rabbithole} />
      </Switch>
      <Footer />
      
    </>
  );
}

export default App;
