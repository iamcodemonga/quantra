import Home from './Home'
import './index.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
  )
}

export default App
