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
      <h2>Our Popular top 6 class</h2>
      <div>
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
