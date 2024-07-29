import React from "react";
import VideoComponent from "../ReUsableComponent/VideoComponent";

const PythonVideo = () => {
  const testingData = {
    videoUrl: "https://youtu.be/CgkrM7Q4taw",
    courseDuration: "3 MONTHS",
    courseTitle: "Become a Python Fullstack Developer",
    courseDescription: "Our 'Python Bootcamp: From Zero to Hero' course is a transformative three-month journey designed to elevate your Python skills from basic to advanced levels. Throughout the program, you'll delve into key Python libraries, such as Pandas for data analysis, and explore advanced concepts like Object-Oriented Programming. With hands-on experience in deploying Large Language Models (LLMs) and modern frameworks like Django for web development, you'll emerge equipped to tackle real-world challenges and excel in professional settings.",
    expertsCount: 5,
    sessionsCount: 20,
    courseImage: "/Images/python.jpeg"
  };

  return <VideoComponent {...testingData} />;
};

export default PythonVideo;
