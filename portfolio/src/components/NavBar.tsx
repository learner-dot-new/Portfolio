import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PopUp from "./PopUp";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: '20px', md: '40px' },
        py: '16px',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <Link to="/">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              border: '1.5px solid #2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#00ff66',
                boxShadow: '0 0 20px rgba(0, 255, 102, 0.15)',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#ebebeb',
                letterSpacing: '0.02em',
              }}
            >
              VP
            </Typography>
          </Box>
        </Box>
      </Link>

      {/* Navigation Links */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '20px', md: '36px' },
        }}
      >
        {[
          { label: 'Home', path: '/' },
          { label: 'Projects', path: '/Projects' },
        ].map((item) => (
          <Link key={item.path} to={item.path}>
            <Typography
              sx={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: isActive(item.path) ? '#ebebeb' : '#888',
                position: 'relative',
                transition: 'color 0.25s ease',
                '&:hover': {
                  color: '#ebebeb',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: isActive(item.path) ? '100%' : '0%',
                  height: '1.5px',
                  backgroundColor: '#00ff66',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}

        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{
            fontSize: '0.8rem',
            px: '20px',
            py: '6px',
            borderColor: '#2a2a2a',
            color: '#ebebeb',
            borderRadius: '8px',
            '&:hover': {
              borderColor: '#00ff66',
              color: '#00ff66',
              backgroundColor: 'rgba(0, 255, 102, 0.05)',
            },
          }}
        >
          Connect
        </Button>

        <PopUp open={open} handleClose={() => setOpen(false)} />
      </Box>
    </Box>
  );
};

export default NavBar;