import React from 'react';
import CourseOverview from '../ReUsableComponent/CourseOverview';

const courses = [
  {
    title: "PowerBI  ",
    title2:'Training Program!',
    description: "Join our 'PowerBI Bootcamp: From Zero to Hero' and transform your programming skills in just three months. Master PowerBI from basics to advanced applications, including AI with Large Language Models and web development using Django. Build practical projects, from games to data analysis with Pandas, and prepare to excel in the tech industry. Enroll now and start your journey to becoming a PowerBI expert!"
   
  },
  // Add more courses as needed
];

const PowerBICourseOverview = () => {
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

export default PowerBICourseOverview;
