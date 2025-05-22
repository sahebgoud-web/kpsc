import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Marquee animation keyframes
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeBanner = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        animation: `30s linear infinite`,
        position: "relative",
        color: "white",
        backgroundColor: "rgb(255, 127, 80)", // coral
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: `${scroll} 20s linear infinite`,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "block",
            pr: 10,
            px: 2,
            py: 1, // keep some padding for readability
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            20+ Years of Coaching Experience.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "inline-block",
            px: 2,
            py: 1,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            1000s of our students are working in the government of Karnataka.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MarqueeBanner;
