/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { questionSet } from "../data";
import wrongmp3 from "../wrong.mp3";
import correctmp3 from "../correct.mp3";
import axios from "axios";

const Quiz = () => {
  const [course, setCourse] = useState(null);
  const [counter, setCounter] = useState(0);
  const [inc, setInc] = useState(1);
  const [timerDiv, setTimerDiv] = useState(true);
  const [quesDiv, setQuesDiv] = useState(false);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(3);
  const [img, setImg] = useState("");
  const [meme, setMeme] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAns, setcorrectAns] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showresult, setshowresult] = useState(false);
  const { quizId } = useParams();
  var wrong = new Audio(wrongmp3);
  var correct = new Audio(correctmp3);

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
    }, 1500);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    (async function () {
      const response = await axios("https://api.imgflip.com/get_memes");
      setImg(response.data.data.memes);
    })();
    const data = questionSet.find((v) => v.id === quizId);
    setCourse(data || null);
  }, [quizId]);

  const nextQues = () => {
    if (course && counter + 1 === course.quizQuestion.length) {
      setshowresult(true);
    }
    setClicked(false);
    setMeme(true);
    setTimeout(() => {
      setMeme(false);
    }, 4000);
    setShow(false);
    if (course && counter + 1 < course.quizQuestion.length) {
      setCounter(counter + 1);
    }
  };

  const ans = (v) => {
    if (!clicked && course) {
      if (v === course.quizQuestion[counter]?.correct[0]) {
        correct.play();
        setcorrectAns(correctAns + 1);
        setScore(score + 500);
      } else {
        wrong.play();
        setcorrectAns(0);
      }
    }
    setShow(true);
    setClicked(true);
  };

  const quest = () => {
    if (inc < (course?.quizQuestion.length || 0)) {
      setInc(inc + 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      {timerDiv && (
        <div className="flex items-center justify-center w-full h-full text-slate-300 text-9xl animate-lets-start">
          {timer}
        </div>
      )}
      {quesDiv && (
        <div className="flex flex-col items-center w-screen h-screen p-6 gap-y-9">
          {course ? (
            <>
              <div className="flex w-screen h-8 text-white px-7 gap-x-5">
                <h2 className="text-xl ">Streaks</h2>
                <div className="h-full overflow-hidden border border-white rounded-lg w-96">
                  <div
                    style={{ width: `${(correctAns / course.quizQuestion.length) * 100}%` }}
                    className="w-full h-full bg-white bar bars"
                  ></div>
                </div>
                <div className="p-2 text-black bg-white rounded-md w-36 dflex">
                  Questions: {counter + 1} / {course.quizQuestion.length}
                </div>
                <h2 className="text-3xl "> score : {score} </h2>
              </div>

              {meme ? (
                <div className="w-64 h-64">
                  <img
                    src={`${img[Math.floor(Math.random() * img.length)]?.url}`}
                    alt=""
                  />
                </div>
              ) : (
                <>
                  {!showresult ? (
                    <div className="relative h-[90%] w-[90%] bg-white rounded-lg md:p-20 p-8 flex flex-col  justify-between overflow-auto">
                      <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded">
                        <div
                          className="h-full bg-orange-400 "
                          style={{
                            width: `${(inc / course.quizQuestion.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <h1 className="text-xl text-center md:text-5xl">
                        Question: {course.quizQuestion[counter]?.question}
                      </h1>

                      <div className="flex flex-col justify-center md:flex-row">
                        {course.quizQuestion[counter]?.answer.map((v) => {
                          return (
                            <div
                              key={v}
                              className={` ${
                                show &&
                                v === course.quizQuestion[counter]?.correct[0]
                                  ? "bg-green-300"
                                  : show
                                  ? "bg-red-300"
                                  : `bg-cyan-300`
                              } hover:animate-animation-thump md:h-44 md:w-80 h-14 ps-1 pe-1  m-6 rounded-2xl flex text-center items-center justify-center text-3xl cursor-pointer`}
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
                          className="absolute w-32 h-16 ml-auto text-3xl rounded-lg bottom-5 right-5 bg-cyan-300"
                          onClick={() => {
                            quest();
                            nextQues();
                          }}
                        >
                          {counter + 1 === course.quizQuestion.length ? "Result" : "Next"}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-white">
                      <h1 className="text-5xl"> Results </h1>
                      <h2 className="text-3xl"> Score: {score} </h2>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3146/3146600.png"
                        className="h-60"
                        alt=""
                      />
                      <Link className="h-56 rounded-md w-44 " to="/">
                        {" "}
                        Solve more quizzes 🚀{" "}
                      </Link>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="text-white">Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
