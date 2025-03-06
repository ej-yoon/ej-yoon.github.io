import { Routes, Route, Navigate } from 'react-router-dom'
// layout
import MainLayout from './layouts/MainLayout'
// pages
import About from './pages/About'
import Career from './pages/Career'
import Education from './pages/Education'
// style
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Navigate to="/about"/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="career" element={<Career/>}/>
        <Route path="education" element={<Education/>}/>
      </Route>
    </Routes>
  )
}

export default App
