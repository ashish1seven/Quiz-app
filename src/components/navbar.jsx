/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen h-16 text-white bg-slate-900 flex items-center justify-between px-10">
      <div className=" flex items-center">
        {/* <img
          className=" w-32 h-9 px-3"
          src="https://w7.pngwing.com/pngs/267/651/png-transparent-quizizz-student-fun-multiplayer-quizzes-kitty-meow-meow-my-cute-cat-day-care-fun-android-game-android.png"
          alt="logo"
        /> */}
        <a
          className=" text-xl py-1 px-3 text-orange-400 rounded font-semibold hover:scale-125 duration-500"
          href=""
        >
          Quizz
        </a>
        <a
          className="py-1 px-3 rounded hover:bg-slate-700 hover:animate-pulse hover:text-orange-400 duration-300"
          href=""
        >
          Categories
        </a>
        <a
          className="py-1 px-3 rounded hover:bg-slate-700 hover:animate-pulse duration-300"
          href=""
        >
          Live Quiz
        </a>
        <a
          className="py-1 px-3 rounded hover:bg-slate-700 hover:animate-pulse duration-300"
          href=""
        >
          Tournaments
        </a>
        <a
          className="py-1 px-3 rounded hover:bg-slate-700 hover:animate-pulse duration-300"
          href=""
        >
          Bonuses
        </a>
      </div>
      <div className="flex items-center">
        <a
          className="bg-slate-800 text-slate-400 mx-1 px-2 py-1 rounded hover:scale-125 duration-500"
          href=""
        >
          <i class="fi fi-br-search"></i>
        </a>
        <a
          className="bg-slate-800 text-slate-400 mx-1 px-2 py-1 rounded hover:scale-125 duration-500"
          href=""
        >
          <i class="fi fi-sr-envelope-dot"></i>
        </a>
        <a
          className="bg-slate-800 text-orange-400 mx-1 px-2 py-1 rounded hover:scale-125 duration-500"
          href=""
        >
          <i class="fi fi-sr-user"></i>
        </a>
        <div className=" flex flex-col items-start justify-between w-32 h-9 bg-slate-800  mx-2 px-3 py-1 rounded hover:scale-110 duration-500">
          <a className=" flex items-start justify-between w-28 ">
            <p className="text-xs">
              Score <span className="text-orange-400">0</span>
            </p>
            <i className="fi fi-sr-trophy-star text-xs text-red-600"></i>
            <p className="text-xs">
              Level <span className="text-orange-400">0</span>
            </p>
          </a>
          <div className=" w-full h-1 rounded bg-slate-200">
            <div className="progress h-full bg-orange-400"></div>
          </div>
        </div>

        <button className="px-2 py-1 mx-1 text-slate-400 font-medium  border rounded border-slate-500 hover:scale-110 duration-500">
          Log In
        </button>
        <button className="px-2 py-1 mx-1 bg-slate-700 font-medium text-slate-100 border rounded border-slate-500 hover:scale-110 duration-500">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
