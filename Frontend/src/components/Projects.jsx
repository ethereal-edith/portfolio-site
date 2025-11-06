import React from "react";
import moodmusicImg from "../assets/moodmusic.png";
import snakeGameImg from "../assets/snakegame.png";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          Edith's Creations
        </h1>
        <p className="text-lg text-gray-600">
          Here are some of the projects I’ve built:
        </p>
      </header>

      {/* Projects Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Project 1 */}
        <li className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-pink-100">
          <img
            src={moodmusicImg}
            alt="Moodmusic project screenshot"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="p-5 flex flex-col">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">
               Moodmusic
            </h2>
            <p className="text-gray-600 mb-4">
              A mood-based music recommendation web app built with HTML, CSS, and JS.
            </p>
            <a
              href="https://ethereal-edith.github.io/moodmusic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-pink-600 transition"
            >
              View Project
            </a>
          </div>
        </li>

        <li className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-pink-100 flex flex-col">
          <img 
            src={snakeGameImg} 
            alt="Group Snake Game screenshot" 
            className="w-full h-48 object-cover mb-4" 
          />
          <div className="p-5 flex flex-col">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">Group Snake Game
            </h2>
            <p className="text-gray-600 mb-4">
              A collaborative school project built off of python
            </p>
            <a 
              href="https://github.com/Group-2-intro-to-programming/Snake-Game"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-pink-600 transition"
            >
              View Project
            </a>
          </div>
        </li>
        {/* Placeholder Projects */}
        <li className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-pink-100 flex flex-col items-center justify-center p-8 text-gray-500 italic">
          Project 3 — Coming Soon 
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
