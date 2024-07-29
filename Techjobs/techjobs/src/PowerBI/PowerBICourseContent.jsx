import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const PowerBICourseContent = () => {
  // Define content for the Power BI course
  const courseContent = [
    {
      heading: "Introduction & Foundations",
      points: [
        "Introduction to Power BI",
        "Introduction to Power Query and Data Profiling Techniques",
        "Getting Data from Excel and RDBMS, Web",
        "Query Parameters in Detail",
        "Scenario on Web Scraping Using Advanced Data Parameters for HR Data Analysis",
        "Scenarios on Connecting Data from the Web Using Wikipedia Website and Data Cleaning Using Power Query",
        "Direct Query vs Import Data Connection Mode"
      ]
    },
    {
      heading: "Power BI Desktop Visualizations - Part 1",
      points: [
        "Creating visuals",
        "Applying color and conditional formatting",
        "Setting the sort order",
        "Scatter and bubble charts and play axis",
        "Tooltips",
        "Slicers, timeline slicers, and sync slicers"
      ]
    },
    {
      heading: "Power BI Desktop Visualizations - Part 2",
      points: [
        "Cross-filtering and highlighting",
        "Visual, Page, and Report level filters",
        "Drill down/up",
        "Hierarchies",
        "Constant Lines",
        "Tables, Matrix, and Table conditional formatting",
        "KPIs, cards, and Gauges",
        "Map Visualization",
        "Custom Visuals",
        "Managing and Arranging",
        "Drill Through",
        "Custom report themes",
        "Grouping and binning",
        "Bookmark and buttons"
      ]
    },
    {
      heading: "Advanced Scenarios for Building a Welcome Page for Clients",
      points: [
        "Button Scenario Using Selection Pane, Bookmark Pane, and Buttons Along with Toggle Application",
        "Custom Visual Application for Clients Along with Building Custom Tooltip"
      ]
    },
    {
      heading: "Modeling with Power BI",
      points: [
        "Introduction to Modeling",
        "Cardinality and Cross-filtering",
        "Creating hierarchy in the model",
        "Creating date dimensions in Power BI using calendar functions and their importance",
        "Role Playing Dimension Scenario Using Data Modeling",
        "How to handle Many-to-Many Relationships for a Casino-Based Client"
      ]
    },
    {
      heading: "DAX Expressions - Part 1",
      points: [
        "Creating calculated columns",
        "Default summarization and sorting by",
        "Introduction to DAX",
        "Understanding the important DAX functions used in Power BI and their applications"
      ]
    },
    {
      heading: "DAX Expressions - Part 2",
      points: [
        "How to create calculated columns and measures, along with the differences in their applications",
        "Practical explanation of DAX with 100+ DAX on relationships, cumulative calculations, YTD, QTD, and MTD calculations along with building custom visuals, use of variables, performance tuning techniques, and comparing current and previous year sales"
      ]
    },
    {
      heading: "Publishing and Sharing",
      points: [
        "Sharing options",
        "Publish from Power BI Desktop",
        "Publish reports to the web",
        "Sharing reports and dashboards",
        "Workspaces",
        "Apps",
        "Printing, PDF, and exports",
        "Understanding Row Level Security and Implementing Security with Regional and Segment-Based Managers on Sales Data",
        "Understanding Data Refresh with Practical Installation of Data Gateway",
        "Refreshing Datasets"
      ]
    },
    {
      heading: "Fabric and Version Controlling",
      points: [
        "Fabric",
        "Version Controlling",
        "Data Pipeline",
        "Apps"
      ]
    },
    {
      heading: "Additional Topics",
      points: [
        "Setting up sort order in Power BI with custom sort order",
        "Custom visuals and their applications",
        "Multiple charts in Power BI",
        "Smart narrative",
        "Cross-filter DAX",
        "Dataflow",
        "What if Parameter vs Query Parameter",
        "Direct vs Import",
        "Web Sources",
        "Parameters in Power BI",
        "Dynamic titles in Power BI",
        "Quick Insights in Power BI",
        "Performance analyzer in Power BI with a guide to performance-tune a report",
        "Template in Power BI",
        "Cross-Report Drill Through"
      ]
    }
  ];

  return (
    <div>
      <CourseCurriculum weekContent={courseContent} />
    </div>
  );
};

export default PowerBICourseContent;
