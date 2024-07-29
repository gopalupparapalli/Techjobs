import { Helmet } from "react-helmet";
import { useMediaQuery } from '@mui/material';
import ContactForm from "../ContactForms/CoursesContactForm";
import CyberSecurityCourseOverview from "./CyberSecurityCourseOverview";
import CyberSecurityVideo from "./CyberSecurityVideo";
import CyberSecurityCourseContent from "./CyberSecurityCourseContent";
import CyberSecurityProgramForYou from "./CyberSecurityProgramForYou";
import CyberSecuritySampleCerticate from "./CyberSecuritySampleCertificate";
import Feedback from "../ReUsableComponent/Testimonials";
import CyberSecurityCourseFee from "./CyberSecurityCourseFee";
import SkillsList from "../ReUsableComponent/Skills";


const CyberSecurity = () => {
    const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MainFrames</title>
      </Helmet>
      {isMobile && <ContactForm />}
      <CyberSecurityCourseOverview/>
      <CyberSecurityVideo/>
      <CyberSecurityCourseContent/>
      <CyberSecurityProgramForYou/>
      <SkillsList/>
      <CyberSecuritySampleCerticate/>
      <Feedback/>
      <CyberSecurityCourseFee/>
    </div>
  );
};

export default CyberSecurity;
