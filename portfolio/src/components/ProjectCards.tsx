import { Box, Card, CardContent, Typography, Chip, Button, IconButton, Tooltip } from '@mui/material';
import { projects } from '../database/Projects';
import { useNavigate } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const ProjectCards = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: any) => {
    if (project.readmePath) {
      window.open(project.readmePath, '_blank');
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  return (
    <Box
      sx={{
        px: { xs: '20px', md: '40px' },
        py: { xs: '60px', md: '100px' },
        backgroundColor: '#050505'
      }}
    >
      {/* Section Header */}
      <Box sx={{ mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography className="section-label">Selected Works</Typography>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
          Research & <span style={{ color: '#00ff66' }}>Development.</span>
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Focused on distributed systems, real-time communication, and performance-critical engineering.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
          gap: '24px',
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className={`animate-fade-in-up stagger-${index + 1}`}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              p: 0,
              opacity: 0,
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '2px', // Minimal square edges
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderColor: 'rgba(0, 255, 102, 0.3)',
                '& .project-title': { color: '#00ff66' },
                '& .arrow-icon': { transform: 'translate(4px, -4px)', opacity: 1 }
              },
            }}
          >
            <CardContent sx={{ p: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#555',
                  }}
                >
                  {project.role}
                </Typography>
                
                <ArrowOutwardIcon 
                  className="arrow-icon"
                  sx={{ 
                    fontSize: '1.2rem', 
                    color: '#00ff66', 
                    opacity: 0, 
                    transition: 'all 0.3s ease' 
                  }} 
                />
              </Box>

              <Typography
                className="project-title"
                variant="h4"
                sx={{
                  mb: 1.5,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#fff',
                  transition: 'color 0.3s ease',
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: '#777',
                  lineHeight: 1.7,
                  mb: 3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: 'auto' }}>
                {project.techStack.slice(0, 3).map((tech) => (
                  <Typography 
                    key={tech} 
                    sx={{ 
                      fontSize: '0.65rem', 
                      color: '#bbb', // Lighter grey for visibility
                      fontWeight: 500,
                      backgroundColor: 'rgba(0, 255, 102, 0.03)', // Subtle theme-color tint
                      px: 1.2,
                      py: 0.4,
                      borderRadius: '1px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#00ff66',
                        borderColor: 'rgba(0, 255, 102, 0.2)',
                        backgroundColor: 'rgba(0, 255, 102, 0.08)',
                      }
                    }} 
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCards;