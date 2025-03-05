import { Routes, Route, Navigate } from 'react-router-dom'
// layout
import MainLayout from './layouts/MainLayout'
// pages
import AboutPage from './pages/AboutPage'
import CareerPage from './pages/CareerPage'
import EducationPage from './pages/EducationPage'
// style
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Navigate to="/about"/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="work" element={<CareerPage/>}/>
        <Route path="education" element={<EducationPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
