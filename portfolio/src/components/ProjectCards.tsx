import {Box, Card, CardHeader, CardContent, Typography, Chip, CardActions, Button} from '@mui/material';
import { projects } from '../database/Projects';
import { useNavigate } from 'react-router-dom';
const ProjectCards = () => {
    const navigate = useNavigate()
  return (
    <Box sx={{
        background:'pink',
        padding:'30px'
    }}>
        <Box sx={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            {projects.map((project)=>(
                <Card key={project.id}
               onClick={() => navigate(`/projects/${project.id}`)}
                sx={{ cursor: "pointer" }}>
                    <CardHeader title={project.title}></CardHeader>
                    <CardContent>
                        <Typography>{project.description}</Typography>
                        <Box>{project.techStack.map((tech)=>{
                            return <Chip key={tech} label={tech} size='small' color='primary'></Chip>
                        })}</Box>
                    </CardContent>
                    <Box>
                        {project.githubLink &&
                        <CardActions>
                            <Button href={project.githubLink} target='_blank'>Github</Button>
                        </CardActions>
                    }
                    {project.liveLink &&
                        <CardActions>
                            <Button href={project.liveLink} target='_blank'>Live</Button>
                        </CardActions>
                    }
                    </Box>

                </Card>
            ))}
        </Box>


    </Box>

  )
}

export default ProjectCards