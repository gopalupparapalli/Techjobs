import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

// Create a styled component for the curved underline
const CurvedUnderline = styled('span')({
  position: 'relative',
  display: 'inline-block',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '5px', // Adjust height for the thickness of the underline
    backgroundColor: '#09aff4', // Color of the underline
    borderRadius: '10px 10px 0 0', // Create the curved effect
    bottom: '-5px', // Adjust based on the font size and spacing
    left: '0',
  },
});

const SampleCertificate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: 'auto', 
        width: '100%',   
        backgroundColor: '#171421', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: isMobile ? '20px' : '40px',
        marginTop: isMobile ? '0' : '-4%',
      }}  
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: isMobile ? '2rem' : '3rem',
          lineHeight: '140%',
          color: '#FFFFFF',
          marginBottom: '20px',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <CurvedUnderline>Sample Certificate</CurvedUnderline>
      </Typography>
      <img 
        src="/Images/Internship Images/Internship.jpeg" 
        alt="Sample Certificate" 
        style={{
          maxWidth: isMobile ? '90%' : '65%',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
};

export default SampleCertificate;
