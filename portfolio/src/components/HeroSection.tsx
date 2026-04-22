import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import ConnectModal from "./ConnectModal";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: '20px', md: '40px' },
        pt: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Radial glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 255, 102, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        {/* Status Indicator (Clickable Badge) */}
        <Box
          className="animate-fade-in-up"
          onClick={() => setModalOpen(true)}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            mb: 4,
            px: '16px',
            py: '8px',
            borderRadius: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(10, 10, 10, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(0, 255, 102, 0.3)',
              backgroundColor: 'rgba(0, 255, 102, 0.05)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#00ff66',
              animation: 'pulse 2s ease-in-out infinite',
              boxShadow: '0 0 8px rgba(0, 255, 102, 0.5)',
            }}
          />
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#888',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            Available for opportunities
          </Typography>
        </Box>

        {/* Connect Modal */}
        <ConnectModal open={modalOpen} onClose={() => setModalOpen(false)} />

        {/* Main Heading */}
        <Typography
          variant="h1"
          className="animate-fade-in-up stagger-1"
          sx={{
            mb: 2,
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        >
          VIJAY{' '}
          <Box
            component="span"
            className="gradient-text"
          >
            POONIYA
          </Box>
        </Typography>

        {/* Subtitle */}
        <Typography
          className="animate-fade-in-up stagger-2"
          sx={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 400,
            color: '#888',
            mb: 4,
            opacity: 0,
            animationFillMode: 'forwards',
            letterSpacing: '0.04em',
          }}
        >
          Full-Stack Developer
        </Typography>

        {/* Divider */}
        <Box
          className="animate-fade-in-up stagger-3"
          sx={{
            width: '40px',
            height: '1px',
            background: '#2a2a2a',
            mx: 'auto',
            mb: 4,
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        />

        {/* Summary */}
        <Typography
          className="animate-fade-in-up stagger-4"
          sx={{
            fontSize: { xs: '0.9rem', md: '1.05rem'},
            lineHeight: 1.8,
            color: '#888',
            maxWidth: '640px',
            mx: 'auto',
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        >
          Strong foundations in Data Structures & Algorithms, Object-Oriented Programming, 
          and core Computer Science. Experienced in building scalable web applications using 
          JavaScript, React, Node.js, and modern development tools.
        </Typography>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.65rem',
            color: '#555',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: '#555', fontSize: '1rem' }} />
      </Box>
    </Box>
  );
};

export default HeroSection;