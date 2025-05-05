import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <SearchBar/>
    </div>
  )
}

export default App
