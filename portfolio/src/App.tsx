import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
const App = () => {
  return (
    <Box>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Projects/:id' element={<ProjectDetail/>}></Route>

      </Routes>
      
      <Footer></Footer>
    </Box>
  )
}

export default App