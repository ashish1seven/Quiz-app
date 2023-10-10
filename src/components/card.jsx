import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/quiz/${data.id}`}>
      <div className="p-5 border-2 border-white rounded h-rounded-lg">
        <img src={data.img} className="w-full" alt="" />
        <h1 className="text-2xl text-center text-white">{data.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
