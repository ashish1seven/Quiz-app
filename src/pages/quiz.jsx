import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { questionSet } from "../data";

const Quiz = () => {
  const [course, setCourse] = useState({});
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const { quizId } = useParams();

  useEffect(() => {
    const data = questionSet.filter((v) => {
      if (v.id === quizId) return v;
    });
    setCourse(data);
    console.log(data);
  }, []);

  const nextQues = () => {
    setShow(!show);
    if (counter + 1 < course[0]?.quizQuestion.length) {
      setCounter(counter + 1);
    }
  };

  const ans = (v) => {
    setShow(!show);
    if (v === course[0]?.quizQuestion[counter]?.correct[0]) {
      console.log(v);
      
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="h-[90%] w-[90%] bg-white rounded-xl p-20 flex flex-col justify-between">
        <h1 className="text-5xl text-center">
          Question: {course[0]?.quizQuestion[counter]?.question}
        </h1>

        <div className="flex">
          {course[0]?.quizQuestion[counter]?.answer.map((v) => {
            return (
              <div
                className="flex items-center justify-center m-6 text-3xl cursor-pointer h-44 w-80 bg-cyan-500 rounded-2xl"
                onClick={() => {
                  ans(v);
                }}
              >
                {v}
              </div>
            );
          })}
        </div>
        {show && (
          <button
            className="w-32 h-16 ml-auto text-3xl rounded-lg bg-cyan-300"
            onClick={nextQues}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
