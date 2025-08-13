import './App.css'
import CryptoCurrencies from './components/CryptoCurrencies'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Trending from './components/Trending'
import Search from './components/Search'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<CryptoCurrencies />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
