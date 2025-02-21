import { Routes, Route, Navigate } from 'react-router-dom'
// layout
import MainLayout from './layouts/MainLayout'
// pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import EducationPage from './pages/EducationPage'
// style
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Navigate to="/home"/>}/>
        <Route path="home" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="work" element={<WorkPage/>}/>
        <Route path="education" element={<EducationPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
