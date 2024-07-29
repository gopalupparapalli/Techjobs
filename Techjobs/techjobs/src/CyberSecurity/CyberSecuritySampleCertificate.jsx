import React from 'react'
import SampleCertificate from '../ReUsableComponent/SampleCertificate';

const CyberSecuritySampleCerticate = () => {
    const certificates = [
        { imageUrl: '/Images/Courses Images/Course-Complition.jpg' },
        
       
      ];
    
      return (
        <div>
          {certificates.map((certificate, index) => (
            <SampleCertificate key={index} imageUrl={certificate.imageUrl} />
          ))}
        </div>
      );
    };

export default CyberSecuritySampleCerticate;