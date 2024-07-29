import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const internshipDetails = [
  {
    title: "Python and AI/ML",
    description:
      "Python internships help beginners use their coding skills in real jobs, like web development or data analysis. AI and Machine Learning internships let interns work on smart technology projects in fields like health and finance. Both internships teach teamwork and problem-solving, getting interns ready for their future careers.",
    buttonText: "Explore Projects",
  },
  {
    title: "Mastering AWS & DevOPS",
    description:
      "DevOps internships with a focus on AWS expose interns to powerful tools like Docker, Kubernetes, VMs, and Jenkins. Interns learn how to build and manage scalable and efficient cloud infrastructure, handle automated deployments, and maintain high availability with load balancers. This hands-on experience prepares them for advanced careers in cloud architecture and system operations.",
    buttonText: "Explore Projects",
  },
  {
    title: "Cyber Security / Security Testing",
    description:
      "Cyber Security internships equip interns with skills in using standard industry tools to protect networks and data from cyber threats. Interns learn to perform vulnerability assessments, implement security protocols, and respond to incidents using tools like firewalls, antivirus software, and intrusion detection systems.",
    buttonText: "Explore Projects",
  },
  {
    title: "Mainframes - Application Developer",
    description:
      "Explore the world of Mainframes as an Application Developer. Develop robust and scalable applications for enterprise systems, mastering essential programming languages and tools. Join us to dive into the backbone of large-scale computing infrastructure.",
    buttonText: "Explore Projects",
  },
  {
    title: "Web Development Internship",
    description:
      "Ignite your web development journey with a hands-on internship!  Learn from industry professionals, contribute to real projects, and master in-demand skills like HTML, CSS, JavaScript, and popular frameworks. Explore front-end, back-end, or full-stack development and collaborate in a dynamic environment. This is your chance to launch your web development dream career",
    buttonText: "Explore Projects",
  },
  {
    title: "Machine Learning Internship",
    description:
      "Embark on a transformative journey with our Machine Learning Internship. Gain hands-on experience in cutting-edge ML algorithms and techniques, guided by seasoned professionals. Elevate your skills and contribute to real-world projects in a dynamic learning environment.",
    buttonText: "Explore Projects",
  },
];

const InternshipOffered = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "#171421",
        padding: isMobile ? "auto" : "10px 100px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: "0.75rem",
          fontSize: isMobile ? "2rem" : "3rem",
          textAlign : isMobile ? "center" : "left",
          fontWeight: 500,
          textTransform: "capitalize",
          fontFamily: '"Jost", "sans-serif"',
          color: "#FFFFFF",
          animation: `${fadeUp} 2s ease-out`,
          width: isMobile ? "100%" : "auto",
        }}
      >
        Internships Offered
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {internshipDetails.map((internship, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: isMobile ? "320px" : "350px",
                width: isMobile ? "380px" : "400px",
                margin: "1%",
                backgroundColor: "#1a1a2e",
                color: "#FFFFFF",
                padding: isMobile ? "0.50rem" : "2rem",
                borderRadius: "0.5rem",
                border: "1px solid rgb(9 175 244 / 35%)",
                position: "relative",
                zIndex: 0,
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  backgroundColor: "#09aff4",
                  backgroundPosition: "left center",
                  "&::before": {
                    width: "100%",
                  },
                  "& .MuiButton-root": {
                    color: "#FFFFFF",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "0%",
                  height: "100%",
                  backgroundColor: "#09aff4",
                  zIndex: -1,
                  transition: "width 0.4s ease-in-out",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Jost", "sans-serif"',
                    textAlign: "center",
                    marginTop: isMobile ? "-2%" : "-20px",
                  }}
                >
                  {internship.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "20px",
                    fontFamily: '"Jost", "sans-serif"',
                    fontSize: isMobile ? "15px" : "15px",
                    lineHeight: 1.5,
                  }}
                >
                  {internship.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    fontFamily: '"Jost", "sans-serif"',
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "color 0.4s ease-in-out",
                  }}
                >
                  {internship.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InternshipOffered;
