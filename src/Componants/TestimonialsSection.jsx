import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const testimonials = [
  {
    name: 'Sunitha MN',
    title: 'F D A, Taluk Health Office, JLB Road Mysore',
    image: "https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=%2Fopt%2Ftomcat%2Fworkspace%2Fupload_files%2Fkpscsuccess%2F99%2FSunitha%20MN%2C%20F%20D%20A%2C%20Taluk%20Health%20Office%2C%20JLB%20Road%20Mysore.jpeg",
  },
  {
    name: 'Raghu. KR',
    title: 'Police inspector, Devaraja police station, Mysore city',
    image: "https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=%2Fopt%2Ftomcat%2Fworkspace%2Fupload_files%2Fkpscsuccess%2F98%2FRaghu.%20KR%2C%20Police%20inspector%2C%20Devaraja%20police%20station%2C%20Mysore%20city.jpeg",
  },
  {
    name: 'Prof Somashekarappa B K',
    title: 'HOD Kannada Dept, Soundarya Institute of Management and Science',
    image: "https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=%2Fopt%2Ftomcat%2Fworkspace%2Fupload_files%2Fkpscsuccess%2F97%2FProf%20Somashekarapaa%20B%20K%2C%20%20HOD%20Kannada%20Dept%2C%20%20Soundarya%20Institute%20of%20Management%20and%20Science.jpeg",
  },
  {
    name: 'NARASIMHA MURTHY B A',
    title: 'Accounts Superintendent, K.S.R.T.C, Chikkamalur Division, Chikkamagalur',
    image: "https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=%2Fopt%2Ftomcat%2Fworkspace%2Fupload_files%2Fkpscsuccess%2F96%2FNARASIMHA%20MURTHY%20B%20A%2C%20Accounts%20Superintendent%2C%20K.S.R.T.C%2C%20Chikkamalur%20Division%2C%20Chikkamagalur.jpeg",
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundImage: 'url("https://elearnkpsc.com/assets/hand-painted-watercolor-background-with-sky-clouds-shape-DybIM5fB.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Testimonials from Malnad Academy Students
      </Typography>
      <Box
        component="img"
        src="https://elearnkpsc.com/assets/Screenshot__133_-transformed-removebg-preview-kkDnR62L.png"
        alt="curve underline"
        sx={{
          width: 200,
          height: 'auto',
          display: 'block',
          mx: 'auto',
          mb: 6,
        }}
      />


      <Button
        variant="contained"
        color="warning"
        sx={{ my: 3, px: 3, fontWeight: 'bold', color: '#fff' }}
      >
        SUCCESS STORY
      </Button>

      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 300, margin: 'auto', borderRadius: 2 }}>
              <Box
                sx={{
                  height: 200,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      p: 2,
                      backgroundColor: '#fff',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={testimonial.image}
                  alt={testimonial.name}
                  sx={{ objectFit: 'contain' }}
                />
              </Box>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Button
          variant="contained"
          color="warning"
          sx={{ px: 4, borderRadius: '20px', fontSize: 12 }}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;


