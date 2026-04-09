import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import ProjectCards from '../components/ProjectCards'
import Cociricular from '../components/Cociricular'
import Techinical from '../components/Techinical'

const Home = () => {
  return (
    <Box>
      <HeroSection></HeroSection>
      <ProjectCards></ProjectCards>
      <Cociricular></Cociricular>
      <Techinical></Techinical>
    </Box>
  )
}

export default Home