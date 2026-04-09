import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import ProjectCards from '../components/ProjectCards'
import Cociricular from '../components/Cociricular'
import Techinical from '../components/Techinical'

const Home = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <HeroSection />
      
      {/* Divider between hero and projects */}
      <Box className="divider-line" />
      
      <ProjectCards />
      
      <Box className="divider-line" sx={{ mx: { xs: '20px', md: '40px' } }} />
      
      <Techinical />
      
      <Box className="divider-line" sx={{ mx: { xs: '20px', md: '40px' } }} />
      
      <Cociricular />
    </Box>
  )
}

export default Home