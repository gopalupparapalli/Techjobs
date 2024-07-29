import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const CyberSecurityCourseContent = () => {
  // Define week content for different courses
  const course1WeekContent = [
    {
      heading: "MAINFRAME ",
      points: [
        "Introduction",
        "History",
        "MVS OS",
        "Mainframe concepts",
        "TSO/ISPF"
      ],
    },
    {
      heading: "JCL ",
      points: [
        "Overview",
        "Environment",
        "Job/Exec/DD Statement"
      ],
    },
    {
      heading: "JCL ",
      points: [
        "Base Library",
        "Procedures",
        "Conditional Processing"
      ],
    },
    {
      heading: "JCL ",
      points: [
        "Defining Datasets",
        "I/O Methods",
        "Run COBOL Programs"
      ],
    },
    {
      heading: "JCL ",
      points: [
        "Utility Programs",
        "Sort"
      ],
    },
    {
      heading: "COBOL ",
      points: [
        "Overview",
        "Environment Setup",
        "Program Structure"
      ],
    },
    {
      heading: "COBOL ",
      points: [
        "Basic Syntax",
        "Data Types",
        "Basic Verbs",
        "Data Layout"
      ],
    },
    {
      heading: "COBOL ",
      points: [
        "Conditional Statements",
        "Loop Statements",
        "String Handling",
        "Table Processing"
      ],
    },
    {
      heading: "COBOL ",
      points: [
        "File Handling",
        "COBOL – Subroutines",
        "Internal Sort",
        "Database Interface"
      ],
    },
    {
      heading: "VSAM ",
      points: [
        "Overview",
        "Components",
        "Cluster",
        "Types – ESDS/KSDS/RRDS/LDS",
        "AIX",
        "File Status"
      ],
    },
    {
      heading: "DB2 ",
      points: [
        "Introduction",
        "Objects",
        "Data Types",
        "Tables",
        "Keys",
        "Host variable",
        "Db2-COBOL Program",
        "Cursor"
      ],
    },
    {
      heading: "CICS ",
      points: [
        "Online System Feature & Components",
        "Components & Tables",
        "Basic Mapping Support (BMS)",
        "CICS Table Environment",
        "File, Exception Handling",
        "AID, EIB, COMMAREA, TSQ&TDQ"
      ],
    }
  ];
  

  return (
    <div>
     
      <CourseCurriculum weekContent={course1WeekContent} />
     
    </div>
  );
};

export default CyberSecurityCourseContent;
