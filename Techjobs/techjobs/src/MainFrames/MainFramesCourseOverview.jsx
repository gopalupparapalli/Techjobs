import React from 'react';
import CourseOverview from '../ReUsableComponent/CourseOverview';

const courses = [
  {
    title: "Mainframe ",
    title2:'Training Program!',
    description: "Are you ready to dive into the world of mainframe technology and elevate your career to new heights? Our expertly designed course is here to guide you every step of the way! Whether you're a fresh graduate, a seasoned developer, or a manager looking to grasp the technicalities, our Mainframe Training Program is tailored just for you.",
   
  },
  // Add more courses as needed
];

const MainFramesCourseOverview = () => {
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

export default MainFramesCourseOverview;
