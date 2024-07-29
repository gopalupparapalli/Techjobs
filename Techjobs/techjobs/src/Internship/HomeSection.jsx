import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import InternshipContactForm from "../ContactForms/InternshipContactForm";
import ContactForm from "../ContactForms/CoursesContactForm";

const HomeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted");
    handleClose();
  };

  const mainbox = {
    height: isMobile ? "100%" : "6in",
    backgroundColor: "#171421",
    padding: isMobile ? "18% 1%" : "5%",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  };

  const leftPart = {
    flex: 1,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: isMobile ? 0 : "1%",
  };

  const rightPart = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: isMobile ? "0.25rem" : "4rem",
  };

  const buttonStyle = {
    marginTop: "1rem",
    backgroundColor: "#0070FF",
    color: "#FFFFFF",
    width: "150px",
    height: "50px",
    marginLeft: isMobile ? "30%" : "",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#00B9E8",
      color: "#000000",
    },
  };

  const headingStyle = {
    fontFamily: "Plus Jakarta Sans",
    fontSize: isMobile ? "30px" : "50px",
    fontWeight: 700,
    color: "#FFFFFF",
    letterSpacing: "0px",
    lineHeight: "1.2",
    paddingBottom: isMobile ? "30px" : "20px",
    paddingLeft: isMobile ? "30px" : "0",
    opacity: 1,
    textAlign: isMobile ? "center" : "left",
    margin: isMobile ? "auto" : "inherit",
    width: "100%",
  };

  const subHeadingStyle = {
    fontFamily: "Plus Jakarta Sans",
    fontSize: isMobile ? "18px" : "22px",
    fontWeight: 400,
    color: "#EFDFBB",
    letterSpacing: "0px",
    lineHeight: "1.5",
    paddingBottom: "20px",
    opacity: 1,
    textAlign: isMobile ? "center" : "left",
    paddingLeft: isMobile ? "10px" : "",
  };

  return (
    <Box sx={mainbox}>
      <Box sx={leftPart}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typography sx={headingStyle}>
            Unlock Career Pathways
            {isMobile ? <br /> : " "}
            <span style={{ textAlign: "center" }}>with</span>
            {isMobile ? <br /> : " "}
            <span style={{ color: "#E25822" }}>TechJob's</span>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Typography sx={subHeadingStyle}>
            Join our cutting-edge internship projects designed for college{" "}
            students to build real-world skills.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <Button sx={buttonStyle} onClick={handleOpen}>
            Apply Now
          </Button>
        </motion.div>
      </Box>
      <Box sx={rightPart}>
        <img
          src="/Images/Internship Images/Internship.jpg"
          alt="Internship Img"
          style={{
            height: "100%", // Adjust height as needed
            width: "100%", // Adjust width as needed
            objectFit: "cover", // Or use "contain" or "fill"
            borderRadius: "15px", // Optional: add border radius for rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: add box shadow for a better look
          }}
        />
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "80%" : "45%",
            bgcolor: "white",
            boxShadow: 24,
            p: 1,
            borderRadius: ".75rem",
          }}
        >
          <ContactForm onSubmit={handleFormSubmit} />
        </Box>
      </Modal>
    </Box>
  );
};

export default HomeSection;
