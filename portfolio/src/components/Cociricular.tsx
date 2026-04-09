import { activities } from '../database/Cocricular'
import {Box, Typography} from '@mui/material'
const Cociricular = () => {
  return (
    <Box sx={{
        background:'black',
        padding:'20px'
    }}>
        {activities.map((activity)=>(
            <Box key={activity.id} sx={{
                background:'grey',
                display:'flex',
                flexDirection:'column',
                padding:'10px',
                margin:'10px'
            }}>
                <Typography>{activity.title}</Typography>
                <Typography>{activity.achievement}</Typography>
                <Typography>{activity.date.toDateString()}</Typography>
                <Typography>{activity.description}</Typography>
            </Box>
        ))}

    </Box>
  )
}

export default Cociricular