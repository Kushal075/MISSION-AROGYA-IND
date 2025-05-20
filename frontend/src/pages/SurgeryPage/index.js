import React, { useState } from 'react';
import SurgeryHeader from './SurgeryHeader';
import PopularSurgeries from './PopularSurgeries';
import Departments from './Departments';
import VideoSection from './VideoSection';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import RegistrationForm from './RegistrationForm';
import SurgeryBookingForm from './SurgeryBookingForm';
import SurgeryPopupForm from './SurgeryPopupForm';
import SurgeryFooter from './SurgeryFooter'; // ✅ Import the new footer

import '../../styles/SurgeryPage/Surgery.css';

const SurgeryPage = () => {
  const [selectedSurgery, setSelectedSurgery] = useState(null);

  const handleSurgeryClick = (surgeryName) => {
    setSelectedSurgery(surgeryName);
  };

  const handleClosePopup = () => {
    setSelectedSurgery(null);
  };

  return (
    <div className="surgery-page">
      <SurgeryHeader />

      <div className="surgery-main-section">
        <PopularSurgeries onSurgeryClick={handleSurgeryClick} />
        <RegistrationForm />
      </div>

      <Departments />
      <VideoSection />
      <HowItWorks />
      <Benefits />
      <SurgeryBookingForm />

      {selectedSurgery && (
        <SurgeryPopupForm
          surgeryName={selectedSurgery} // ✅ Corrected prop name
          onClose={handleClosePopup}
        />
      )}

      <SurgeryFooter /> {/* ✅ Footer added at the end */}
    </div>
  );
};

export default SurgeryPage;
