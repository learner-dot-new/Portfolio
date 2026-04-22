import { Box, Typography} from '@mui/material';
import ConnectForm from './ConnectForm';

const ConnectSection = () => {
  return (
    <Box 
      id="contact-section"
      sx={{ 
        py: { xs: '80px', md: '120px' },
        px: { xs: '20px', md: '40px' },
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Box 
        sx={{ 
          maxWidth: '1200px', 
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 8, md: 12 },
          alignItems: 'center'
        }}
      >
        {/* Left Side: Copy */}
        <Box>
          <Typography 
            className="section-label" 
            sx={{ 
              color: '#555', 
              fontWeight: 700, 
              letterSpacing: '0.2rem',
              mb: 2 
            }}
          >
            CONTACT
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3, 
              fontWeight: 800, 
              color: '#fff',
              letterSpacing: '-0.02em',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Ready to <span style={{ color: '#00ff66' }}>engineer</span> something great?
          </Typography>
          <Typography sx={{ color: '#888', fontSize: '1.2rem', lineHeight: 1.6, mb: 4 }}>
            Whether you have a specific project in mind or just want to say hi, my inbox is always open. Let's establish a connection.
          </Typography>
          
          <Box sx={{ mt: 6 }}>
            <Typography sx={{ color: '#444', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>EMAIL ME DIRECTLY</Typography>
            <Typography variant="h5" sx={{ color: '#00ff66', fontWeight: 500 }}>vijaypooniya.dev@gmail.com</Typography>
          </Box>
        </Box>

        {/* Right Side: Form */}
        <Box 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backgroundColor: 'rgba(255, 255, 255, 0.01)',
            borderRadius: '24px'
          }}
        >
          <ConnectForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectSection;
