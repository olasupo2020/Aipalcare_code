import React from 'react';
import logo from "./images/png14.png";
import { Link } from "react-router-dom";
import ClientRegCard from './DashboardComponents/Cards/ClientRegCard';
import OrganizationRegCard from './DashboardComponents/Cards/OrganizationRegCard';
import ServiceProviderCard from './DashboardComponents/Cards/ServiceProviderCard';
import ProgressReportCard from './DashboardComponents/Cards/ProgressReportCard';
import SignatureCard from './DashboardComponents/Cards/SignatureCard';
import PatientDiagnosisCard from './DashboardComponents/Cards/PatientDiagnosisCard';
import ClinicalCorrespCard from './DashboardComponents/Cards/ClinicalCorrespCard';
import PhysicalTherapyEvalCard from './DashboardComponents/Cards/PhysicalTherapyEvalCard';
import SpeechLangEvalCard from './DashboardComponents/Cards/SpeechLangEvalCard';


function Dashboard() {
  return (
    <div style={{margin:'5%'}}>
     
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/reg-sp" style={{textDecoration: "none"}}>
            <ServiceProviderCard />
            </Link>
            </div>
          <div className="col-sm-6 col-md-4 mb-3">
        <ClientRegCard />
            </div>
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/reg-org" style={{textDecoration: "none"}}>
            <OrganizationRegCard />
            </Link>
            </div>
         
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/formwrap" style={{textDecoration: "none"}}>
            <ProgressReportCard />
            </Link>
            </div>
            
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/formwrap" style={{textDecoration: "none"}}>
            <SignatureCard />
            </Link>
            </div>
          
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/formwrap" style={{textDecoration: "none"}}>
            <PatientDiagnosisCard />
            </Link>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/formwrap" style={{textDecoration: "none"}}>
          <ClinicalCorrespCard />
           </Link>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/formwrap" style={{textDecoration: "none"}}>
            <PhysicalTherapyEvalCard />
            </Link>
            </div>
          <div className="col-sm-6 col-md-4 mb-3">
          <Link to="/formwrap" style={{textDecoration: "none"}}>
            <SpeechLangEvalCard />
            </Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard
