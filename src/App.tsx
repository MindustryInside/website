import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/UI/Header/Header'
import Router from './components/Router'

function App() {
  return (
    <HashRouter>
        <Header />
        <Router />
    </HashRouter>
  )
}

export default App
