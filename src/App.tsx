import { Routes, Route } from 'react-router-dom'
// layout
import MainPage from './page/Main'
// style
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
  )
}

export default App