import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface SkillCategory {
  category: string;
  skills: string[];
  icon: any;
}

const skillData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    icon: <LanguageIcon sx={{ fontSize: '1.2rem' }} />
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Node.js", "Express.js"],
    icon: <CodeIcon sx={{ fontSize: '1.2rem' }} />
  },
  {
    category: "Mobile Development",
    skills: ["React Native"],
    icon: <SmartphoneIcon sx={{ fontSize: '1.2rem' }} />
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
    icon: <StorageIcon sx={{ fontSize: '1.2rem' }} />
  },
  {
    category: "Cloud & BaaS",
    skills: ["Firebase", "Supabase"],
    icon: <CloudIcon sx={{ fontSize: '1.2rem' }} />
  },
  {
    category: "Developer Tools",
    skills: ["Postman", "VS Code", "Jupyter", "Git", "GitHub"],
    icon: <TerminalIcon sx={{ fontSize: '1.2rem' }} />
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Analytical Thinking", "Leadership", "Time Management", "Teamwork"],
    icon: <PsychologyIcon sx={{ fontSize: '1.2rem' }} />
  },
];

const Techinical = () => {
  return (
    <Box
      sx={{
        px: { xs: '20px', md: '60px' },
        py: { xs: '80px', md: '120px' },
        backgroundColor: '#050505'
      }}
    >
      <Box sx={{ mb: 8 }}>
        <Typography 
          className="section-label" 
          sx={{ 
            color: '#555', 
            fontWeight: 700, 
            letterSpacing: '0.2rem',
            mb: 2 
          }}
        >
          EXPERTISE
        </Typography>
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 2, 
            fontWeight: 800, 
            color: '#fff',
            letterSpacing: '-0.02em'
          }}
        >
          Technical <span style={{ color: '#00ff66' }}>Skills.</span>
        </Typography>
        <Typography sx={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
          A curated list of technologies and engineering tools I leverage to build robust, scalable applications.
        </Typography>
      </Box>

      {/* Skills Container */}
      <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        {skillData.map((category, index) => (
          <Box
            key={category.category}
            className={`animate-fade-in-up stagger-${index + 1}`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '240px 1fr' },
              gap: { xs: 2, md: 4 },
              py: { xs: 4, md: 5 },
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              alignItems: 'flex-start',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
              }
            }}
          >
            {/* Category Label */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box 
                sx={{ 
                  color: '#00ff66', 
                  backgroundColor: 'rgba(0, 255, 102, 0.05)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0, 255, 102, 0.1)'
                }}
              >
                {category.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#eee',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {category.category}
              </Typography>
            </Box>

            {/* Skill Pills */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {category.skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    px: '16px',
                    py: '8px',
                    borderRadius: '1px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#999',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    '&:hover': {
                      borderColor: 'rgba(0, 255, 102, 0.3)',
                      color: '#00ff66',
                      backgroundColor: 'rgba(0, 255, 102, 0.05)',
                      transform: 'translateY(-2px)',
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