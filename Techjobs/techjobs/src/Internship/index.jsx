import React from "react";
import { Helmet } from 'react-helmet';

import InternshipOffered from "./InternshipOffered";
import InternshipDetails from "./InternshipDetails";
import Expectation from "./ExpectationsPage";
import SampleCertificate from "./SampleCertificate";
import InternshipStats from "./Stats";
import QuestionAnswer from "./QuestionAnswer";
import InternshipStructure from "./InternshipStructure";
import HomeSection from "./HomeSection";

const Internship = () => {
    return (
        <>
         <Helmet>
        <meta charSet="utf-8" />
        <title>Internship</title>
      </Helmet>
        <HomeSection/>
        <InternshipOffered/>
        <InternshipStats/>
        <InternshipDetails/>
        <InternshipStructure/>
        <Expectation/>
        <SampleCertificate/>
        <QuestionAnswer/>
        </>
    )
}

export default Internship;