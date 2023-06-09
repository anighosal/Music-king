import React, { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
  const [popularAllClass, setPopularAllClass] = useState([]);

  useEffect(() => {
    fetch("https://my-12th-work-server.vercel.app/musicData")
      .then((res) => res.json())
      .then((data) => setPopularAllClass(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
        ----Our Popular top 6 class---
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularAllClass.map((allclass) => (
          <PopularClassCard
            key={allclass._id}
            allclass={allclass}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
