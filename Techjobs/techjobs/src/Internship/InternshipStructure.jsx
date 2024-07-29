import React from "react";
import { Box, Typography,useMediaQuery,useTheme } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";

// Define common text styles
const textStyle = {
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 300,
  fontSize: "20px",
  wordSpacing: "0.1rem",
  textAlign: "left",
  padding: "15px",
  width: "100%",
  maxWidth: "600px",
  color: "#FFFFFF",
};

const InternshipStructure = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "#171421",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "'Jost', sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            position: "relative",
            color: "#FFFFFF",
            "&::after": {
              content: "''",
              position: "absolute",
              left: "50%",
              bottom: "-10px",
              transform: "translateX(-50%)",
              width: isMobile?"100%":"200%",
              height: "5px",
              backgroundColor: "#008000",
              borderRadius: "50%", // Creates the curved effect
            },
          }}
        >
          Internship Structure
        </Typography>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          textAlign: "center",
          backgroundClip: "red",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : { xs: "column", md: "row" }, // Column on small screens, row on medium and larger
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: isMobile ? "20px" : { xs: "20px", md: "0" }, // Spacing for small screens
            }}
          >
            <img
              src="/Images/Internship Images/internshipStructure.jpg"
              alt="Internship"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "20px",
            }}
          >
            {[
              "Real time training with internship certification.",
              "200 hours of both ONLINE & OFFLINE training.",
              "Training with real time industry experts.",
              "End to end mini projects and AI mock interviews.",
              "Great IT infrastructure.",
              "Soft skills sessions.",
              "Live projects with real time corporate environment.",
              "Regular monitoring and follow up with the students.",
            ].map((text, index) => (
              <Typography key={index} sx={textStyle}>
                <ForwardIcon sx={{ verticalAlign: "middle", marginRight: "8px" }} />
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InternshipStructure;
