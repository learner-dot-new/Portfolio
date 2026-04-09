import { useParams, Link } from "react-router-dom";
import { projects } from "../database/Projects";
import { Box, Typography, Chip, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h2" sx={{ color: '#ebebeb' }}>
          404
        </Typography>
        <Typography sx={{ color: '#666' }}>Project not found</Typography>
        <Link to="/Projects">
          <Button variant="outlined" startIcon={<ArrowBackIcon />}>
            Back to Projects
          </Button>
        </Link>
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: '20px', md: '40px', lg: '80px' },
        pt: '140px',
        pb: '80px',
        maxWidth: '960px',
        mx: 'auto',
      }}
    >
      {/* Back Link */}
      <Link to="/Projects">
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
          All Projects
        </Box>
      </Link>

      {/* Role Badge */}
      <Typography
        className="animate-fade-in-up"
        sx={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#00ff66',
          mb: 1.5,
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        {project.role}
      </Typography>

      {/* Title */}
      <Typography
        variant="h1"
        className="animate-fade-in-up stagger-1"
        sx={{
          mb: 3,
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        {project.title}
      </Typography>

      {/* Description */}
      <Typography
        className="animate-fade-in-up stagger-2"
        sx={{
          fontSize: '1.1rem',
          color: '#888',
          lineHeight: 1.8,
          mb: 4,
          maxWidth: '700px',
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        {project.description}
      </Typography>

      {/* Divider */}
      <Box
        className="divider-line animate-fade-in-up stagger-3"
        sx={{ mb: 4, opacity: 0, animationFillMode: 'forwards' }}
      />

      {/* Tech Stack */}
      <Box
        className="animate-fade-in-up stagger-3"
        sx={{ opacity: 0, animationFillMode: 'forwards', mb: 4 }}
      >
        <Typography
          sx={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555',
            mb: 2,
          }}
        >
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.techStack.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </Box>
      </Box>

      {/* Divider */}
      <Box className="divider-line" sx={{ mb: 4 }} />

      {/* Key Highlights */}
      <Box
        className="animate-fade-in-up stagger-4"
        sx={{ opacity: 0, animationFillMode: 'forwards', mb: 5 }}
      >
        <Typography
          sx={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555',
            mb: 2,
          }}
        >
          Key Highlights
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {project.highlights.map((highlight, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                p: '16px',
                borderRadius: '8px',
                border: '1px solid #1a1a1a',
                backgroundColor: '#0a0a0a',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: 'rgba(0, 255, 102, 0.2)',
                  backgroundColor: 'rgba(0, 255, 102, 0.02)',
                },
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#00ff66',
                  mt: '7px',
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: '#b0b0b0',
                  lineHeight: 1.5,
                }}
              >
                {highlight}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box
        className="animate-fade-in-up stagger-5"
        sx={{
          display: 'flex',
          gap: 2,
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        {project.githubLink && (
          <Button
            variant="outlined"
            href={project.githubLink}
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{ px: 3 }}
          >
            View Source Code
          </Button>
        )}
        {project.liveLink && (
          <Button
            variant="contained"
            href={project.liveLink}
            target="_blank"
            startIcon={<ArrowOutwardIcon />}
            sx={{ px: 3 }}
          >
            View Live
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDetail;