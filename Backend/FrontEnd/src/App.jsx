import './App.css'

import { useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './providers/ThemeProviders'
import NavBar from './Components/navBar/navBar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AvatarIconProvider from './providers/AvatarIconProvider'
function App() {
  const { light } = useContext(ThemeContext)
  return (
    <Router>
      <div
        className='app-body'
        style={{
          /* TODO define color variables index.css */
          backgroundColor: `var(--ihc-${light ? 'light' : 'dark'}-mode-bg)`,
          color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`,
          transition: 'all 0.5s',
          position: 'fixed',
          top: '0',
          width: '100vw'
        }}
      >
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
