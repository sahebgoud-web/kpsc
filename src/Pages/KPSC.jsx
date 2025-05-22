import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const KPSC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #e0f7fa, #f0f9ff)',
        py: 6,
        px: 2,
        minHeight: '80vh',
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        About KPSC Exams
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Card
          sx={{
            maxWidth: 1000,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            p: 3,
            gap: 2,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src="/kpsc_logo.png"
              alt="KPSC Logo"
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              Karnataka Public Service Commission
              <br />
              KPSC
            </Typography>
          </Box>

          {/* Description Section */}
          <CardContent sx={{ flex: 2 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Course Details
            </Typography>
            <Typography variant="body2" gutterBottom>
              A comprehensive online platform for all the competitive exams conducted by the Government of Karnataka.
            </Typography>

            <List dense>
              <ListItem>
                <ListItemText primary="KAS - Prelims, Mains, Interview Preparation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="PSI, ESI, Wireless, KSSIR, RFO" />
              </ListItem>
              <ListItem>
                <ListItemText primary="FDA, PDO, RDPR" />
              </ListItem>
              <ListItem>
                <ListItemText primary="SDA, VAO, DRFO, PC (for II PUC paper)" />
              </ListItem>
            </List>

            <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }}>
              Qualifying Papers:
            </Typography>
            <Typography variant="body2">
              The qualifying papers include subject-specific papers required to clear the exam.
            </Typography>

            <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }}>
              Compulsory:
            </Typography>
            <Typography variant="body2">
              This section includes the mandatory components of the exam that every candidate must complete.
            </Typography>

            <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }}>
              Interview Preparation:
            </Typography>
            <Typography variant="body2">
              Interview preparation includes tips, guidelines, and resources to excel in the final interview stage of the KPSC exam.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default KPSC;
