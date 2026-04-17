import { Box, Typography } from '@mui/material';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Node.js", "Express.js"],
  },
  {
    category: "Mobile Development",
    skills: ["React Native"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud & BaaS",
    skills: ["Firebase", "Supabase"],
  },
  {
    category: "Developer Tools",
    skills: ["Postman", "VS Code", "Jupyter", "Git", "GitHub"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Analytical Thinking", "Leadership", "Time Management", "Teamwork"],
  },
];

const Techinical = () => {
  return (
    <Box
      sx={{
        px: { xs: '20px', md: '40px' },
        py: { xs: '60px', md: '100px' },
      }}
    >
      {/* Section Header */}
      <Typography className="section-label">Expertise</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Technical Skills
      </Typography>
      <Typography sx={{ color: '#666', fontSize: '1rem', maxWidth: '500px', mb: 5 }}>
        Technologies and tools I work with on a daily basis.
      </Typography>

      <Box className="divider-line" sx={{ mb: 0 }} />

      {/* Skills Grid */}
      <Box>
        {skillData.map((category, index) => (
          <Box
            key={category.category}
            className={`animate-fade-in-up stagger-${index + 1}`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '180px 1fr' },
              gap: { xs: 1, md: 4 },
              py: '24px',
              borderBottom: '1px solid #1a1a1a',
              alignItems: 'center',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            {/* Category Label */}
            <Typography
              sx={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#666',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {category.category}
            </Typography>

            {/* Skill Pills */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    px: '14px',
                    py: '6px',
                    borderRadius: '6px',
                    border: '1px solid #1e1e1e',
                    backgroundColor: '#0a0a0a',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#b0b0b0',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                    '&:hover': {
                      borderColor: '#00ff66',
                      color: '#00ff66',
                      backgroundColor: 'rgba(0, 255, 102, 0.04)',
                      boxShadow: '0 0 12px rgba(0, 255, 102, 0.08)',
                    },
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Techinical;