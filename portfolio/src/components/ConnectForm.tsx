import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress, Alert, MenuItem, Select, InputBase, type SelectChangeEvent } from '@mui/material';

const ConnectForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulating success
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h5" sx={{ color: '#00ff66', mb: 2, fontWeight: 700 }}>
          Signal Received!
        </Typography>
        <Typography sx={{ color: '#888' }}>
          Thank you for reaching out, {formData.name}. I'll respond shortly.
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 4 }}>
      <Box sx={{ display: 'grid', gap: 1 }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Full Name</Typography>
        <TextField
          fullWidth
          required
          name="name"
          placeholder="Enter your name"
          variant="standard"
          value={formData.name}
          onChange={handleChange}
          slotProps={{ input: { disableUnderline: true } }}
          sx={{
            '& .MuiInputBase-root': { 
              color: '#fff', 
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              px: 2,
              py: 1.5,
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' },
              '&.Mui-focused': { 
                borderColor: 'rgba(0, 255, 102, 0.3)', 
                backgroundColor: 'rgba(0, 255, 102, 0.02)',
                boxShadow: '0 0 15px rgba(0, 255, 102, 0.05)'
              },
            }
          }}
        />
      </Box>

      <Box sx={{ display: 'grid', gap: 1 }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email Address</Typography>
        <TextField
          fullWidth
          required
          type="email"
          name="email"
          placeholder="email@example.com"
          variant="standard"
          value={formData.email}
          onChange={handleChange}
          slotProps={{ input: { disableUnderline: true } }}
          sx={{
            '& .MuiInputBase-root': { 
              color: '#fff', 
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              px: 2,
              py: 1.5,
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' },
              '&.Mui-focused': { 
                borderColor: 'rgba(0, 255, 102, 0.3)', 
                backgroundColor: 'rgba(0, 255, 102, 0.02)',
                boxShadow: '0 0 15px rgba(0, 255, 102, 0.05)'
              },
            }
          }}
        />
      </Box>

      <Box sx={{ display: 'grid', gap: 1 }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Phone Number</Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 0, 
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            '&:focus-within': {
              borderColor: 'rgba(0, 255, 102, 0.3)', 
              boxShadow: '0 0 20px rgba(0, 255, 102, 0.05)'
            }
          }}
        >
          <Select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            input={<InputBase sx={{ 
              color: '#fff', 
              fontSize: '0.9rem',
              width: '100px',
              px: 2,
              py: 1.5,
              borderRight: '1px solid rgba(255,255,255,0.05)',
            }} />}
            MenuProps={{
              slotProps: {
                paper: {
                  sx: {
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    mt: 1,
                    maxHeight: 300,
                    '& .MuiMenuItem-root': {
                      fontSize: '0.85rem',
                      py: 1.5,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 102, 0.05)',
                        color: '#00ff66'
                      }
                    }
                  }
                }
              }
            }}
          >
            <MenuItem value="+91">🇮🇳 +91</MenuItem>
            <MenuItem value="+1">🇺🇸 +1</MenuItem>
            <MenuItem value="+44">🇬🇧 +44</MenuItem>
            <MenuItem value="+61">🇦🇺 +61</MenuItem>
            <MenuItem value="+81">🇯🇵 +81</MenuItem>
            <MenuItem value="+49">🇩🇪 +49</MenuItem>
            <MenuItem value="+33">🇫🇷 +33</MenuItem>
            <MenuItem value="+971">🇦🇪 +971</MenuItem>
            <MenuItem value="+7">🇷🇺 +7</MenuItem>
            <MenuItem value="+86">🇨🇳 +86</MenuItem>
            <MenuItem value="+55">🇧🇷 +55</MenuItem>
            <MenuItem value="+27">🇿🇦 +27</MenuItem>
            <MenuItem value="+34">🇪🇸 +34</MenuItem>
            <MenuItem value="+39">🇮🇹 +39</MenuItem>
            <MenuItem value="+65">🇸🇬 +65</MenuItem>
            <MenuItem value="+82">🇰🇷 +82</MenuItem>
            <MenuItem value="+31">🇳🇱 +31</MenuItem>
            <MenuItem value="+41">🇨🇭 +41</MenuItem>
            <MenuItem value="+46">🇸🇪 +46</MenuItem>
          </Select>
          <TextField
            fullWidth
            required
            name="phone"
            placeholder="000 000 0000"
            variant="standard"
            value={formData.phone}
            onChange={handleChange}
            slotProps={{ input: { disableUnderline: true } }}
            sx={{
              '& .MuiInputBase-root': { 
                color: '#fff', 
                fontSize: '1rem',
                backgroundColor: 'transparent',
                px: 2,
                py: 1.5,
              }
            }}
          />
        </Box>
      </Box>
      
      {status === 'error' && (
        <Alert severity="error" sx={{ backgroundColor: 'rgba(211, 47, 47, 0.05)', color: '#ff5252', borderRadius: '12px', borderLeft: '3px solid #ff5252' }}>
          Submission failed. Signal lost.
        </Alert>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        sx={{
          mt: 2,
          py: 2,
          backgroundColor: '#00ff66',
          color: '#000',
          fontWeight: 800,
          borderRadius: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontSize: '0.85rem',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: '#00cc52',
            boxShadow: '0 0 30px rgba(0, 255, 102, 0.2)',
            transform: 'translateY(-2px)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: '#444'
          }
        }}
      >
        {status === 'loading' ? <CircularProgress size={20} sx={{ color: '#000' }} /> : 'Establish Signal'}
      </Button>



      
      <Typography sx={{ color: '#555', fontSize: '0.75rem', textAlign: 'center' }}>
        By clicking establish, you agree to being contacted via email or phone.
      </Typography>
    </Box>
  );
};

export default ConnectForm;
