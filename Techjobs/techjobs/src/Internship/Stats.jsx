import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const InternshipStats = () => {

  const isMobile = useMediaQuery("(max-width:600px)");
    
  const boxStyles = {
    height: "auto",
    width: "90%",
    margin: "auto auto",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "5px",
    backgroundColor: "#683fbe",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    padding: "20px",
  };

  const itemStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "1rem",
    marginBottom: isMobile ? "20px" : "0",
  };

  const textStyles = {
    fontSize: isMobile ? "2rem" : "4rem", // Font size for text
  };

  const subTextStyles = {
    fontSize: isMobile ? "1rem" : "1.3125rem", // Font size for subText
  };

  const unitStyles = {
    fontSize: "1rem", // Font size for unit text
    paddingLeft: "-5px", // Example padding-left
    paddingTop: "2px", // Example padding-top
  };

  const boxesData = [
    { text: "90", subText: "Duration", unit: "Days" },
    { text: "60+", subText: "Hiring Partners" },
    { text: "25+", subText: "Batches" },
    { text: "25+", subText: "Industry Experts" },
  ];

  return (
    <Box sx={{width: "100%",bgcolor:"#171421", padding:"30px"}}>
    <Box sx={boxStyles}>
      {boxesData.map((data, index) => (
        <Box key={index} sx={{ ...itemStyles, backgroundColor: data.color }}>
          <Typography variant="h5" component="span" sx={textStyles}>
            {data.text}
            {data.unit && <sub style={unitStyles}>{data.unit}</sub>}
          </Typography>
          <Typography variant="body1" component="span" sx={subTextStyles}>
            {data.subText}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default InternshipStats;
