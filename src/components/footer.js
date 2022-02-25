import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Footer = () => {
    return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '90vh',
        }}
    >
        <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Here is the useless footer part
          </Typography>
        </Container>
      </Box>
    </Box>
    );
  };
  export default Footer;