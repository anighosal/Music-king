import React, { useState } from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import { Helmet } from "react-helmet-async";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClass from "../PopularClass/PopularClass";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`home ${theme}`}>
      <Helmet>
        <title>Music King | Home</title>
      </Helmet>

      <Banner></Banner>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
