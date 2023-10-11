/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-screen h-16 px-10 text-white bg-slate-900">
      <div className="flex items-center ">
        {/* <img
          className="w-32 px-3 h-9"
          src="https://w7.pngwing.com/pngs/267/651/png-transparent-quizizz-student-fun-multiplayer-quizzes-kitty-meow-meow-my-cute-cat-day-care-fun-android-game-android.png"
          alt="logo"
        /> */}
        <a
          className="px-3 py-1 text-2xl font-bold text-orange-400 duration-500 rounded hover:scale-125"
          href=""
        >
          Quizz
        </a>
        <a
          className="px-3 py-1 duration-300 rounded hover:bg-slate-700 hover:animate-pulse hover:text-orange-400"
          href=""
        >
          Categories
        </a>
        <a
          className="px-3 py-1 duration-300 rounded hover:bg-slate-700 hover:animate-pulse"
          href=""
        >
          Live Quiz
        </a>
        <a
          className="px-3 py-1 duration-300 rounded hover:bg-slate-700 hover:animate-pulse"
          href=""
        >
          Tournaments
        </a>
        <a
          className="px-3 py-1 duration-300 rounded hover:bg-slate-700 hover:animate-pulse"
          href=""
        >
          Bonuses
        </a>
      </div>
      <div className="flex items-center">
        <a
          className="px-2 py-1 mx-1 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
          href=""
        >
          <i class="fi fi-br-search"></i>
        </a>
        <a
          className="px-2 py-1 mx-1 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
          href=""
        >
          <i class="fi fi-sr-envelope-dot"></i>
        </a>
        <a
          className="px-2 py-1 mx-1 text-orange-400 duration-500 rounded bg-slate-800 hover:scale-125"
          href=""
        >
          <i class="fi fi-sr-user"></i>
        </a>
        <div className="flex flex-col items-start justify-between w-32 px-3 py-1 mx-2 duration-500 rounded h-9 bg-slate-800 hover:scale-110">
          <a className="flex items-start justify-between w-28">
            <p className="text-xs">
              Score <span className="text-orange-400">0</span>
            </p>
            <i className="text-xs text-red-600 fi fi-sr-trophy-star"></i>
            <p className="text-xs">
              Level <span className="text-orange-400">0</span>
            </p>
          </a>
          <div className="w-full h-1 rounded bg-slate-200">
            <div className="h-full bg-orange-400 progress"></div>
          </div>
        </div>

        <button className="px-2 py-1 mx-1 font-medium duration-500 border rounded text-slate-400 border-slate-500 hover:scale-110">
          Log In
        </button>
        <button className="px-2 py-1 mx-1 font-medium duration-500 border rounded bg-slate-700 text-slate-100 border-slate-500 hover:scale-110">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
