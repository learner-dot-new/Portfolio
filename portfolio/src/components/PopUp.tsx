import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const contactLinks = [
  {
    label: "Email",
    subtitle: "vijaypooniya14@gmail.com",
    href: "mailto:vijaypooniya14@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "WhatsApp",
    subtitle: "+91 9509923033",
    href: "https://wa.me/919509923033",
    icon: <WhatsAppIcon />,
  },
  {
    label: "GitHub",
    subtitle: "pooniya22",
    href: "https://github.com/pooniya22",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    subtitle: "Vijay Pooniya",
    href: "https://linkedin.com/in/vijay-pooniya",
    icon: <LinkedInIcon />,
  },
];

const ContactModal = ({ open, handleClose }: ContactModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: '#666',
            '&:hover': { color: '#ebebeb' },
          }}
        >
          <CloseIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>

        <DialogTitle
          sx={{
            pb: 0.5,
            pt: 3,
            px: 3,
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#ebebeb',
          }}
        >
          Let's Connect
        </DialogTitle>

        <Typography
          sx={{
            px: 3,
            pb: 1,
            fontSize: '0.82rem',
            color: '#666',
          }}
        >
          Reach out through any of these channels
        </Typography>

        <DialogContent sx={{ px: 3, pb: 3, pt: 2 }}>
          <Stack spacing={1.5}>
            {contactLinks.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: '14px 16px',
                  borderRadius: '10px',
                  border: '1px solid #1a1a1a',
                  backgroundColor: 'transparent',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': {
                    borderColor: '#00ff66',
                    backgroundColor: 'rgba(0, 255, 102, 0.03)',
                    transform: 'translateX(4px)',
                    '& .contact-icon': {
                      color: '#00ff66',
                    },
                  },
                }}
              >
                <Box
                  className="contact-icon"
                  sx={{
                    color: '#555',
                    display: 'flex',
                    transition: 'color 0.25s ease',
                    '& svg': { fontSize: '1.2rem' },
                  }}
                >
                  {link.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#ebebeb',
                    }}
                  >
                    {link.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#666',
                    }}
                  >
                    {link.subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ContactModal;