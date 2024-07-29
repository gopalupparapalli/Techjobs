import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProfessionalsReview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box sx={{ maxWidth: isMobile ? '100%' : '45%', margin: '0 auto', marginTop: '20px' }}>
            <Typography variant="h4" sx={{
                width: '100%',
                height: 'auto',
                padding: '15px',
                backgroundColor: '#171421',
                color: '#683fbe',
                borderRadius: '10px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                Mainframes in context of Industry Experts
            </Typography>
            <Slider {...settings}>
                <div>
                    <img src="/Images/MainFrame/Review_1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                    <img src="/Images/MainFrame/Review_2.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                    <img src="/Images/MainFrame/Review_3.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
                </div>
                {/* Add more images as needed */}
            </Slider>
        </Box>
    );
};

export default ProfessionalsReview;
