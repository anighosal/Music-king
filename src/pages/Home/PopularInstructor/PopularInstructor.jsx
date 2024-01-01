import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PopularCard from "./PopularCard";

const PopularInstructor = () => {
  const [topTeacher, setTopTeacher] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/musicData")
      .then((res) => res.json())
      .then((data) => {
        setTopTeacher(data);
      });
  }, []);
  return (
    <div className="text-center">
      <h2 className="lg:text-3xl font-bold text-slate-800 mb-10 mt-20 ">
        Popular Top 6 instructors are here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 lg:mx-[70px]">
        {topTeacher.slice(0, 6).map((teacher) => (
          <PopularCard key={teacher._id} teacher={teacher}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
