import React, { useState } from 'react';
import SurgeryPopupForm from './SurgeryPopupForm'; // You’ll create this
import '../../styles/SurgeryPage/Surgery.css';
// [your icon imports remain same...]
import pilesIcon from '../../assets/SurgeryPage/popularSurgeries/piles.png';
import herniaIcon from '../../assets/SurgeryPage/popularSurgeries/hernia.png';
import kidneyStoneIcon from '../../assets/SurgeryPage/popularSurgeries/kidney_stone.png';
import cataractIcon from '../../assets/SurgeryPage/popularSurgeries/cataract.png';
import circumcisionIcon from '../../assets/SurgeryPage/popularSurgeries/circumcision.png';
import lasikIcon from '../../assets/SurgeryPage/popularSurgeries/lasik.png';
import varicoseVeinsIcon from '../../assets/SurgeryPage/popularSurgeries/varicose_veins.png';
import gallstoneIcon from '../../assets/SurgeryPage/popularSurgeries/gallstone.png';
import analFistulaIcon from '../../assets/SurgeryPage/popularSurgeries/anal_fistula.png';
import gynaecomastiaIcon from '../../assets/SurgeryPage/popularSurgeries/gynaecomastia.png';
import analFissureIcon from '../../assets/SurgeryPage/popularSurgeries/anal_fissure.png';
import lipomaRemovalIcon from '../../assets/SurgeryPage/popularSurgeries/lipoma_removal.png';
import sebaceousCystIcon from '../../assets/SurgeryPage/popularSurgeries/sebaceous_cyst.png';
import pilonidalSinusIcon from '../../assets/SurgeryPage/popularSurgeries/pilonidal_sinus.png';
import lumpInBreastIcon from '../../assets/SurgeryPage/popularSurgeries/lump_in_breast.png';
import turpIcon from '../../assets/SurgeryPage/popularSurgeries/turp.png';
import hydroceleIcon from '../../assets/SurgeryPage/popularSurgeries/hydrocele.png';
import kneeReplacementIcon from '../../assets/SurgeryPage/popularSurgeries/knee_replacement.png';
import hairTransplantIcon from '../../assets/SurgeryPage/popularSurgeries/hair_transplant.png';

const surgeries = [
  { name: "Piles", icon: pilesIcon },
  { name: "Hernia Treatment", icon: herniaIcon },
  { name: "Kidney Stone", icon: kidneyStoneIcon },
  { name: "Cataract", icon: cataractIcon },
  { name: "Circumcision", icon: circumcisionIcon },
  { name: "Lasik", icon: lasikIcon },
  { name: "Varicose Veins", icon: varicoseVeinsIcon },
  { name: "Gallstone", icon: gallstoneIcon },
  { name: "Anal Fistula", icon: analFistulaIcon },
  { name: "Gynaecomastia", icon: gynaecomastiaIcon },
  { name: "Anal Fissure", icon: analFissureIcon },
  { name: "Lipoma Removal", icon: lipomaRemovalIcon },
  { name: "Sebaceous cyst", icon: sebaceousCystIcon },
  { name: "Pilonidal Sinus", icon: pilonidalSinusIcon },
  { name: "Lump in Breast", icon: lumpInBreastIcon },
  { name: "TURP", icon: turpIcon },
  { name: "Hydrocele", icon: hydroceleIcon },
  { name: "Knee Replacement", icon: kneeReplacementIcon },
  { name: "Hair Transplant", icon: hairTransplantIcon }
];

const PopularSurgeries = () => {
  const [selectedSurgery, setSelectedSurgery] = useState(null);

  const handleSurgeryClick = (surgeryName) => {
    setSelectedSurgery(surgeryName);
  };

  const closePopup = () => {
    setSelectedSurgery(null);
  };

  return (
    <div className="popular-surgeries-container">
      <div className="ailment-text">
        We are experts in Surgical solutions for 50+ ailments.
      </div>

      <div className="popular-surgeries-box">
        <h2 className="popular-surgeries-title">Popular Surgeries</h2>
        <div className="surgery-grid">
          {surgeries.map((surgery, index) => (
            <div
              key={index}
              className="surgery-item"
              onClick={() => handleSurgeryClick(surgery.name)}
              style={{ cursor: 'pointer' }}
            >
              <img src={surgery.icon} alt={surgery.name} className="surgery-icon" />
              <h3 className="surgery-name">{surgery.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedSurgery && (
        <SurgeryPopupForm
          surgeryName={selectedSurgery}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default PopularSurgeries;
