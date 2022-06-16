import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home/Home'
import { Order } from './pages/Order/Order'
import { Contacts } from './pages/Contacts/Contacts'
import { About } from './pages/About/About'
import { Translators } from './pages/Translators/Translators'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/translators' element={<Translators />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
