import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Meet from './Meet'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
             <Route path='/' element = {<Home />} />
              <Route path='/meet' element = {<Meet />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
