import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import { Helmet } from "react-helmet-async";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music King | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularInstructor></PopularInstructor>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
