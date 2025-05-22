import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid, Card } from '@mui/material';

export default function CombinedComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: 'url(/Images/abstract-luxury-gradient-Cvls6n1d.jpg)',
        backgroundColor:'rgb(249, 250, 251)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        py: { xs: 6, md: 10 },
        px: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About KPSC & Other Competitive Exams
        </Typography>
        <Box
          component="img"
          src="https://elearnkpsc.com/assets/Screenshot__133_-transformed-removebg-preview-kkDnR62L.png"
          alt="curve underline"
          sx={{
            width: 200,
            height: 'auto',
            mx: 'auto',
            mt: -1,
          }}
        />
      </Box>
      <Card
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: 3,
          p: { xs: 1, md: 5 },
          backgroundColor: '#ffffff',
          boxShadow: 3,
          textAlign: 'left',
        }}
      >
        <Grid container spacing={4} alignItems="center" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Grid item sx={{ flexShrink: 0, width: 280 }}>
            <Box
              component="img"
              src="https://elearnkpsc.com/assets/kpsc-removebg-preview-aASth_Ln.png"
              alt="KPSC Logo"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                mx: 'auto',
              }}
            />
          </Grid>

          <Grid item xs>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Comprehensive Course Overview
            </Typography>
            <Typography variant="body1" paragraph>
              The Karnataka Public Service Commission (KPSC) exam is a competitive examination conducted by the Government of Karnataka to recruit candidates for various administrative positions within the state.
            </Typography>
            <Typography variant="body1" paragraph>
              The exam is structured into three main stages: the Preliminary exam, the Main exam, and the Interview. The Preliminary exam consists of objective-type questions that assess the candidates’ general knowledge and aptitude.
            </Typography>
            <Typography variant="body1" paragraph>
              Successful candidates then advance to the Main exam, which includes descriptive papers covering a wide range of subjects such as General Studies, Optional Subjects, and Essay Writing.
            </Typography>
            <Typography variant="body1">
              The final stage, the Interview, evaluates the candidates’ personality, communication skills, and overall suitability for public service roles. The KPSC exam is highly competitive and requires thorough preparation, dedication, and a deep understanding of the syllabus to succeed.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
