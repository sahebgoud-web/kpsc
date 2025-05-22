import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
  WhatsApp,
  ArrowUpward
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: YouTube, label: 'YouTube', href: '#' },
    { icon: LinkedIn, label: 'LinkedIn', href: '#' },
    { icon: WhatsApp, label: 'WhatsApp', href: '#' },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        py: 6,
        backgroundImage: 'url("https://elearnkpsc.com/assets/35481295_v915-wit-002-g-dgDH2kTd.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderTop: '1px solid #ddd',
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(222, 218, 222, 0.6)',
          zIndex: 0
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Column 1 */}
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              E-Learning KPSC
            </Typography>
            <Typography variant="body2">
              We are dedicated to helping you prepare for your <br />
              upcoming government competitive exams in India.
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Online Platform
            </Typography>
            <Box display="flex" flexDirection="column" gap={0.5}>
              {['Home', 'About Us', 'Kpsc', 'Study Material', 'Contact Us'].map((item) => (
                <Link key={item} href="#" underline="hover" color="inherit" variant="body2">
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contacts
            </Typography>
            <Typography variant="body2">
              Address: #34, 3rd Floor, 36th Main, Dr Rajkumar Rd,
            </Typography>
            <Typography variant="body2">
              2nd Block, Road, Rajajinagar, Bengaluru.
            </Typography>
            <Typography variant="body2">
              Call: <Link href="tel:+919004000887" color="inherit">+91 9004000887</Link>
            </Typography>
            <Typography variant="body2">
              Email: <Link href="https://www.walkinsoftwares.com" target="_blank" rel="noopener" color="inherit">www.walkinsoftwares.com</Link>
            </Typography>

            {/* Social Icons */}
            <Box mt={2} display="flex" gap={1}>
              {socialLinks.map(({ icon: Icon, label, href }, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: '#f0f0f0'
                    },
                    width: 36,
                    height: 36
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.3)' }} />

        {/* Copyright */}
        <Box textAlign="center">
          <Typography variant="caption">
            © 2025 | Developed By <b>WAKINSOFTWARES BHARAT PVT LTD</b>. All Rights Reserved
          </Typography>
        </Box>

        {/* Scroll to Top Button */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: 'green',
            borderRadius: '50%',
            color: 'white',
            p: 1,
            cursor: 'pointer',
            zIndex: 999,
            boxShadow: 3,
            '&:hover': {
              backgroundColor: '#2e7d32'
            }
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpward />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


