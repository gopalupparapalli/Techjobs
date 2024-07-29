import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionAnswer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Container styles
  const containerStyles = () => ({
    height: "auto",
    width: "100%",
    backgroundColor: isMobile ? "#f5f5f5" : "#fff", // Adjust background color if needed
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    padding: isMobile ? "10px" : "20px",
  });

  // Header part styles
  const headPart = {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
  };

  // FAQ part styles
  const faqPart = {
    height: "auto",
    overflowY: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Typography styles
  const headerStyles = {
    fontFamily: "Plus Jakarta Sans",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: isMobile ? "24px" : "2.75rem",
    color: "#171421",
    lineHeight: 1.2,
    boxSizing: "border-box",
    textAlign: "center",
  };

  // Accordion styles
  const accordionStyles = (isMobile) => ({
    width: isMobile ? "100%" : "60%",
    marginBottom: "15px",
    borderRadius: "10px",
  });

  // Question styles
  const QueStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Plus Jakarta Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: "140%",
  };

  // Answer styles
  const ansStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Plus Jakarta Sans",
    fontStyle: "normal",
    fontWeight: 200,
    fontSize: "1.25rem",
    lineHeight: "140%",
  };

  return (
    <Box sx={containerStyles(isMobile)}>
      <Box sx={headPart}>
        <Typography sx={headerStyles}>Frequently Asked Questions</Typography>
      </Box>
      <Box sx={faqPart}>
        {[
          {
            question: "Who is eligible to apply for the internship program ?",
            answer:
              "Any B.Tech or degree student, regardless of their year of study,can apply for the internship program",
          },
          {
            question: "What will I learn during the internship?",
            answer:
              "Our internship programs cover a wide range of cutting-edge technologies including Cyber Security, Python with AI & ML, AWS &DevOps, MainFrames, and Full Stack Development. You'll receive hands-on training and practical experience in your chosen track,preparing you for the demands of the IT industry.",
          },
          {
            question:
              "Are there any prerequisites for specific internship tracks ? ",
            answer:
              " While some tracks may require prior knowledge or experience in related technologies, we provide comprehensive training to ensure all interns can successfully participate in the program.Enthusiasm, dedication, and a willingness to learn are essential qualities we value.",
          },
          {
            question:
              "Will I receive mentorship and support during the internship ?",
            answer:
              "Yes, each intern is assigned a dedicated mentor who provides guidance, support, and feedback throughout the program. Our experienced mentors are committed to helping interns succeed and maximize their learning experience.",
          },
          {
            question:
              "What is the duration of the internship?",
            answer:
            "The internship duration is 45 days."
          },
          {
            question:
              "Is there any stipend provided during the internship ?",
            answer:
            " No, stipend is not provided during the internship duration."
          },
          {
            question:
              "Will I receive a certificate upon completion of the internship ?",
            answer:
            "Yes, upon successful completion of the internship program, you will receive an internship completion certificate. However,maintaining 90% attendance and completing 90% of the internship course along with assignments are required conditions for receiving the certificate."
          },
        ].map((faq, index) => (
          <Accordion key={index} sx={accordionStyles(isMobile)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography sx={QueStyle}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={ansStyle}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Box
          sx={{
            height: "auto",
            width: isMobile ? "100%" : "70%",
            margin: "auto",
            marginBottom: "15px",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "#2A2049",
            display: "flex",
            flexDirection: isMobile ? "row" : "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: isMobile ? "0.9rem" : "1.5rem",
              lineHeight: "140%",
              color: "#FFFFFF",
              marginBottom: isMobile ? "10px" : 0, // Add margin for mobile
            }}
          >
            If you want to know the projects?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              borderRadius: ".375rem",
              border: "1px solid #fff",
              color: "#fff",
              textAlign: "center",
              fontSize: isMobile ? "14px" : "1rem",
              fontWeight: 600,
              lineHeight: "140%",
              cursor: "pointer",
            }}
          >
            <Button
              sx={{
                color: "inherit",
                fontSize: "10px",
                fontWeight: "inherit",
                lineHeight: "inherit",
                textTransform: "none",
                padding: 0, // Remove default padding
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionAnswer;
