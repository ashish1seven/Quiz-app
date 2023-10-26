import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { questionSet } from "../data";
import wrongmp3 from "../wrong.mp3";
import correctmp3 from "../correct.mp3";
import axios from "axios";

const Quiz = () => {
  const [course, setCourse] = useState({});
  const [counter, setCounter] = useState(0);
  const [inc, setInc] = useState(0);
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
  });

  useEffect(() => {
    (async function () {
      const response = await axios("https://api.imgflip.com/get_memes");
      setImg(response.data.data.memes);
      console.log(
        response.data.data.memes[Math.floor(Math.random() * (99 - 0))].url
      );
    })();
    const data = questionSet?.filter((v) => {
      if (v.id === quizId) return v;
    });
    setCourse(data);
  }, [questionSet]);

  useEffect(() => {
    const data = questionSet.filter((v) => {
      if (v.id === quizId) return v;
    });
    setCourse(data);
    console.log(data);
  }, [quizId]);

  const nextQues = () => {
    if (counter + 1 === questionSet.length) {
      setshowresult(true);
    }
    setClicked(false);
    setMeme(true);
    setTimeout(() => {
      setMeme(false);
    }, 4000);
    setShow(false);
    if (counter + 1 < course[0]?.quizQuestion.length) {
      setCounter(counter + 1);
    }
  };
  const ans = (v) => {
    if (!clicked) {
      if (v === course[0]?.quizQuestion[counter]?.correct[0]) {
        correct.play();
        setcorrectAns(correctAns + 1);
        setScore((score + 1) * correctAns * 500);
      } else {
        wrong.play();
        setcorrectAns(0);
      }
    }
    setShow(true);
    setClicked(true);
  };

  const quest = () => {
    if (inc < questionSet.length) {
      setInc(inc + 1);
      // setProgress(progress + 100/total);
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
          <div className="flex w-screen h-8 text-white px-7 gap-x-5">
            <h2 className="text-xl ">Streaks</h2>
            <div className="h-full overflow-hidden border border-white rounded-lg w-96">
              <div
                style={{ width: `${(correctAns / questionSet.length) * 100}%` }}
                className="w-full h-full bg-white bar bars"
              ></div>
            </div>
            <div className="p-2 text-black bg-white rounded-md w-36 dflex">
              Questions: {counter + 1} / {questionSet.length}
            </div>
            <h2 className="text-3xl "> score : {score} </h2>
          </div>

          {meme ? (
            <div className="w-64 h-64">
              <img
                src={`${img[Math.floor(Math.random() * (99 - 0))].url}`}
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
                        width: `${(inc / questionSet.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <h1 className="text-xl text-center md:text-5xl">
                    Question: {course[0]?.quizQuestion[counter]?.question}
                  </h1>

                  <div className="flex flex-col justify-center md:flex-row">
                    {course[0]?.quizQuestion[counter]?.answer.map((v, i) => {
                      return (
                        <div
                          key={v}
                          className={` ${
                            show &&
                            v === course[0]?.quizQuestion[counter]?.correct[0]
                              ? "bg-green-300"
                              : show
                              ? "bg-red-300"
                              : `bg-cyan-300`
                          } hover:animate-animation-thump md:h-44 md:w-80 h-14   m-6 rounded-2xl flex text-center items-center justify-center text-3xl cursor-pointer`}
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
                      {counter + 1 === questionSet.length ? "Result" : "Next"}
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
                    Solve more quizz 🚀{" "}
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
        // <div className="h-[90%] w-[90%] bg-slate-900 rounded-xl p-28 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-slate-600 mix-blend-normal bg-blend-color-burn">
        //   <div className="absolute top-0 left-0 w-full h-2 rounded bg-slate-300">
        //     <div
        //       className="h-full bg-orange-400 "
        //       style={{ width: inc * 20 + "%" }}
        //     ></div>
        //   </div>
        //   <h1 className="text-5xl text-center text-slate-300">
        //     Question: {course[0]?.quizQuestion[counter]?.question}
        //   </h1>

        //   <div className="flex justify-center">
        //     {course[0]?.quizQuestion[counter]?.answer.map((v) => {
        //       return (
        //         <div
        //           className={` ${
        //             show && v === course[0]?.quizQuestion[counter]?.correct[0]
        //               ? "bg-green-300"
        //               : show
        //               ? "bg-red-300"
        //               : "bg-cyan-300"
        //           } hover:animate-bounce md:h-44 md:w-80 h-14  bg-cyan-300 m-6 rounded-2xl flex text-center items-center justify-center text-3xl cursor-pointer`}
        //           onClick={() => {
        //             ans(v);
        //           }}
        //         >
        //           {v}
        //         </div>
        //       );
        //     })}
        //   </div>

        //   {show && (
        //     <button
        //       className="absolute w-32 h-16 ml-auto text-3xl rounded-lg bg-cyan-300 right-12 bottom-10"
        //       onClick={() => {
        //         quest();
        //         nextQues();
        //       }}
        //     >
        //       Next
        //     </button>
        //   )}
        // </div>
      )}
    </div>
  );
};

export default Quiz;
