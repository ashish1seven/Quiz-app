import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <Link to={`quiz/${data.id}`}>
      <div className="p-5 m-3 border-2 border-white rounded-lg h-72 w-96">
        <img src={data.img} className="w-full h-4/5" alt="" />
        <h1 className="pt-5 text-2xl text-center text-white">{data.title}</h1>
      </div>
    </Link>
  );
}
