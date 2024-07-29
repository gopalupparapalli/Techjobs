import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const InternshipDetails = () => {

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        height: "auto", // Set the height in inches
        width: "100%", // Full width
        backgroundColor: "#171421", // Set the background color
        display: "flex",
        flexDirection:"column",
        marginTop: "-10px",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: "100%",
          display: "flex", // Added display flex
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          marginTop: "0.60in",
          marginBottom: isMobile ? "50px" : "0.20in",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: isMobile? "19px" : "25px",
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: "''",
              position: "absolute",
              left: isMobile ? "0%" : "-46%",
              bottom: "-10px", // Adjusted to match the provided CSS
              width: isMobile ? "100%" : "200%",
              height: "10px",
              backgroundColor: "#008000",
              borderRadius: "50%", // Creates the curved effect
            },
          }}
        >
          Why Choose TechJob's Internship
        </Typography>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection:  "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "auto", // Adjust the height as needed
            width: isMobile ? "100%" : "75%",
            margin: "0 auto", // Center horizontally
            display: "flex",
            justifyContent: "space-between", // Space between the left and right parts
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {/* Left part */}
          <Box
            sx={{
              width: isMobile ? "100%" : "50%", // Approximately half width
              display: "flex",
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              flexDirection : isMobile ? "column" : "row",
            }}
          >
            <Box
              sx={{
                width: "30%",
                display: "flex",
              }}
            >
              <img
                src="/Images/Internship Images/Logo_1.jpg"
                alt="Logo Img"
                style={{
                  width:  "100%", // Adjust width as needed
                  height: "100%", // Maintain aspect ratio
                  objectFit: "contain", // Object fit style
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: isMobile ? "100%" : "70%",
                flexDirection: "column",
                marginLeft: isMobile ? "0" : "-35px",
                justifyContent: isMobile ? "center" : "left",
                alignItems: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  display: "flex",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", // Use correct font family
                  fontWeight: "bold", // Plus Jakarta Sans Medium weight
                  fontSize: isMobile ? "22px" : "18px", // Adjusted font size\
                  paddingBottom: "5px",
                }}
              >
                Real-World Experience
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "17px",
                }}
              >
                Engage in actual projects to boost skills.
              </Typography>
            </Box>
          </Box>
          {/* Right part */}
          <Box
            sx={{
              width: isMobile ? "100%" : "50%", // Approximately half width
              display: "flex",
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              flexDirection : isMobile ? "column" : "row",
            }}
          >
            <Box
              sx={{
                width: "30%",
                display: "flex",
              }}
            >
              <img
                src="/Images/Internship Images/Logo_2.jpg"
                alt="Logo Img"
                style={{
                  width: "100%", // Adjust width as needed
                  height: "100%", // Maintain aspect ratio
                  objectFit: "contain", // Object fit style
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: isMobile ? "100%" : "70%",
                flexDirection: "column",
                marginLeft: isMobile ? "0" : "-35px",
                justifyContent: isMobile ? "center" : "left",
                alignItems: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  display: "flex",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", // Use correct font family
                  fontWeight: "bold", // Plus Jakarta Sans Medium weight
                  fontSize: isMobile ? "22px" : "18px", // Adjusted font size\
                  paddingBottom: "5px",
                }}
              >
                Industry Mentors
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "17px",
                }}
              >
                Learn from experienced professionals mentors.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: "auto", // Adjust the height as needed
            width: isMobile ? "100%" :"75%",
            margin: "0 auto", // Center horizontally
            display: "flex",
            flexDirection: isMobile ? "column":"row", // Arrange children in a row
            justifyContent: "space-between", // Space between the left and right parts
          }}
        >
          {/* Left part */}
          <Box
            sx={{
              width: isMobile ? "100%" : "50%", // Approximately half width
              display: "flex",
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              flexDirection : isMobile ? "column" : "row",
            }}
          >
            <Box
              sx={{
                width: "30%",
                display: "flex",
              }}
            >
              <img
                src="/Images/Internship Images/Logo_3.jpg"
                alt="Logo Img"
                style={{
                  width: "100%", // Adjust width as needed
                  height: "100%", // Maintain aspect ratio
                  objectFit: "contain", // Object fit style
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: isMobile ? "100%" : "70%",
                flexDirection: "column",
                marginLeft: isMobile ? "0" : "-35px",
                justifyContent: isMobile ? "center" : "left",
                alignItems: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  display: "flex",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", // Use correct font family
                  fontWeight: "bold", // Plus Jakarta Sans Medium weight
                  fontSize: isMobile ? "22px" : "18px", // Adjusted font size\
                  paddingBottom: "5px",
                }}
              >
                Diverse Technologies
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "17px",
                }}
              >
                Work with various cutting-edge technologies.
              </Typography>
            </Box>
          </Box>
          {/* Right part */}
          <Box
            sx={{
              width: isMobile ? "100%" : "50%", // Approximately half width
              display: "flex",
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              flexDirection : isMobile ? "column" : "row",
            }}
          >
            <Box
              sx={{
                width: "30%",
                display: "flex",
              }}
            >
              <img
                src="/Images/Internship Images/Logo_4.jpg"
                alt="Logo Img"
                style={{
                  width: "100%", // Adjust width as needed
                  height: "100%", // Maintain aspect ratio
                  objectFit: "contain", // Object fit style
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: isMobile ? "100%" : "70%",
                flexDirection: "column",
                marginLeft: isMobile ? "0" : "-35px",
                justifyContent: isMobile ? "center" : "left",
                alignItems: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  display: "flex",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", // Use correct font family
                  fontWeight: "bold", // Plus Jakarta Sans Medium weight
                  fontSize: isMobile ? "22px" : "18px", // Adjusted font size\
                  paddingBottom: "5px",
                }}
              >
                Career Growth
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "17px",
                }}
              >
                Projects designed for career advancements.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InternshipDetails;
