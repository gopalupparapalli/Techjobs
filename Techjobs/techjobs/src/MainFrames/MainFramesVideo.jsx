import React from "react";
import VideoComponent from "../ReUsableComponent/VideoComponent";

const MainFramesVideo = () => {
  const testingData = {
    videoUrl: "https://youtu.be/CgkrM7Q4taw",
    courseDuration: "3 MONTHS",
    courseTitle: "Become a MainFrames Developer",
    courseDescription: "Our intensive program will transform you into a high-demand professional, mastering the technologies that power the world’s largest enterprises. You'll gain expertise in COBOL programming to build and maintain high-performance applications, learn Job Control Language (JCL) to automate batch jobs and workflows, and master advanced DB2 techniques for optimizing complex databases. You'll also become proficient in managing datasets efficiently with Virtual Storage Access Method (VSAM), and develop real-time applications with Customer Information Control System (CICS). Through project-based learning, you'll apply these skills in real-world scenarios, gaining hands-on experience from development to deployment. Additionally, you'll delve into advanced techniques for performance tuning and system optimization, ensuring you stand out with industry-relevant skills.",
    expertsCount: 5,
    sessionsCount: 20,
    courseImage: "/Images/MainFrame/MainFrames.jpg"
  };

  return <VideoComponent {...testingData} />;
};

export default MainFramesVideo;
