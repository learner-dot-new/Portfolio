import { Box, Card, CardContent, Typography, Chip, Button } from '@mui/material';
import { projects } from '../database/Projects';
import { useNavigate } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCards = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: { xs: '20px', md: '40px' },
        py: { xs: '60px', md: '100px' },
      }}
    >
      {/* Section Header */}
      <Box sx={{ mb: 6 }}>
        <Typography className="section-label">Portfolio</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Selected Projects
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1rem', maxWidth: '500px' }}>
          A collection of projects I've built, from full-stack applications to frontend experiments.
        </Typography>
      </Box>

      {/* Divider */}
      <Box className="divider-line" sx={{ mb: 5 }} />

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
            onClick={() => navigate(`/projects/${project.id}`)}
            className={`animate-fade-in-up stagger-${index + 1}`}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              p: 0,
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            {/* Card top accent */}
            <Box
              sx={{
                height: '2px',
                background: 'linear-gradient(90deg, #00ff66 0%, transparent 100%)',
                opacity: 0,
                transition: 'opacity 0.35s ease',
                '.MuiCard-root:hover &': {
                  opacity: 1,
                },
              }}
            />

            <CardContent sx={{ p: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Role Badge */}
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#00ff66',
                  mb: 1.5,
                }}
              >
                {project.role}
              </Typography>

              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  mb: 1.5,
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#ebebeb',
                  transition: 'color 0.25s ease',
                }}
              >
                {project.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: '#888',
                  lineHeight: 1.6,
                  mb: 3,
                  flex: 1,
                }}
              >
                {project.description}
              </Typography>

              {/* Tech Stack */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: 3 }}>
                {project.techStack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: '10px', mt: 'auto' }}>
                {project.githubLink && (
                  <Button
                    variant="outlined"
                    size="small"
                    href={project.githubLink}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                    sx={{ fontSize: '0.75rem', py: '4px' }}
                  >
                    Code
                  </Button>
                )}
                {project.liveLink && (
                  <Button
                    variant="outlined"
                    size="small"
                    href={project.liveLink}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    startIcon={<ArrowOutwardIcon sx={{ fontSize: '0.9rem !important' }} />}
                    sx={{ fontSize: '0.75rem', py: '4px' }}
                  >
                    Live
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCards;