import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PopularCard from "./PopularCard";

const PopularInstructor = () => {
  const [topTeacher, setTopTeacher] = useState([]);

  useEffect(() => {
    fetch("https://my-12th-work-server-anighosal.vercel.app/musicData")
      .then((res) => res.json())
      .then((data) => {
        setTopTeacher(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl text-red-800 mb-6">
        Popular Top 6 instructors are here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topTeacher.slice(0, 6).map((teacher) => (
          <PopularCard key={teacher._id} teacher={teacher}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
