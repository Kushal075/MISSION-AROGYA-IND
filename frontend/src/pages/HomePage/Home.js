// /src/pages/HomePage/Home.js
import React from "react";
import Navbar from "../../components/HomePage/Navbar"; // ✅ move to top
import Hero from "./Hero";
import Services from "./Services"; // (Popular Specialties section)
import Service from "./Service";   // ✅ (New "Our Services" section)
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar /> {/* ✅ Put navbar first */}
      <Hero />
      <Services /> {/* ✅ Popular Specialties */}
      <Service /> {/* ✅ Our Services */}
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
