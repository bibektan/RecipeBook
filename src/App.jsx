import { useState } from 'react'
import './App.css'
import Favorites from './components/Favorites'
import Recipe from './components/Recipe'
import Popup from './components/Popup'
import Search from './components/Search'

function App() {

  return (
    <main>
      {/* <Search /> */}
      <Favorites />
      <Recipe />
      {/* <Popup /> */}
    </main>
  )
}

export default App
