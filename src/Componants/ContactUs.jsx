import React from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://elearnkpsc.com/assets/1019996_OJO4YQ0-De0i9ovb.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 8 },
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{ color: "#111" }}
      >
        Contact Us
      </Typography>
      <Box
        component="img"
        src="https://elearnkpsc.com/assets/Screenshot__133_-transformed-removebg-preview-kkDnR62L.png"
        alt="curve underline"
        sx={{
          width: 200,
          height: "auto",
          display: "block",
          mx: "auto",
          mb: 6,
        }}
      />

      {/* Contact Section */}
      <Box maxWidth="1300px" mx="auto">
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {/* Google Map */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                height: { xs: 350, sm: 400, md: 500 },
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.228719503678!2d77.56692131482277!3d12.972442190857295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae164a4c432a9f%3A0xf3dfdc7e0cc76cc4!2sWAKINSOFTWARES%20BHARAT%20PVT!5e0!3m2!1sen!2sin!4v1682955073945!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                height: { xs: 350, sm: 350, md: 450 },
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
              >
                Send Us a Message
              </Typography>

              <Stack spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Your Name"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Your Email"
                    variant="outlined"
                  />
                </Stack>

                <TextField
                  fullWidth
                  size="small"
                  label="Subject"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  size="small"
                  label="Message"
                  multiline
                  rows={3}
                  variant="outlined"
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#007bff",
                    textTransform: "none",
                    fontWeight: "bold",
                    py: 1.2,
                    ":hover": {
                      backgroundColor: "#005fcc",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
