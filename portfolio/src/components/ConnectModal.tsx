import { Dialog, DialogContent, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ConnectForm from './ConnectForm';

interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
}

const ConnectModal = ({ open, onClose }: ConnectModalProps) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#050505',
          backgroundImage: 'none',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          p: 2,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1, pr: 1 }}>
        <IconButton 
          onClick={onClose} 
          sx={{ 
            color: '#333', 
            transition: 'all 0.3s ease',
            '&:hover': { color: '#00ff66', backgroundColor: 'rgba(0, 255, 102, 0.05)' } 
          }}
        >
          <CloseIcon sx={{ fontSize: '1.2rem' }} />
        </IconButton>
      </Box>
      <DialogContent sx={{ px: 4, pb: 4, pt: 0 }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#fff', 
              fontWeight: 800, 
              letterSpacing: '-0.03em',
              mb: 1
            }}
          >
            Establish <span style={{ color: '#00ff66' }}>Signal.</span>
          </Typography>
          <Typography sx={{ color: '#555', fontSize: '0.85rem' }}>
            Initiate a connection for collaborations or inquiries.
          </Typography>
        </Box>
        <ConnectForm />
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
