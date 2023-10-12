import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { questionSet } from "../data";

const Quiz = () => {
  const [course, setCourse] = useState({});
  const [counter, setCounter] = useState(0);
  const [inc, setInc] = useState(0);
  const [timerDiv, setTimerDiv] = useState(true);
  const [quesDiv, setQuesDiv] = useState(false);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(3);
  const { quizId } = useParams();
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 1) {
        setTimer(timer - 1);
      } else {
        if (timer === 1) {
          setTimer("GO!");
        } else {
          clearInterval(interval);
          setTimerDiv(false);
          setQuesDiv(true);
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const data = questionSet.filter((v) => {
      if (v.id === quizId) return v;
    });
    setCourse(data);
    console.log(data);
  }, [quizId]);

  const nextQues = () => {
    setShow(!show);
    if (counter + 1 < course[0]?.quizQuestion.length) {
      setCounter(counter + 1);
    }
  };

  const score = () => {
    if (inc < 5) {
      setInc(inc + 1);
      // setProgress(progress + 100/total);
    }
  };

  const ans = (v) => {
    setShow(!show);
    if (v === course[0]?.quizQuestion[counter]?.correct[0]) {
      console.log(v);
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      {timerDiv && (
        <div className="text-slate-300  text-9xl h-full w-full flex items-center justify-center  animate-lets-start">
          {timer}
        </div>
      )}
      {quesDiv && (
        <div className="h-[90%] w-[90%] bg-slate-900 rounded-xl p-28 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-slate-600 mix-blend-normal bg-blend-color-burn">
          <div className="w-full h-2 rounded bg-slate-300 absolute top-0 left-0">
            <div
              className="h-full bg-orange-400 "
              style={{ width: inc * 20 + "%" }}
            ></div>
          </div>
          <h1 className="text-5xl text-center text-slate-300">
            Question: {course[0]?.quizQuestion[counter]?.question}
          </h1>

          <div className="flex justify-center">
            {course[0]?.quizQuestion[counter]?.answer.map((v) => {
              return (
                <div
                  className="flex items-center justify-center m-6 text-3xl text-center cursor-pointer h-40 w-96 bg-cyan-300 rounded-2xl text-zinc-950"
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
              className="w-32 h-16 ml-auto text-3xl rounded-lg bg-cyan-300 absolute right-12 bottom-10"
              onClick={() => {
                score();
                nextQues();
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
