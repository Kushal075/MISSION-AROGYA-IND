import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

// ✅ New HomePage Components
import Home from "./pages/HomePage/Home";
import Services from "./pages/HomePage/Services";
import Testimonials from "./pages/HomePage/Testimonials";
import CallToAction from "./pages/HomePage/CallToAction";
import Footer from "./pages/HomePage/Footer";

// ✅ Surgery Page (modular)
import SurgeryPage from "./pages/SurgeryPage";

// Authentication Pages
import Login from "./pages/Login";
import PatientRegister from "./pages/PatientRegister";
import DoctorRegister from "./pages/DoctorRegister";
import PharmacyRegister from "./pages/PharmacyRegister";

// Dashboards
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import PharmacyDashboard from "./pages/Pharmacy/PharmacyDashboard";

// Patient Subpages
import PatientAppointments from "./pages/Patient/PatientAppointments";
import PatientMedicalHistory from "./pages/Patient/PatientMedicalHistory";
import PatientProfile from "./pages/Patient/PatientProfile";

// Utilities
import EmergencyHelp from "./pages/Patient/EmergencyHelp";
import QrMedicalRecords from "./pages/Patient/QrMedicalRecords";
import ElderlyMode from "./pages/Patient/ElderlyMode";
import FamilyProfiles from "./pages/Patient/FamilyProfiles";
import SymptomChecker from "./pages/Patient/SymptomChecker";
import HealthEducation from "./pages/Patient/HealthEducation";

// ✅ Video Call Component
import VideoCallRoom from "./components/VideoCall/VideoCallRoom";



import DoctorSearchPage from "./pages/DoctorSearch/DoctorSearchPage";


// ✅ Wrapper to extract roomId from URL
const VideoCallRoomWrapper = () => {
  const { roomId } = useParams();
  return <VideoCallRoom roomId={roomId} />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cta" element={<CallToAction />} />
        <Route path="/footer" element={<Footer />} />

        {/* Surgery Page */}
        <Route path="/surgeries" element={<SurgeryPage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register/patient" element={<PatientRegister />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/register/pharmacy" element={<PharmacyRegister />} />

        {/* Dashboards */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/pharmacy-dashboard" element={<PharmacyDashboard />} />

        {/* Patient Subroutes */}
        <Route path="/patient-dashboard/appointments" element={<PatientAppointments />} />
        <Route path="/patient-dashboard/medical-history" element={<PatientMedicalHistory />} />
        <Route path="/patient-dashboard/profile" element={<PatientProfile />} />

        {/* Utilities */}
        <Route path="/qr-medical-records" element={<QrMedicalRecords />} />
        <Route path="/elderly-mode" element={<ElderlyMode />} />
        <Route path="/family-profiles" element={<FamilyProfiles />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/health-education" element={<HealthEducation />} />
        <Route path="/emergency-help" element={<EmergencyHelp />} />

        {/* ✅ Video Call Room */}
        <Route path="/video-call/:roomId" element={<VideoCallRoomWrapper />} />

        {/* Doctor Search Page */}
        <Route path="/test-doctors" element={<DoctorSearchPage />} />

      </Routes>
    </Router>
  );
}

export default App;
