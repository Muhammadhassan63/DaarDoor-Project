import React from "react";
import PropertyForm from "../../components/LandingPageComponent/PropertyForm/PropertyForm";
import FeaturedProperty from "../../components/LandingPageComponent/FeaturedProperty/FeaturedProperty";
import CustomersReview from "../../components/LandingPageComponent/CustomersReview/CustomersReview";
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      {/* Landing page will have the following components */}
      <Navbar/>
      <PropertyForm />
      <FeaturedProperty />
      <CustomersReview/>
      <Footer/>
      {/*
      <DreamHome /> */}
    </div>
  );
};

export default Home;