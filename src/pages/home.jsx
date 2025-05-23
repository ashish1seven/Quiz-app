import React from "react";
import Navbar from "../components/navbar";
import { questionSet } from "../data";
import Slide from "../components/slide";
import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide data={questionSet} />
      <h2 className="mt-2 text-4xl text-center text-white">Top Quiz</h2>
      <div className="flex flex-wrap justify-center px-10 mt-10">
        <Card data={questionSet[0]} />
        <Card data={questionSet[1]} />
        <Card data={questionSet[2]} />
        <Card data={questionSet[3]} />
        <Card data={questionSet[4]} />
        <Card data={questionSet[5]} />
      </div>
    </div>
  );
};

export default Home;
