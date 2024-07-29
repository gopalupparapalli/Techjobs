
import { useParams } from 'react-router-dom';
import TestingPage from './Testing';
import AWSDevops from './AWSDevops';
import MainFramesPage from './MainFrames';
import CyberSecurity from './CyberSecurity';
import PythonCourse from './Python';
import JavaPage from './Java/JavaPage';
import DataScience from './DataScience';
import Internship from './Internship';
import PowerBI from './PowerBI';


const CoursePage = () => {
  const { courseTitle } = useParams();

  switch (courseTitle) {
    case 'testing':
      return <TestingPage />;
    case 'aws':
      return <AWSDevops />;
    case 'mainframe':
      return <MainFramesPage />;
    case 'cybersecurity':
      return <CyberSecurity />;
    case 'python':
      return <PythonCourse />;
    case 'java':
      return <JavaPage/>;
      case 'datascience':
        return <DataScience/>;
    case 'internship':
        return <Internship/>;
    case 'powerBi':
        return <PowerBI/>
    default:
      return <div>Course not found</div>;
  }
};

export default CoursePage;
