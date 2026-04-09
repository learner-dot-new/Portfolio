import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
  Button
} from "@mui/material";

const ContactModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Connect with me</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>

          {/* Email */}
          <Button
            href="mailto:vjaypooniya@gmail.com"
            target="_blank"
          >
            Email Me
          </Button>

          {/* WhatsApp */}
          <Button
            href="https://wa.me/919509923033"
            target="_blank"
          >
            Message on WhatsApp
          </Button>

          {/* GitHub */}
          <Button
            href="https://github.com/pooniya22"
            target="_blank"
          >
            GitHub
          </Button>

          {/* LinkedIn */}
          <Button
            href="https://linkedin.com/in/vijay-pooniya"
            target="_blank"
          >
            LinkedIn
          </Button>

        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;