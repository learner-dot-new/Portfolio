import { Box, Typography, Link as MuiLink } from '@mui/material';
import { education, publications, coCurriculars } from '../database/Cocricular';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Cociricular = () => {
  return (
    <Box
      sx={{
        px: { xs: '20px', md: '40px' },
        py: { xs: '60px', md: '100px' },
      }}
    >
      {/* ═══ EDUCATION ═══ */}
      <Box sx={{ mb: 8 }}>
        <Typography className="section-label">Background</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Education
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1rem', maxWidth: '500px', mb: 5 }}>
          My academic journey and qualifications.
        </Typography>

        <Box className="divider-line" sx={{ mb: 4 }} />

        {/* Education Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {education.map((edu, index) => (
            <Box
              key={edu.id}
              className={`animate-fade-in-up stagger-${index + 1}`}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '200px 1fr auto' },
                gap: { xs: 1, md: 4 },
                py: '24px',
                borderBottom: '1px solid #1a1a1a',
                alignItems: 'start',
                opacity: 0,
                animationFillMode: 'forwards',
                transition: 'background 0.25s ease',
                px: 2,
                mx: -2,
                borderRadius: '8px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.02)',
                },
              }}
            >
              {/* Year */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon sx={{ fontSize: '0.9rem', color: '#00ff66', opacity: 0.7 }} />
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#666',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {edu.year}
                </Typography>
              </Box>

              {/* Details */}
              <Box>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ebebeb',
                    mb: 0.3,
                  }}
                >
                  {edu.degree}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: '#888',
                  }}
                >
                  {edu.institution} — {edu.location}
                </Typography>
              </Box>

              {/* Score */}
              <Box
                sx={{
                  display: 'inline-flex',
                  px: '12px',
                  py: '4px',
                  borderRadius: '6px',
                  border: '1px solid #1a1a1a',
                  backgroundColor: 'rgba(0, 255, 102, 0.03)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#00ff66',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {edu.score}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ═══ PUBLICATIONS ═══ */}
      <Box>
        <Typography className="section-label">Research</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Publications
        </Typography>

        <Box className="divider-line" sx={{ mt: 4, mb: 4 }} />

        {publications.map((pub) => (
          <Box
            key={pub.id}
            className="animate-fade-in-up"
            sx={{
              p: '24px',
              borderRadius: '12px',
              border: '1px solid #1a1a1a',
              backgroundColor: '#0a0a0a',
              transition: 'all 0.3s ease',
              opacity: 0,
              animationFillMode: 'forwards',
              '&:hover': {
                borderColor: 'rgba(0, 255, 102, 0.3)',
                boxShadow: '0 4px 24px rgba(0, 255, 102, 0.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <ArticleIcon sx={{ color: '#00ff66', fontSize: '1.2rem', mt: 0.3, flexShrink: 0 }} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ebebeb',
                    mb: 0.5,
                  }}
                >
                  {pub.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    color: '#888',
                    mb: 1,
                  }}
                >
                  Published in <strong style={{ color: '#b0b0b0' }}>{pub.journal}</strong> — {pub.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.78rem',
                    color: '#666',
                    mb: 1.5,
                    lineHeight: 1.5,
                  }}
                >
                  {pub.authors}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#555',
                      fontFamily: 'monospace',
                      letterSpacing: '0.03em',
                    }}
                  >
                    Paper ID: {pub.paperId}
                  </Typography>
                  <MuiLink
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      color: '#00ff66',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    View Paper →
                  </MuiLink>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ═══ CO-CURRICULAR ACTIVITIES ═══ */}
      <Box sx={{ mt: 8 }}>
        <Typography className="section-label">Activities</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Co-Curricular
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1rem', maxWidth: '500px', mb: 5 }}>
          Extra-curricular achievements and certifications.
        </Typography>

        <Box className="divider-line" sx={{ mb: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {coCurriculars.map((item) => (
            <Box
              key={item.id}
              className="animate-fade-in-up"
              sx={{
                p: '24px',
                borderRadius: '12px',
                border: '1px solid #1a1a1a',
                backgroundColor: '#0a0a0a',
                transition: 'all 0.3s ease',
                opacity: 0,
                animationFillMode: 'forwards',
                '&:hover': {
                  borderColor: 'rgba(0, 255, 102, 0.3)',
                  boxShadow: '0 4px 24px rgba(0, 255, 102, 0.05)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <MilitaryTechIcon sx={{ color: '#00ff66', fontSize: '1.4rem', mt: 0.2, flexShrink: 0 }} />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5, flexWrap: 'wrap' }}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#ebebeb',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        px: '10px',
                        py: '2px',
                        borderRadius: '6px',
                        border: '1px solid #1a1a1a',
                        backgroundColor: 'rgba(0, 255, 102, 0.03)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: '#00ff66',
                        }}
                      >
                        {item.grade}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      color: '#888',
                      mb: 1,
                    }}
                  >
                    {item.organization} — {item.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#666',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Cociricular;