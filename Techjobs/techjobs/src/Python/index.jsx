import React from "react";
import { useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForms/CoursesContactForm";
import PythonCourseOverview from "./PythonCourseOverview";
import PythonVideo from "./PythonVideo";
import PythonCourseContent from "./PythonCourseContent";
import PythonProgramForYou from "./PythonProgramForYou";
import SampleCertificate from "../ReUsableComponent/SampleCertificate";
import Feedback from "../ReUsableComponent/Testimonials";
import PythonCourseFee from "./PythonCourseFee";
import SkillsList from "../ReUsableComponent/Skills";

const PythonCourse = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Python</title>
      </Helmet>
      {isMobile && <ContactForm />}
      <PythonCourseOverview />
      <PythonVideo />
      <PythonCourseContent />
      <PythonProgramForYou />
      <SkillsList/>
      <SampleCertificate />
      <Feedback />
      <PythonCourseFee />
    </div>
  );
};

export default PythonCourse;
