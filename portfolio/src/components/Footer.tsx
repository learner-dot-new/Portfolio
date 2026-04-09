import { Box, Typography, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
  { icon: <GitHubIcon />, href: 'https://github.com/pooniya22', label: 'GitHub' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/vijay-pooniya/', label: 'LinkedIn' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/sumann_godara/', label: 'Instagram' },
  { icon: <EmailIcon />, href: 'mailto:vijaypooniya14@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        px: { xs: '20px', md: '40px' },
        py: '40px',
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
        }}
      >
        {/* Copyright */}
        <Typography
          sx={{
            fontSize: '0.78rem',
            color: '#555',
            letterSpacing: '0.02em',
          }}
        >
          © {new Date().getFullYear()} Vijay Pooniya — All rights reserved
        </Typography>

        {/* Social Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          {socialLinks.map((link) => (
            <MuiLink
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.8,
                color: '#555',
                fontSize: '0.78rem',
                transition: 'all 0.25s ease',
                '&:hover': {
                  color: '#00ff66',
                },
                '& svg': {
                  fontSize: '1rem',
                },
              }}
            >
              {link.icon}
              <Box
                component="span"
                sx={{ display: { xs: 'none', md: 'inline' } }}
              >
                {link.label}
              </Box>
            </MuiLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;