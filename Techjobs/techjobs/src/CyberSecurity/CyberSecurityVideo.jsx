import React from "react";
import VideoComponent from "../ReUsableComponent/VideoComponent";

const CyberSecurityVideo = () => {
  const testingData = {
    videoUrl: "https://youtu.be/CgkrM7Q4taw",
    courseDuration: "3 MONTHS",
    courseTitle: "Become a CyberSecurity Developer",
    courseDescription: "In just three months, gain expertise in Cyber Security through our scenario-based training program, customized to reflect real-world challenges. You'll explore essential tools and techniques such as Kali Linux, MITM attacks, Python, PowerShell, and vulnerability scanning in AWS and Azure. Each session is structured to progressively enhance your skills, enabling you to confidently address complex security issues. Participate in practical exercises that mirror actual cybersecurity scenarios, improving your proficiency and relevance in the workforce. Elevate your abilities and become a skilled cybersecurity specialist prepared to thrive in today's digital environment.",
    expertsCount: 5,
    sessionsCount: 20,
    courseImage: "/Images/MainFrame/MainFrames.jpg"
  };

  return <VideoComponent {...testingData} />;
};

export default CyberSecurityVideo;
