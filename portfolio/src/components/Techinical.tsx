import { Box } from '@mui/material'

const Techinical = () => {
  const knowledge = ["Mongo", "ReactJS", "Angular", "ExpressJs", "NodeJS"]

  return (
    <Box sx={{
        background:'red'
    }}>
      {knowledge.map((tech, index) => (
        <Box key={index}>{tech}</Box>
      ))}
    </Box>
  )
}

export default Techinical;