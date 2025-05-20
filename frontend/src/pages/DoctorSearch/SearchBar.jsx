// src/pages/DoctorSearch/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorSearchPage.css';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const cityAreaData = {
  Bangalore: ["BTM Layout", "Jayanagar", "Whitefield", "HSR Layout", "Marathahalli", "Banashankari", "Majestic", "Malleswaram", "Yeshvathpura", "Electronic city", "Silk Board", "Rajajinagar", "Rajarajeshwari Nagar", "Mahalakshmi Layout", "Peenya", "JP Nagar", "Indira Nagar", "Trinity", "Nagarbhavi", "Basavangudi", "Brookefield", "Manjunath Nagar", "Yelahanka"],
  Delhi: ["Saket", "Dwarka", "Rohini", "Lajpat Nagar", "Karol Bagh", "Dilshan Garden", "Rajendra Nagar", "Mahipalpur", "Rajiv Chowk", "Laxmi Nagar", "Anand Vihar", "Mayur Vihar", "Preet Vihar", "Maharani Bagh"],
  Hyderabad: ["Gachibowli", "Banjara Hills", "Madhapur", "Kukatpally", "Secunderabad", "Ameerpet", "Sanathnagar", "Khairatabad", "Musheerbad", "Amberpet", "Nampally", "Jubilee Hills", "Patancheru"],
  Mumbai: ['Andheri', 'Bandra', 'Dadar', "Powai", 'Borivali', 'Goregaon', 'Jogeshwari', 'Juhu', 'Kandivali West', 'Kandivali East', 'Khar', 'Malad', 'Santacruz East', 'Santacruz West', 'Vile Parle']
};

const specialisations = [
    "General Physician", "Pediatrician", "Dermatologist", "Gynaecologist",
  "Sexologist", "Psychiatrist", "Gastroenterologist", "Ayurveda", "Urologist",
  "Neurologist", "Cardiologist", "Orthopedic", "Ophthalmologist",
];

const SearchBar = () => {
  const navigate = useNavigate();

  const [locationInput, setLocationInput] = useState('');
  const [specialisationInput, setSpecialisationInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filteredSpecialisations, setFilteredSpecialisations] = useState([]);

  const handleLocationChange = (e) => {
    const input = e.target.value;
    setLocationInput(input);

    const results = [];
    Object.entries(cityAreaData).forEach(([city, areas]) => {
      areas.forEach(area => {
        if (
          area.toLowerCase().includes(input.toLowerCase()) ||
          city.toLowerCase().includes(input.toLowerCase())
        ) {
          results.push({ city, area });
        }
      });
    });
    setFilteredLocations(results);
  };

  const handleSpecialisationChange = (e) => {
    const input = e.target.value;
    setSpecialisationInput(input);
    const filtered = specialisations.filter(sp =>
      sp.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSpecialisations(filtered);
  };

  const handleLocationSelect = (area, city) => {
    setLocationInput(`${area}, ${city}`);
    setFilteredLocations([]);
    if (specialisationInput) navigateToDoctors(area, city, specialisationInput);
  };

  const handleSpecialisationSelect = (sp) => {
    setSpecialisationInput(sp);
    setFilteredSpecialisations([]);
    if (locationInput) {
      const [area, city] = locationInput.split(',').map(v => v.trim());
      navigateToDoctors(area, city, sp);
    }
  };

  const navigateToDoctors = (area, city, sp) => {
    navigate(`/doctors?city=${city}&area=${area}&specialisation=${sp}`);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="search-input location">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Select Location"
            value={locationInput}
            onChange={handleLocationChange}
          />
          {filteredLocations.length > 0 && (
            <ul className="dropdown">
              {filteredLocations.map((loc, index) => (
                <li key={index} onClick={() => handleLocationSelect(loc.area, loc.city)}>
                  📍 {loc.area}
                  <div className="subtext">{loc.city}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="search-input specialisation">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Select Specialisation"
            value={specialisationInput}
            onChange={handleSpecialisationChange}
          />
          {filteredSpecialisations.length > 0 && (
            <ul className="dropdown">
              {filteredSpecialisations.map((sp, index) => (
                <li key={index} onClick={() => handleSpecialisationSelect(sp)}>
                  🔍 {sp}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
