import React, { useState } from 'react';
import { useEffect } from 'react';
import { Phone, XCircle, Stethoscope } from 'lucide-react';
import '../../styles/SurgeryPage/Surgery.css';

const ailments = [
  {
    mainCategory: 'Knee and Joints related',
    department: 'Orthopedics',
    subcategories: [
      'Knee Replacement',
      'Arthroscopy',
      'Carpal Tunnel Syndrome',
      'Lumbar Laminectomy',
      'ACL Repair',
      'Microdiscectomy',
      'Knee Arthroscopy',
      'Shoulder Arthroscopy'
    ]
  },
  {
    mainCategory: 'Eye related',
    department: 'Ophthamology',
    subcategories: [
      'Cataract',
      'Lasik',
      'Glaucoma',
      'Squinteye'
    ]
  },
  // ... include other items unchanged
  {
    mainCategory: 'General Surgery related',
    department: 'General Surgery',
    subcategories: [
      'Hernia Treatment',
      'Gallstone',
      'Appendectomy',
      'Lipoma Removal',
      'Circumcision',
      'Sebaceous Cyst',
      'Varicose Veins',
      'Varicocele',
      'Hydrocele'
    ]
  },
  {
    mainCategory: 'Cardiology related',
    department: 'Cardiology',
    subcategories: [
      'Vascular Surgery',
      'Pace Maker Surgery',
      'Open Heart Surgery',
      'Angiography',
      'Angioplasty',
      'Bypass Surgery',
      'Heart Valve Replacement',
      'Coronary Angiography'
    ]
  },
  {
    mainCategory: 'Kidney related',
    department: 'Urology',
    subcategories: [
      'Kidney Stone',
      'Prostate Surgery',
      'Circumcision',
      'TURP',
      'Kidney Biopsy',
      'Dialysis',
      'Ureteroscopy'
    ]
  },
  {
    mainCategory: 'Cosmetic related',
    department: 'Cosmetic Surgery',
    subcategories: [
      'Liposuction',
      'Tummy Tuck',
      'Breast Augmentation',
      'Hair Transplant',
      'PRP Treatment',
      'Gynaecomastia',
      'Rhinoplasty',
      'Lump in Breast',
      'Breast Reduction',
      'Breast Lift'
    ]
  },
  {
    mainCategory: 'Anus related',
    department: 'Practology',
    subcategories: [
      'Anal Fistula',
      'Anal Fissure',
      'Piles',
      'Pilonidal Sinus',
      'Perianal Abscess'
    ]
  },
  {
    mainCategory: 'Transplant related',
    department: 'Transplants',
    subcategories: [
      'Kidney Transplnt',
      'Liver Transplant',
      'Heart Transplant',
      'Lung Transplant'
    ]
  },
  {
    mainCategory: 'Gynaecology related',
    department: 'Gynaecology',
    subcategories: [
      'Normal Delivery',
      'MTP',
      'Vaginoplasty',
      'Myomectomy',
      'Hysterectomy',
      'Ovarian Cyst'
    ]
  },
  {
    mainCategory: 'Gastro related',
    department: 'Gastroenterology',
    subcategories: [
      'Endoscopy',
      'Colonoscopy',
      'ERCP',
      'Laparoscopic Surgery'
    ]
  },
  {
    mainCategory: 'Dentist related',
    department: 'Dentist',
    subcategories: ['Dentist', 'Root Canal Treatment']
  },
  {
    mainCategory: 'Neurosurgery related',
    department: 'Neurology',
    subcategories: [
      'Brain Tumor Surgery',
      'Spinal Fusion',
      'Craniotomy',
      'Epilepsy Surgery',
      'Stroke Surgery',
      'Desectomy'
    ]
  }
];


const RegistrationForm = () => {
  const [showAilmentPopup, setShowAilmentPopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null); // ✅ NEW

  
  useEffect(() => {
    if (showAilmentPopup && selectedMainCategory === null) {
      setSelectedMainCategory(0);
    }
  }, [showAilmentPopup, selectedMainCategory]);

  return (
<div className="registration-sticky-wrapper">
<div className="registration-form">
        <h2 className="form-title">Book your consultation today</h2>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="form-input"
        >
          <option value="Bengaluru">Bengaluru</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <button className="form-input" onClick={() => setShowAilmentPopup(true)} style={{ textAlign: 'left' }}>
  {selectedSubcategory ? (
    <span style={{ fontWeight: 'bold' }}>{selectedSubcategory}</span>
  ) : (
    <span style={{ fontWeight: 'normal', color: '#888' }}>Select Ailment</span>
  )}
</button>



        {showAilmentPopup && (
          <div className="ailment-popup">
            <div className="ailment-container">
              <button
                className="close-button"
                onClick={() => setShowAilmentPopup(false)}
              >
                <XCircle size={24} />
              </button>

              <div className="popup-title">Select your Surgical Ailment</div>

              <div className="ailment-columns">
                {/* Main Categories */}
                <div className="ailment-left scrollable-x">
                  {ailments.map((cat, i) => (
                    <div
                      key={i}
                      className={`main-category-item ${
                        selectedMainCategory === i ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedMainCategory(i)}
                    >
                      <div className="icon-round">
                        <Stethoscope size={18} />
                      </div>
                      <div className="category-texts">
                        <div className="category-title">{cat.mainCategory}</div>
                        <div className="category-sub">{cat.department}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subcategories */}
                <div className="ailment-right scrollable-x">
                  {selectedMainCategory !== null && (
                    <div className="ailment-column">
                      <h4 className="ailment-dept">
                        {ailments[selectedMainCategory].department}
                      </h4>
                      <ul className="ailment-sublist horizontal-sublist">
                        {ailments[selectedMainCategory].subcategories.map((sub, j) => (
                          <li
                            key={j}
                            className={`ailment-subitem ailment-box ${
                              selectedSubcategory === sub ? 'selected-subitem' : ''
                            }`}
                            onClick={() => {
                              setSelectedSubcategory(sub);     // ✅ Select subcategory
                              setShowAilmentPopup(false);      // ✅ Close popup
                            }}
                          >
                            <div className="icon-placeholder" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}


        <input className="form-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="form-input" type="text" placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
        <input className="form-input" type="number" placeholder="Age" />

        <button className="form-button">Book Appointment</button>

        <p className="disclaimer-text">
          By submitting the form, you agree to AyuRaksha's <span className="tc-link">T&C</span>
        </p>
      </div>

      <div style={{
    width: '100%', // or match form width
    maxWidth: '605px', // same as your form
    marginTop: '20px',
    margin:'0.9cm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#000' }} />
        <span style={{ fontWeight: 'bold' }}>or</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#000' }} />
      </div>

      <div className="reachout-box">
        Reach out to us on &nbsp;|&nbsp; <Phone size={18} /> 08045685554
      </div>
    </div>
  );
};

export default RegistrationForm;
