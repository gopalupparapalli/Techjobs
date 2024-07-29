import React from "react";
import { useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForms/CoursesContactForm";
import PowerBICourseOverview from "./PowerBICourseOverview";
import PowerBIVideo from "./PowerBIVideo";
import PowerBICourseContent from "./PowerBICourseContent";
import PythonProgramForYou from "../Python/PythonProgramForYou";
import SkillsList from "../ReUsableComponent/Skills";
import SampleCertificate from "../ReUsableComponent/SampleCertificate";
import Feedback from "../ReUsableComponent/Testimonials";
import PowerBICourseFee from "./PowerBICourseFee";


const PowerBI = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PowerBI</title>
      </Helmet>
      {isMobile && <ContactForm />}
      <PowerBICourseOverview/>
      <PowerBIVideo/>
      <PowerBICourseContent/>
      <PythonProgramForYou/>
      <SkillsList/>
      <SampleCertificate/>
      <Feedback/>
      <PowerBICourseFee/>
      
    </div>
  );
};

export default PowerBI;
