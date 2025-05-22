import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid, Card } from '@mui/material';

export default function CombinedComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
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
        overflow: 'hidden',
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Malnad Academy
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
          p: { xs: 1, sm:4, md: 6 },
          backgroundColor: '#ffffff',
          boxShadow: 6,
          overflow: 'hidden',
          textAlign: 'left',
        }}
      >
        <Grid container spacing={4} alignItems="center" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Grid item sx={{ flexShrink: 0, width: 280 }}>
            <Box
              component="img"
              src="https://elearnkpsc.com/assets/Malnad%20Logo-modified-BtTFJwbQ.png"
              alt=""
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
              Empowering Success in Competitive Exams
            </Typography>
            <Typography variant="body2" paragraph>
              Located @ Hesaraghatta Road, Bengaluru, Karnataka, Malnad Academy is a prestigious training center dedicated to preparing individuals for competitive exams conducted by the Karnataka Public Service Commission (KPSC). With over 20 years of experience, the academy has built a stellar reputation for its comprehensive training programs, expert faculty, and exceptional success rates.
            </Typography>
            <Typography variant="body2" paragraph>
              The academy provides a rigorous curriculum that covers all aspects of the KPSC exams, including the prelims, mains, and interview processes. Our detailed syllabus encompasses a wide range of subjects, ensuring that students are well-prepared for every stage of the examination.
            </Typography>
            <Typography variant="body2">
              Thousands of students trained at Malnad Academy have successfully passed the KPSC exams and are now serving as esteemed officers in various capacities within the state government. The academy’s commitment to excellence, structured approach to exam preparation, and unwavering focus on student success have made it a trusted name in competitive exam preparation.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
