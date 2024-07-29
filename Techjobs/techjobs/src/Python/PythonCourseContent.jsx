import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const PythonCourseContent = () => {
  // Define content for different courses
  const courseContent = [
    // Python content replaced with new content
    {
      heading: "Introduction to Full Stack Development",
      points: [
        "Overview of Full Stack Development",
        "Web Application Architecture",
        "What is full stack development?",

        " The role of a full-stack developer",
        "Frontend vs. Backend vs. Full Stack",
      ],
    },
    {
      heading: "Frontend Development (HTML & CSS)",
      points: [
        "Basics of HTML",
        "Advanced HTML Techniques",
        "Basics of CSS",
        "Advanced CSS Techniques",
        "Responsive Design with Flexbox and Grid",
        "CSS Preprocessors (Sass, LESS)",
        "HTML5 Semantic Elements",
        "CSS Animations and Transitions"
      ],
    },
    
    {
      heading: "Java Script ",
      points: [
        "Fundamentals of JavaScript",
        "Advanced JavaScript Concepts",
        "DOM Manipulation",
        "Event Handling",
        "Asynchronous Programming and Promises",
        "ES6+ Features (Arrow Functions, Modules, etc.)",
        "JavaScript Design Patterns",
        "Error Handling in JavaScript"
      ],
    },
   
    {
      heading: "Frontend Frameworks React JS",
      points: [
        "Introduction to React",
        "React Components",
        "State and Props in React",
        "React Lifecycle Methods",
        "Advanced React Techniques",
        "React Hooks",
        "React Router for Single Page Applications",
        "State Management with Redux",
        "Testing React Applications with Jest and Enzyme",
      ],
    },
    {
      heading: "Version Control with Git",
      points: [
        "Introduction to Git",
        "Basic Git Commands",
        "Branching and Merging",
        "Collaboration with GitHub",
        "Advanced Git Techniques",
        "Handling Merge Conflicts",
        "Git Workflows (Git Flow, GitHub Flow)",
        "Using Git Hooks for Automation"
      ]
    },
    {
      heading: "Python Basics",
      points: [
        "Introduction to Python",
        "Python Data Structures",
        "Functions and Modules in Python",
        "File Handling in Python",
        "Advanced Python Programming",
        "Object-Oriented Programming in Python",
        "Error and Exception Handling",
        "Working with Libraries (NumPy, Pandas)"
      ]
    },
    {
      heading: "Backend Development with Flask/Django",
      points: [
        "Introduction to Flask/Django",
        "Setting up Flask/Django Projects",
        "Routes and Views in Flask/Django",
        "Templates and Static Files in Flask/Django",
        "Advanced Flask/Django Techniques",
        "Working with Middleware",
        "Building RESTful APIs with Flask/Django",
        "Security Best Practices in Flask/Django"
      ]
    },
    // Page 8: Databases (SQL and NoSQL)
    {
      heading: "Databases (SQL and NoSQL)",
      points: [
        "Introduction to Databases",
        "SQL Basics",
        "Working with NoSQL Databases",
        "Integrating Databases with Flask/Django",
        "Advanced Database Management",
        "Database Design and Normalization",
        "Using ORMs (SQL Alchemy for Flask, Django ORM)",
        "Database Indexing and Optimization"
      ]
    },
    {
      heading: "RESTful APIs",
      points: [
        "Introduction to RESTful APIs",
        "Creating APIs with Flask/Django",
        "Consuming APIs with React",
        "Authentication and Authorization in APIs",
        "Advanced API Development",
        "API Documentation with Swagger/OpenAPI",
        "Rate Limiting and Throttling",
        "Versioning in RESTful APIs",
      ],
    },
    {
      heading: "Deployment and DevOps",
      points: [
        "Introduction to Deployment",
        "Deploying on Cloud Platforms (AWS/GCP/Azure)",
        "Setting up CI/CD Pipelines",
        "Monitoring and Maintaining Applications",
        "Advanced DevOps Practices",
        "Containerization with Docker",
        "Orchestration with Kubernetes",
        "Infrastructure as Code (Terraform/CloudFormation)",
      ],
    },
    
    
   
    // Capstone Project content remains the same
    {
      heading: "Capstone Project",
      points: [
        "Project Planning and Setup",
        "Combining Python and Web Technologies",
        "Building and Deploying the Project",
        "Presenting the Project",
        "Project Evaluation and Feedback",
        "Future Learning Pathways",
      ],
    },
  ];

  return (
    <div>
      <CourseCurriculum weekContent={courseContent} />
    </div>
  );
};

export default PythonCourseContent;
