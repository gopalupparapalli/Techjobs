import React from 'react';
import ProgramForYou from '../ReUsableComponent/ProgramForYou';

const CyberSecurityProgramForYou = () => {
  const TestingProgramData = [
    {
      title: "I am a College Graduate looking for a Job"
    },
    {
      title: "starting from a student or Fresher who is just passed out from his graduation."
    },
    {
      title: "The people who have joined their carrier as Mainframe Developer."
    },
    {
      title: "People who want to refresh or upgrade their skill set on mainframe."
    },
    {
      title: "I am a Project Manager and need to discuss with client end to end on technical and PM aspects. As well as I need to manage a development team also."
    }
  ];

  return (
    <ProgramForYou
      mainTitle="Who Can Apply for this  Course?"
      subTitle="Whether you’re a beginner or an intermediate professional seeking to upskill, transition or broaden your horizons in the field, our program is designed to help you succeed."
      applyText="Apply now"
      checkText="Is this program right for me?"
      programData={TestingProgramData}
    />
  );
};

export default CyberSecurityProgramForYou;
