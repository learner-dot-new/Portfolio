import { Box, Card, CardContent, Typography, Chip, Button } from '@mui/material';
import { projects } from '../database/Projects';
import { useNavigate } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: '20px', md: '40px' },
        pt: '140px',
        pb: '80px',
      }}
    >
      {/* Back Link */}
      <Link to="/">
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.8,
            mb: 5,
            color: '#666',
            fontSize: '0.82rem',
            transition: 'color 0.25s ease',
            cursor: 'pointer',
            '&:hover': { color: '#00ff66' },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: '0.9rem' }} />
          Back to Home
        </Box>
      </Link>

      {/* Page Header */}
      <Typography className="section-label">All Work</Typography>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Typography
        sx={{
          color: '#666',
          fontSize: '1.05rem',
          maxWidth: '600px',
          mb: 6,
          lineHeight: 1.7,
        }}
      >
        A comprehensive view of all the projects I've built — from full-stack platforms
        to frontend experiments and mobile applications.
      </Typography>

      <Box className="divider-line" sx={{ mb: 5 }} />

      {/* Projects List */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            onClick={() => {
              if (project.isExternal && project.externalLink) {
                window.open(project.externalLink, '_blank');
              } else {
                navigate(`/projects/${project.id}`);
              }
            }}
            className={`animate-fade-in-up stagger-${index + 1}`}
            sx={{
              cursor: 'pointer',
              p: 0,
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <CardContent
              sx={{
                p: '32px !important',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                gap: 3,
              }}
            >
              <Box>
                {/* Role Badge */}
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#00ff66',
                    mb: 1,
                  }}
                >
                  {project.role}
                </Typography>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    mb: 1.5,
                    fontSize: '1.35rem',
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#888',
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Stack */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: 2 }}>
                  {project.techStack.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: '10px' }}>
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
              </Box>

              {/* Highlights */}
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#555',
                    mb: 1.5,
                  }}
                >
                  Key Highlights
                </Typography>
                {project.highlights.map((highlight, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        backgroundColor: '#00ff66',
                        mt: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.82rem',
                        color: '#888',
                        lineHeight: 1.5,
                      }}
                    >
                      {highlight}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;