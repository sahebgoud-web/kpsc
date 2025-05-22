import React from 'react';
import { Grid, Box, Typography, Card, CardContent, Avatar } from '@mui/material';

// Your feature data
const features = [
  {
    
    icon: "https://elearnkpsc.com/assets/online-mentoring-CUGDzrYl.gif",
    title: '1K+',
    subtitle: 'Coaching Videos',
    bgColor: '#3791b7',
  },
  {
    icon: 'https://elearnkpsc.com/assets/idea-iI_Cae7n.gif',
    title: 'Subject wise',
    subtitle: 'Topic-Wise Content',
    bgColor: '#fb8c42',
  },
  {
    icon: 'https://elearnkpsc.com/assets/assessment-h8oG9w33.gif',
    title: 'Weekly Test',
    subtitle: 'AI Based Assessment',
    bgColor: '#3791b7',
  },
  {
    icon: 'https://elearnkpsc.com/assets/support-BKSmAYCB.gif',
    title: '24X7',
    subtitle: 'Access to Content',
    bgColor: '#fb8c42',
  },
];

const FeatureGrid = () => {
  return (
    <Box sx={{ backgroundColor: '#fc6', py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                px: 2,
                py: 1.5,
                backgroundColor: item.bgColor,
                color: '#fff',
                boxShadow: 3,
              }}
            >
              <Avatar
                src={item.icon}
                alt={item.title}
                sx={{
                  width: 56,
                  height: 56,
                  backgroundColor: '#fff',
                  marginRight: 2,
                  padding: 1,
                }}
              />
              <CardContent sx={{ padding: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#fff', lineHeight: 1.2 }}>
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureGrid;


