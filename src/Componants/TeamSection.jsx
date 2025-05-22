import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

const teamMembers = [
  {
    id: 1,
    name: "Mr. Keshavamurthy",
    subject: "GK, Indian Polity, History & Geography, Essays",
    image: "https://elearnkpsc.com/assets/keshavamurthy-removebg-preview-DRPLZg5B.png"
  },
  {
    id: 2,
    name: "Mr. Kattimani Khan",
    subject: "English Language",
    image: "https://elearnkpsc.com/assets/kattimani_khan-removebg-preview-CRlr4Hzh.png"
  },
  {
    id: 3,
    name: "Mr. Vishwanath Biradar",
    subject: "Science, Physics & Chemistry",
    image: "https://elearnkpsc.com/assets/vishwanath-removebg-preview-2-BQdyk4R0.png"
  },
  {
    id: 4,
    name: "Mr. Ningappa",
    subject: "Mental Ability",
    image: "https://elearnkpsc.com/assets/ningappa-removebg-preview-ddUTsPsq.png"
  },
  {
    id: 5,
    name: "Mr. Anand GK",
    subject: "GK & Current Affairs",
    image: "https://elearnkpsc.com/assets/anan_gk-removebg-preview-D7O5RnMi.png"
  },
  {
    id: 6,
    name: "Mr. Raghavendra Garani",
    subject: "Economics",
    image: "https://elearnkpsc.com/assets/ragavendra-removebg-preview-DQ6SiMgk.png"
  },
  {
    id: 7,
    name: "Mr. Gurudath",
    subject: "Tech Support, QA & Marketing",
    image: "https://elearnkpsc.com/assets/Gurudath_R_-removebg-preview-Ct80Jf1a.png"
  },
  {
    id: 8,
    name: "Mr. Ramesh Patil",
    subject: "Tech Support & Marketing",
    image: "https://elearnkpsc.com/assets/rameshpatil-removebg-preview-Dk0BB80E.png"
  },
];

function SelectActionCard() {
  const [selectedId, setSelectedId] = React.useState(teamMembers[0].id);

  return (
    <>


      {/* Cards container with full width background color */}
      <Box
        sx={{
          backgroundImage: 'url(https://elearnkpsc.com/assets/blue-abstract-gradient-wave-wallpaper-BrSG20UI.jpg)',
          backgroundColor: '#f0f4f8', // Light subtle background color behind cards
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 4, md: 6 },  // Updated responsive horizontal padding
        }}
      >
        {/* Testimonials Title */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Testimonials from Malnad Academy Students
          </Typography>
        </Box>
        {/* Curve underline image */}
        <Box textAlign="center" mb={6}>
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
        <Box
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {teamMembers.map((member) => {
            const isActive = selectedId === member.id;
            return (
              <Card
                key={member.id}
                sx={{
                  borderRadius: 3,
                  border: isActive ? '2px solid #1976d2' : '2px solid transparent',
                  transition: 'transform 0.2s, border 0.2s',
                  boxShadow: isActive ? 6 : 2,
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <CardActionArea
                  onClick={() => setSelectedId(member.id)}
                  aria-pressed={isActive}
                  data-active={isActive ? '' : undefined}
                  sx={{
                    height: '100%',
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
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
                      image={member.image}
                      alt={member.name}
                      sx={{
                        maxHeight: 160,
                        width: 'auto',
                        objectFit: 'contain',
                      }}
                      loading="lazy"
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold" align="center">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {member.subject}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>
      </Box>

      {/* Selected Member Details */}
      <Box mt={6} textAlign="center">
        <Typography variant="h6" gutterBottom>
          Selected Member: {teamMembers.find((m) => m.id === selectedId)?.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {teamMembers.find((m) => m.id === selectedId)?.subject}
        </Typography>
      </Box>
    </>
  );
}

export default SelectActionCard;
