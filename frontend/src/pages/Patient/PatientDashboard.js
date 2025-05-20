import React from "react";
import { Link } from "react-router-dom";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";
import VideoCallButton from "../../components/VideoCallButton";
import AppointmentCard from "../../components/AppointmentCard";
import HealthSevaCard from "../../components/HealthSevaCard";
import MedicineOrderCard from "../../components/MedicineOrderCard";
import InsuranceSchemes from "../../components/InsuranceSchemes";
import EmergencyHelpCard from "../../components/EmergencyHelpCard";
import QrMedicalRecordCard from "../../components/QrMedicalRecordCard";
import ElderlyModeCard from "../../components/ElderlyModeCard";
import FamilyProfileCard from "../../components/FamilyProfileCard";
import SymptomCheckerCard from "../../components/SymptomCheckerCard";
import HealthEducationCard from "../../components/HealthEducationCard";
import "../../styles/PatientDashboard.css";

const PatientDashboard = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="dashboard-main">
          <h1 className="dashboard-title">Welcome to Your Dashboard</h1>

          <div className="dashboard-grid">
            <Link to="/patient-dashboard/appointments" className="card-wrapper">
              <AppointmentCard />
            </Link>

            <Link to="/patient-dashboard/medical-history" className="card-wrapper">
              <MedicineOrderCard />
            </Link>

            <div className="card-wrapper">
              <VideoCallButton />
            </div>

            <Link to="/health-seva" className="card-wrapper">
              <HealthSevaCard />
            </Link>

            <Link to="/insurance-schemes" className="card-wrapper">
              <InsuranceSchemes />
            </Link>

            <div className="card-wrapper">
              <EmergencyHelpCard />
            </div>

            <Link to="/qr-medical-records" className="card-wrapper">
              <QrMedicalRecordCard />
            </Link>

            <Link to="/elderly-mode" className="card-wrapper">
              <ElderlyModeCard />
            </Link>

            <Link to="/family-profiles" className="card-wrapper">
              <FamilyProfileCard />
            </Link>

            <Link to="/symptom-checker" className="card-wrapper">
              <SymptomCheckerCard />
            </Link>

            <Link to="/health-education" className="card-wrapper">
              <HealthEducationCard />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
