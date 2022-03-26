import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/UI/Header/Header'
import Router from './components/Router'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Router />
    </BrowserRouter>
  )
}

export default App
