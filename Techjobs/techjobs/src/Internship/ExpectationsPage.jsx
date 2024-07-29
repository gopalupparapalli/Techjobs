import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Expectation = () => {
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
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: isMobile ? "1.95rem" : "2.5rem",
          fontFamily: "'Jost', 'sans-serif'",
          marginBottom: "2%",
          fontWeight: 400, // Explicitly set weight to 400
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        What You Can Expect From Our Side
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: isMobile ? "center" : "space-around",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: "1%",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: isMobile ? "90%" : "45%",
            padding: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            fontFamily: "'Jost', 'sans-serif'",
            marginBottom: isMobile ? "1.5rem" : "0",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              lineHeight: "1.5",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "2.5rem" : "3rem",
                fontWeight: 700,
                lineHeight: "0.8",
                color: "#09aff4",
                paddingRight: "10px",
              }}
            >
              1.
            </span>{" "}
            Letter of Recommendation (LOR)
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? "0.875rem" : "1rem",
              lineHeight: "1.2",
              marginTop: "0.5rem",
              fontWeight: 300,
              paddingLeft: "57px",
              color: "#FFFFFF",
            }}
          >
            This LOR can be a valuable asset for the employee when seeking
            future employment opportunities or furthering their career in the
            industry.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "auto",
            width: isMobile ? "90%" : "45%",
            padding: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            fontFamily: "'Jost', 'sans-serif'",
            marginBottom: isMobile ? "1.5rem" : "0",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              lineHeight: "1.5",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "2.5rem" : "3rem",
                fontWeight: 700,
                lineHeight: "0.8",
                color: "#09aff4",
                paddingRight: "10px",
              }}
            >
              2.
            </span>{" "}
            Enhanced skill development
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? "0.875rem" : "1rem",
              lineHeight: "1.2",
              marginTop: "0.5rem",
              fontWeight: 300,
              paddingLeft: "58px",
              color: "#FFFFFF",
            }}
          >
            Interns gain hands-on experience in real-world projects, refining their technical abilities and professional competencies.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: isMobile ? "center" : "space-around",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: "1%",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: isMobile ? "90%" : "45%",
            padding: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            fontFamily: "'Jost', 'sans-serif'",
            marginBottom: isMobile ? "1.5rem" : "0",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              lineHeight: "1.5",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "2.5rem" : "3rem",
                fontWeight: 700,
                lineHeight: "0.8",
                color: "#09aff4",
                paddingRight: "10px",
              }}
            >
              3.
            </span>{" "}
            Networking opportunities
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? "0.875rem" : "1rem",
              lineHeight: "1.2",
              marginTop: "0.5rem",
              fontWeight: 300,
              paddingLeft: "57px",
              color: "#FFFFFF",
            }}
          >
           Interns have the chance to build professional relationships with colleagues and mentors, expanding their network within the industry.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "auto",
            width: isMobile ? "90%" : "45%",
            padding: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            fontFamily: "'Jost', 'sans-serif'",
            marginBottom: isMobile ? "1.5rem" : "0",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              lineHeight: "1.5",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "2.5rem" : "3rem",
                fontWeight: 700,
                lineHeight: "0.8",
                color: "#09aff4",
                paddingRight: "10px",
              }}
            >
              4.
            </span>{" "}
            Exposure to company culture
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? "0.875rem" : "1rem",
              lineHeight: "1.2",
              marginTop: "0.5rem",
              fontWeight: 300,
              paddingLeft: "60px",
              color: "#FFFFFF",
            }}
          >
           Our Internship provide insight into the company's values, work environment, and expectations, helping interns make informed decisions about their future career paths.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Expectation;
