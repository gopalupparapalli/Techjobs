import React from 'react';
import CourseOverview from '../ReUsableComponent/CourseOverview';

const courses = [
  {
    title: "CyberSecurity",
    title2: 'Training Program!',
    description: 'Join our "Mastering Cyber Security Course," a practical training program that teaches you how to keep computer systems safe from hackers. This course covers the use of Kali Linux, a tool for testing security, and techniques like Man-In-The-Middle (MITM) attacks, where hackers intercept data. You\'ll learn how to scan for weaknesses in AWS and Azure, big cloud services, using Python and PowerShell scripts. By the end of the course, you\'ll know how to find and fix security issues in web applications, REST APIs, and cloud environments. Sign up now to start protecting digital spaces!',
  },
  // Add more courses as needed
];

const CyberSecurityCourseOverview = () => {
  return (
    <div>
      {courses.map((course, index) => (
        <CourseOverview
          key={index}
          title={course.title}
          title2={course.title2}
          description={course.description}
        />
      ))}
    </div>
  );
}

export default CyberSecurityCourseOverview;
