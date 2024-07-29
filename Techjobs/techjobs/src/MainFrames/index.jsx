import React from "react";
import { useMediaQuery } from '@mui/material';

import { Helmet } from 'react-helmet';

import MainFramesCourseOverview from "./MainFramesCourseOverview";
import MainFramesVideo from "./MainFramesVideo";
import MainFramesCourseContent from "./MainFramesCourseContent";
import MainFramesProgramForYou from "./MainFramesCourseForYou";
import MainFramesSampleCerticate from "./MainFramesSampleCertificate";
import MainFramesCourseFee from "./MainFramesCourseFee";
import ProfessionalsReview from "./ProfessionalsReview";
import Feedback from "../ReUsableComponent/Testimonials";
import ContactForm from "../ContactForms/CoursesContactForm";
import SkillsList from "../ReUsableComponent/Skills";

const MainFramesPage = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title>MainFrames</title>
      </Helmet>
      {isMobile && <ContactForm/>}

      <MainFramesCourseOverview />
      <MainFramesVideo />
      <MainFramesCourseContent />
      <MainFramesProgramForYou />
      <SkillsList/>
      <MainFramesSampleCerticate />
      <Feedback />
      <ProfessionalsReview />

      <MainFramesCourseFee />
    </div>
  );
};

export default MainFramesPage;
