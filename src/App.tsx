import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<div />} />
            <Route path='/order' element={<div />} />
            <Route path='/about' element={<div />} />
            <Route path='/contacts' element={<div />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
