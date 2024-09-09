import React, { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import { getAllMemes } from "../api";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((data) => setData(data.data.memes));
  }, []);

  return (
    <div className="row">
      {data.map((el) => (
        <MemeCard img={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default HomePage;
