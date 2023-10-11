import React from "react";
import Navbar from "../components/navbar";
import { questionSet } from "../data";
import Slide from "../components/slide";
import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <h2 className="text-4xl text-white">Top Quiz</h2>
      <div className="px-10 mt-10">
        <Card data={questionSet[0]} />
      </div>
    </div>
  );
};

export default Home;
