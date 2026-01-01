import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Noticeboard from './components/Noticeboard'
import Asset from './components/Asset'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  )
}

export default App