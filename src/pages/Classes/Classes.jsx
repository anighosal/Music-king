import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/musicData")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="pt-[200px]">
      <Helmet>
        <title>Music King | Classes</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-red-800 mb-6">
        Our All Class
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._Id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
